import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HardHat, CheckCircle, Cog, BarChart3, Bot, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "AI for Construction — Squadify Solutions",
  description: "AI solutions for construction companies. Automate project documentation, tender responses, site reporting, and procurement with AI.",
};

const solutions = [
  { Icon: FileText, title: "Tender & Bid Automation", desc: "AI drafts tender responses using past winning bids as reference. Cut bid preparation time by 60%." },
  { Icon: BarChart3, title: "Project Cost Intelligence", desc: "Real-time cost tracking with AI alerts when projects approach budget thresholds — before overruns happen." },
  { Icon: Bot, title: "Site Report Automation", desc: "Voice or photo input from site. AI generates structured daily reports, punch lists, and safety records." },
  { Icon: Cog, title: "Procurement Optimisation", desc: "AI analyses supplier quotes, flags anomalies, and recommends optimal procurement decisions." },
  { Icon: HardHat, title: "H&S Documentation", desc: "Automatically generate risk assessments, RAMS, and method statements from project specifications." },
  { Icon: CheckCircle, title: "Subcontractor Management", desc: "AI tracks subcontractor submissions, certifications, and payment schedules — flagging compliance gaps." },
];

export default function ConstructionPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "25%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Construction Industry</div>
            <h1 className="display-xl mb-6">
              AI Solutions Built for the <span className="text-gradient">Construction Sector</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Construction companies face document-heavy operations, tight margins, and complex project management.
              Squadify builds AI that automates the paperwork, surfaces cost intelligence, and keeps projects on track.
            </p>
            <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
              Discuss My Construction AI Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Solutions</div>
            <h2 className="display-md mb-4">AI for <span className="text-gradient">Construction Operations</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map(({ Icon, title, desc }) => (
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
          <div className="rounded-2xl p-12 text-center relative overflow-hidden" style={{ background: "var(--blue)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 60%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <HardHat className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Ready to Modernise Your Construction Operations?
              </h3>
              <Link href="/get-started/book-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#fff", color: "var(--blue)" }}>
                Book a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
