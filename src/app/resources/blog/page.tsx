import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Rss, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Blog & Insights — Squadify Solutions",
  description: "Practical AI insights for business leaders. Real-world guides on AI implementation, automation ROI, and digital transformation.",
};

const posts = [
  {
    category: "AI Strategy",
    title: "How to Identify the Best AI Opportunities in Your Business",
    excerpt: "Not every business process is a good candidate for AI. We walk through a prioritisation framework that helps you focus on the use cases with the highest ROI and lowest implementation risk.",
    readTime: "8 min read",
    date: "Nov 2024",
  },
  {
    category: "Automation",
    title: "The Real Cost of Manual Processes (And How AI Fixes It)",
    excerpt: "Manual data entry, email triage, report generation — these tasks cost more than you think. We break down the true cost and show which automation solutions deliver the fastest payback.",
    readTime: "6 min read",
    date: "Nov 2024",
  },
  {
    category: "AI Chatbots",
    title: "Why 80% of Customer Support Queries Can Be Resolved by AI",
    excerpt: "Most customer support queries are repetitive and well-defined. We explain how AI chatbots are trained to handle them accurately — and when you still need a human in the loop.",
    readTime: "7 min read",
    date: "Oct 2024",
  },
  {
    category: "Implementation",
    title: "From Zero to AI: How We Deliver Working Systems in 150 Hours",
    excerpt: "Our 5-stage delivery system — from discovery through to live deployment — explained in detail. Including what happens in each stage and what you get at the end.",
    readTime: "10 min read",
    date: "Oct 2024",
  },
  {
    category: "AI Strategy",
    title: "Build vs Buy: When to Use Off-the-Shelf AI vs Custom Development",
    excerpt: "ChatGPT plugins, Zapier AI, and off-the-shelf tools work well — until they don't. We break down exactly when custom AI development makes financial sense.",
    readTime: "9 min read",
    date: "Sep 2024",
  },
  {
    category: "Industry",
    title: "AI in SMEs: The Competitive Advantage Small Businesses Are Missing",
    excerpt: "AI is no longer just for enterprise. We examine how small and medium businesses are using AI to compete against larger rivals — and win.",
    readTime: "7 min read",
    date: "Sep 2024",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "25%", width: "600px", height: "400px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.25 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-6">Blog & Insights</div>
            <h1 className="display-xl mb-6">
              Practical AI Insights for{" "}
              <span className="text-gradient">Business Leaders</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              Real-world guides on AI implementation, automation ROI, and building AI systems that actually work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {posts.map(({ category, title, excerpt, readTime, date }) => (
              <article key={title} className="card flex flex-col group">
                <div className="flex items-center justify-between mb-4">
                  <span className="tag-blue">{category}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>{date}</span>
                </div>
                <h2 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem", lineHeight: 1.4, fontSize: "1rem", flex: 1 }}>{title}</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1rem" }}>{excerpt}</p>
                <div className="flex items-center justify-between">
                  <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>{readTime}</span>
                  <span style={{ color: "var(--blue)", fontSize: "0.85rem", fontWeight: 600 }}>Read →</span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <div className="rounded-2xl p-10" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <Rss className="w-8 h-8 mx-auto mb-4" style={{ color: "var(--blue)" }} />
              <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--text-primary)", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                Get AI Insights in Your Inbox
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
                Practical AI guidance for business leaders. No hype, no jargon — just what works.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
