import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, FileText, Calendar, Users, BarChart2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare AI Solutions | Squadify Solutions",
  description: "AI solutions for healthcare providers — clinical documentation, patient inquiry automation, appointment scheduling, and compliance reporting to reduce administrative burden and improve patient outcomes.",
};

const useCases = [
  { Icon: FileText, num: "01", title: "Clinical Documentation AI", desc: "Automate the capture and structuring of clinical notes using AI transcription and NLP. Free clinicians from manual documentation so they can focus on patient care." },
  { Icon: Heart, num: "02", title: "Patient Inquiry Automation", desc: "AI-powered chat and voice agents handle common patient questions around appointments, prescriptions, and referrals around the clock. Reduce call volume and improve patient satisfaction." },
  { Icon: Calendar, num: "03", title: "Appointment Scheduling AI", desc: "Intelligent scheduling systems match patient needs with available slots, minimise no-shows with automated reminders, and optimise clinical capacity across departments." },
  { Icon: Shield, num: "04", title: "Medical Record Processing", desc: "Extract, classify, and route information from unstructured medical records and referral letters at scale. Reduce manual data entry and accelerate clinical workflows." },
  { Icon: Users, num: "05", title: "Staff Scheduling Optimisation", desc: "AI models forecast patient demand and recommend optimal staffing rotas to balance workload, reduce overtime, and maintain care quality during peak periods." },
  { Icon: BarChart2, num: "06", title: "Compliance Reporting", desc: "Automate the generation of regulatory and quality reports from clinical and operational data. Ensure accurate, timely submissions without burdening your administration team." },
];

const stats = [
  { value: "30%", label: "Reduction in administrative overhead with AI" },
  { value: "4hrs", label: "Average time saved per clinician per week on documentation" },
  { value: "50%", label: "Faster patient query resolution with AI support" },
  { value: "99%", label: "Accuracy target for AI-assisted document processing" },
];

export default function HealthcarePage() {
  return (
    <>
      {/* Hero */}
      <section className="section relative overflow-hidden" style={{ background: "var(--bg-base)", paddingTop: "7rem" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 60% 0%, rgba(37,99,235,0.12) 0%, transparent 60%)" }} />
        <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />
        <div className="container relative" style={{ zIndex: 1 }}>
          <div className="label mb-6">Healthcare Solutions</div>
          <h1 className="display-xl mb-6" style={{ maxWidth: "700px" }}>
            AI Solutions for Healthcare <span className="text-gradient">Businesses.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "580px", marginBottom: "2.5rem" }}>
            Healthcare organisations face relentless administrative pressure alongside growing patient demand. Squadify applies AI to clinical documentation, scheduling, and compliance workflows — giving your teams more time for what matters most: patient care.
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
          <h2 className="display-lg mb-16">Where AI Delivers Value in <span className="text-gradient">Healthcare.</span></h2>
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
            Ready to Explore AI for Your Healthcare Business?
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
