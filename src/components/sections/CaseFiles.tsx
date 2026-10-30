import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHead from "./SectionHead";

/**
 * Content carried over verbatim from the previous case studies section,
 * whose source marked these as placeholders. Flagged for owner review
 * before launch; do not add client names, figures or results here.
 */
const STUDIES = [
  {
    num: "01",
    sector: "Professional Services",
    title: "Document Processing Automation",
    outcome: "Automated extraction and routing of key data from client documents — reducing manual processing time per document significantly.",
    tags: ["Document AI", "Automation", "Integration"],
  },
  {
    num: "02",
    sector: "Retail & E-commerce",
    title: "AI Customer Support Agent",
    outcome: "Deployed a 24/7 AI support agent handling common queries, order tracking, and returns — reducing first-response time to under 30 seconds.",
    tags: ["AI Chatbot", "Customer Support", "API Integration"],
  },
  {
    num: "03",
    sector: "B2B Technology",
    title: "Sales Pipeline Intelligence",
    outcome: "Built an AI layer on top of an existing CRM to automatically score leads, draft follow-up sequences, and flag stalled deals for human review.",
    tags: ["Sales AI", "CRM Integration", "Lead Scoring"],
  },
];

/**
 * Case Studies — confidential case files: tabbed dossiers with redaction
 * bars that echo the confidentiality note (decorative only).
 */
export default function CaseFiles() {
  return (
    <section className="hs cf" aria-labelledby="cf-heading">
      <div className="hs-inner">
        <SectionHead
          id="cf-heading"
          eyebrow="Our Work"
          title={
            <>
              AI Delivered. <span className="lab-accent">Real Outcomes.</span>
            </>
          }
        >
          <p className="hs-lede">
            A sample of the business problems we&apos;ve helped solve with AI — from document automation to intelligent
            sales pipelines.
          </p>
        </SectionHead>

        <ul className="cf__files">
          {STUDIES.map(({ num, sector, title, outcome, tags }) => (
            <li key={num} className="cf__file">
              <span className="cf__tab" aria-hidden="true">
                File {num}
              </span>
              <div className="cf__sheet">
                <div className="cf__meta">
                  <span className="cf__sector">{sector}</span>
                  <span className="cf__redact" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </div>
                <h3 className="cf__title">{title}</h3>
                <p className="cf__outcome">{outcome}</p>
                <ul className="cf__tags">
                  {tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <p className="cf__note">Client details are kept confidential. Projects are described at an outcome level only.</p>

        <div className="cf__cta">
          <Link href="/contact" className="lab-link hs-cta">
            Discuss Your Project <ArrowRight className="w-4 h-4 inline" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
