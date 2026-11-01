import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Bot, GitBranch, Mail, FileText, BarChart3, Settings, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation",
  description: "Automate repetitive workflows with AI. Squadify builds intelligent automation systems that free your team to focus on high-value work.",
};

const useCases = [
  { Icon: Mail, title: "Email & Communication", desc: "Auto-classify inbound emails, draft responses, route to the right team, and trigger follow-up sequences." },
  { Icon: FileText, title: "Document Processing", desc: "Extract data from invoices, contracts, and forms. Auto-populate systems and flag exceptions." },
  { Icon: Bot, title: "Customer Onboarding", desc: "Automate welcome flows, document collection, verification, and account setup without manual steps." },
  { Icon: BarChart3, title: "Reporting & Analytics", desc: "Auto-generate weekly reports, pull KPIs from multiple systems, and send to stakeholders on schedule." },
  { Icon: GitBranch, title: "Process Orchestration", desc: "Connect systems, automate approvals, and manage multi-step workflows with conditional logic." },
  { Icon: Settings, title: "Data Entry & Sync", desc: "Eliminate manual data entry between CRM, ERP, and other business tools with intelligent sync." },
];

const benefits = [
  { val: "Less manual", label: "Repetitive work automated" },
  { val: "Consistent", label: "Repetitive tasks handled the same way every time" },
  { val: "24/7", label: "Workflows run non-stop" },
  { val: "150hrs", label: "Structured delivery framework" },
];

const process = [
  { num: "01", title: "Process Audit", desc: "We map your current workflows, identify bottlenecks, and estimate automation ROI." },
  { num: "02", title: "Automation Design", desc: "We architect the automation system, selecting the right AI models and integration approach." },
  { num: "03", title: "Build & Test", desc: "We implement the automation with thorough testing across edge cases and error conditions." },
  { num: "04", title: "Deploy & Monitor", desc: "We deploy to your environment and set up monitoring dashboards and alerting." },
  { num: "05", title: "Optimise", desc: "We review performance, gather feedback, and continuously improve the automation." },
];

const stack = ["n8n", "Make.com", "Zapier", "Python", "Node.js", "OpenAI", "Claude", "LangChain", "REST APIs", "Webhooks"];

export default function AIAutomationPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: "10%", right: "0", width: "600px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">AI Automation</div>
            <h1 className="display-xl mb-6">
              Stop Doing Manually What{" "}
              <span className="text-gradient">AI Can Do for You</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Every repetitive task in your business is a candidate for AI automation. Squadify builds
              intelligent automation systems that free your team to focus on creative, strategic,
              high-value work — while AI handles the rest around the clock.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Automate My Business
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/150-hour-delivery" className="btn-secondary inline-flex items-center gap-2">
                150-Hour Delivery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {benefits.map(({ val, label }) => (
              <div key={label}>
                <div className="metric" style={{ color: "var(--blue)", fontSize: "clamp(1.25rem, 2.4vw, 2.25rem)" }}>{val}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">What We Automate</div>
            <h2 className="display-md mb-4">
              Common Automation <span className="text-gradient">Use Cases</span>
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              From email triage to document processing, we&apos;ve automated workflows across every business function.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map(({ Icon, title, desc }) => (
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
            <div className="label mb-5">Our Process</div>
            <h2 className="display-md mb-4">
              How We <span className="text-gradient">Automate Your Workflows</span>
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {process.map(({ num, title, desc }) => (
              <div key={title} className="flex gap-6 p-6 rounded-2xl transition-all" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
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
            <div className="label mb-5">Technology</div>
            <h2 className="display-md mb-4">
              Tools We <span className="text-gradient">Work With</span>
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              We integrate with your existing stack and build on industry-leading automation platforms.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {stack.map((tech) => (
              <span key={tech} className="tag" style={{ fontSize: "0.9rem", padding: "0.5rem 1.25rem" }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Automate */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="label mb-5">The Case for Automation</div>
              <h2 className="display-md mb-6">
                Every Hour Your Team Spends on Repetitive Work{" "}
                <span className="text-gradient">Is an Hour AI Could Save</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Knowledge workers spend a large share of their time on tasks that could be
                automated. That&apos;s not just inefficiency — it&apos;s your
                team&apos;s creative capacity going to waste.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Squadify identifies your highest-impact automation opportunities and delivers
                working systems in 150 hours — so you see ROI within weeks, not quarters.
              </p>
              <Link href="/get-started/consultation" className="btn-primary inline-flex items-center gap-2">
                Get Your Automation Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Runs 24/7 without breaks, errors, or sick days",
                "Scales instantly with demand spikes",
                "Keeps a clear audit trail automatically",
                "Frees your team for high-value strategic work",
                "Helps reduce operational costs",
                "Integrates with your existing tools and systems",
              ].map((item) => (
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
          <div className="lab-cta-panel rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="lab-cta-panel__light" aria-hidden="true" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Zap className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Ready to Automate Your Workflows?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Book a free automation assessment. We&apos;ll identify your top 3 automation opportunities and estimate the time savings.
              </p>
              <Link href="/get-started/book-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all" style={{ background: "#fff", color: "var(--blue)" }}>
                Book Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
