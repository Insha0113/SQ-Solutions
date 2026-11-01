import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHead from "./SectionHead";

/**
 * Illustrative examples, not client case studies (the previous section's
 * source marked them as placeholders). They are labelled as such on the
 * page; do not add client names, figures or results here.
 */
const STUDIES = [
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

/**
 * Case Studies — example files: tabbed dossiers, each tagged as an
 * illustrative example rather than a client project.
 */
export default function CaseFiles() {
  return (
    <section className="hs cf" aria-labelledby="cf-heading">
      <div className="hs-inner">
        <SectionHead
          id="cf-heading"
          eyebrow="Example Use Cases"
          title={
            <>
              Real Problems. <span className="lab-accent">Practical AI.</span>
            </>
          }
        >
          <p className="hs-lede">
            Illustrative examples of the business problems we solve with AI — from document automation to intelligent
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
                  <span className="cf__label">Illustrative</span>
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

        <p className="cf__note">
          These are illustrative examples, not descriptions of specific client projects. Client-approved case studies
          will be published as they are confirmed.
        </p>

        <div className="cf__cta">
          <Link href="/contact" className="lab-link hs-cta">
            Discuss Your Project <ArrowRight className="w-4 h-4 inline" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
