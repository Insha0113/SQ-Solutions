import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHead from "./SectionHead";

/**
 * Content carried over from the previous blog section. These articles are
 * not yet published on /resources/blog (links go to the index). Post 02's
 * unsourced statistic was removed.
 */
const POSTS = [
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

/**
 * Blog — the research log: entries as ruled log lines (index, category and
 * read time, title and abstract, open marker) rather than cards.
 */
export default function ResearchLog() {
  return (
    <section className="hs log" aria-labelledby="log-heading">
      <div className="hs-inner">
        <SectionHead
          id="log-heading"
          eyebrow="Insights"
          title={
            <>
              Thinking on <span className="lab-accent">AI in Business.</span>
            </>
          }
        >
          <p className="hs-lede">
            Practical perspectives on AI strategy, automation, and digital transformation — written for business leaders
            making real technology decisions.
          </p>
          <Link href="/resources/blog" className="lab-link hs-cta">
            All articles <ArrowRight className="w-4 h-4 inline" aria-hidden="true" />
          </Link>
        </SectionHead>

        <ol className="log__list">
          {POSTS.map(({ num, category, title, desc, readTime, href }) => (
            <li key={num}>
              <Link href={href} className="log__entry">
                <span className="log__num" aria-hidden="true">
                  {num}
                </span>
                <span className="log__meta">
                  <span className="log__cat">{category}</span>
                  <span className="log__time">{readTime}</span>
                </span>
                <div className="log__body">
                  <h3 className="log__title">{title}</h3>
                  <p className="log__desc">{desc}</p>
                </div>
                <span className="log__open">
                  Read <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
