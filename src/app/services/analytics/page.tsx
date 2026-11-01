import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, PieChart, LineChart, Target, Lightbulb, Database, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Analytics & BI — Data Intelligence",
  description: "Turn your business data into actionable intelligence. Squadify builds AI-powered analytics dashboards, predictive models, and BI systems.",
};

const services = [
  { Icon: BarChart3, title: "Executive Dashboards", desc: "Real-time visual dashboards that give leadership an instant view of KPIs, trends, and business health." },
  { Icon: TrendingUp, title: "Predictive Analytics", desc: "AI models that forecast revenue, demand, churn, and other critical metrics with statistical confidence intervals." },
  { Icon: Eye, title: "Customer Intelligence", desc: "Understand customer behaviour, segment audiences, predict lifetime value, and identify churn risk automatically." },
  { Icon: Target, title: "Marketing Attribution", desc: "Multi-touch attribution models that show exactly which channels and campaigns drive revenue." },
  { Icon: Database, title: "Data Pipeline & ETL", desc: "Automated data pipelines that collect, clean, and consolidate data from all your business systems." },
  { Icon: Lightbulb, title: "AI Insights Engine", desc: "Natural language interfaces that let non-technical users ask questions of your data and get instant answers." },
];

const stack = ["Python", "SQL", "dbt", "Airflow", "Power BI", "Tableau", "Looker", "BigQuery", "Snowflake", "PostgreSQL", "OpenAI", "Pandas", "Scikit-learn", "Plotly", "Streamlit"];

export default function AnalyticsPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "20%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.35 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">AI Analytics & BI</div>
            <h1 className="display-xl mb-6">
              Your Data Has the Answers.{" "}
              <span className="text-gradient">AI Finds Them.</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Most businesses are data-rich but insight-poor. Squadify builds AI-powered analytics
              systems that transform raw data into clear, actionable intelligence — predictive models,
              real-time dashboards, and natural language data interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Unlock Your Data
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/resources/roi-calculator" className="btn-secondary">
                ROI Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "Faster", label: "Insights than manual reporting" },
              { val: "Real-time", label: "Dashboard data refresh" },
              { val: "150hrs", label: "Analytics system delivery" },
              { val: "Private", label: "Data handling agreed with you" },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="metric" style={{ color: "var(--blue)", fontSize: "clamp(1.25rem, 2.4vw, 2.25rem)" }}>{val}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Analytics Services</div>
            <h2 className="display-md mb-4">
              Intelligence for Every <span className="text-gradient">Business Function</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ Icon, title, desc }) => (
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

      {/* Tech Stack */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="label mb-5">Technology Stack</div>
            <h2 className="display-md mb-4">
              Tools We <span className="text-gradient">Work With</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {stack.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="lab-cta-panel rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="lab-cta-panel__light" aria-hidden="true" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <LineChart className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Ready to Turn Data into Decisions?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Book a data audit call. We&apos;ll identify your best analytics opportunities and scope a solution.
              </p>
              <Link href="/get-started/book-call" className="lab-btn">
                Book a Data Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
