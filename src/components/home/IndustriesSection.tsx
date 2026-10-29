import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  { name: "Manufacturing", abbr: "MFG", href: "/industries/manufacturing" },
  { name: "Healthcare", abbr: "MED", href: "/industries/healthcare" },
  { name: "Retail", abbr: "RET", href: "/industries/retail" },
  { name: "E-commerce", abbr: "ECM", href: "/industries/ecommerce" },
  { name: "Logistics", abbr: "LOG", href: "/industries/logistics" },
  { name: "Finance", abbr: "FIN", href: "/industries/finance" },
  { name: "Education", abbr: "EDU", href: "/industries/education" },
  { name: "Construction", abbr: "CON", href: "/industries/construction" },
  { name: "Hospitality", abbr: "HOS", href: "/industries/hospitality" },
  { name: "Real Estate", abbr: "RES", href: "/industries/real-estate" },
  { name: "Legal", abbr: "LAW", href: "/industries/legal" },
  { name: "Startups", abbr: "STP", href: "/industries/startups" },
  { name: "SMEs", abbr: "SME", href: "/industries/smes" },
];

export default function IndustriesSection() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-base)", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-20">
          <div style={{ maxWidth: "540px" }}>
            <div className="label mb-6">Industries We Serve</div>
            <h2 className="display-xl" style={{ marginBottom: 0 }}>
              AI Across{" "}
              <span className="text-gradient">Every Sector.</span>
            </h2>
          </div>
          <div style={{ maxWidth: "400px", paddingTop: "1rem" }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Operational challenges share common patterns across sectors. We identify AI opportunities
              specific to your industry and build solutions tailored to your business context.
            </p>
            <Link href="/industries" className="btn-ghost mt-5 inline-flex">
              All industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Borderless industry grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {industries.map(({ name, abbr, href }, i) => (
            <Link
              key={name}
              href={href}
              style={{
                background: "var(--bg-base)",
                padding: "1.75rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
              }}
              className="industry-card group"
            >
              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, var(--blue), var(--blue-bright))",
                  opacity: 0,
                  transition: "opacity 0.25s",
                }}
                className="group-hover:opacity-100"
              />

              <span
                className="industry-num"
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 900,
                  fontSize: "0.65rem",
                  color: "var(--border-light)",
                  letterSpacing: "0.12em",
                  transition: "color 0.2s",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 900,
                    fontSize: "1.4rem",
                    color: "rgba(255,255,255,0.08)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    marginBottom: "0.3rem",
                  }}
                >
                  {abbr}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {name}
                </h3>
              </div>
              <ArrowRight
                size={14}
                style={{ color: "var(--blue)", opacity: 0, transition: "opacity 0.2s", marginTop: "auto" }}
                className="group-hover:opacity-100"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
