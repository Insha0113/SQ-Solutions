import { deliverLead, rateLimited, validateLead } from "@/lib/leads";

/** Same-origin only: browsers send Origin on POST; reject cross-site posts. */
function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === (request.headers.get("x-forwarded-host") ?? request.headers.get("host"));
  } catch {
    return false;
  }
}

function clientKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || "local";
}

const MAX_BODY = 16 * 1024;

export async function POST(request: Request) {
  if (!sameOrigin(request)) return Response.json({ error: "Forbidden." }, { status: 403 });
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Unsupported content type." }, { status: 415 });
  }
  if (rateLimited(clientKey(request))) {
    return Response.json(
      { error: "Too many enquiries from this connection. Please try again later.", code: "rate_limited" },
      { status: 429 },
    );
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY) return Response.json({ error: "Enquiry is too long." }, { status: 413 });
  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const result = validateLead(body);
  if (!result.ok) {
    // Bots get a bland success so they do not learn what tripped the filter.
    if (result.error === "spam") return Response.json({ ok: true });
    return Response.json({ error: result.error, field: result.field }, { status: 422 });
  }

  const delivery = await deliverLead(result.lead);
  if (delivery.status === "delivered") return Response.json({ ok: true });
  if (delivery.status === "not_configured") {
    return Response.json(
      { error: "Online enquiries are not connected yet.", code: "not_configured" },
      { status: 503 },
    );
  }
  return Response.json({ error: "We couldn't send your enquiry just now.", code: "delivery_failed" }, { status: 502 });
}
