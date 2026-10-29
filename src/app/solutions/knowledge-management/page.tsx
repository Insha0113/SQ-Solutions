import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Database, Search, Brain, Workflow, MessageSquare, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Knowledge Management AI — Squadify Solutions",
  description: "Build an intelligent knowledge base that employees can query in natural language. AI-powered knowledge management that learns and improves.",
};

const features = [
  { Icon: Database, title: "Universal Knowledge Ingestion", desc: "Ingest documents, PDFs, wikis, Notion pages, Confluence spaces, and web URLs into a unified knowledge base." },
  { Icon: Search, title: "Natural Language Search", desc: "Employees ask questions in plain English. The AI retrieves the exact information from across all your knowledge sources." },
  { Icon: Brain, title: "AI-Generated Summaries", desc: "Automatically generate summaries, FAQs, and quick reference guides from your existing documentation." },
  { Icon: Workflow, title: "Workflow Integration", desc: "Surface knowledge directly inside Slack, Teams, helpdesk tools, and your product — no tab switching needed." },
  { Icon: MessageSquare, title: "Conversational Interface", desc: "An AI assistant employees can have a conversation with — asking follow-up questions, requesting clarifications." },
  { Icon: BookOpen, title: "Auto-Update & Versioning", desc: "Knowledge base stays current as documents are updated. Version history and change tracking included." },
];

export default function KnowledgeManagementPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "20%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.35 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Knowledge Management</div>
            <h1 className="display-xl mb-6">
              Give Your Team AI Access to{" "}
              <span className="text-gradient">All Your Knowledge</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Stop losing hours hunting for information across scattered documents, wikis, and inboxes.
              Squadify builds intelligent knowledge management systems that give every employee instant
              access to your organisation&apos;s collective expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Build My Knowledge Base
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/solutions/internal-assistant" className="btn-secondary">Internal AI Assistant</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ val: "90%", label: "Faster information retrieval" }, { val: "Any", label: "Document format supported" }, { val: "50+", label: "Languages supported" }, { val: "150hrs", label: "Deployment time" }].map(({ val, label }) => (
              <div key={label}>
                <div className="metric" style={{ color: "var(--blue)" }}>{val}</div>
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
            <h2 className="display-md mb-4">Intelligent <span className="text-gradient">Knowledge Platform</span></h2>
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
          <div className="rounded-2xl p-12 text-center relative overflow-hidden" style={{ background: "var(--blue)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 60%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <BookOpen className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Unlock Your Organisation&apos;s Knowledge
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Book a call to see how AI can make your organisation&apos;s knowledge instantly accessible.
              </p>
              <Link href="/get-started/book-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#fff", color: "var(--blue)" }}>
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
