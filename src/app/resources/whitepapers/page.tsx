import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Download, Rss } from "lucide-react";

export const metadata: Metadata = {
  title: "Whitepapers & Guides — Squadify Solutions",
  description: "Download free AI guides, whitepapers, and frameworks from Squadify Solutions. Practical resources for business leaders exploring AI adoption.",
};

const resources = [
  {
    tag: "Whitepaper",
    title: "The Business Leader's Guide to AI Adoption in 2025",
    desc: "A practical framework for evaluating, prioritising, and implementing AI across your business operations. Covers ROI assessment, vendor selection, and change management.",
    icon: "📘",
  },
  {
    tag: "Framework",
    title: "The 5-Stage AI Implementation Framework",
    desc: "How Squadify moves from business problem to working AI solution in 150 hours. Detailed methodology with stage gates, deliverables, and decision criteria.",
    icon: "🗂️",
  },
  {
    tag: "Guide",
    title: "AI Automation Opportunities: 50 Use Cases by Industry",
    desc: "A curated list of proven AI automation use cases across 13 industries with estimated time savings, implementation complexity, and ROI ranges.",
    icon: "⚡",
  },
  {
    tag: "Checklist",
    title: "AI Readiness Checklist: Is Your Business Ready for AI?",
    desc: "35 questions across data quality, infrastructure, team capability, and leadership alignment. Score your AI readiness and identify gaps before starting.",
    icon: "✅",
  },
  {
    tag: "Guide",
    title: "Building vs Buying AI: A Decision Framework",
    desc: "When to use off-the-shelf AI tools, when to customise existing platforms, and when to build custom AI from scratch. With decision trees and cost comparisons.",
    icon: "🏗️",
  },
  {
    tag: "Report",
    title: "State of Business AI Adoption 2025",
    desc: "Analysis of AI adoption trends across SMEs and mid-market businesses — what&apos;s working, what&apos;s failing, and where the biggest opportunities remain.",
    icon: "📊",
  },
];

export default function WhitepapersPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "30%", width: "600px", height: "400px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.25 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-6">Resources</div>
            <h1 className="display-xl mb-6">
              Guides & <span className="text-gradient">Whitepapers</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              Practical frameworks and guides to help business leaders navigate AI adoption, implementation, and ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map(({ tag, title, desc, icon }) => (
              <div key={title} className="card group flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="tag-blue">{tag}</span>
                  <span style={{ fontSize: "1.5rem" }}>{icon}</span>
                </div>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem", lineHeight: 1.4, fontSize: "1rem" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7, flex: 1 }} dangerouslySetInnerHTML={{ __html: desc }} />
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--blue)" }}>
                    <Download className="w-4 h-4" />
                    Request Resource
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="rounded-2xl p-10" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <Rss className="w-8 h-8 mx-auto mb-4" style={{ color: "var(--blue)" }} />
              <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--text-primary)", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                Get New Resources First
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
                Join 500+ business leaders receiving Squadify&apos;s practical AI resources and insights.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Subscribe to Resources
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
