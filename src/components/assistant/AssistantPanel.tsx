"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Send, X } from "lucide-react";
import LeadForm from "@/components/lead/LeadForm";
import { answerLocally, wantsEnquiry, type AssistantReply } from "@/lib/assistant/match";
import { SERVICE_TITLES } from "@/lib/assistant/knowledge";

type Message =
  | { id: number; role: "user"; text: string }
  | { id: number; role: "assistant"; reply: AssistantReply }
  | { id: number; role: "lead" };

const SUGGESTIONS = ["What services do you offer?", "How does the 150-hour framework work?", "How much does a project cost?", "I want to start a project"];

const WELCOME: AssistantReply = {
  text: "Hi — I'm the Squadify assistant. Ask me about our services, the 150-hour delivery framework, pricing or support, or describe what's slowing your business down and I'll suggest where AI could help.",
  links: [],
  offerLead: false,
};

let nextId = 1;

/** null until checked; true when /api/chat has a model configured. */
let llmAvailable: Promise<boolean> | null = null;
function checkLlm() {
  llmAvailable ??= fetch("/api/chat")
    .then((r) => (r.ok ? r.json() : { llm: false }))
    .then((d: { llm?: boolean }) => Boolean(d.llm))
    .catch(() => false);
  return llmAvailable;
}

async function ask(history: Message[], question: string): Promise<AssistantReply> {
  if (await checkLlm()) {
    const messages = [...history, { id: 0, role: "user" as const, text: question }].flatMap((m) =>
      m.role === "user" ? [{ role: "user", content: m.text }] : m.role === "assistant" ? [{ role: "assistant", content: m.reply.text }] : [],
    );
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages }),
      });
      if (res.ok) return (await res.json()) as AssistantReply;
    } catch {
      /* fall through to the local answer */
    }
  }
  return answerLocally(question);
}

interface AssistantPanelProps {
  open: boolean;
  onClose: () => void;
}

export default function AssistantPanel({ open, onClose }: AssistantPanelProps) {
  const [messages, setMessages] = useState<Message[]>([{ id: 0, role: "assistant", reply: WELCOME }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages, busy]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const hasLead = messages.some((m) => m.role === "lead");
  const lastService = [...messages].reverse().find((m) => m.role === "assistant" && m.reply.service);
  const service = lastService?.role === "assistant" ? lastService.reply.service : undefined;
  // Pre-fill the enquiry with what the visitor described: questions that led to a service recommendation.
  const asked = messages.flatMap((m, i) => {
    const next = messages[i + 1];
    return m.role === "user" && next?.role === "assistant" && next.reply.service && !wantsEnquiry(m.text) ? [m.text] : [];
  });

  const showLead = () => {
    if (!hasLead) setMessages((m) => [...m, { id: nextId++, role: "lead" }]);
  };

  const send = async (text: string) => {
    const q = text.trim().slice(0, 600);
    if (!q || busy) return;
    setInput("");
    const history = messages;
    setMessages((m) => [...m, { id: nextId++, role: "user", text: q }]);
    setBusy(true);
    const reply = await ask(history, q);
    setBusy(false);
    setMessages((m) => {
      const next: Message[] = [...m, { id: nextId++, role: "assistant", reply }];
      // Clear buying intent goes straight to the enquiry form.
      if (wantsEnquiry(q) && !m.some((x) => x.role === "lead")) next.push({ id: nextId++, role: "lead" });
      return next;
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void send(input);
  };

  return (
    <section
      id="assist-panel"
      className="assist-panel"
      role="dialog"
      aria-modal="false"
      aria-labelledby="assist-title"
      hidden={!open}
    >
      <header className="assist-panel__head">
        <div>
          <p className="assist-panel__kicker">
            <span className="assist-invite__led" aria-hidden="true" /> Squadify Assistant
          </p>
          <h2 id="assist-title" className="assist-panel__title">
            Ask about AI for your business
          </h2>
        </div>
        <button type="button" className="assist-panel__close" aria-label="Close chat assistant" onClick={onClose}>
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </header>

      <div ref={logRef} className="assist-log" role="log" aria-live="polite" aria-relevant="additions">
        {messages.map((m) =>
          m.role === "user" ? (
            <p key={m.id} className="assist-msg assist-msg--user">
              <span className="sr-only">You: </span>
              {m.text}
            </p>
          ) : m.role === "assistant" ? (
            <div key={m.id} className="assist-msg assist-msg--bot">
              <span className="sr-only">Assistant: </span>
              <p>{m.reply.text}</p>
              {m.reply.links.length ? (
                <ul className="assist-links">
                  {m.reply.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} onClick={onClose}>
                        {l.label} <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
              {m.reply.offerLead && !hasLead ? (
                <button type="button" className="assist-chip assist-chip--cta" onClick={showLead}>
                  Send an enquiry to the team
                </button>
              ) : null}
            </div>
          ) : (
            <div key={m.id} className="assist-lead">
              <p className="assist-lead__intro">
                Leave your details and the team will reply by email. Nothing is sent until you press submit.
              </p>
              <LeadForm
                source="chatbot"
                className="lab-form assist-form"
                submitLabel="Send enquiry"
                successTitle="Enquiry sent"
                successBody="Thanks — the team will review your enquiry and reply by email."
              >
                <div className="lab-field">
                  <label htmlFor="as-name" className="lab-field__label">Name *</label>
                  <input id="as-name" name="name" required autoComplete="name" className="lab-input" />
                </div>
                <div className="lab-field">
                  <label htmlFor="as-email" className="lab-field__label">Email *</label>
                  <input id="as-email" name="email" type="email" required autoComplete="email" className="lab-input" />
                </div>
                <div className="lab-field">
                  <label htmlFor="as-company" className="lab-field__label">Company</label>
                  <input id="as-company" name="company" autoComplete="organization" className="lab-input" />
                </div>
                <div className="lab-field">
                  <label htmlFor="as-service" className="lab-field__label">Area of interest</label>
                  <select id="as-service" name="service" className="lab-input" defaultValue={service ?? ""}>
                    <option value="">Not sure yet</option>
                    {SERVICE_TITLES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="lab-field">
                  <label htmlFor="as-message" className="lab-field__label">What would you like help with? *</label>
                  <textarea
                    id="as-message"
                    name="message"
                    required
                    rows={3}
                    className="lab-input"
                    defaultValue={asked.slice(-2).join("\n")}
                  />
                </div>
              </LeadForm>
            </div>
          ),
        )}
        {busy ? (
          <p className="assist-msg assist-msg--bot assist-typing" aria-label="Assistant is typing">
            <span />
            <span />
            <span />
          </p>
        ) : null}
      </div>

      {messages.length <= 1 ? (
        <ul className="assist-suggest" aria-label="Suggested questions">
          {SUGGESTIONS.map((s) => (
            <li key={s}>
              <button type="button" className="assist-chip" onClick={() => void send(s)}>
                {s}
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <form className="assist-input" onSubmit={onSubmit}>
        <label htmlFor="assist-q" className="sr-only">
          Your question
        </label>
        <input
          ref={inputRef}
          id="assist-q"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question…"
          autoComplete="off"
          maxLength={600}
        />
        <button type="submit" aria-label="Send question" disabled={busy || !input.trim()}>
          <Send className="w-4 h-4" aria-hidden="true" />
        </button>
      </form>
      <p className="assist-foot">Answers come from this website. For anything else, the team can help.</p>
    </section>
  );
}
