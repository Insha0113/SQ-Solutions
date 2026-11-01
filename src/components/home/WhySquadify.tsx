import Link from "next/link";
import { ArrowRight } from "lucide-react";

const reasons = [
  {
    num: "01",
    title: "Business-First Thinking",
    desc: "We start with your operational challenges — not a technology stack. AI is selected only when it's the right tool for the problem.",
  },
  {
    num: "02",
    title: "Practical, Cost-Conscious",
    desc: "We design around your budget and requirements. No unnecessary complexity, no bloated projects — built on standard, maintainable technology.",
  },
  {
    num: "03",
    title: "Fast, Focused Execution",
    desc: "Our structured delivery approach moves from discovery to live solution efficiently — with clear milestones and agreed scope.",
  },
  {
    num: "04",
    title: "Tailored to Your Processes",
    desc: "Solutions built around how your business actually works — integrating with your existing systems where appropriate.",
  },
  {
    num: "05",
    title: "Works with Your Stack",
    desc: "We work with your current tools, databases, and platforms rather than forcing a complete technology replacement.",
  },
  {
    num: "06",
    title: "Ongoing Optimisation",
    desc: "We provide agreed support and identify opportunities to scale or improve your AI solution as your business evolves.",
  },
];

export default function WhySquadify() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container relative" style={{ zIndex: 1 }}>
        {/* Editorial header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-20">
          <div style={{ maxWidth: "540px" }}>
            <div className="label mb-6">Why Squadify?</div>
            <h2 className="display-xl" style={{ marginBottom: 0 }}>
              You Know Your Business.{" "}
              <span className="text-gradient">We Know How to Solve It.</span>
            </h2>
          </div>
          <div style={{ maxWidth: "400px", paddingTop: "1rem" }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              We don&apos;t sell pre-built technology and fit your business around it. We start with
              your specific pain points, goals, and constraints — then identify where AI genuinely helps.
            </p>
            <Link href="/company/why-squadify" className="btn-ghost mt-5 inline-flex">
              Our approach <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Pull quote — large editorial type */}
        <div
          style={{
            borderLeft: "2px solid var(--blue)",
            paddingLeft: "2rem",
            marginBottom: "4rem",
            maxWidth: "700px",
          }}
        >
          <blockquote
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              lineHeight: 1.25,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            &ldquo;You bring the problem.
            <br />
            <span className="text-gradient">We bring the AI solution.</span>&rdquo;
          </blockquote>
        </div>

        {/* Reasons grid — borderless */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {reasons.map(({ num, title, desc }) => (
            <div
              key={num}
              style={{
                background: "var(--bg-2)",
                padding: "2rem 1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 900,
                  fontSize: "0.65rem",
                  color: "var(--blue)",
                  letterSpacing: "0.1em",
                }}
              >
                {num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                }}
              >
                {title}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.83rem", lineHeight: 1.75 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
          <Link href="/contact" className="btn-primary">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
