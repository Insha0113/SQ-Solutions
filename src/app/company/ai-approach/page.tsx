import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Brain, Shield, Zap, Database, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Our AI Approach — How We Build AI",
  description: "Squadify's AI methodology: business-first problem framing, rapid prototyping, production-grade delivery, and continuous optimisation.",
};

const principles = [
  { Icon: Brain, title: "Problem Before Technology", desc: "We define the business problem first. Then we select the AI approach. Never the other way around." },
  { Icon: Zap, title: "Rapid Iteration", desc: "Short feedback cycles with working demos every 2–3 days. You see progress constantly, not just at the end." },
  { Icon: Shield, title: "Production-Grade from Day One", desc: "We don't build prototypes and then refactor. Every system is architected for production from the start." },
  { Icon: Database, title: "Data-Aware Design", desc: "We design around your actual data — its quality, volume, and structure — not ideal data that doesn't exist." },
  { Icon: Globe, title: "Integration First", desc: "AI in isolation delivers little. We prioritise deep integration with your existing systems and workflows." },
  { Icon: Cpu, title: "Measurable Outcomes", desc: "Every project has defined success metrics agreed upfront. We build to hit them, and report against them." },
];

const stack = [
  { category: "Foundation Models", techs: ["OpenAI GPT-4o", "Anthropic Claude 3.5", "Google Gemini 1.5", "Mistral", "Meta Llama 3"] },
  { category: "AI Orchestration", techs: ["LangChain", "LangGraph", "CrewAI", "AutoGen", "LlamaIndex"] },
  { category: "Vector & Search", techs: ["Pinecone", "Weaviate", "ChromaDB", "pgvector", "Elasticsearch"] },
  { category: "Automation", techs: ["n8n", "Make.com", "Zapier", "Airflow", "Prefect"] },
  { category: "Backend", techs: ["Python", "FastAPI", "Node.js", "TypeScript", "PostgreSQL", "Redis"] },
  { category: "Cloud & Infra", techs: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"] },
];

export default function AIApproachPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "30%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Our AI Approach</div>
            <h1 className="display-xl mb-6">
              How We Build AI That <span className="text-gradient">Actually Works</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7 }}>
              Most AI projects fail not because of the technology, but because of how they&apos;re approached.
              Squadify&apos;s methodology is designed around the real-world constraints of business AI deployment.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Core Principles</div>
            <h2 className="display-md mb-4">Our <span className="text-gradient">AI Philosophy</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map(({ Icon, title, desc }) => (
              <div key={title} className="card">
                <div className="icon-box mb-4"><Icon className="w-5 h-5" style={{ color: "var(--blue)" }} /></div>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Technology Stack</div>
            <h2 className="display-md mb-4">What We <span className="text-gradient">Build With</span></h2>
            <p style={{ color: "var(--text-secondary)" }}>
              We use the best tools for each job — from frontier AI models to proven infrastructure platforms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stack.map(({ category, techs }) => (
              <div key={category} className="card">
                <div style={{ color: "var(--blue)", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>{category}</div>
                <div className="flex flex-wrap gap-2">
                  {techs.map((t) => <span key={t} className="tag" style={{ fontSize: "0.75rem" }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="lab-cta-panel rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="lab-cta-panel__light" aria-hidden="true" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Brain className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                See Our Approach in Action
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Book a consultation to see exactly how we&apos;d approach your specific AI challenge.
              </p>
              <Link href="/get-started/book-call" className="lab-btn">
                Book a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
