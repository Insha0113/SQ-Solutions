import Anthropic from "@anthropic-ai/sdk";
import { KNOWLEDGE, SERVICE_TITLES, knowledgeAsText } from "@/lib/assistant/knowledge";
import { rateLimited } from "@/lib/leads";

/**
 * Optional model-backed answers for the site assistant. Disabled unless
 * ANTHROPIC_API_KEY is set; the widget then answers from the same knowledge
 * base locally. The model only sees that knowledge base, its replies are
 * schema-constrained, and links are filtered to pages the knowledge base cites.
 */

const MODEL = process.env.ASSISTANT_MODEL || "claude-opus-5-5";
const MAX_TURNS = 12;
const MAX_CHARS = 1200;

const SYSTEM = `You are the website assistant for Squadify Solutions, an AI consultancy and development company.

Answer ONLY from the knowledge base below, which is taken from the company's own website. If the answer isn't there, say you don't have that information and offer to pass the question to the team. Never invent prices, timelines, statistics, client names, results, guarantees, or partnerships. Quote ranges exactly as written.

When a visitor describes a business problem, recommend the most relevant service group (one of: ${SERVICE_TITLES.join(", ")}) and, where it fits, a specific solution page, and explain why in a sentence. When they show buying intent (asking to start, get a quote, talk to someone), set offerLead to true so the site can show its enquiry form; never ask for personal details in the chat text yourself.

Keep replies to 2-4 short sentences in British English, warm and plain. Links must be paths that appear in the knowledge base.

# Knowledge base
${knowledgeAsText()}`;

const ALLOWED_HREFS = new Set(KNOWLEDGE.flatMap((e) => e.links.map((l) => l.href)));

const REPLY_SCHEMA = {
  type: "object",
  properties: {
    text: { type: "string" },
    links: {
      type: "array",
      items: {
        type: "object",
        properties: { label: { type: "string" }, href: { type: "string" } },
        required: ["label", "href"],
        additionalProperties: false,
      },
    },
    offerLead: { type: "boolean" },
    service: { type: "string" },
  },
  required: ["text", "links", "offerLead", "service"],
  additionalProperties: false,
} as const;

const enabled = () => Boolean(process.env.ANTHROPIC_API_KEY);

/** Tells the widget whether to call POST or answer locally. */
export function GET() {
  return Response.json({ llm: enabled() });
}

type Turn = { role: "user" | "assistant"; content: string };

function parseTurns(body: unknown): Turn[] | null {
  const raw = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(raw) || raw.length === 0) return null;
  const turns = raw.slice(-MAX_TURNS).flatMap((m): Turn[] => {
    const role = (m as Turn)?.role;
    const content = (m as Turn)?.content;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string" || !content.trim()) return [];
    return [{ role, content: content.slice(0, MAX_CHARS) }];
  });
  // The API needs a user turn first and last.
  while (turns.length && turns[0].role !== "user") turns.shift();
  return turns.length && turns[turns.length - 1].role === "user" ? turns : null;
}

export async function POST(request: Request) {
  if (!enabled()) return Response.json({ error: "Assistant model not configured.", code: "not_configured" }, { status: 503 });
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!origin || new URL(origin).host !== host) return Response.json({ error: "Forbidden." }, { status: 403 });
  const key = `chat:${request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local"}`;
  if (rateLimited(key, 40)) return Response.json({ error: "Too many questions. Please try again shortly." }, { status: 429 });

  const turns = parseTurns(await request.json().catch(() => null));
  if (!turns) return Response.json({ error: "Invalid request." }, { status: 400 });

  const client = new Anthropic();
  try {
    const response = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 4000,
      // Refusal fallbacks routed by category; harmless for a FAQ assistant, avoids dead-end replies.
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "low", format: { type: "json_schema", schema: REPLY_SCHEMA } },
      system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
      messages: turns,
    });
    if (response.stop_reason === "refusal") return Response.json({ error: "No answer.", code: "refused" }, { status: 502 });
    const text = response.content.find((b) => b.type === "text");
    if (!text || text.type !== "text") return Response.json({ error: "No answer." }, { status: 502 });
    const reply = JSON.parse(text.text) as { text: string; links: { label: string; href: string }[]; offerLead: boolean; service: string };
    return Response.json({
      text: reply.text,
      links: reply.links.filter((l) => ALLOWED_HREFS.has(l.href)).slice(0, 3),
      offerLead: reply.offerLead,
      service: SERVICE_TITLES.includes(reply.service) ? reply.service : undefined,
    });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return Response.json({ error: "Busy.", code: "rate_limited" }, { status: 503 });
    }
    if (error instanceof Anthropic.APIError) {
      console.error(`[assistant] API error ${error.status}`);
    } else {
      console.error("[assistant] failed:", (error as Error).message);
    }
    return Response.json({ error: "No answer.", code: "upstream" }, { status: 502 });
  }
}
