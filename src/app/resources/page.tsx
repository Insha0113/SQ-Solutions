import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Calculator, FileText, HelpCircle } from "lucide-react";
import { LabPageHero } from "@/components/lab/LabPage";

export const metadata: Metadata = {
  title: "Resources",
  description: "Practical guides, case studies, and AI insights to help you make smarter business decisions.",
};

const QUICK = [
  { label: "AI Readiness Assessment", href: "/resources/ai-readiness", Icon: ClipboardCheck },
  { label: "ROI Calculator", href: "/resources/roi-calculator", Icon: Calculator },
  { label: "AI Whitepapers", href: "/resources/whitepapers", Icon: FileText },
  { label: "FAQs", href: "/resources/faqs", Icon: HelpCircle },
];

/*
 * Content carried over verbatim. Flagged for owner review: none of these
 * article routes exist yet (they 404), and post 01 describes an unverified
 * client result (40% cost saving, 90% fewer errors).
 */
const POSTS = [
  {
    title: "How AI Automation Saved a Logistics Company 40% in Operational Costs",
    category: "AI Automation",
    author: "Squadify Team",
    date: "Oct 20, 2026",
    readTime: "5 min read",
    excerpt: "Discover how we built a custom AI workflow automation system for a mid-sized logistics company that eliminated manual data entry, reduced errors by 90%, and cut operational costs by 40% — delivered in just 150 hours.",
    href: "/resources/blog/logistics-automation",
  },
  {
    title: "The 150-Hour Delivery Model: Why Speed Matters in AI Projects",
    category: "AI Insights",
    author: "Squadify Team",
    date: "Oct 15, 2026",
    readTime: "4 min read",
    excerpt: "Traditional software projects take months. We believe businesses deserve faster results. Here's why our 150-hour sprint model consistently outperforms conventional approaches.",
    href: "/resources/blog/150-hour-model",
  },
  {
    title: "5 Business Problems AI Can Solve This Week",
    category: "Business Guides",
    author: "Squadify Team",
    date: "Oct 10, 2026",
    readTime: "6 min read",
    excerpt: "You don't need a massive budget or months of planning to benefit from AI. Here are five common business problems that AI can solve quickly, practically, and cost-effectively.",
    href: "/resources/blog/five-problems-ai-solves",
  },
  {
    title: "AI vs. Traditional Software Development: What Business Owners Need to Know",
    category: "AI Insights",
    author: "Squadify Team",
    date: "Oct 5, 2026",
    readTime: "7 min read",
    excerpt: "Understanding the key differences between AI-powered solutions and traditional software, and why AI delivers faster, smarter results for business problems.",
    href: "/resources/blog/ai-vs-traditional",
  },
  {
    title: "How to Measure ROI on Your AI Investment",
    category: "Business Guides",
    author: "Squadify Team",
    date: "Sep 28, 2026",
    readTime: "5 min read",
    excerpt: "A practical guide for business owners to measure and track the return on investment from AI solutions, with real metrics and examples.",
    href: "/resources/blog/ai-roi",
  },
  {
    title: "Building an AI-Ready Organization: A Practical Checklist",
    category: "AI Readiness",
    author: "Squadify Team",
    date: "Sep 20, 2026",
    readTime: "8 min read",
    excerpt: "Before you implement AI, your organization needs to be ready. Here's a practical checklist to assess your AI readiness and prepare for successful implementation.",
    href: "/resources/blog/ai-readiness",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <LabPageHero eyebrow="Resources" title="AI Insights &" accent="Business Guides">
        Practical guides, case studies, and AI insights to help you make smarter business decisions.
      </LabPageHero>

      <section className="lab-section">
        <div className="container">
          <ul className="lab-toolbar" aria-label="Quick resources">
            {QUICK.map(({ label, href, Icon }) => (
              <li key={label}>
                <Link href={href} className="lab-toolbar__item">
                  <span className="lab-toolbar__icon" aria-hidden="true">
                    <Icon size={16} />
                  </span>
                  {label}
                  <ArrowRight className="lab-toolbar__arrow w-4 h-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="lab-index-heading">
            Latest <span className="lab-accent">Articles &amp; Guides</span>
          </h2>
          <ol className="log__list">
            {POSTS.map((p, i) => (
              <li key={p.title}>
                <Link href={p.href} className="log__entry">
                  <span className="log__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="log__meta">
                    <span className="log__cat">{p.category}</span>
                    <span className="log__time">
                      {p.author} · {p.date} · {p.readTime}
                    </span>
                  </span>
                  <div className="log__body">
                    <h3 className="log__title">{p.title}</h3>
                    <p className="log__desc">{p.excerpt}</p>
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
    </>
  );
}
