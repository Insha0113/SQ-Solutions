import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Factory, Cog, BarChart2, Package, AlertTriangle, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing AI Solutions",
  description: "AI solutions for manufacturing businesses — predictive maintenance, quality control vision AI, supply chain optimisation, and production scheduling to reduce downtime and improve efficiency.",
};

const useCases = [
  { Icon: Cog, num: "01", title: "Predictive Maintenance", desc: "Monitor equipment health in real time and predict failures before they occur. Reduce unplanned downtime by acting on AI-generated maintenance alerts rather than reactive schedules." },
  { Icon: Factory, num: "02", title: "Quality Control Vision AI", desc: "Deploy computer vision models on production lines to detect defects, surface anomalies, and flag out-of-spec components at machine speed. Catch quality issues before they reach the customer." },
  { Icon: Package, num: "03", title: "Supply Chain Optimisation", desc: "AI analyses supplier lead times, demand signals, and inventory levels to recommend optimal ordering strategies. Reduce stockouts and carrying costs simultaneously." },
  { Icon: BarChart2, num: "04", title: "Production Scheduling", desc: "Automated AI scheduling balances machine capacity, workforce availability, and order priorities to maximise throughput. Adapt plans dynamically as conditions change on the floor." },
  { Icon: AlertTriangle, num: "05", title: "Safety Compliance Monitoring", desc: "Use AI-powered vision and sensor fusion to monitor safety zones, PPE compliance, and hazardous conditions in real time. Surface incidents and near-misses before they escalate." },
  { Icon: Users, num: "06", title: "Demand Forecasting", desc: "Machine learning models trained on historical sales, seasonal trends, and external signals generate accurate demand forecasts. Give procurement and production teams a reliable planning horizon." },
];

const stats = [
  { value: "Predictive", label: "Maintenance that flags issues before breakdowns" },
  { value: "AI vision", label: "Quality defect detection" },
  { value: "Optimised", label: "Inventory planning" },
  { value: "Faster", label: "Production scheduling with AI planning" },
];

export default function ManufacturingPage() {
  return (
    <>
      {/* Hero */}
      <section className="section relative overflow-hidden" style={{ background: "var(--bg-base)", paddingTop: "7rem" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 60% 0%, rgba(37,99,235,0.12) 0%, transparent 60%)" }} />
        <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />
        <div className="container relative" style={{ zIndex: 1 }}>
          <div className="label mb-6">Manufacturing Solutions</div>
          <h1 className="display-xl mb-6" style={{ maxWidth: "700px" }}>
            AI Solutions for Manufacturing <span className="text-gradient">Businesses.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "580px", marginBottom: "2.5rem" }}>
            Modern manufacturing demands more than efficiency — it demands intelligence. Squadify deploys AI across your production lines, supply chain, and maintenance workflows to reduce downtime, improve quality, and give operations teams real-time visibility.
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
          <h2 className="display-lg mb-16">Where AI Delivers Value in <span className="text-gradient">Manufacturing.</span></h2>
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
            Ready to Explore AI for Your Manufacturing Business?
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
