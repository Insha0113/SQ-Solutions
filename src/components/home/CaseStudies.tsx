import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Illustrative examples, not client case studies — no fabricated names, ROI claims, or client details
const studies = [
  {
    num: "01",
    sector: "Professional Services",
    title: "Document Processing Automation",
    outcome: "Automatically extracting and routing key data from incoming documents, so staff spend far less time on manual processing.",
    tags: ["Document AI", "Automation", "Integration"],
  },
  {
    num: "02",
    sector: "Retail & E-commerce",
    title: "AI Customer Support Agent",
    outcome: "A 24/7 AI support agent handling common queries, order tracking and returns, so customers get an immediate first response.",
    tags: ["AI Chatbot", "Customer Support", "API Integration"],
  },
  {
    num: "03",
    sector: "B2B Technology",
    title: "Sales Pipeline Intelligence",
    outcome: "An AI layer on top of an existing CRM that scores leads, drafts follow-up sequences and flags stalled deals for human review.",
    tags: ["Sales AI", "CRM Integration", "Lead Scoring"],
  },
];

export default function CaseStudies() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          right: "-10%",
          width: "500px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-20">
          <div style={{ maxWidth: "540px" }}>
            <div className="label mb-6">Example Use Cases</div>
            <h2 className="display-xl" style={{ marginBottom: 0 }}>
              Real Problems.{" "}
              <span className="text-gradient">Practical AI.</span>
            </h2>
          </div>
          <div style={{ maxWidth: "400px", paddingTop: "1rem" }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Illustrative examples of the business problems we solve with AI — from document
              automation to intelligent sales pipelines.
            </p>
          </div>
        </div>

        {/* Case study cards — borderless grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            marginBottom: "2rem",
          }}
        >
          {studies.map(({ num, sector, title, outcome, tags }) => (
            <div
              key={num}
              style={{
                background: "var(--bg-2)",
                padding: "2.25rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                position: "relative",
              }}
            >
              {/* Number watermark */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1.5rem",
                  fontFamily: "var(--font-sora)",
                  fontWeight: 900,
                  fontSize: "4rem",
                  color: "rgba(255,255,255,0.03)",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {num}
              </div>

              <span className="tag-blue" style={{ width: "fit-content" }}>{sector}</span>

              <h3
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 800,
                  fontSize: "1.15rem",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  flex: 1,
                }}
              >
                {outcome}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: 99,
                      background: "var(--bg-raised)",
                      border: "1px solid var(--border-light)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          These are illustrative examples, not descriptions of specific client projects.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="/contact" className="btn-secondary">
            Discuss Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
