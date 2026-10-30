import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Shield, Globe, Users, BarChart3, Zap, CheckCircle, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions",
  description: "Enterprise-grade AI transformation at scale. Squadify delivers secure, compliant, and fully integrated AI systems for large organisations.",
};

const capabilities = [
  { Icon: Shield, title: "Enterprise Security", desc: "SOC 2-aligned architecture, data encryption at rest and in transit, role-based access control, and audit logging." },
  { Icon: Globe, title: "Multi-System Integration", desc: "Deep integration across your enterprise technology stack — ERP, CRM, HRMS, BI, and legacy systems." },
  { Icon: Users, title: "Organisation-Wide Deployment", desc: "AI solutions that scale across departments, business units, and geographies from a single platform." },
  { Icon: BarChart3, title: "Executive Intelligence", desc: "AI-powered dashboards that give C-suite and leadership real-time operational intelligence." },
  { Icon: Zap, title: "Process Automation at Scale", desc: "Enterprise-wide automation programmes targeting the highest-value repetitive workflows." },
  { Icon: Lock, title: "Compliance & Governance", desc: "Built-in compliance frameworks — GDPR, ISO 27001, and industry-specific requirements." },
];

const process = [
  { num: "01", title: "Enterprise Discovery", desc: "Comprehensive audit of your AI readiness, technology landscape, data assets, and transformation priorities." },
  { num: "02", title: "Transformation Roadmap", desc: "A phased AI transformation plan with prioritised initiatives, business cases, and ROI projections." },
  { num: "03", title: "Pilot Deployment", desc: "Start with a high-impact pilot to demonstrate value and build internal confidence before enterprise-wide rollout." },
  { num: "04", title: "Scaled Rollout", desc: "Organisation-wide deployment with change management support, training, and continuous monitoring." },
  { num: "05", title: "Ongoing Optimisation", desc: "Dedicated team for continuous improvement, model retraining, and expansion into new use cases." },
];

export default function EnterprisePage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "30%", width: "800px", height: "600px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(130px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Enterprise AI</div>
            <h1 className="display-xl mb-6">
              AI Transformation at{" "}
              <span className="text-gradient">Enterprise Scale</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Enterprise organisations require AI solutions with enterprise-grade security, compliance,
              scalability, and integration depth. Squadify delivers organisation-wide AI transformation
              programmes built for the complexity and requirements of large businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/contact-sales" className="btn-primary inline-flex items-center gap-2">
                Contact Enterprise Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/resources/ai-readiness" className="btn-secondary">AI Readiness Assessment</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ val: "Enterprise", label: "Security standards" }, { val: "13+", label: "Industries served" }, { val: "100%", label: "GDPR compliant" }, { val: "Dedicated", label: "Account management" }].map(({ val, label }) => (
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
            <div className="label mb-5">Capabilities</div>
            <h2 className="display-md mb-4">Built for <span className="text-gradient">Enterprise Requirements</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ Icon, title, desc }) => (
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
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Our Approach</div>
            <h2 className="display-md mb-4">Enterprise <span className="text-gradient">Transformation Process</span></h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {process.map(({ num, title, desc }) => (
              <div key={title} className="flex gap-6 p-6 rounded-2xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <div className="step-circle flex-shrink-0">{num}</div>
                <div>
                  <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>{title}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="lab-cta-panel rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="lab-cta-panel__light" aria-hidden="true" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Building2 className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Start Your Enterprise AI Programme
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Speak with our enterprise team. We&apos;ll scope your transformation roadmap and identify quick wins.
              </p>
              <Link href="/get-started/contact-sales" className="lab-btn">
                Talk to Enterprise Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
