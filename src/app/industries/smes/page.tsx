import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building, Zap, Users, DollarSign, BarChart2, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "SME AI Solutions | Squadify Solutions",
  description: "AI solutions for small and medium enterprises — business process automation, AI customer support, financial administration, sales pipeline intelligence, and document processing with no upfront investment required.",
};

const useCases = [
  { Icon: Zap, num: "01", title: "Business Process Automation", desc: "Identify and automate the repetitive manual processes consuming your team&apos;s time — from data entry and approvals to scheduling and reporting. Free your people for higher-value work from week one." },
  { Icon: MessageSquare, num: "02", title: "AI Customer Support", desc: "An AI support agent handles common customer queries, order updates, and complaints across your website and messaging channels. Deliver consistent, fast responses without expanding your support team." },
  { Icon: DollarSign, num: "03", title: "Financial Administration AI", desc: "Automate invoice processing, expense categorisation, and payment chasing workflows with AI. Reduce the administrative overhead on your finance function and improve cash flow visibility." },
  { Icon: BarChart2, num: "04", title: "Sales Pipeline Intelligence", desc: "AI analyses your CRM data to surface high-priority opportunities, predict deal outcomes, and recommend next actions for your sales team. Spend time on the deals most likely to close." },
  { Icon: Building, num: "05", title: "Document Processing Automation", desc: "AI extracts and processes information from contracts, purchase orders, and compliance documents automatically. Eliminate manual data handling from high-volume document workflows." },
  { Icon: Users, num: "06", title: "Internal Knowledge Assistant", desc: "An AI assistant trained on your business documentation, policies, and processes answers staff questions instantly. Reduce interruptions to senior team members and onboard new hires faster." },
];

const stats = [
  { value: "15hrs", label: "Average hours saved per week with AI automation" },
  { value: "40%", label: "Reduction in operational overhead" },
  { value: "£0", label: "Required upfront investment for pilot projects" },
  { value: "6wks", label: "Average time from pilot to live deployment" },
];

export default function SMEsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section relative overflow-hidden" style={{ background: "var(--bg-base)", paddingTop: "7rem" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 60% 0%, rgba(37,99,235,0.12) 0%, transparent 60%)" }} />
        <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />
        <div className="container relative" style={{ zIndex: 1 }}>
          <div className="label mb-6">SME Solutions</div>
          <h1 className="display-xl mb-6" style={{ maxWidth: "700px" }}>
            AI Solutions for Small & Medium <span className="text-gradient">Enterprises.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "580px", marginBottom: "2.5rem" }}>
            AI is no longer just for large enterprises. Squadify works with SMEs to identify the highest-impact opportunities in your business, deploy practical AI solutions quickly, and deliver measurable results — without the complexity or cost of enterprise-scale programmes.
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
                <div style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--blue)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "0.5rem" }}>{value}</div>
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
          <h2 className="display-lg mb-16">Where AI Delivers Value for <span className="text-gradient">SMEs.</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "var(--border)" }}>
            {useCases.map(({ Icon, num, title, desc }) => (
              <div key={num} style={{ background: "var(--bg-base)", padding: "2rem 1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div className="icon-box"><Icon className="w-5 h-5" style={{ color: "var(--blue)" }} /></div>
                  <span style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "0.65rem", color: "var(--border-light)", letterSpacing: "0.08em" }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--blue)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#fff", marginBottom: "1.25rem", letterSpacing: "-0.025em" }}>
            Ready to Explore AI for Your SME?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Book a discovery call and we&apos;ll identify where AI can deliver genuine value for your specific operation.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "var(--blue)", padding: "0.85rem 2rem", borderRadius: "9999px", fontWeight: 800, fontSize: "0.9rem", textDecoration: "none" }}>
              Book Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", padding: "0.85rem 2rem", borderRadius: "9999px", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
