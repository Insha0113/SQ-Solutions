import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building, MessageSquare, FileText, BarChart2, Users, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate AI Solutions",
  description: "AI solutions for real estate businesses — lead qualification, property matching, document processing, market analysis, and client communication automation to help agents close more deals.",
};

const useCases = [
  { Icon: Users, num: "01", title: "AI Lead Qualification", desc: "AI scores and prioritises inbound leads based on intent signals, financial readiness, and property preferences. Help agents focus their time on the prospects most likely to convert." },
  { Icon: Search, num: "02", title: "Property Matching Intelligence", desc: "Recommendation engines analyse buyer requirements, browsing behaviour, and market availability to surface the most relevant properties. Reduce time-to-match and increase viewing rates." },
  { Icon: FileText, num: "03", title: "Document Processing AI", desc: "Automate the extraction, validation, and filing of key data from contracts, tenancy agreements, and compliance documents. Reduce manual processing time and minimise documentation errors." },
  { Icon: BarChart2, num: "04", title: "Market Analysis & Reporting", desc: "AI aggregates transaction data, comparable sales, and market trends to produce accurate valuation reports and market briefings on demand. Give clients and partners timely, data-driven insights." },
  { Icon: MessageSquare, num: "05", title: "Client Communication Automation", desc: "Automated AI workflows handle property alert emails, viewing confirmations, offer updates, and post-sale follow-ups. Keep every client informed without manual outreach at every stage." },
  { Icon: Building, num: "06", title: "Tenancy Management AI", desc: "AI streamlines rent collection reminders, maintenance request routing, and lease renewal workflows for property managers. Reduce arrears and improve tenant satisfaction at scale." },
];

const stats = [
  { value: "60%", label: "Faster lead qualification with AI scoring" },
  { value: "40%", label: "Reduction in document processing time" },
  { value: "3x", label: "More property enquiries handled per agent" },
  { value: "30%", label: "Improvement in viewing conversion rate" },
];

export default function RealEstatePage() {
  return (
    <>
      {/* Hero */}
      <section className="section relative overflow-hidden" style={{ background: "var(--bg-base)", paddingTop: "7rem" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 60% 0%, rgba(37,99,235,0.12) 0%, transparent 60%)" }} />
        <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />
        <div className="container relative" style={{ zIndex: 1 }}>
          <div className="label mb-6">Real Estate Solutions</div>
          <h1 className="display-xl mb-6" style={{ maxWidth: "700px" }}>
            AI Solutions for Real Estate <span className="text-gradient">Businesses.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "580px", marginBottom: "2.5rem" }}>
            Real estate success depends on speed, relationships, and accurate information. Squadify applies AI to lead qualification, property matching, and client communications — giving agents and property managers the tools to handle more business with greater precision.
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
          <h2 className="display-lg mb-16">Where AI Delivers Value in <span className="text-gradient">Real Estate.</span></h2>
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
            Ready to Explore AI for Your Real Estate Business?
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
