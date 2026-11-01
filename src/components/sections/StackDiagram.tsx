import type { CSSProperties } from "react";
import SectionHead from "./SectionHead";

/** Content carried over verbatim from the previous technology ecosystem section. */
const TECHNOLOGIES = [
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

const LAYERS = [
  { label: "Business Layer", desc: "Outcomes, KPIs, use cases" },
  { label: "AI / ML Layer", desc: "Models, agents, prompting" },
  { label: "Integration Layer", desc: "APIs, connectors, webhooks" },
  { label: "Data Layer", desc: "Databases, vector stores, pipelines" },
  { label: "Infrastructure", desc: "Cloud, containers, deployment" },
];

/** Category order for the chip board (first appearance in the list). */
const CATEGORIES = Array.from(new Set(TECHNOLOGIES.map((t) => t.category)));

/**
 * Technology Ecosystem — a stack diagram: the five architecture layers as
 * stacked slabs beside a circuit board of technology chips grouped by category.
 */
export default function StackDiagram() {
  return (
    <section className="hs stk" aria-labelledby="stk-heading">
      <div className="hs-inner">
        <SectionHead
          id="stk-heading"
          eyebrow="Technology Ecosystem"
          title={
            <>
              Built on the World&apos;s <span className="lab-accent">Leading AI Stack.</span>
            </>
          }
        >
          <p className="hs-lede">
            We work with proven AI platforms, frameworks, and infrastructure to build solutions that are reliable,
            scalable, and maintainable — not just impressive demos.
          </p>
        </SectionHead>

        <div className="stk__grid">
          <div className="stk__arch">
            <h3 className="stk__label">Solution Architecture</h3>
            <ol className="stk__layers">
              {LAYERS.map(({ label, desc }, i) => (
                <li key={label} className="stk__layer" style={{ "--i": i } as CSSProperties}>
                  <span className="stk__layer-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="stk__layer-text">
                    <span className="stk__layer-name">{label}</span>
                    <span className="stk__layer-desc">{desc}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="stk__board">
            {CATEGORIES.map((cat) => (
              <div key={cat} className="stk__group">
                <h3 className="stk__cat">{cat}</h3>
                <ul className="stk__chips">
                  {TECHNOLOGIES.filter((t) => t.category === cat).map((t) => (
                    <li key={t.name} className="stk__chip">
                      {t.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
