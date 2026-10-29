import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Squadify — Squadify Solutions",
  description: "Why businesses choose Squadify Solutions for AI. Speed, honesty, business-first thinking, and production-quality delivery.",
};

const reasons = [
  {
    num: "01",
    title: "150-Hour Delivery System",
    desc: "We move from business problem to working AI solution in 150 engineering hours — weeks, not quarters. Our structured 5-stage system keeps delivery fast without sacrificing quality.",
    points: ["Fixed-price project scopes", "Weekly milestones you can see", "No runaway timelines"],
  },
  {
    num: "02",
    title: "Business-First, Not Tech-First",
    desc: "We start every engagement by deeply understanding your business problem, not by proposing the most technically impressive solution. The goal is measurable business value.",
    points: ["ROI-focused prioritisation", "We'll tell you when AI isn't the answer", "Practical solutions over impressive demos"],
  },
  {
    num: "03",
    title: "Production-Quality Engineering",
    desc: "Everything we build is production-grade — clean code, automated testing, proper error handling, monitoring, and documentation. No prototypes that break in week two.",
    points: ["Full source code ownership", "Automated CI/CD pipelines", "Comprehensive documentation"],
  },
  {
    num: "04",
    title: "Complete Transparency",
    desc: "Fixed-price quotes before we start. Progress reports every week. Honest feedback when timelines shift. No surprise bills, no scope creep, no evasive answers.",
    points: ["Fixed-price project quotes", "Weekly progress updates", "Honest about what's possible"],
  },
];

export default function WhySquadifyPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "30%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Why Squadify</div>
            <h1 className="display-xl mb-6">
              Why Businesses Choose <span className="text-gradient">Squadify</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7 }}>
              There are many AI companies. Here&apos;s what makes us different — and why it matters to your business.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="space-y-6">
            {reasons.map(({ num, title, desc, points }) => (
              <div key={title} className="card" style={{ border: "1px solid var(--border)" }}>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div style={{ color: "var(--blue)", fontWeight: 900, fontSize: "0.75rem", marginBottom: "0.5rem" }}>{num}</div>
                    <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 800, color: "var(--text-primary)", fontSize: "1.5rem", marginBottom: "1rem" }}>{title}</h2>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>{desc}</p>
                  </div>
                  <div className="space-y-3">
                    {points.map((p) => (
                      <div key={p} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "var(--blue)" }} />
                        <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                See the Difference for Yourself
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Book a 30-minute call and experience our approach directly. No obligation.
              </p>
              <Link href="/get-started/book-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#fff", color: "var(--blue)" }}>
                Book a Free Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
