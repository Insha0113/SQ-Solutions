import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Brain, Search, Database, Workflow, Network, CheckCircle, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Agents — Autonomous AI Agents",
  description: "Build autonomous AI agents that plan, decide, and execute complex tasks. Squadify creates custom AI agents for business automation and operations.",
};

const agentTypes = [
  { Icon: Search, title: "Research Agents", desc: "Agents that autonomously search the web, synthesise information, and produce structured intelligence reports on any topic." },
  { Icon: Workflow, title: "Process Orchestration Agents", desc: "Multi-step agents that manage complex business workflows, making decisions and triggering actions across multiple systems." },
  { Icon: Database, title: "Data Analysis Agents", desc: "Agents that pull data from multiple sources, perform analysis, identify patterns, and produce actionable business insights." },
  { Icon: Network, title: "Integration Agents", desc: "Agents that bridge your business systems — reading, writing, and synchronising data across CRMs, ERPs, and APIs." },
  { Icon: Brain, title: "Decision-Making Agents", desc: "Rule-aware AI agents that evaluate options and make intelligent decisions based on your business logic and objectives." },
  { Icon: Bot, title: "Customer-Facing Agents", desc: "Autonomous agents that handle complex customer interactions end-to-end — not just answering questions, but taking action." },
];

const capabilities = [
  "Tool use — web search, code execution, API calls",
  "Long-term memory and context persistence",
  "Multi-agent orchestration and collaboration",
  "Human-in-the-loop approval for critical decisions",
  "Audit trails for every agent action",
  "Sandboxed execution environments",
  "Custom tool and function integration",
  "Streaming responses and real-time progress",
];

const stack = ["LangChain", "LangGraph", "CrewAI", "AutoGen", "OpenAI", "Claude", "Gemini", "Python", "FastAPI", "Docker", "Redis", "PostgreSQL"];

export default function AIAgentsPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, right: "10%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.35 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">AI Agents</div>
            <h1 className="display-xl mb-6">
              AI That Doesn&apos;t Just Answer —{" "}
              <span className="text-gradient">It Acts</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              AI agents go beyond chatbots. They plan, reason, use tools, and autonomously complete
              complex multi-step tasks — from research and analysis to system operations and customer
              interactions. Squadify builds custom AI agents that work for your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Build an AI Agent
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services/ai-development" className="btn-secondary">
                AI Development
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Agents vs Chatbots */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="label mb-5">Why Agents?</div>
            <h2 className="display-md mb-4">
              Beyond Chatbots: <span className="text-gradient">Autonomous AI</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card" style={{ border: "1px solid var(--border)" }}>
              <div style={{ fontWeight: 700, color: "var(--text-muted)", marginBottom: "1rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Chatbots</div>
              {["Respond to questions", "Limited to a single conversation", "Can&apos;t take external actions", "Stateless — forgets after each chat"].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: "var(--border)" }} />
                  <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }} dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
            <div className="card" style={{ border: "1px solid var(--border-blue)", background: "var(--blue-glass)" }}>
              <div style={{ fontWeight: 700, color: "var(--blue)", marginBottom: "1rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>AI Agents</div>
              {["Plan and execute multi-step tasks", "Use tools: search, code, APIs", "Take action in external systems", "Maintain long-term memory"].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "var(--blue)" }} />
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agent Types */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">What We Build</div>
            <h2 className="display-md mb-4">
              Agent Types for Every <span className="text-gradient">Business Need</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentTypes.map(({ Icon, title, desc }) => (
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

      {/* Capabilities & Stack */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="label mb-5">Capabilities</div>
              <h2 className="display-md mb-6">
                Agent Capabilities We <span className="text-gradient">Engineer In</span>
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {capabilities.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "var(--blue)" }} />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="label mb-5">Technology</div>
              <h2 className="display-md mb-6">
                Agent <span className="text-gradient">Tech Stack</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {stack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                  Discuss Your Agent Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="lab-cta-panel rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="lab-cta-panel__light" aria-hidden="true" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Cpu className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Ready to Deploy Autonomous AI?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Book a call to discuss your agent requirements. We&apos;ll design and deliver a custom AI agent in 150 hours.
              </p>
              <Link href="/get-started/book-call" className="lab-btn">
                Start Your Agent Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
