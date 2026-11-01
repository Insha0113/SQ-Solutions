import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, TrendingUp, Users, MessageSquare, BarChart2, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Startups AI Solutions",
  description: "AI solutions for startups — customer onboarding automation, AI support agents, lead qualification, product analytics, and investor reporting to scale operations without scaling headcount.",
};

const useCases = [
  { Icon: Zap, num: "01", title: "Customer Onboarding Automation", desc: "AI-guided onboarding flows adapt to each user&apos;s role and goals, surfacing the right features at the right time. Reduce time-to-value and improve activation rates without adding customer success headcount." },
  { Icon: MessageSquare, num: "02", title: "AI-Powered Support Agent", desc: "A conversational AI agent handles tier-1 support queries, product FAQs, and troubleshooting across your web app and help centre. Scale support capacity from day one without a proportional team." },
  { Icon: Users, num: "03", title: "Lead Qualification AI", desc: "AI scores inbound leads using intent signals, firmographic data, and behavioural patterns. Prioritise outreach automatically so your sales team focuses on opportunities most likely to convert." },
  { Icon: BarChart2, num: "04", title: "Product Analytics Intelligence", desc: "AI surfaces usage patterns, feature adoption trends, and drop-off points from your product data. Give founders and product teams clear signals about what&apos;s working and what needs attention." },
  { Icon: TrendingUp, num: "05", title: "Investor Reporting Automation", desc: "Automated workflows pull metrics from your key systems and compile investor updates, board decks, and MRR reports on schedule. Spend less time on reporting and more time on growth." },
  { Icon: Cpu, num: "06", title: "Growth Experiment Tracking", desc: "AI tools help design, track, and analyse growth experiments across acquisition, activation, and retention. Move from hypothesis to insight faster and with greater statistical confidence." },
];

const stats = [
  { value: "Scale", label: "Operational capacity without matching headcount growth" },
  { value: "Less manual", label: "Repetitive operational tasks automated" },
  { value: "Faster", label: "Customer onboarding with AI automation" },
];

export default function StartupsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section relative overflow-hidden" style={{ background: "var(--bg-base)", paddingTop: "7rem" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 60% 0%, rgba(37,99,235,0.12) 0%, transparent 60%)" }} />
        <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />
        <div className="container relative" style={{ zIndex: 1 }}>
          <div className="label mb-6">Startups Solutions</div>
          <h1 className="display-xl mb-6" style={{ maxWidth: "700px" }}>
            AI Solutions for <span className="text-gradient">Startups.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "580px", marginBottom: "2.5rem" }}>
            Startups compete on speed and capital efficiency. Squadify helps early-stage and growth-stage companies deploy AI for customer onboarding, support, and operations — delivering enterprise-level capability at startup-friendly scale, from prototype to production in weeks.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" className="btn-primary">Start a Conversation <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/resources/ai-readiness" className="btn-secondary">AI Readiness Check <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "var(--border)" }}>
            {stats.map(({ value, label }) => (
              <div key={label} style={{ background: "var(--bg-card)", padding: "2rem 1.5rem" }}>
                <div style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--blue)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "0.5rem" }}>{value}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.82rem", fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section" style={{ background: "var(--bg-base)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="label mb-6">AI Use Cases</div>
          <h2 className="display-lg mb-16">Where AI Delivers Value for <span className="text-gradient">Startups.</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "var(--border)" }}>
            {useCases.map(({ Icon, num, title, desc }) => (
              <div key={num} style={{ background: "var(--bg-base)", padding: "2rem 1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div className="icon-box"><Icon className="w-5 h-5" style={{ color: "var(--blue)" }} /></div>
                  <span style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "0.65rem", color: "var(--border-light)", letterSpacing: "0.08em" }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section lab-cta-band">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#fff", marginBottom: "1.25rem", letterSpacing: "-0.025em" }}>
            Ready to Explore AI for Your Startup?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Book a discovery call and we&apos;ll identify where AI can deliver genuine value for your specific operation.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" className="lab-btn">
              Book Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="lab-btn lab-btn--ghost">
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
