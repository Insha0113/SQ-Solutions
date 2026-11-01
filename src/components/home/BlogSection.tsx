import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    num: "01",
    category: "AI Strategy",
    title: "How to Identify Your First AI Use Case Without Wasting Budget",
    desc: "Most businesses attempt AI transformation by selecting technology first. This guide explains the business-first approach to identifying where AI delivers genuine ROI.",
    readTime: "6 min read",
    href: "/resources/blog",
  },
  {
    num: "02",
    category: "Automation",
    title: "The Real Cost of Manual Data Entry (And How AI Eliminates It)",
    desc: "Manual data processing quietly consumes hours of skilled staff time every week. Here's how AI document intelligence changes that equation.",
    readTime: "5 min read",
    href: "/resources/blog",
  },
  {
    num: "03",
    category: "AI Agents",
    title: "AI Agents vs Chatbots: What's the Difference and Which Do You Need?",
    desc: "Understanding the functional difference between reactive chatbots and goal-oriented AI agents is essential before committing to any AI solution for your business.",
    readTime: "4 min read",
    href: "/resources/blog",
  },
];

export default function BlogSection() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-base)", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Editorial header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-20">
          <div style={{ maxWidth: "540px" }}>
            <div className="label mb-6">Insights</div>
            <h2 className="display-xl" style={{ marginBottom: 0 }}>
              Thinking on{" "}
              <span className="text-gradient">AI in Business.</span>
            </h2>
          </div>
          <div style={{ maxWidth: "400px", paddingTop: "1rem" }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Practical perspectives on AI strategy, automation, and digital transformation — written
              for business leaders making real technology decisions.
            </p>
            <Link href="/resources/blog" className="btn-ghost mt-5 inline-flex">
              All articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Article cards — borderless grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {posts.map(({ num, category, title, desc, readTime, href }) => (
            <Link
              key={num}
              href={href}
              style={{
                background: "var(--bg-base)",
                padding: "2.25rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
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

              {/* Meta row */}
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
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.35,
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.82rem",
                  lineHeight: 1.75,
                  flex: 1,
                }}
              >
                {desc}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "auto",
                }}
              >
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{readTime}</span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "var(--blue)",
                  }}
                >
                  Read <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
