import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Zap, Users, Target, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story",
  description: "How Squadify Solutions was founded and why we believe every business deserves access to AI that works.",
};

export default function StoryPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "30%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Our Story</div>
            <h1 className="display-xl mb-6">
              We Started Because <span className="text-gradient">AI Should Work for Everyone</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.9 }} className="space-y-6">
              <p>
                Squadify Solutions was founded on a simple observation: the businesses that needed AI the most were the ones with the least access to it.
              </p>
              <p>
                Large enterprises with dedicated technology teams and multi-million-pound budgets were deploying AI at scale. Meanwhile, small and mid-market businesses — the ones drowning in manual work, wrestling with disconnected systems, and losing ground to better-resourced competitors — were being told AI was &quot;too complex&quot;, &quot;too expensive&quot;, or &quot;not ready for businesses like yours.&quot;
              </p>
              <p>
                We disagreed. And we built Squadify to prove it.
              </p>
              <p>
                Our 150-hour delivery system was built from a conviction that the gap between &quot;AI in theory&quot; and &quot;AI solving my real business problem&quot; should not take 12 months and a six-figure budget to close. We&apos;ve built it down to weeks.
              </p>
              <p>
                We start with the problem — not the technology. We ask what&apos;s slowing your business down, where the waste is, what your team spends hours doing that AI could handle in seconds. Then we build the solution.
              </p>
              <p>
                Every client we work with gets a solution designed specifically for their business — their data, their workflows, their team, their goals. We don&apos;t sell templates. We build systems that work.
              </p>
              <p style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                That&apos;s the Squadify way.
              </p>
            </div>

            <div className="mt-12">
              <Link href="/company/about" className="btn-primary inline-flex items-center gap-2">
                Meet the Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Brain, title: "Business-First AI", desc: "We start with your problem. Technology serves strategy — not the other way around." },
              { Icon: Zap, title: "Speed Without Sacrifice", desc: "150-hour delivery because your business can't wait months for results that matter now." },
              { Icon: Shield, title: "Honest & Transparent", desc: "No jargon, no overpromising. Clear scopes, transparent pricing agreed before work begins, real outcomes." },
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
