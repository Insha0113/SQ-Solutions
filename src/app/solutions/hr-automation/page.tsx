import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Clock, FileText, TrendingUp, Brain, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "HR Automation AI — Squadify Solutions",
  description: "Automate HR processes with AI. From CV screening to onboarding and performance tracking — Squadify streamlines your people operations.",
};

const features = [
  { Icon: FileText, title: "CV Screening & Ranking", desc: "AI reviews every application against your job criteria and ranks candidates — cutting screening time by 90%." },
  { Icon: Users, title: "Automated Onboarding", desc: "Personalised onboarding workflows that guide new hires through documentation, training, and setup automatically." },
  { Icon: Clock, title: "Leave & Absence Management", desc: "Automate leave requests, approvals, absence tracking, and payroll notifications — no spreadsheets needed." },
  { Icon: Brain, title: "Performance Analytics", desc: "AI surfaces performance trends, flags flight risks, and recommends development actions based on data." },
  { Icon: TrendingUp, title: "Employee Engagement Insights", desc: "Continuous sentiment analysis from surveys and feedback, with AI-generated recommendations for leadership." },
  { Icon: CheckCircle, title: "Compliance Automation", desc: "Automatically track training completions, certifications, and compliance requirements across your workforce." },
];

export default function HRAutomationPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "25%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">HR Automation</div>
            <h1 className="display-xl mb-6">
              Modernise HR with <span className="text-gradient">AI-Powered Operations</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              From CV screening to onboarding, leave management to performance analytics —
              Squadify automates the repetitive work in HR so your people team can focus on
              what matters: your people.
            </p>
            <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
              Automate My HR
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ val: "90%", label: "Faster CV screening" }, { val: "50%", label: "Reduction in HR admin" }, { val: "3x", label: "Faster onboarding" }, { val: "150hrs", label: "Deployment time" }].map(({ val, label }) => (
              <div key={label}>
                <div className="metric" style={{ color: "var(--blue)" }}>{val}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Features</div>
            <h2 className="display-md mb-4">AI Across the <span className="text-gradient">Employee Lifecycle</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ Icon, title, desc }) => (
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

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="rounded-2xl p-12 text-center relative overflow-hidden" style={{ background: "var(--blue)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 60%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Users className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Ready to Transform Your HR Operations?
              </h3>
              <Link href="/get-started/book-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#fff", color: "var(--blue)" }}>
                Book a Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
