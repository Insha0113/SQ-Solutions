import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Zap, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Mission & Vision — Squadify Solutions",
  description: "Squadify's mission: make powerful AI accessible to every business that needs it. Our vision: a world where no business is held back by preventable inefficiency.",
};

export default function MissionPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "25%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Mission & Vision</div>
            <h1 className="display-xl mb-6">
              Why We <span className="text-gradient">Exist</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7 }}>
              Every decision we make, every system we build, and every client we serve is guided by a clear sense of purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card" style={{ border: "1px solid var(--border-blue)", background: "var(--blue-glass)" }}>
              <div className="icon-box mb-6"><Target className="w-6 h-6" style={{ color: "var(--blue)" }} /></div>
              <div style={{ color: "var(--blue)", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Our Mission</div>
              <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 800, color: "var(--text-primary)", fontSize: "1.5rem", lineHeight: 1.3, marginBottom: "1rem" }}>
                Make powerful AI accessible to every business that needs it
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                We exist to close the gap between enterprise AI capabilities and the businesses that could benefit most — by delivering custom, practical AI solutions that work in the real world, not just in demos.
              </p>
            </div>
            <div className="card">
              <div className="icon-box mb-6"><Eye className="w-6 h-6" style={{ color: "var(--blue)" }} /></div>
              <div style={{ color: "var(--text-muted)", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Our Vision</div>
              <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 800, color: "var(--text-primary)", fontSize: "1.5rem", lineHeight: 1.3, marginBottom: "1rem" }}>
                A world where no business is held back by preventable inefficiency
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                We envision a future where every business — regardless of size, budget, or technical sophistication — can harness the power of AI to operate smarter, grow faster, and serve customers better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Our Principles</div>
            <h2 className="display-md mb-4">What We <span className="text-gradient">Stand For</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Heart, title: "Business First", desc: "We start with your problem, not a technology. AI is the tool — solving your operational challenge is the goal." },
              { Icon: Zap, title: "Speed with Substance", desc: "150-hour delivery isn't a gimmick. It's a disciplined system that delivers working solutions fast without cutting corners." },
              { Icon: Shield, title: "Radical Honesty", desc: "We tell you when AI isn't the right solution. We don't oversell. We deliver what we promise." },
              { Icon: Users, title: "Human-Centred AI", desc: "AI should make people's working lives better — not replace them. We build AI that augments human capability." },
              { Icon: Target, title: "Measurable Impact", desc: "Every solution we build has clear, measurable objectives. We care about outcomes, not impressive-sounding deliverables." },
              { Icon: Eye, title: "Long-Term Thinking", desc: "We build systems that last, scale, and remain maintainable. Not quick fixes that create new problems." },
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

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="rounded-2xl p-12 text-center relative overflow-hidden" style={{ background: "var(--blue)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 60%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Aligned with Our Mission?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                If our mission resonates, let&apos;s talk. Whether you&apos;re a potential client or want to join the team.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/get-started/book-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#fff", color: "var(--blue)" }}>
                  Work With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/company/careers" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>
                  Join the Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
