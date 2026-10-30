import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Target, Bot, BarChart3, Mail, Phone, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sales Automation AI",
  description: "Automate your sales pipeline with AI. Squadify builds lead qualification, outreach, and pipeline management systems that close more deals.",
};

const features = [
  { Icon: Target, title: "AI Lead Qualification", desc: "Score and qualify every inbound lead automatically based on fit, intent signals, and behavioural data." },
  { Icon: Mail, title: "Personalised Outreach", desc: "AI generates hyper-personalised outreach sequences for each prospect — at scale, without sounding like a template." },
  { Icon: Phone, title: "Meeting Booking Automation", desc: "AI books discovery calls directly into your calendar, eliminating back-and-forth scheduling." },
  { Icon: BarChart3, title: "Pipeline Intelligence", desc: "AI analyses your pipeline health, predicts close probability, and flags at-risk deals before they slip." },
  { Icon: Bot, title: "CRM Auto-Enrichment", desc: "Automatically populate CRM records with company data, contact info, and recent news — no manual research." },
  { Icon: TrendingUp, title: "Conversion Analytics", desc: "Understand exactly which touchpoints drive conversion and where prospects are dropping off." },
];

const stats = [
  { val: "3x", label: "More leads qualified per rep" },
  { val: "40%", label: "Increase in meeting bookings" },
  { val: "80%", label: "Reduction in manual CRM work" },
  { val: "150hrs", label: "Deployment time" },
];

export default function SalesAutomationPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, right: "10%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.35 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Sales Automation</div>
            <h1 className="display-xl mb-6">
              Let AI Fill Your Pipeline While Your Team{" "}
              <span className="text-gradient">Focuses on Closing</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Squadify builds AI sales automation systems that qualify leads, personalise outreach,
              book meetings, and enrich your CRM — so your sales team can focus on what they do best: closing deals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Automate My Sales Pipeline
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/solutions/lead-qualification" className="btn-secondary">Lead Qualification AI</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ val, label }) => (
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
            <h2 className="display-md mb-4">End-to-End <span className="text-gradient">Sales AI</span></h2>
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
              <TrendingUp className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Ready to Scale Your Sales with AI?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Book a call to see how AI can supercharge your sales pipeline.
              </p>
              <Link href="/get-started/book-call" className="lab-btn">
                Book a Sales AI Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
