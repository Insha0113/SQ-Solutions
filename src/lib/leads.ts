import { createHmac } from "node:crypto";

/**
 * Lead validation and delivery (server only).
 *
 * Delivery targets are configured by environment variables; see README
 * "Lead capture". With none configured, `deliverLead` reports
 * `not_configured` and the API answers 503: nothing is stored or faked.
 */

export const CONSENT_TEXT =
  "I agree to Squadify Solutions using these details to respond to my enquiry, as described in the Privacy Policy.";

const LIMITS = { short: 120, medium: 200, message: 4000, detailKeys: 12, detail: 500 };
const KNOWN = ["name", "firstName", "lastName", "email", "phone", "company", "industry", "service", "budget", "timeline", "topic", "message"] as const;

export interface Lead {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  topic?: string;
  message?: string;
  /** Other named form fields (e.g. preferred call time), allow-listed by shape. */
  details: Record<string, string>;
  /** Which form or flow sent it ("contact", "chatbot", ...). */
  source: string;
  /** Page path the enquiry came from. */
  page?: string;
  consent: { given: true; text: string; at: string };
  receivedAt: string;
}

export type LeadResult = { ok: true; lead: Lead } | { ok: false; field?: string; error: string };

/** Trim, strip control characters (keeps newlines in messages), cap length. */
function clean(v: unknown, max: number, multiline = false): string {
  if (typeof v !== "string") return "";
  const stripped = multiline ? v.replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, "") : v.replace(/[\u0000-\u001F\u007F]/g, " ");
  return stripped.trim().slice(0, max);
}

const EMAIL_RE = /^[^\s@<>()[\],;:"]{1,64}@[A-Za-z0-9.-]{1,253}\.[A-Za-z]{2,24}$/;

export function validateLead(body: unknown, now = Date.now()): LeadResult {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid request." };
  const b = body as Record<string, unknown>;

  // Bots: a hidden field humans never see, and a form filled implausibly fast.
  if (clean(b.website, 200)) return { ok: false, error: "spam" };
  const started = Number(b.startedAt);
  if (!Number.isFinite(started) || now - started < 2500) return { ok: false, error: "spam" };

  if (b.consent !== true) return { ok: false, field: "consent", error: "Please confirm consent so we can respond." };

  const first = clean(b.firstName, LIMITS.short);
  const last = clean(b.lastName, LIMITS.short);
  const name = clean(b.name, LIMITS.short) || [first, last].filter(Boolean).join(" ");
  if (name.length < 2) return { ok: false, field: "name", error: "Please enter your name." };

  const email = clean(b.email, 254).toLowerCase();
  if (!EMAIL_RE.test(email)) return { ok: false, field: "email", error: "Please enter a valid email address." };

  const phone = clean(b.phone, 40);
  if (phone && !/^[+()\d\s.-]{6,40}$/.test(phone)) return { ok: false, field: "phone", error: "Please enter a valid phone number." };

  const message = clean(b.message, LIMITS.message, true);

  const details: Record<string, string> = {};
  if (b.details && typeof b.details === "object") {
    for (const [k, v] of Object.entries(b.details as Record<string, unknown>)) {
      if (Object.keys(details).length >= LIMITS.detailKeys) break;
      if (!/^[a-zA-Z][a-zA-Z0-9]{0,29}$/.test(k) || (KNOWN as readonly string[]).includes(k)) continue;
      const val = clean(v, LIMITS.detail, true);
      if (val) details[k] = val;
    }
  }

  const at = new Date(now).toISOString();
  const opt = (v: unknown, max = LIMITS.medium) => clean(v, max) || undefined;
  return {
    ok: true,
    lead: {
      name,
      email,
      phone: phone || undefined,
      company: opt(b.company),
      industry: opt(b.industry),
      service: opt(b.service),
      budget: opt(b.budget),
      timeline: opt(b.timeline),
      topic: opt(b.topic),
      message: message || undefined,
      details,
      source: clean(b.source, 40) || "website",
      page: opt(b.page),
      consent: { given: true, text: CONSENT_TEXT, at },
      receivedAt: at,
    },
  };
}

/* ---------------- Rate limiting ---------------- */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

/**
 * In-memory, per server instance. Good enough for a single Node server;
 * on serverless platforms use the host's WAF/rate limiting as well.
 */
export function rateLimited(key: string, max = MAX_PER_WINDOW, now = Date.now()) {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return recent.length > max;
}

/* ---------------- Delivery ---------------- */

export type Destination = "webhook" | "email";

/** Which destinations are configured (names only; never values). */
export function configuredDestinations(): Destination[] {
  const out: Destination[] = [];
  if (process.env.LEAD_WEBHOOK_URL) out.push("webhook");
  if (process.env.RESEND_API_KEY && process.env.LEAD_NOTIFY_EMAIL && process.env.LEAD_FROM_EMAIL) out.push("email");
  return out;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function leadRows(lead: Lead): [string, string][] {
  const rows: [string, string | undefined][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Company", lead.company],
    ["Industry", lead.industry],
    ["Service", lead.service],
    ["Topic", lead.topic],
    ["Budget", lead.budget],
    ["Timeline", lead.timeline],
    ...Object.entries(lead.details),
    ["Message", lead.message],
    ["Source", `${lead.source}${lead.page ? ` (${lead.page})` : ""}`],
    ["Consent", `${lead.consent.text} (${lead.consent.at})`],
  ];
  return rows.filter((r): r is [string, string] => Boolean(r[1]));
}

async function sendWebhook(lead: Lead) {
  const body = JSON.stringify({ type: "lead", lead });
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const secret = process.env.LEAD_WEBHOOK_SECRET;
  if (secret) headers["X-Squadify-Signature"] = `sha256=${createHmac("sha256", secret).update(body).digest("hex")}`;
  const res = await fetch(process.env.LEAD_WEBHOOK_URL!, { method: "POST", headers, body, signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`webhook responded ${res.status}`);
}

async function sendEmail(lead: Lead) {
  const rows = leadRows(lead);
  const html = `<h2>New enquiry from ${escapeHtml(lead.name)}</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><th align="left" valign="top">${escapeHtml(k)}</th><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL,
      to: process.env.LEAD_NOTIFY_EMAIL!.split(",").map((s) => s.trim()),
      reply_to: lead.email,
      subject: `New enquiry: ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
      html,
      text,
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`email API responded ${res.status}`);
}

export type DeliveryResult = { status: "delivered"; via: Destination[] } | { status: "not_configured" } | { status: "failed" };

/** Delivered if at least one configured destination accepts the lead. */
export async function deliverLead(lead: Lead): Promise<DeliveryResult> {
  const dest = configuredDestinations();
  if (!dest.length) return { status: "not_configured" };
  const results = await Promise.allSettled(dest.map((d) => (d === "webhook" ? sendWebhook(lead) : sendEmail(lead))));
  const via = dest.filter((_, i) => results[i].status === "fulfilled");
  results.forEach((r, i) => {
    // Log the failure reason only, never the lead's personal data.
    if (r.status === "rejected") console.error(`[leads] ${dest[i]} delivery failed:`, (r.reason as Error).message);
  });
  return via.length ? { status: "delivered", via } : { status: "failed" };
}
