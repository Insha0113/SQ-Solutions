import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, DollarSign, FileText, TrendingDown, BarChart3, Shield, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Finance Automation AI",
  description: "Automate finance and accounting workflows with AI. Invoice processing, reconciliation, reporting, and compliance — handled automatically.",
};

const features = [
  { Icon: FileText, title: "Invoice Processing", desc: "Automatically extract, validate, and post invoices to your accounting system. 99%+ accuracy, zero manual entry." },
  { Icon: RefreshCw, title: "Bank Reconciliation", desc: "Match transactions automatically across bank statements and your accounting records. Flag discrepancies instantly." },
  { Icon: BarChart3, title: "Financial Reporting", desc: "Auto-generate P&L, cashflow, and management reports. Distributed to stakeholders on schedule." },
  { Icon: TrendingDown, title: "Expense Management", desc: "AI classifies and validates expense claims against policy. Automatic approval for compliant claims." },
  { Icon: Shield, title: "Fraud Detection", desc: "Anomaly detection that flags unusual transactions, duplicate payments, and suspicious patterns in real time." },
  { Icon: DollarSign, title: "Cash Flow Forecasting", desc: "AI-powered cash flow predictions with confidence intervals, giving finance teams early warning of shortfalls." },
];

export default function FinanceAutomationPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, right: "15%", width: "600px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Finance Automation</div>
            <h1 className="display-xl mb-6">
              Close Faster, Report Smarter,{" "}
              <span className="text-gradient">Error-Free Finance</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Finance and accounting is filled with high-volume, rules-based work that AI can handle
              automatically. Squadify builds AI finance automation that cuts month-end close time, eliminates
              errors, and gives your team time to focus on analysis and strategy.
            </p>
            <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
              Automate My Finance Operations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ val: "80%", label: "Reduction in manual finance work" }, { val: "99%+", label: "Invoice extraction accuracy" }, { val: "50%", label: "Faster month-end close" }, { val: "150hrs", label: "Deployment time" }].map(({ val, label }) => (
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
            <h2 className="display-md mb-4">End-to-End <span className="text-gradient">Finance AI</span></h2>
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
              <DollarSign className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Automate Your Finance Operations
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Book a call to identify your highest-value finance automation opportunities.
              </p>
              <Link href="/get-started/book-call" className="lab-btn">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
