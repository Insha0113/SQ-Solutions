import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHead from "./SectionHead";

/** Content carried over verbatim from the previous Why Squadify section. */
const REASONS = [
  {
    num: "01",
    title: "Business-First Thinking",
    desc: "We start with your operational challenges — not a technology stack. AI is selected only when it's the right tool for the problem.",
  },
  {
    num: "02",
    title: "Practical, Cost-Conscious",
    desc: "We design around your budget and requirements. No unnecessary complexity, no bloated projects, no vendor lock-in.",
  },
  {
    num: "03",
    title: "Fast, Focused Execution",
    desc: "Our structured delivery approach moves from discovery to live solution efficiently — with clear milestones and agreed scope.",
  },
  {
    num: "04",
    title: "Tailored to Your Processes",
    desc: "Solutions built around how your business actually works — integrating with your existing systems where appropriate.",
  },
  {
    num: "05",
    title: "Works with Your Stack",
    desc: "We work with your current tools, databases, and platforms rather than forcing a complete technology replacement.",
  },
  {
    num: "06",
    title: "Ongoing Optimisation",
    desc: "We provide agreed support and identify opportunities to scale or improve your AI solution as your business evolves.",
  },
];

/**
 * Why Squadify — the lab protocol: a signal-trace pull quote, then the six
 * principles as ruled protocol lines rather than cards.
 */
export default function WhyProtocol() {
  return (
    <section className="hs why" aria-labelledby="why-heading">
      <div className="hs-inner">
        <SectionHead
          id="why-heading"
          eyebrow="Why Squadify?"
          title={
            <>
              You Know Your Business. <span className="lab-accent">We Know How to Solve It.</span>
            </>
          }
        >
          <p className="hs-lede">
            We don&apos;t sell pre-built technology and fit your business around it. We start with your specific pain
            points, goals, and constraints — then identify where AI genuinely helps.
          </p>
          <Link href="/company/why-squadify" className="lab-link hs-cta">
            Our approach <ArrowRight className="w-4 h-4 inline" aria-hidden="true" />
          </Link>
        </SectionHead>

        <figure className="why__quote">
          <svg className="why__trace" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 30 H170 L185 30 L195 8 L208 52 L220 18 L230 40 L240 30 H600" />
          </svg>
          <blockquote>
            <p>
              &ldquo;You bring the problem.
              <br />
              <span className="lab-accent">We bring the AI solution.</span>&rdquo;
            </p>
          </blockquote>
        </figure>

        <ol className="why__list">
          {REASONS.map(({ num, title, desc }) => (
            <li key={num} className="why__item">
              <span className="why__num" aria-hidden="true">
                {num}
              </span>
              <h3 className="why__item-title">{title}</h3>
              <p className="why__item-desc">{desc}</p>
            </li>
          ))}
        </ol>

        <div className="why__cta">
          <Link href="/contact" className="lab-btn">
            Start a Conversation <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
