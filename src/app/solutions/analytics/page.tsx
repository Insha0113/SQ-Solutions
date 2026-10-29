import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, Eye, Target, Brain, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Analytics Solutions — Squadify Solutions",
  description: "AI-powered analytics that turn raw business data into predictive intelligence. Dashboards, forecasting models, and natural language data interfaces.",
};

const features = [
  { Icon: BarChart3, title: "Real-Time Dashboards", desc: "Live business intelligence dashboards showing KPIs, trends, and alerts updated automatically from all your data sources." },
  { Icon: TrendingUp, title: "Predictive Forecasting", desc: "AI models that predict revenue, demand, churn, and other critical metrics with quantified confidence ranges." },
  { Icon: Eye, title: "Anomaly Detection", desc: "Automatically identify unusual patterns in your data — revenue drops, cost spikes, usage anomalies — before they escalate." },
  { Icon: Target, title: "Customer Segmentation", desc: "Dynamic AI segmentation that groups customers by behaviour, value, and predicted future actions." },
  { Icon: Brain, title: "Natural Language Analytics", desc: "Ask questions of your data in plain English. Get instant answers without SQL or analyst involvement." },
  { Icon: Database, title: "Multi-Source Data Fusion", desc: "Pull data from every system — CRM, ERP, marketing, finance — into a unified analytics layer." },
];

export default function SolutionsAnalyticsPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "30%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Analytics Solutions</div>
            <h1 className="display-xl mb-6">
              Business Intelligence Powered by{" "}
              <span className="text-gradient">Artificial Intelligence</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              From real-time dashboards to predictive models and natural language data interfaces —
              Squadify builds analytics systems that give every decision-maker in your business
              the intelligence they need, instantly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Build My Analytics System
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services/analytics" className="btn-secondary">Analytics Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Capabilities</div>
            <h2 className="display-md mb-4">AI Analytics <span className="text-gradient">That Drive Decisions</span></h2>
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
              <BarChart3 className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Turn Your Data Into Competitive Advantage
              </h3>
              <Link href="/get-started/book-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#fff", color: "var(--blue)" }}>
                Book a Data Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
