import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutions = [
  { num: "01", title: "Customer Support AI", category: "CX", desc: "24/7 intelligent support handling queries, routing tickets, and reducing resolution times.", href: "/solutions/customer-support" },
  { num: "02", title: "Sales Automation", category: "Revenue", desc: "Automate lead qualification, follow-ups, and CRM updates so your team focuses on closing.", href: "/solutions/sales-automation" },
  { num: "03", title: "Document Intelligence", category: "Process", desc: "Automatically extract, classify, and route data from contracts, invoices, and documents.", href: "/solutions/document-intelligence" },
  { num: "04", title: "Internal AI Assistant", category: "Productivity", desc: "An AI assistant trained on your company knowledge — answering staff questions instantly.", href: "/solutions/internal-assistant" },
  { num: "05", title: "AI Knowledge Base", category: "Knowledge", desc: "Centralise your company knowledge and make it instantly searchable for staff and AI systems.", href: "/solutions/knowledge-management" },
  { num: "06", title: "Executive Dashboards", category: "Intelligence", desc: "Real-time operational insight across departments — powered by AI, updated automatically.", href: "/solutions/analytics" },
  { num: "07", title: "AI CRM", category: "CRM", desc: "AI-enhanced CRM with automated contact management, activity tracking, and recommendations.", href: "/solutions/ai-crm" },
  { num: "08", title: "Enterprise AI Platform", category: "Enterprise", desc: "A unified AI layer connecting all business functions with intelligent automation at scale.", href: "/solutions/enterprise" },
];

export default function SolutionsSection() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-base)", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}
    >
      {/* Glow orb */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          right: "-15%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(16,0,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Editorial header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-20">
          <div style={{ maxWidth: "540px" }}>
            <div className="label mb-6">AI Solutions</div>
            <h2 className="display-xl" style={{ marginBottom: 0 }}>
              Outcome-Focused{" "}
              <span className="text-gradient">Solutions.</span>
            </h2>
          </div>
          <div style={{ maxWidth: "400px", paddingTop: "1rem" }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Each solution is designed around a specific business outcome — not a technology.
              We build and configure the AI around your actual needs.
            </p>
            <Link href="/solutions" className="btn-ghost mt-5 inline-flex">
              All solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4-col grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {solutions.map(({ num, title, category, desc, href }) => (
            <Link
              key={title}
              href={href}
              style={{
                background: "var(--bg-base)",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
              }}
              className="problem-card group"
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

              {/* Category + number */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="tag-blue">{category}</span>
                <span
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 900,
                    fontSize: "0.65rem",
                    color: "var(--border-light)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {num}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.7, flex: 1 }}>
                {desc}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "var(--blue)",
                }}
              >
                Learn more <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
