import Link from "next/link";
import { ArrowRight, Clock, DollarSign, Headphones, Users, FileText, BarChart2, Database, Calendar } from "lucide-react";

const problems = [
  { Icon: Clock, title: "Manual & Repetitive Work", desc: "Staff spending hours on tasks that should be automated — data entry, approvals, scheduling.", href: "/solutions/knowledge-management", num: "01" },
  { Icon: DollarSign, title: "High Operational Costs", desc: "Inefficient processes driving up overheads. AI dramatically cuts the cost of repetitive workflows.", href: "/services/ai-automation", num: "02" },
  { Icon: Headphones, title: "Slow Customer Support", desc: "Long response times and high ticket volumes damaging satisfaction and team morale.", href: "/solutions/customer-support", num: "03" },
  { Icon: Users, title: "Poor Lead Follow-up", desc: "Prospects falling through the cracks because follow-up is delayed or inconsistent.", href: "/solutions/sales-automation", num: "04" },
  { Icon: FileText, title: "Document & Email Overload", desc: "Hours lost extracting data from documents and emails that AI could process in seconds.", href: "/solutions/document-intelligence", num: "05" },
  { Icon: BarChart2, title: "Reporting Bottlenecks", desc: "Business decisions delayed because reports take days to compile from disconnected systems.", href: "/solutions/analytics", num: "06" },
  { Icon: Database, title: "Data Silos", desc: "Critical business data locked in separate systems — no unified view for decision-makers.", href: "/services/ai-integration", num: "07" },
  { Icon: Calendar, title: "Approval Delays", desc: "Slow internal approval workflows stalling projects, purchases, and daily operations.", href: "/services/ai-automation", num: "08" },
];

export default function ProblemsSection() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-base)", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}
    >
      {/* Giant faint watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          right: "-4rem",
          transform: "translateY(-50%)",
          fontSize: "clamp(8rem, 20vw, 22rem)",
          fontFamily: "var(--font-sora)",
          fontWeight: 900,
          color: "rgba(255,255,255,0.018)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
        }}
      >
        AI
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header — editorial left-right split */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-20">
          <div style={{ maxWidth: "520px" }}>
            <div className="label mb-6">Problems We Solve</div>
            <h2 className="display-xl" style={{ marginBottom: 0 }}>
              What&apos;s Slowing Your{" "}
              <span className="text-gradient">Business Down?</span>
            </h2>
          </div>
          <div style={{ maxWidth: "400px", paddingTop: "1rem" }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              We start with your operational pain points — not technology. Identify your challenge
              and see how AI transforms it.
            </p>
            <Link href="/contact" className="btn-ghost mt-5 inline-flex">
              Tell us your problem <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Borderless grid — gap as "grout" */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {problems.map(({ Icon, title, desc, href, num }) => (
            <Link
              key={title}
              href={href}
              style={{
                background: "var(--bg-base)",
                padding: "2rem 1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
              }}
              className="problem-card group"
            >
              {/* Top accent line on hover */}
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

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div className="icon-box">
                  <Icon className="w-5 h-5" style={{ color: "var(--blue)" }} />
                </div>
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

              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.7 }}>{desc}</p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--blue)",
                  marginTop: "auto",
                }}
              >
                See solution <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
