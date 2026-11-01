import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, DollarSign, Shield, BarChart2, FileText, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Finance AI Solutions",
  description: "AI solutions for financial services — fraud detection, regulatory compliance automation, document processing, client onboarding, and credit risk intelligence to reduce cost and increase accuracy.",
};

const useCases = [
  { Icon: Shield, num: "01", title: "Fraud Detection & Prevention", desc: "Machine learning models analyse transaction patterns, behavioural signals, and network graphs in real time to flag suspicious activity. Identify fraud faster and with fewer false positives than rule-based systems." },
  { Icon: FileText, num: "02", title: "Regulatory Compliance AI", desc: "Automate the monitoring, classification, and reporting of regulatory obligations across jurisdictions. Reduce the manual burden of compliance documentation and lower the risk of regulatory breaches." },
  { Icon: Zap, num: "03", title: "Document Processing Automation", desc: "AI extracts, validates, and routes data from financial documents — statements, contracts, KYC packs — at scale. Eliminate manual data entry from high-volume back-office workflows." },
  { Icon: Users, num: "04", title: "AI Client Onboarding", desc: "Intelligent onboarding workflows guide clients through document submission, identity verification, and account setup automatically. Reduce drop-off and time-to-onboard for new customers." },
  { Icon: BarChart2, num: "05", title: "Financial Reporting Automation", desc: "AI aggregates data from multiple systems to generate accurate management accounts, regulatory returns, and board reports on schedule. Free finance teams from repetitive reporting cycles." },
  { Icon: DollarSign, num: "06", title: "Credit Risk Intelligence", desc: "Advanced models assess creditworthiness using a broader range of signals than traditional scoring. Enable faster, more accurate lending decisions while managing portfolio risk more effectively." },
];

const stats = [
  { value: "Less manual", label: "Compliance documentation workflows" },
  { value: "Always on", label: "Monitoring for unusual transaction patterns" },
  { value: "Leaner", label: "Back-office processing" },
  { value: "Faster", label: "Loan pre-qualification with AI assistance" },
];

export default function FinancePage() {
  return (
    <>
      {/* Hero */}
      <section className="section relative overflow-hidden" style={{ background: "var(--bg-base)", paddingTop: "7rem" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 60% 0%, rgba(37,99,235,0.12) 0%, transparent 60%)" }} />
        <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />
        <div className="container relative" style={{ zIndex: 1 }}>
          <div className="label mb-6">Finance Solutions</div>
          <h1 className="display-xl mb-6" style={{ maxWidth: "700px" }}>
            AI Solutions for Finance <span className="text-gradient">Businesses.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "580px", marginBottom: "2.5rem" }}>
            Financial services firms face mounting regulatory pressure, fraud risk, and cost scrutiny. Squadify applies AI to compliance, document processing, fraud prevention, and client operations — reducing manual effort and improving accuracy across your most critical workflows.
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
          <h2 className="display-lg mb-16">Where AI Delivers Value in <span className="text-gradient">Finance.</span></h2>
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
            Ready to Explore AI for Your Finance Business?
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
