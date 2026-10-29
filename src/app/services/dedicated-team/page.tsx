import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Clock, Shield, Star, CheckCircle, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Dedicated AI Team — Squadify Solutions",
  description: "Get a dedicated team of AI engineers, developers, and strategists embedded in your business. Squadify provides flexible dedicated team models.",
};

const roles = [
  "AI/ML Engineers", "Full-Stack Developers", "Data Scientists",
  "Automation Specialists", "UI/UX Designers", "DevOps Engineers",
  "AI Consultants", "Project Managers", "QA Engineers",
];

const models = [
  { title: "Part-Time Team", desc: "20hrs/week of dedicated AI engineering — ideal for ongoing maintenance and continuous improvements.", tag: "From 20h/week" },
  { title: "Full-Time Team", desc: "A dedicated team working exclusively on your projects — for businesses with a continuous development pipeline.", tag: "Full-time" },
  { title: "Project-Based", desc: "A dedicated team assigned to a specific project, delivered in our 150-hour sprint format.", tag: "150-hour sprints" },
];

export default function DedicatedTeamPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "30%", width: "600px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Dedicated Team</div>
            <h1 className="display-xl mb-6">
              Your AI Team,{" "}
              <span className="text-gradient">On Demand</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Skip the months of hiring. Squadify provides dedicated AI engineers, developers,
              and specialists who integrate seamlessly with your team — ready to ship in days, not months.
            </p>
            <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
              Build Your Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ val: "48hrs", label: "Team onboarding time" }, { val: "0", label: "Recruitment overhead" }, { val: "100%", label: "Transparent reporting" }, { val: "Flexible", label: "Scale up or down anytime" }].map(({ val, label }) => (
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
            <div className="label mb-5">Team Composition</div>
            <h2 className="display-md mb-4">Roles We <span className="text-gradient">Provide</span></h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {roles.map((r) => <span key={r} className="tag" style={{ fontSize: "0.95rem", padding: "0.5rem 1.25rem" }}>{r}</span>)}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {models.map(({ title, desc, tag }) => (
              <div key={title} className="card">
                <span className="tag-blue mb-4 inline-block">{tag}</span>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="label mb-5">Why a Dedicated Team?</div>
              <h2 className="display-md mb-6">Faster, Cheaper, Better Than <span className="text-gradient">Hiring In-House</span></h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Hiring an AI engineer takes 3–6 months and costs £80k+/year. Our dedicated team model gives you senior expertise immediately, scales with your needs, and costs a fraction of equivalent headcount.
              </p>
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Discuss Your Requirements
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {["Ready to start in 48 hours", "No recruitment or onboarding overhead", "Fully managed team — no HR headache", "Daily standups and transparent progress tracking", "Scale team size up or down as needed", "UK timezone availability and communication", "Senior engineers — not junior outsourced staff"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "var(--blue)" }} />
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-2xl p-12 text-center relative overflow-hidden" style={{ background: "var(--blue)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 60%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Users className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Get Your Dedicated AI Team in 48 Hours
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Tell us what you need. We&apos;ll match you with the right engineers and have them ready in two days.
              </p>
              <Link href="/get-started/book-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#fff", color: "var(--blue)" }}>
                Build My Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
