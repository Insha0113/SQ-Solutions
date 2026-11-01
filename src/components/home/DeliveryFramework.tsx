import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    num: "01",
    title: "Understand",
    desc: "We identify your business pain points, existing workflows, goals, and constraints through a structured discovery session.",
    deliverables: ["Pain point mapping", "Process audit", "AI opportunity matrix"],
  },
  {
    num: "02",
    title: "Design",
    desc: "We define the solution architecture, UX, integrations, and implementation plan — nothing is built until the design is agreed.",
    deliverables: ["Solution blueprint", "Integration plan", "Scope agreement"],
  },
  {
    num: "03",
    title: "Build",
    desc: "We develop the agreed functionality, integrate with your existing systems, and maintain continuous communication throughout.",
    deliverables: ["Working AI system", "Integration tests", "Progress reports"],
  },
  {
    num: "04",
    title: "Launch",
    desc: "We test, deploy, and validate the solution — then prepare your team to use it confidently from day one.",
    deliverables: ["Live deployment", "Team training", "Documentation"],
  },
  {
    num: "05",
    title: "Scale",
    desc: "We monitor performance, provide agreed support, and identify opportunities to extend and improve as your business evolves.",
    deliverables: ["Performance review", "Optimisation", "Roadmap planning"],
  },
];

export default function DeliveryFramework() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 pointer-events-none"
        style={{
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-20">
          <div style={{ maxWidth: "540px" }}>
            <div className="label mb-6">The 150-Hour Framework</div>
            <h2 className="display-xl" style={{ marginBottom: 0 }}>
              Problem to{" "}
              <span className="text-gradient">Working AI Solution.</span>
            </h2>
          </div>
          <div style={{ maxWidth: "400px", paddingTop: "1rem" }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Our structured delivery approach moves from an agreed business challenge to a practical,
              deployed AI solution. Scope is confirmed during the discovery workshop.
            </p>
            <Link href="/150-hour-delivery" className="btn-ghost mt-5 inline-flex">
              Explore the framework <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Desktop — 5-col stage grid */}
        <div className="hidden lg:grid" style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: "1px", background: "var(--border)", marginBottom: "2px" }}>
          {stages.map(({ num, title }) => (
            <div
              key={num}
              style={{
                background: "var(--bg-2)",
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 3vw, 3rem)",
                  color: "rgba(37,99,235,0.25)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  flexShrink: 0,
                }}
              >
                {num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h3>
            </div>
          ))}
        </div>
        <div className="hidden lg:grid" style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: "1px", background: "var(--border)", marginBottom: "3rem" }}>
          {stages.map(({ num, desc, deliverables }) => (
            <div
              key={num}
              style={{ background: "var(--bg-2)", padding: "1.5rem 1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.75 }}>{desc}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {deliverables.map((d) => (
                  <li key={d} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--blue)", flexShrink: 0 }} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile — vertical stack */}
        <div className="lg:hidden space-y-px mb-10" style={{ background: "var(--border)" }}>
          {stages.map(({ num, title, desc, deliverables }) => (
            <div
              key={num}
              style={{ background: "var(--bg-2)", padding: "1.75rem" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 900,
                    fontSize: "2rem",
                    color: "rgba(37,99,235,0.3)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {title}
                </h3>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.75rem" }}>{desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {deliverables.map((d) => (
                  <span key={d} className="tag-blue" style={{ fontSize: "0.7rem" }}>{d}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scope note */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--r-lg)",
            padding: "1.75rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          className="flex-col md:flex-row md:items-center md:justify-between flex"
        >
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", maxWidth: "600px", lineHeight: 1.7 }}>
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Scope note: </span>
            The deliverables achievable within 150 hours depend on discovery outcomes, system integrations,
            data readiness, and deployment complexity. All scope is agreed during the discovery workshop.
          </p>
          <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>
            Start Discovery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
