import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Search, Brain, Target, MessageSquare, Rocket, TrendingUp, Lightbulb, BarChart3, Zap, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Consulting",
  description: "Identify where AI can transform your business. Squadify's AI consulting helps you move from problem to working solution in 150 hours.",
};

const opportunities = [
  "Automate repetitive operational workflows",
  "Reduce customer support costs by 60–80%",
  "Improve employee productivity across teams",
  "Automate documents, emails & reports",
  "Turn data into actionable business insights",
  "Connect existing systems with AI capabilities",
  "Qualify and manage leads automatically",
  "Build internal knowledge assistants",
];

const steps = [
  { num: "01", Icon: Search, title: "Discover", desc: "We map your operations, understand your pain points, and identify automation opportunities." },
  { num: "02", Icon: Brain, title: "Analyse", desc: "We assess technical feasibility, ROI potential, and implementation complexity." },
  { num: "03", Icon: Target, title: "Prioritise", desc: "We focus on high-impact solutions that deliver value quickly." },
  { num: "04", Icon: MessageSquare, title: "Architect", desc: "We design the AI system architecture tailored to your tech stack and workflows." },
  { num: "05", Icon: Rocket, title: "Build & Launch", desc: "We implement and deploy a working solution your team can use immediately." },
];

const deliverables = [
  { Icon: Lightbulb, title: "AI Opportunity Map", desc: "A prioritised map of AI opportunities specific to your business processes." },
  { Icon: BarChart3, title: "ROI Analysis", desc: "Clear estimation of time savings, cost reduction, and efficiency gains." },
  { Icon: Target, title: "Solution Blueprint", desc: "Architecture and implementation plan for your top-priority AI project." },
  { Icon: Zap, title: "Quick Win Roadmap", desc: "A phased rollout plan starting with the fastest-to-implement, highest-impact solutions." },
];

const reasons = [
  { title: "Business-First Approach", desc: "We start with your problem, not a technology. Every recommendation is grounded in your operational reality." },
  { title: "Practical & Cost-Effective", desc: "We focus on AI solutions that deliver real, measurable business value — not impressive-sounding experiments." },
  { title: "Fast Execution", desc: "Our 150-hour delivery system takes you from problem identification to working solution in weeks, not months." },
  { title: "Built for Your Business", desc: "Your processes, goals, and existing systems shape every solution we design and build." },
];

export default function AIConsultingPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: 0, width: "700px", height: "600px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.4 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">AI Consulting</div>
            <h1 className="display-xl mb-6">
              Have a Business Problem?{" "}
              <span className="text-gradient">Let&apos;s Find the AI Solution.</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              You don&apos;t need to be an AI expert to benefit from AI. Squadify helps businesses
              identify where AI can save time, reduce costs, improve productivity, and solve the
              challenges holding them back — then builds the solution in 150 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Talk to an AI Consultant
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/150-hour-delivery" className="btn-secondary inline-flex items-center gap-2">
                Our 150-Hour System
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Strip */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "150hrs", label: "From Problem to Solution" },
              { val: "60–80%", label: "Support Cost Reduction" },
              { val: "13+", label: "Industries Served" },
              { val: "100%", label: "Custom-Built Solutions" },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="metric" style={{ color: "var(--blue)" }}>{val}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Solve */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="label mb-5">What Can AI Solve?</div>
              <h2 className="display-md mb-5">
                We Identify Opportunities to{" "}
                <span className="text-gradient">Transform Your Business</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Tell us what&apos;s slowing your business down. We&apos;ll identify where AI can make
                the biggest difference — and build a practical solution fast.
              </p>
              <Link href="/get-started/consultation" className="btn-ghost inline-flex items-center gap-2">
                Get a Free AI Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {opportunities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-xl group transition-all"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}

                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "var(--blue)" }} />
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Our Approach</div>
            <h2 className="display-md mb-4">
              From Problem to <span className="text-gradient">Working AI Solution</span>
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              A structured consulting process that ensures every solution delivers real business value.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map(({ num, Icon, title, desc }, i) => (
              <div
                key={title}
                className="relative rounded-2xl p-6 text-center transition-all group"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-4 h-4 rounded-full" style={{ background: "var(--blue)", boxShadow: "0 0 12px var(--blue)" }} />
                )}
                <div style={{ color: "var(--blue)", fontWeight: 900, fontSize: "0.7rem", marginBottom: "0.75rem", opacity: 0.6 }}>{num}</div>
                <div className="icon-box mx-auto mb-4">
                  <Icon className="w-5 h-5" style={{ color: "var(--blue)" }} />
                </div>
                <h3 style={{ fontWeight: 800, color: "var(--text-primary)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">What You Get</div>
            <h2 className="display-md mb-4">
              Consulting <span className="text-gradient">Deliverables</span>
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              Every AI consulting engagement produces clear, actionable outputs you can act on immediately.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map(({ Icon, title, desc }) => (
              <div key={title} className="card">
                <div className="icon-box mb-5">
                  <Icon className="w-5 h-5" style={{ color: "var(--blue)" }} />
                </div>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Squadify */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Why Squadify</div>
            <h2 className="display-md mb-4">
              Why Work with <span className="text-gradient">Squadify?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map(({ title, desc }) => (
              <div key={title} className="card">
                <div className="w-2 h-2 rounded-full mb-5" style={{ background: "var(--blue)", boxShadow: "0 0 8px var(--blue)" }} />
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="lab-cta-panel rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="lab-cta-panel__light" aria-hidden="true" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Clock className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#fff", marginBottom: "1rem" }}>
                Your Problem → AI Opportunity → Solution<br />Live in 150 Hours
              </h3>
              <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                We&apos;ve turned this formula into a repeatable system. Tell us your problem,
                and we&apos;ll find the AI opportunity hiding inside it.
              </p>
              <Link href="/get-started/book-call" className="lab-btn">
                Start with a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
