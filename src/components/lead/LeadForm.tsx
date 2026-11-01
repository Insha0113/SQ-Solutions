"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";

export const CONTACT_EMAIL = "hello@squadifysolutions.com";

/** Fields sent top-level; any other named field travels in `details`. */
const TOP_LEVEL = new Set(["name", "firstName", "lastName", "email", "phone", "company", "industry", "service", "budget", "timeline", "topic", "message"]);

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string; offline: boolean; field?: string };

export interface LeadPayload {
  source: string;
  page?: string;
  consent: boolean;
  startedAt: number;
  website?: string;
  details?: Record<string, string>;
  [key: string]: unknown;
}

/** POST to the lead API. Shared by the forms and the chat assistant. */
export async function submitLead(payload: LeadPayload): Promise<Status> {
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; field?: string; code?: string };
    if (res.ok && data.ok) return { kind: "sent" };
    // Anything that stops a valid enquiry being delivered offers the pre-filled email instead.
    const offline = data.code === "not_configured" || data.code === "delivery_failed" || data.code === "rate_limited";
    return { kind: "error", message: data.error ?? "Something went wrong. Please try again.", offline, field: data.field };
  } catch {
    return { kind: "error", message: "Network error. Please check your connection and try again.", offline: true };
  }
}

/** Pre-filled email so a visitor never loses what they typed if online delivery is unavailable. */
export function mailtoFor(fields: Record<string, string>) {
  const lines = Object.entries(fields)
    .filter(([k, v]) => v && k !== "website")
    .map(([k, v]) => `${k}: ${v}`);
  const subject = `Project enquiry${fields.company ? ` — ${fields.company}` : ""}`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

interface LeadFormProps {
  /** Identifies the form in the delivered lead ("contact", "discovery-call", ...). */
  source: string;
  /** "lab" for the lab inner pages, "classic" for the contact page card. */
  variant?: "lab" | "classic";
  submitLabel: string;
  note?: ReactNode;
  successTitle?: string;
  successBody?: ReactNode;
  className?: string;
  /** Existing form fields; each needs a `name`. */
  children: ReactNode;
}

/**
 * Wraps a page's own fields with the parts every enquiry needs: consent,
 * spam traps, submission to /api/leads, and honest success/failure states.
 * `?service=` / `?topic=` in the URL pre-select or record what the visitor
 * clicked through from.
 */
export default function LeadForm({
  source,
  variant = "lab",
  submitLabel,
  note,
  successTitle = "Enquiry received",
  successBody = "Thank you — we'll review your details and reply by email.",
  className,
  children,
}: LeadFormProps) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLHeadingElement>(null);
  const startedAt = useRef(0);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [topic, setTopic] = useState("");
  const [fallback, setFallback] = useState("");

  useEffect(() => {
    startedAt.current = Date.now();
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service")?.slice(0, 120);
    const t = params.get("topic")?.slice(0, 120);
    const select = formRef.current?.querySelector<HTMLSelectElement>('select[name="service"]');
    let matched = false;
    if (service && select) {
      const opt = Array.from(select.options).find((o) => o.value.toLowerCase() === service.toLowerCase());
      if (opt) {
        select.value = opt.value;
        matched = true;
      }
    }
    const label = t || (service && !matched ? service : "");
    if (label) setTopic(label);
  }, []);

  useEffect(() => {
    if (status.kind === "sent") doneRef.current?.focus();
  }, [status.kind]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fields: Record<string, string> = {};
    const details: Record<string, string> = {};
    data.forEach((v, k) => {
      if (typeof v !== "string" || k === "consent") return;
      if (TOP_LEVEL.has(k) || k === "website") fields[k] = v;
      else details[k] = v;
    });
    if (topic) fields.topic = topic;
    setStatus({ kind: "sending" });
    const result = await submitLead({
      ...fields,
      details,
      source,
      page: window.location.pathname,
      consent: data.get("consent") === "on",
      startedAt: startedAt.current,
    });
    setFallback(mailtoFor({ ...fields, ...details }));
    setStatus(result);
    if (result.kind === "error" && result.field) {
      form.querySelector<HTMLElement>(`[name="${result.field}"], [name="firstName"]`)?.focus();
    }
  };

  if (status.kind === "sent") {
    return (
      <div className={`lead-done lead-done--${variant}`} role="status">
        <span className="lead-done__icon" aria-hidden="true">
          <CheckCircle className="w-6 h-6" />
        </span>
        <h3 ref={doneRef} tabIndex={-1} className="lead-done__title">
          {successTitle}
        </h3>
        <p className="lead-done__body">{successBody}</p>
        <Link href="/" className="lead-done__link">
          Back to home <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    );
  }

  const sending = status.kind === "sending";
  const btnClass = variant === "lab" ? "lab-btn lab-btn--block" : "btn-primary w-full justify-center py-3 text-base";

  return (
    <form ref={formRef} className={className} onSubmit={onSubmit} noValidate={false} aria-busy={sending}>
      {topic ? (
        <p className="lead-topic">
          Enquiring about: <strong>{topic}</strong>
        </p>
      ) : null}
      {children}

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div className="lead-hp" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="lead-consent">
        <input id={`${id}-consent`} name="consent" type="checkbox" required />
        <label htmlFor={`${id}-consent`}>
          I agree to Squadify Solutions using these details to respond to my enquiry, as described in the{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </label>
      </div>

      <div aria-live="polite" className="lead-status-wrap">
        {status.kind === "error" ? (
          <div className="lead-status" role="alert">
            <p>{status.message}</p>
            {status.offline ? (
              <p>
                You can still reach us directly —{" "}
                <a href={fallback || `mailto:${CONTACT_EMAIL}`} className="lead-status__mail">
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" /> email your enquiry to {CONTACT_EMAIL}
                </a>{" "}
                (your answers are pre-filled).
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      <button type="submit" className={btnClass} disabled={sending}>
        {sending ? "Sending…" : submitLabel}
        <ArrowRight className="w-5 h-5" aria-hidden="true" />
      </button>
      {note ? <p className={variant === "lab" ? "lab-form__note" : "text-center text-xs lead-note"}>{note}</p> : null}
    </form>
  );
}
