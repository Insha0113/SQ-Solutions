import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Shield, Clock, Users, Search, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal AI Solutions | Squadify Solutions",
  description: "AI solutions for legal firms — contract review, legal research automation, due diligence AI, client intake automation, and compliance monitoring to increase capacity and reduce review time.",
};

const useCases = [
  { Icon: FileText, num: "01", title: "Contract Review & Analysis", desc: "AI reviews contracts at speed, flagging non-standard clauses, missing provisions, and risk indicators for lawyer attention. Reduce review time significantly while maintaining accuracy and thoroughness." },
  { Icon: Search, num: "02", title: "Legal Research Automation", desc: "Large language models trained on legal sources surface relevant case law, statutes, and precedents in response to natural language queries. Give fee-earners a research head start in minutes rather than hours." },
  { Icon: Shield, num: "03", title: "Document Due Diligence AI", desc: "AI processes large volumes of documents in M&A, litigation, and regulatory review exercises, classifying and extracting key information automatically. Complete due diligence faster without proportional headcount increases." },
  { Icon: Users, num: "04", title: "Client Intake Automation", desc: "Intelligent intake workflows guide prospective clients through conflict checks, matter scoping, and document collection automatically. Reduce time from enquiry to engagement while improving the client experience." },
  { Icon: Clock, num: "05", title: "Billing & Time Tracking AI", desc: "AI tools capture and categorise time entries from communications and document activity, reducing write-offs and improving billing accuracy. Ensure more billable time is recorded without additional admin burden." },
  { Icon: BarChart2, num: "06", title: "Compliance Monitoring", desc: "Automated systems monitor regulatory changes across relevant jurisdictions and flag impacts on client matters or internal policies. Stay ahead of compliance obligations without dedicating resources to manual tracking." },
];

const stats = [
  { value: "60%", label: "Reduction in document review time with AI" },
  { value: "80%", label: "Faster contract clause extraction" },
  { value: "40%", label: "Cost reduction in due diligence workflows" },
  { value: "3x", label: "More matters per fee-earner with AI assistance" },
];

export default function LegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="section relative overflow-hidden" style={{ background: "var(--bg-base)", paddingTop: "7rem" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 60% 0%, rgba(37,99,235,0.12) 0%, transparent 60%)" }} />
        <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />
        <div className="container relative" style={{ zIndex: 1 }}>
          <div className="label mb-6">Legal Solutions</div>
          <h1 className="display-xl mb-6" style={{ maxWidth: "700px" }}>
            AI Solutions for Legal <span className="text-gradient">Businesses.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "580px", marginBottom: "2.5rem" }}>
            Legal professionals spend significant time on document-heavy, high-stakes tasks that AI can accelerate without replacing the judgement that matters. Squadify deploys AI across contract review, research, and due diligence — enabling firms to handle more work with greater consistency.
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
          <h2 className="display-lg mb-16">Where AI Delivers Value in <span className="text-gradient">Legal.</span></h2>
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
            Ready to Explore AI for Your Legal Business?
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
