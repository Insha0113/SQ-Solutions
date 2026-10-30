import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Brain, Zap, Target, Shield, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Squadify Solutions — AI-First Technology Company",
  description: "Squadify Solutions is an AI-first technology company built to solve real business problems with practical, cost-effective AI solutions.",
};

const pillars = [
  { Icon: Brain, title: "AI-First Thinking", desc: "Every engagement starts by asking what problem needs solving — not what technology to use." },
  { Icon: Zap, title: "Structured Delivery", desc: "Our delivery approach moves from discovery to live solution with clear milestones and agreed scope." },
  { Icon: Target, title: "Problem-Led Design", desc: "Solutions are designed around your operational reality, not generic templates." },
  { Icon: Shield, title: "Cost-Conscious", desc: "We focus on practical value and realistic investment — not technology for its own sake." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg-base)" }}>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(37,99,235,0.1) 0%, transparent 65%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="label mb-6 inline-flex">About Squadify</span>
            <h1 className="display-hero text-white mb-6" style={{ fontFamily: "var(--font-sora)" }}>
              We Are <span className="text-gradient">Squadify Solutions</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
              An AI-first technology company built to solve real business problems. We work with business
              owners to understand their pain points, identify where AI can create the greatest impact,
              and build practical solutions around their specific needs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/get-started/book-call" className="btn-primary">
                Talk to Our Team <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/company/story" className="btn-secondary">Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label mb-5 inline-flex">Who We Are</span>
              <h2 className="display-lg text-white mb-5" style={{ fontFamily: "var(--font-sora)" }}>
                AI Solutions Built for <span className="text-gradient">Real Business Needs</span>
              </h2>
              <div className="space-y-4 text-base" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                <p>Squadify Solutions is an AI-first technology company built to solve real business problems. We work with business owners to understand their pain points, identify where AI can create the greatest impact, and build practical solutions around their specific needs.</p>
                <p>From automating repetitive work to improving customer experience, streamlining operations, and turning business data into actionable insights — we make AI useful, accessible, and cost-effective.</p>
              </div>
              <div
                className="mt-6 p-5 rounded-xl"
                style={{ background: "var(--blue-glass)", border: "1px solid var(--border-blue)" }}
              >
                <p className="text-white font-semibold italic">
                  &ldquo;You bring the problem. We bring the AI solution.&rdquo;
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map(({ Icon, title, desc }) => (
                <div key={title} className="card p-5">
                  <div className="icon-box mb-4"><Icon className="w-5 h-5" style={{ color: "var(--blue)" }} /></div>
                  <h3 className="text-white font-semibold text-sm mb-2" style={{ fontFamily: "var(--font-sora)" }}>{title}</h3>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-8" style={{ background: "var(--blue)", border: "1px solid var(--blue)" }}>
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-5">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: "var(--font-sora)" }}>Our Mission</h3>
              <p className="text-white/80 leading-relaxed text-sm">To help business owners solve real-world challenges through practical, intelligent, and affordable AI solutions. We aim to make advanced technology accessible by turning pain points into working solutions — quickly and efficiently.</p>
            </div>
            <div className="card rounded-2xl p-8">
              <div className="icon-box mb-5"><TrendingUp className="w-5 h-5" style={{ color: "var(--blue)" }} /></div>
              <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: "var(--font-sora)" }}>Our Vision</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>To become a trusted global partner for businesses seeking to work smarter with AI, where every business problem has the potential to become an opportunity for automation, innovation, and growth.</p>
              <p className="text-sm italic" style={{ color: "#8FE3FF" }}>&ldquo;AI should work for your business — not the other way around.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container text-center">
          <h2 className="display-lg text-white mb-4" style={{ fontFamily: "var(--font-sora)" }}>
            Ready to Work with Us?
          </h2>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
            Let&apos;s talk about your business challenges and how AI can help.
          </p>
          <Link href="/get-started/book-call" className="btn-primary">
            Book Free Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
