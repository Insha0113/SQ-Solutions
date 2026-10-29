import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Headphones, Clock, Shield, RefreshCw, CheckCircle, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Ongoing Support & Maintenance — Squadify Solutions",
  description: "Keep your AI systems running at peak performance. Squadify provides ongoing monitoring, maintenance, updates, and optimisation for all deployed solutions.",
};

const plans = [
  {
    name: "Essential",
    tag: "For startups",
    features: ["Monthly performance review", "Bug fixes and patches", "Email support (48h response)", "Security updates", "Monthly usage report"],
  },
  {
    name: "Growth",
    tag: "Most popular",
    featured: true,
    features: ["Weekly performance monitoring", "Priority bug fixes", "Slack/email support (24h response)", "AI model retraining as needed", "Feature updates (up to 10h/month)", "Quarterly strategy review"],
  },
  {
    name: "Enterprise",
    tag: "For scale",
    features: ["Real-time monitoring & alerting", "Same-day critical response", "Dedicated account manager", "Unlimited feature requests", "Monthly AI optimisation", "SLA-backed uptime guarantee"],
  },
];

export default function SupportPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "20%", width: "600px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Ongoing Support</div>
            <h1 className="display-xl mb-6">
              AI Systems That Stay{" "}
              <span className="text-gradient">Sharp Over Time</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              AI systems need continuous monitoring, retraining, and optimisation to stay effective.
              Squadify&apos;s support plans keep your AI performing at its best — with proactive
              maintenance before issues arise.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get Support Plan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Support Plans</div>
            <h2 className="display-md mb-4">Choose Your <span className="text-gradient">Support Level</span></h2>
            <p style={{ color: "var(--text-secondary)" }}>All plans include a 30-day free support period after initial deployment.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map(({ name, tag, features, featured }) => (
              <div key={name} className="card" style={featured ? { border: "1px solid var(--border-blue)", background: "var(--blue-glass)" } : {}}>
                {featured && <div className="tag-blue mb-4 inline-block">Most Popular</div>}
                <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginBottom: "0.25rem" }}>{tag}</div>
                <h3 style={{ fontWeight: 800, color: "var(--text-primary)", fontSize: "1.5rem", marginBottom: "1.5rem" }}>{name}</h3>
                <div className="space-y-3">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "var(--blue)" }} />
                      <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/contact" className={featured ? "btn-primary w-full text-center block" : "btn-secondary w-full text-center block"}>
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">What&apos;s Covered</div>
            <h2 className="display-md mb-4">Comprehensive <span className="text-gradient">Coverage</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Shield, title: "Security Updates", desc: "Proactive patching and security hardening to keep your systems protected." },
              { Icon: RefreshCw, title: "Model Retraining", desc: "Regular AI model updates to maintain accuracy as your data evolves." },
              { Icon: Zap, title: "Performance Tuning", desc: "Ongoing optimisation to keep response times fast and costs efficient." },
              { Icon: Headphones, title: "Priority Support", desc: "Direct access to the engineers who built your system for fast resolution." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="card">
                <div className="icon-box mb-4"><Icon className="w-5 h-5" style={{ color: "var(--blue)" }} /></div>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
