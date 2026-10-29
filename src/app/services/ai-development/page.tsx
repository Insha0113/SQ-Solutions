import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Layers, Shield, Cpu, Database, GitBranch, Workflow, CheckCircle, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Development — Custom AI Solutions | Squadify Solutions",
  description: "Custom AI development for businesses. Squadify builds production-ready AI systems, APIs, and applications tailored to your exact requirements.",
};

const capabilities = [
  { Icon: Cpu, title: "Custom AI Models", desc: "Fine-tune existing models or build custom models trained on your proprietary data for domain-specific accuracy." },
  { Icon: Layers, title: "AI Application Development", desc: "Full-stack AI applications with intuitive interfaces, robust backends, and seamless third-party integrations." },
  { Icon: Database, title: "RAG & Knowledge Systems", desc: "Retrieval-Augmented Generation systems that let AI reason over your documents, databases, and internal knowledge." },
  { Icon: GitBranch, title: "API & Integration Layer", desc: "Production-grade AI APIs with authentication, rate limiting, monitoring, and developer documentation." },
  { Icon: Workflow, title: "AI Pipelines & Agents", desc: "Multi-step AI agents that autonomously plan, execute, and complete complex tasks end-to-end." },
  { Icon: Shield, title: "AI Safety & Evaluation", desc: "Automated testing, output evaluation, hallucination detection, and safety guardrails for production AI." },
];

const stack = [
  "Python", "FastAPI", "Node.js", "TypeScript", "Next.js",
  "OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Mistral",
  "LangChain", "LlamaIndex", "Pinecone", "Weaviate", "ChromaDB",
  "PostgreSQL", "Redis", "Docker", "AWS", "GCP", "Azure",
];

const process = [
  { num: "01", title: "Requirements & Architecture", desc: "We define functional requirements, select the optimal AI approach, and design system architecture." },
  { num: "02", title: "Data & Model Planning", desc: "We audit your data, plan training strategies, and evaluate model options for your use case." },
  { num: "03", title: "Iterative Development", desc: "We build in short sprints with frequent demos, incorporating feedback at every stage." },
  { num: "04", title: "Testing & Evaluation", desc: "Rigorous testing including AI output quality, edge cases, performance, and security." },
  { num: "05", title: "Deployment & Handover", desc: "Production deployment with CI/CD pipelines, monitoring, and full technical documentation." },
];

const features = [
  "Clean, documented, maintainable codebase",
  "Full source code ownership — no vendor lock-in",
  "Automated testing and CI/CD pipelines",
  "Production-grade security and compliance",
  "Scalable cloud-native architecture",
  "Comprehensive API documentation",
  "30-day post-launch support included",
  "Optional ongoing maintenance plans",
];

export default function AIDevelopmentPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "30%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.35 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">AI Development</div>
            <h1 className="display-xl mb-6">
              Custom AI Systems Built for{" "}
              <span className="text-gradient">Your Exact Requirements</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Off-the-shelf AI tools rarely fit your specific workflows. Squadify builds custom AI
              applications, APIs, and systems from the ground up — engineered for your data,
              your users, and your business logic.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/our-work" className="btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "150hrs", label: "Average delivery time" },
              { val: "100%", label: "Source code ownership" },
              { val: "30 days", label: "Post-launch support" },
              { val: "0", label: "Vendor lock-in" },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="metric" style={{ color: "var(--blue)" }}>{val}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Capabilities</div>
            <h2 className="display-md mb-4">
              What We <span className="text-gradient">Build</span>
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              From custom model fine-tuning to production AI applications — we cover the full development stack.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ Icon, title, desc }) => (
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

      {/* Process */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Development Process</div>
            <h2 className="display-md mb-4">
              How We <span className="text-gradient">Build</span>
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {process.map(({ num, title, desc }) => (
              <div key={title} className="flex gap-6 p-6 rounded-2xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <div className="step-circle flex-shrink-0">{num}</div>
                <div>
                  <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>{title}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="label mb-5">Technology Stack</div>
            <h2 className="display-md mb-4">
              Our <span className="text-gradient">Technology Stack</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {stack.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="label mb-5">Quality Standards</div>
              <h2 className="display-md mb-6">
                Production-Ready From <span className="text-gradient">Day One</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                We don&apos;t deliver prototypes. Every system we build is production-grade with
                comprehensive testing, documentation, and the infrastructure to scale. You own
                the code, and we build it to last.
              </p>
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "var(--blue)" }} />
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl p-12 text-center relative overflow-hidden" style={{ background: "var(--blue)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 60%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Code2 className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Have a Custom AI Project in Mind?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Tell us your requirements. We&apos;ll scope the project, provide a fixed quote, and deliver in 150 hours.
              </p>
              <Link href="/get-started/book-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#fff", color: "var(--blue)" }}>
                Get a Project Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
