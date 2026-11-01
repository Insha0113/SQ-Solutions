import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, TrendingUp, Heart, BarChart3, MessageSquare, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "AI CRM — Intelligent Customer Relationship Management",
  description: "AI-powered CRM that automatically enriches contacts, predicts churn, and surfaces the right opportunities at the right time.",
};

const features = [
  { Icon: Users, title: "Auto Contact Enrichment", desc: "AI automatically populates CRM records with company data, social profiles, and buying intent signals." },
  { Icon: TrendingUp, title: "Deal Intelligence", desc: "Predictive scoring shows which deals are most likely to close, and flags at-risk opportunities before they go cold." },
  { Icon: Heart, title: "Churn Prediction", desc: "AI analyses engagement signals and usage patterns to flag customers at risk of churning early." },
  { Icon: BarChart3, title: "Revenue Analytics", desc: "AI-powered revenue intelligence — forecasting, cohort analysis, and pipeline health monitoring in real time." },
  { Icon: MessageSquare, title: "Automated Follow-Ups", desc: "AI drafts and schedules personalised follow-up emails based on the context of each customer relationship." },
  { Icon: Zap, title: "Activity Capture", desc: "Automatically log calls, emails, and meetings from your existing tools — zero manual data entry for reps." },
];

export default function AICRMPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "25%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">AI CRM</div>
            <h1 className="display-xl mb-6">
              Your CRM, Supercharged with{" "}
              <span className="text-gradient">Artificial Intelligence</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Squadify layers AI intelligence on top of your existing CRM — or builds a custom AI-native
              CRM system — that automatically enriches contacts, predicts outcomes, and surfaces the
              right opportunities at the right time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Supercharge My CRM
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/solutions/sales-automation" className="btn-secondary">Sales Automation</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ val: "Automatic", label: "CRM data entry for reps" }, { val: "Early", label: "Churn risk signals" }, { val: "Sharper", label: "Pipeline forecasting" }, { val: "150hrs", label: "Deployment time" }].map(({ val, label }) => (
              <div key={label}>
                <div className="metric" style={{ color: "var(--blue)", fontSize: "clamp(1.25rem, 2.4vw, 2.25rem)" }}>{val}</div>
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
            <h2 className="display-md mb-4">AI-Native <span className="text-gradient">CRM Intelligence</span></h2>
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
          <div className="lab-cta-panel rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="lab-cta-panel__light" aria-hidden="true" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Users className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Make Your CRM Work for You
              </h3>
              <Link href="/get-started/book-call" className="lab-btn">
                Book a CRM AI Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
