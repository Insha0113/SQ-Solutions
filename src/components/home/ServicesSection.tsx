import Link from "next/link";
import { ArrowRight, Brain, Cpu, Zap, Bot, LineChart } from "lucide-react";

const services = [
  {
    num: "01",
    Icon: Brain,
    title: "AI Advisory",
    subtitle: "Strategy & Consulting",
    desc: "We map your operations, identify AI opportunities, and deliver a concrete transformation roadmap — aligned to your budget and business goals.",
    tags: ["AI Consulting", "AI Strategy", "AI Readiness", "Transformation"],
    href: "/services/ai-consulting",
    featured: false,
  },
  {
    num: "02",
    Icon: Cpu,
    title: "AI Engineering",
    subtitle: "Custom Development",
    desc: "Custom AI software, solution development, and MVP delivery — built around your specific business requirements, not off-the-shelf templates.",
    tags: ["AI Development", "Custom Software", "MVP", "AI Products"],
    href: "/services/ai-development",
    featured: true,
  },
  {
    num: "03",
    Icon: Zap,
    title: "AI Automation",
    subtitle: "Workflow & Process",
    desc: "Eliminate manual work with intelligent automation — from document processing and approvals to end-to-end business process automation.",
    tags: ["Workflow Automation", "BPA", "RPA", "Document AI"],
    href: "/services/ai-automation",
    featured: false,
  },
  {
    num: "04",
    Icon: Bot,
    title: "AI Applications",
    subtitle: "Agents & Chatbots",
    desc: "Intelligent agents, chatbots, voice AI, and internal assistants that handle real customer interactions and operational tasks autonomously.",
    tags: ["AI Agents", "Chatbots", "Voice AI", "Assistants"],
    href: "/services/ai-agents",
    featured: false,
  },
  {
    num: "05",
    Icon: LineChart,
    title: "Data & Intelligence",
    subtitle: "Analytics & Integration",
    desc: "Business intelligence dashboards, AI integrations across your tool stack, API development, and ongoing managed AI team support.",
    tags: ["BI Dashboards", "AI Integration", "API Dev", "Dedicated Team"],
    href: "/services/analytics",
    featured: false,
  },
];

export default function ServicesSection() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}
    >
      {/* Faint watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "-2rem",
          transform: "translateY(-50%)",
          fontSize: "clamp(8rem, 18vw, 20rem)",
          fontFamily: "var(--font-sora)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.015)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
        }}
      >
        SVC
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Editorial header — left/right split */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-20">
          <div style={{ maxWidth: "540px" }}>
            <div className="label mb-6">Our Services</div>
            <h2 className="display-xl" style={{ marginBottom: 0 }}>
              Five Capability{" "}
              <span className="text-gradient">Groups.</span>
            </h2>
          </div>
          <div style={{ maxWidth: "400px", paddingTop: "1rem" }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              We organize our work into five clear areas, each designed to solve a specific category
              of business challenge with artificial intelligence.
            </p>
            <Link href="/services" className="btn-ghost mt-5 inline-flex">
              All services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Cards — borderless grid with gap-as-grout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {services.map(({ num, Icon, title, subtitle, desc, tags, href, featured }) => (
            <Link
              key={title}
              href={href}
              style={{
                background: featured ? "var(--blue)" : "var(--bg-2)",
                padding: "2.25rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
              }}
              className="service-card group"
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: featured
                    ? "rgba(255,255,255,0.4)"
                    : "linear-gradient(90deg, var(--blue), var(--blue-bright))",
                  opacity: featured ? 1 : 0,
                  transition: "opacity 0.25s",
                }}
                className={featured ? "" : "group-hover:opacity-100"}
              />

              {/* Number + icon row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: featured ? "rgba(255,255,255,0.15)" : "var(--blue-glass)",
                    border: `1px solid ${featured ? "rgba(255,255,255,0.2)" : "var(--border-blue)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} style={{ color: featured ? "#fff" : "var(--blue)" }} />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 900,
                    fontSize: "0.65rem",
                    color: featured ? "rgba(255,255,255,0.4)" : "var(--border-light)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {num}
                </span>
              </div>

              {/* Text */}
              <div>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: featured ? "rgba(255,255,255,0.55)" : "var(--text-muted)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {subtitle}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 800,
                    fontSize: "1.2rem",
                    color: featured ? "#fff" : "var(--text-primary)",
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    color: featured ? "rgba(255,255,255,0.72)" : "var(--text-secondary)",
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                  }}
                >
                  {desc}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: 99,
                      background: featured ? "rgba(255,255,255,0.12)" : "var(--bg-raised)",
                      border: `1px solid ${featured ? "rgba(255,255,255,0.15)" : "var(--border)"}`,
                      color: featured ? "rgba(255,255,255,0.75)" : "var(--text-muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: featured ? "#fff" : "var(--blue)",
                  marginTop: "auto",
                }}
              >
                Explore <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
