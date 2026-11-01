import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Headphones, Clock, Shield, RefreshCw, CheckCircle, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Ongoing Support & Maintenance",
  description: "Keep your AI systems running at peak performance. Squadify provides ongoing monitoring, maintenance, updates, and optimisation for all deployed solutions.",
};

const plans = [
  {
    name: "Essential",
    tag: "For startups",
    features: ["Email support", "Business hours", "Monthly check-in"],
  },
  {
    name: "Standard",
    tag: "For growing teams",
    featured: true,
    features: ["Priority support", "Extended hours", "Weekly check-in", "Minor updates"],
  },
  {
    name: "Managed",
    tag: "For scale",
    features: ["Engineering support aligned with your project", "Monitoring options tailored to your requirements", "Regular operational reviews, as agreed", "Continuous improvement opportunities"],
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
            <p style={{ color: "var(--text-secondary)" }}>Each project includes a post-launch support period agreed with you. After that, choose the plan that suits you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map(({ name, tag, features, featured }) => (
              <div key={name} className="card" style={featured ? { border: "1px solid var(--border-blue)", background: "var(--blue-glass)" } : {}}>
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
            <h2 className="display-md mb-4">Coverage <span className="text-gradient">Agreed With You</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Shield, title: "Maintenance & Updates", desc: "Minor updates to keep your solution working as your tools and needs change, as agreed in your plan." },
              { Icon: RefreshCw, title: "Regular Reviews", desc: "Monthly or weekly check-ins, or regular operational reviews, depending on your plan." },
              { Icon: Zap, title: "Monitoring Options", desc: "Monitoring tailored to your requirements, with continuous improvement opportunities identified along the way." },
              { Icon: Headphones, title: "Priority Support", desc: "Priority support on higher plans, with engineering support aligned with your project." },
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
