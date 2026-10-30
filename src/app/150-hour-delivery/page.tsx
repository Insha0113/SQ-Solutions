import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "The 150-Hour Delivery Framework",
  description: "Our structured delivery approach moves from business problem to practical AI solution through five clear stages.",
};

const stages = [
  { num: "01", title: "Understand", hours: "Hours 1–15", desc: "We identify your business pain points, existing workflows, requirements, goals, and constraints through a structured discovery workshop.", deliverables: ["Business problem mapping", "Pain point identification", "AI opportunity analysis", "Solution scope definition", "ROI estimation framework"], output: "Agreed project scope & AI solution blueprint" },
  { num: "02", title: "Design", hours: "Hours 16–35", desc: "We define the solution architecture, user experience, integrations, and implementation plan. Nothing is built until the design is approved.", deliverables: ["Technical solution design", "System architecture", "Integration mapping", "UI/UX wireframes (if applicable)", "Technical specification"], output: "Approved design & technical specification" },
  { num: "03", title: "Build", hours: "Hours 36–115", desc: "We develop the agreed functionality, integrate with your existing systems, and maintain transparency throughout the development process.", deliverables: ["Core AI development", "System integrations & APIs", "Frontend & backend build", "Internal testing", "Progress updates"], output: "Working AI solution ready for validation" },
  { num: "04", title: "Launch", hours: "Hours 116–140", desc: "We test, deploy, and validate the solution — then prepare your team to use it confidently from the first day.", deliverables: ["Quality assurance testing", "Cloud deployment", "User acceptance testing", "Performance validation", "Go-live support"], output: "Live, deployed AI solution" },
  { num: "05", title: "Scale", hours: "Hours 141–150+", desc: "We monitor performance, provide agreed support, and identify opportunities to extend and improve as your business evolves.", deliverables: ["Team training sessions", "Documentation handover", "30-day support window", "Performance monitoring", "Optimisation recommendations"], output: "Trained team & ongoing support activated" },
];

export default function DeliveryPage() {
  return (
    <div style={{ background: "var(--bg-base)" }}>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(37,99,235,0.12) 0%, transparent 65%)" }} />
        <div className="container relative z-10 text-center">
          <span className="label mb-6 inline-flex">The 150-Hour Framework</span>
          <h1 className="display-hero text-white mb-5" style={{ fontFamily: "var(--font-sora)" }}>
            From Business Problem to <span className="text-gradient">Working AI Solution.</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Our structured delivery approach moves from an agreed business challenge to a practical,
            deployed AI solution through five clear stages. Scope is confirmed during discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link href="/get-started/book-call" className="btn-primary">Discuss Your Project <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/150-hour-delivery/faqs" className="btn-secondary">FAQs</Link>
          </div>
          {/* 150 badge */}
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--blue)" }}>
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-black text-white" style={{ fontFamily: "var(--font-sora)" }}>150 Hours</div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>Structured delivery sprint</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="label mb-5 inline-flex">Sprint Timeline</span>
            <h2 className="display-xl text-white mb-4" style={{ fontFamily: "var(--font-sora)" }}>
              Five Stages. <span className="text-gradient">One Cohesive Delivery.</span>
            </h2>
          </div>
          <div className="space-y-4">
            {stages.map(({ num, title, hours, desc, deliverables, output }) => (
              <div key={num} className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}>
                <div className="grid lg:grid-cols-3">
                  {/* Stage header */}
                  <div className="p-6 flex flex-col gap-3" style={{ background: "var(--blue-glass)", borderRight: "1px solid var(--border-blue)" }}>
                    <div className="flex items-center gap-3">
                      <div className="step-circle">{num}</div>
                      <h3 className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-sora)" }}>{title}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs" style={{ color: "#8FE3FF" }}>
                      <Clock className="w-3.5 h-3.5" /> {hours}
                    </div>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                  </div>
                  {/* Deliverables */}
                  <div className="p-6" style={{ borderRight: "1px solid var(--border)" }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Deliverables</p>
                    <ul className="space-y-2">
                      {deliverables.map(d => (
                        <li key={d} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                          <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--blue)" }} /> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Output */}
                  <div className="p-6 flex items-center">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>Stage Output</p>
                      <p className="text-sm font-semibold text-white">{output}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope note */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="rounded-2xl p-8 mb-8" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "var(--font-sora)" }}>Important: Scope & Achievable Delivery</h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
              The scope achievable within any engagement depends on discovery outcomes, system integrations, data readiness, testing complexity, and deployment requirements. We confirm realistic, agreed scope during the discovery workshop — before any development begins.
            </p>
            <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Some projects will require more than 150 hours depending on scope, integration complexity, and business requirements. We will identify this upfront and agree the appropriate engagement model before proceeding.
            </p>
          </div>
          <div className="text-center">
            <Link href="/get-started/book-call" className="btn-primary">
              Start With a Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
