import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHead from "./SectionHead";

/** Content carried over verbatim from the previous industries section. */
const INDUSTRIES = [
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

/**
 * Industries — a specimen matrix: each sector is an element-style tile
 * (number, symbol, name) on a calibrated grid.
 */
export default function IndustriesMatrix() {
  return (
    <section className="hs ind" aria-labelledby="ind-heading">
      <div className="hs-inner">
        <SectionHead
          id="ind-heading"
          eyebrow="Industries We Serve"
          title={
            <>
              AI Across <span className="lab-accent">Every Sector.</span>
            </>
          }
        >
          <p className="hs-lede">
            Operational challenges share common patterns across sectors. We identify AI opportunities specific to your
            industry and build solutions tailored to your business context.
          </p>
          <Link href="/industries" className="lab-link hs-cta">
            All industries <ArrowRight className="w-4 h-4 inline" aria-hidden="true" />
          </Link>
        </SectionHead>

        <ol className="ind__matrix">
          {INDUSTRIES.map(({ name, abbr, href }, i) => (
            <li key={name}>
              <Link href={href} className="ind__tile">
                <span className="ind__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ind__symbol" aria-hidden="true">
                  {abbr}
                </span>
                <h3 className="ind__name">{name}</h3>
                <ArrowRight className="ind__arrow" size={14} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
