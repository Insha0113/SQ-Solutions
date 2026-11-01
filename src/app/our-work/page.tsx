import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work — Case Studies & Project Outcomes",
  description: "Illustrative examples of the business problems Squadify Solutions solves with AI. Client-approved case studies will be published as they are confirmed.",
};

const placeholders = [
  { industry: "E-commerce", label: "Customer Experience", challenge: "High cart abandonment and slow customer query response times impacting retention and revenue.", approach: "AI-powered support and personalisation tooling.", href: "/our-work" },
  { industry: "Manufacturing", label: "Operational Efficiency", challenge: "Unplanned equipment downtime causing production disruption and significant maintenance expenditure.", approach: "Predictive maintenance AI analysing sensor data.", href: "/our-work" },
  { industry: "Professional Services", label: "Document Automation", challenge: "Manual contract review consuming significant professional time on low-value processing tasks.", approach: "AI document intelligence and workflow automation.", href: "/our-work" },
  { industry: "Logistics", label: "Process Automation", challenge: "Manual data entry across multiple systems creating errors, delays, and high operational overhead.", approach: "Workflow automation and AI integration layer.", href: "/our-work" },
];

export default function OurWorkPage() {
  return (
    <div style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(37,99,235,0.1) 0%, transparent 65%)" }} />
        <div className="container relative z-10">
          <span className="label mb-6 inline-flex">Our Work</span>
          <h1 className="display-hero text-white mb-5" style={{ fontFamily: "var(--font-sora)" }}>
            Real Problems. <span className="text-gradient">Practical Solutions.</span>
          </h1>
          <p className="text-lg max-w-2xl mb-10" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            We present verified project outcomes only, and client-approved case studies will be published
            as projects are confirmed. The examples below are illustrative: they show the kinds of
            problems we solve, not specific client engagements.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
            style={{ borderTop: "1px solid var(--border)", paddingTop: "40px" }}>
            {[
              { val: "Structured", label: "Delivery approach" },
              { val: "5-stage", label: "Proven methodology" },
              { val: "Multiple", label: "Industries served" },
              { val: "Ongoing", label: "Support available" },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <div className="metric mb-1" style={{ fontSize: "clamp(20px,2.5vw,28px)" }}>{val}</div>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container">
          <span className="label mb-8 inline-flex">Case Studies</span>
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            {placeholders.map(({ industry, label, challenge, approach, href }) => (
              <div key={label} className="card p-6 flex flex-col gap-4">
                <div className="flex gap-2">
                  <span className="tag">{industry}</span>
                  <span className="tag tag-blue">{label}</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: "var(--text-muted)" }}>Challenge</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{challenge}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: "var(--text-muted)" }}>Approach</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{approach}</p>
                </div>
                <div className="rounded-lg px-3 py-2" style={{ background: "var(--bg-raised)", border: "1px solid var(--border)" }}>
                  <p className="text-xs italic" style={{ color: "var(--text-muted)" }}>Illustrative example — not a specific client project.</p>
                </div>
                <Link href={href} className="btn-ghost text-sm px-0 mt-auto" style={{ color: "var(--blue)" }}>
                  More details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
            We do not fabricate case studies, testimonials, or project outcomes. Verified work published with client approval only.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container text-center">
          <TrendingUp className="w-8 h-8 mx-auto mb-5" style={{ color: "var(--blue)" }} />
          <h2 className="display-lg text-white mb-4" style={{ fontFamily: "var(--font-sora)" }}>Ready to Be Our Next Project?</h2>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>Tell us your business problem. We&apos;ll outline a practical AI solution.</p>
          <Link href="/get-started/book-call" className="btn-primary">Start Your AI Project <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
