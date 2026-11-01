import { CONTACT, KNOWLEDGE, type KnowledgeEntry, type KnowledgeLink } from "./knowledge";
import { SERVICES } from "@/components/sections/services";

export interface AssistantReply {
  text: string;
  links: KnowledgeLink[];
  /** Offer the enquiry form after this reply. */
  offerLead: boolean;
  /** Service the conversation points to, carried into the enquiry. */
  service?: string;
  /** True when nothing in the knowledge base matched. */
  unknown?: boolean;
}

const STOP = new Set("a an the and or but of to in on for with at by from is are was were be been am do does did i we you your our my me us it this that these those can could would should will what how why when where which who whom about any some there their them they have has had not no yes please hi hello hey".split(" "));

/** Crude stemmer: enough to match "automating"/"automation"/"automate", "invoices"/"invoice". */
function stem(w: string) {
  return w
    .replace(/(ations?|ation|ating|ated|ates|ate)$/, "at")
    .replace(/(ing|ers|er|ed|es|s)$/, "")
    .replace(/e$/, "")
    .slice(0, 9);
}

function tokens(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9£$€\s-]/g, " ")
    .split(/[\s-]+/)
    .filter((w) => w && !STOP.has(w));
}

function score(entry: KnowledgeEntry, normalized: string, stems: Set<string>) {
  let s = 0;
  for (const k of entry.keywords) {
    if (k.includes(" ") || k.length <= 3) {
      // Phrases and short words (hr, api, crm) need a whole-word match.
      const re = new RegExp(`(^|[^a-z])${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z]|$)`);
      if (re.test(normalized)) s += k.includes(" ") ? 3 : 2;
    } else if (stems.has(stem(k))) {
      s += 1.5;
    }
  }
  return s;
}

export function rankEntries(question: string) {
  const normalized = ` ${question.toLowerCase().replace(/\s+/g, " ")} `;
  const stems = new Set(tokens(question).map(stem));
  return KNOWLEDGE.map((entry) => ({ entry, score: score(entry, normalized, stems) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);
}

const LEAD_RE = /\b(start|begin|kick ?off|enquir|inquir|quote|proposal|hire|work with you|get in touch|contact (me|us)|call me|email me|book|speak to|talk to (someone|a human|the team|sales)|sign up|let'?s do it|interested)\b/i;
const GREETING_RE = /^\s*(hi|hello|hey|good (morning|afternoon|evening)|yo|hiya)\b[\s!.?]*$/i;
const THANKS_RE = /^\s*(thanks|thank you|cheers|ta|great|perfect|ok(ay)?|cool)\b[\s!.?]*$/i;

export function wantsEnquiry(text: string) {
  return LEAD_RE.test(text);
}

/** Answer from the website's own content only. */
export function answerLocally(question: string): AssistantReply {
  const q = question.trim();
  if (GREETING_RE.test(q)) {
    return {
      text: "Hello! I can answer questions about Squadify Solutions — our services, the 150-hour delivery framework, pricing, support, and the industries we work with. What's the challenge you're looking to solve?",
      links: [],
      offerLead: false,
    };
  }
  if (THANKS_RE.test(q)) {
    return { text: "You're welcome. Anything else I can help with?", links: [], offerLead: true };
  }

  const ranked = rankEntries(q);
  const lead = wantsEnquiry(q);
  const best = ranked[0];

  // Buying intent with no specific topic ("I want to start a project") goes to the enquiry.
  if (!best || best.score < 1.5 || (lead && best.score < 3)) {
    if (lead) {
      return {
        text: "Happy to connect you with the team. Share a few details and they'll reply by email.",
        links: [],
        offerLead: true,
      };
    }
    return {
      text: `I can only answer from the information on this website, and I couldn't find that here. Could you rephrase, or tell me what's slowing your business down? You can also email ${CONTACT.email} or leave your details for the team.`,
      links: [
        { label: "Services", href: "/services" },
        { label: "FAQs", href: "/resources/faqs" },
      ],
      offerLead: true,
      unknown: true,
    };
  }

  const e = best.entry;
  // Problem/solution answers carry a recommendation toward the matching service group.
  const service = e.service ?? ranked.find((r) => r.entry.service && r.score >= best.score * 0.6)?.entry.service;
  const svc = service ? SERVICES.find((s) => s.title === service) : undefined;
  let text = e.answer;
  const links = [...e.links];
  if (svc && !e.id.startsWith("service-") && e.id !== "unsure") {
    text += ` The most relevant service group is ${svc.title} (${svc.subtitle}).`;
    if (!links.some((l) => l.href === svc.href)) links.push({ label: svc.title, href: svc.href });
  }
  // A second, clearly relevant topic gets a pointer rather than a wall of text.
  const second = ranked[1];
  if (second && second.score >= best.score * 0.8 && second.entry.id !== e.id && links.length < 3) {
    links.push(second.entry.links[0]);
  }

  const offerLead = lead || ["pricing", "discovery", "contact", "bigger", "unsure"].includes(e.id) || e.id.startsWith("service-") || e.id.startsWith("problem-");
  return { text, links: links.slice(0, 3), offerLead, service: svc?.title };
}
