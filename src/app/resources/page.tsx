import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "How AI Automation Saved a Logistics Company 40% in Operational Costs",
    category: "AI Automation",
    author: "Squadify Team",
    date: "Oct 20, 2026",
    readTime: "5 min read",
    excerpt: "Discover how we built a custom AI workflow automation system for a mid-sized logistics company that eliminated manual data entry, reduced errors by 90%, and cut operational costs by 40% — delivered in just 150 hours.",
    href: "/resources/blog/logistics-automation",
    emoji: "🚛",
  },
  {
    title: "The 150-Hour Delivery Model: Why Speed Matters in AI Projects",
    category: "AI Insights",
    author: "Squadify Team",
    date: "Oct 15, 2026",
    readTime: "4 min read",
    excerpt: "Traditional software projects take months. We believe businesses deserve faster results. Here's why our 150-hour sprint model consistently outperforms conventional approaches.",
    href: "/resources/blog/150-hour-model",
    emoji: "⚡",
  },
  {
    title: "5 Business Problems AI Can Solve This Week",
    category: "Business Guides",
    author: "Squadify Team",
    date: "Oct 10, 2026",
    readTime: "6 min read",
    excerpt: "You don't need a massive budget or months of planning to benefit from AI. Here are five common business problems that AI can solve quickly, practically, and cost-effectively.",
    href: "/resources/blog/five-problems-ai-solves",
    emoji: "💡",
  },
  {
    title: "AI vs. Traditional Software Development: What Business Owners Need to Know",
    category: "AI Insights",
    author: "Squadify Team",
    date: "Oct 5, 2026",
    readTime: "7 min read",
    excerpt: "Understanding the key differences between AI-powered solutions and traditional software, and why AI delivers faster, smarter results for business problems.",
    href: "/resources/blog/ai-vs-traditional",
    emoji: "🤖",
  },
  {
    title: "How to Measure ROI on Your AI Investment",
    category: "Business Guides",
    author: "Squadify Team",
    date: "Sep 28, 2026",
    readTime: "5 min read",
    excerpt: "A practical guide for business owners to measure and track the return on investment from AI solutions, with real metrics and examples.",
    href: "/resources/blog/ai-roi",
    emoji: "📊",
  },
  {
    title: "Building an AI-Ready Organization: A Practical Checklist",
    category: "AI Readiness",
    author: "Squadify Team",
    date: "Sep 20, 2026",
    readTime: "8 min read",
    excerpt: "Before you implement AI, your organization needs to be ready. Here's a practical checklist to assess your AI readiness and prepare for successful implementation.",
    href: "/resources/blog/ai-readiness",
    emoji: "✅",
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-20 bg-[#080808] min-h-screen">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container-custom relative z-10 text-center">
          <span className="bg-white/20 text-white border border-white/30 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4 inline-block">Resources</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            AI Insights & <span className="text-orange-300">Business Guides</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Practical guides, case studies, and AI insights to help you make smarter business decisions.
          </p>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="py-10 bg-[#141414] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "AI Readiness Assessment", href: "/resources/ai-readiness", icon: "📊" },
              { label: "ROI Calculator", href: "/resources/roi-calculator", icon: "🧮" },
              { label: "AI Whitepapers", href: "/resources/whitepapers", icon: "📄" },
              { label: "FAQs", href: "/resources/faqs", icon: "❓" },
            ].map((r) => (
              <Link key={r.label} href={r.href}
                className="flex items-center gap-3 p-4 bg-[#141414] hover:bg-orange-50 border border-gray-100 hover:border-orange-200 rounded-xl transition-all group">
                <span className="text-2xl">{r.icon}</span>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">{r.label}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 ml-auto transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-3">Latest <span className="text-gradient">Articles & Guides</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.title} href={post.href}
                className="blog-card group">
                <div className="h-44 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  <span className="text-6xl">{post.emoji}</span>
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-gray-900 text-base mb-2 leading-snug group-hover:text-orange-500 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-[#858591]">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
