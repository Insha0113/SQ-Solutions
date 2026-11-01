import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Users, MessageSquare, Clock, BarChart3, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Internal AI Assistant",
  description: "Give your team an AI assistant trained on your company knowledge. Answer HR questions, policies, procedures, and more — instantly.",
};

const features = [
  { Icon: Brain, title: "Company Knowledge AI", desc: "Trained on your policies, procedures, handbooks, and documentation. Answers questions your team would normally email HR about." },
  { Icon: Users, title: "Role-Based Access", desc: "Different teams get access to relevant information. Sales sees sales playbooks; HR sees HR policies — securely." },
  { Icon: MessageSquare, title: "Conversational Interface", desc: "Natural language conversations across Slack, Teams, or a web interface. No special syntax or training needed." },
  { Icon: Clock, title: "Always Available", desc: "Your team gets instant answers at any hour — no waiting for the right person to be available." },
  { Icon: BarChart3, title: "Usage Analytics", desc: "See which questions are asked most frequently, identify knowledge gaps, and measure adoption rates." },
  { Icon: Zap, title: "Action Capabilities", desc: "Goes beyond Q&A — can submit forms, book meeting rooms, update CRM records, and trigger workflows." },
];

export default function InternalAssistantPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "20%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Internal AI Assistant</div>
            <h1 className="display-xl mb-6">
              An AI Assistant That Knows{" "}
              <span className="text-gradient">Your Entire Business</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Squadify builds internal AI assistants trained on your company&apos;s knowledge base,
              policies, and procedures. Every employee gets instant answers — reducing internal
              email volume, improving consistency, and freeing up management time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Build My Internal Assistant
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/solutions/knowledge-management" className="btn-secondary">Knowledge Management</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ val: "Instant", label: "Answers to common internal questions" }, { val: "Self-serve", label: "Access to company knowledge" }, { val: "Fewer", label: "Repetitive questions to HR" }, { val: "150hrs", label: "Deployment time" }].map(({ val, label }) => (
              <div key={label}>
                <div className="metric" style={{ color: "var(--blue)", fontSize: "clamp(1.25rem, 2.4vw, 2.25rem)" }}>{val}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Features</div>
            <h2 className="display-md mb-4">Your Company&apos;s <span className="text-gradient">AI Brain</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ Icon, title, desc }) => (
              <div key={title} className="card group">
                <div className="icon-box mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" style={{ color: "var(--blue)" }} />
                </div>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="lab-cta-panel rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="lab-cta-panel__light" aria-hidden="true" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Brain className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Give Your Team an AI That Knows Everything
              </h3>
              <Link href="/get-started/book-call" className="lab-btn">
                Build My Internal Assistant
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
