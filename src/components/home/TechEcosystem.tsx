const technologies = [
  { name: "OpenAI", category: "LLM" },
  { name: "Anthropic", category: "LLM" },
  { name: "Google AI", category: "LLM" },
  { name: "Gemini", category: "LLM" },
  { name: "LangChain", category: "Framework" },
  { name: "LlamaIndex", category: "Framework" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure AI", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Python", category: "Language" },
  { name: "FastAPI", category: "Backend" },
  { name: "Next.js", category: "Frontend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Pinecone", category: "Vector DB" },
  { name: "Redis", category: "Cache" },
  { name: "Docker", category: "DevOps" },
  { name: "n8n", category: "Automation" },
  { name: "Make.com", category: "Automation" },
  { name: "Zapier", category: "Automation" },
  { name: "Weaviate", category: "Vector DB" },
];

const categoryColors: Record<string, string> = {
  LLM: "#2563EB",
  Framework: "#2B7BF0",
  Cloud: "#1E93F3",
  Language: "#0EA9F6",
  Backend: "#03C2FA",
  Frontend: "#00D9FF",
  Database: "#2B7BF0",
  "Vector DB": "#1E93F3",
  Cache: "#0EA9F6",
  DevOps: "#03C2FA",
  Automation: "#00D9FF",
};

const layers = [
  { label: "Business Layer", desc: "Outcomes, KPIs, use cases" },
  { label: "AI / ML Layer", desc: "Models, agents, prompting" },
  { label: "Integration Layer", desc: "APIs, connectors, webhooks" },
  { label: "Data Layer", desc: "Databases, vector stores, pipelines" },
  { label: "Infrastructure", desc: "Cloud, containers, deployment" },
];

export default function TechEcosystem() {
  return (
    <section
      className="section"
      style={{ background: "var(--bg-base)", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-20">
          <div style={{ maxWidth: "540px" }}>
            <div className="label mb-6">Technology Ecosystem</div>
            <h2 className="display-xl" style={{ marginBottom: 0 }}>
              Built on the World&apos;s{" "}
              <span className="text-gradient">Leading AI Stack.</span>
            </h2>
          </div>
          <div style={{ maxWidth: "400px", paddingTop: "1rem" }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              We work with proven AI platforms, frameworks, and infrastructure to build solutions
              that are reliable, scalable, and maintainable — not just impressive demos.
            </p>
          </div>
        </div>

        {/* Tech pills — flowing layout */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "4rem" }}>
          {technologies.map(({ name, category }) => (
            <div
              key={name}
              className="tech-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.45rem 1rem",
                borderRadius: "9999px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                cursor: "default",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: categoryColors[category] ?? "var(--blue)",
                  flexShrink: 0,
                }}
              />
              <span
                className="tech-name"
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  color: "var(--text-primary)",
                  transition: "color 0.2s",
                }}
              >
                {name}
              </span>
              <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 600 }}>
                {category}
              </span>
            </div>
          ))}
        </div>

        {/* Architecture layers — editorial horizontal stack */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--r-xl)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "1.25rem 2rem",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Solution Architecture
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gap: "1px",
              background: "var(--border)",
            }}
            className="grid-cols-1 md:grid-cols-5 grid"
          >
            {layers.map(({ label, desc }, i) => (
              <div
                key={label}
                style={{
                  background: "var(--bg-card)",
                  padding: "1.75rem 1.5rem",
                  position: "relative",
                }}
              >
                {/* Layer number */}
                <div
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 900,
                    fontSize: "2.5rem",
                    color: `rgba(37,99,235,${0.08 + i * 0.04})`,
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: "var(--text-primary)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {label}
                </h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", lineHeight: 1.6 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
