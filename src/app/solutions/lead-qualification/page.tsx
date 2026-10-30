import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, BarChart3, TrendingUp, Zap, CheckCircle, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "Lead Qualification AI",
  description: "Score, qualify, and route every lead automatically with AI. Focus your sales team on the leads most likely to close.",
};

const features = [
  { Icon: Brain, title: "AI Lead Scoring", desc: "Multi-dimensional lead scoring based on fit, intent, engagement, and firmographic data — updated in real time." },
  { Icon: Target, title: "Qualification Workflows", desc: "Automated multi-touch sequences that gather qualification data and route leads to the right sales rep or nurture track." },
  { Icon: Zap, title: "Instant Lead Response", desc: "AI engages every inbound lead within seconds — qualifying them while interest is at peak before human follow-up." },
  { Icon: BarChart3, title: "Pipeline Quality Analytics", desc: "Track lead quality scores over time, identify your highest-converting sources, and optimise your acquisition spend." },
  { Icon: TrendingUp, title: "CRM Auto-Enrichment", desc: "Automatically enrich lead records with company data, social profiles, and intent signals before your sales rep calls." },
  { Icon: CheckCircle, title: "Disqualification Automation", desc: "Automatically remove poor-fit leads from the pipeline, so your team only spends time on real opportunities." },
];

export default function LeadQualificationPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "35%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Lead Qualification</div>
            <h1 className="display-xl mb-6">
              Focus Your Sales Team on Leads That{" "}
              <span className="text-gradient">Actually Close</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Stop wasting sales time on unqualified leads. Squadify&apos;s AI lead qualification system
              scores every inbound lead, engages them instantly, and routes the best opportunities
              to your sales team — automatically.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Qualify Leads Automatically
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
            {[{ val: "< 5s", label: "Lead engagement speed" }, { val: "3x", label: "More qualified meetings" }, { val: "60%", label: "Less sales team wasted effort" }, { val: "150hrs", label: "Deployment time" }].map(({ val, label }) => (
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
            <h2 className="display-md mb-4">Intelligent <span className="text-gradient">Lead Qualification System</span></h2>
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
              <Target className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Stop Wasting Sales Time on Bad Leads
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Book a call to see how AI qualification can transform your sales efficiency.
              </p>
              <Link href="/get-started/book-call" className="lab-btn">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
