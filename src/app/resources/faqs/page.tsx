import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQs — Frequently Asked Questions | Squadify Solutions",
  description: "Answers to common questions about Squadify Solutions — our services, delivery model, pricing, process, and AI approach.",
};

const faqs = [
  {
    q: "What exactly does Squadify do?",
    a: "Squadify Solutions is an AI-first technology company that helps businesses identify, build, and implement AI solutions to solve operational challenges. We specialise in AI consulting, custom AI development, automation, chatbots, and analytics — all delivered rapidly through our 150-hour delivery framework.",
  },
  {
    q: "What is the 150-hour delivery model?",
    a: "Our 150-hour delivery model is a structured 5-stage system that takes a business problem from discovery through to a live, working AI solution. The 150 hours represents the typical engineering effort for our core deliverable — the timeline in calendar weeks depends on the complexity of your specific solution, typically 2–6 weeks.",
  },
  {
    q: "How much does an AI solution cost?",
    a: "Costs vary significantly by scope, complexity, and ongoing requirements. Our AI consulting engagements start from a fixed project fee, and our ongoing support plans are priced based on usage and support level. We always provide a clear, fixed-price quote before any work begins. Book a call and we'll scope your project with full pricing transparency.",
  },
  {
    q: "Do I need to already have a lot of data?",
    a: "Not necessarily. While more data generally enables more sophisticated AI, many of our solutions (particularly automation, integration, and chatbot projects) work with minimal historical data. During our discovery phase, we assess your data situation and recommend the right approach for your current state.",
  },
  {
    q: "Will AI replace my employees?",
    a: "Our philosophy is that AI augments people — it doesn't replace them. We automate repetitive, low-value tasks so your team can focus on creative, strategic, and relationship-driven work. The businesses that benefit most from AI are those that redeploy their team's capacity, not those that simply cut headcount.",
  },
  {
    q: "How do you handle data security and privacy?",
    a: "We take data security seriously. All solutions are built with GDPR compliance in mind. We use encrypted connections, apply role-based access controls, and never share your business data with third parties. For enterprise clients, we can work within your existing security frameworks and compliance requirements.",
  },
  {
    q: "What happens after the initial delivery?",
    a: "We offer ongoing support and maintenance plans that include performance monitoring, model retraining, bug fixes, and feature updates. All clients receive 30 days of post-launch support as standard. After that, you can continue with one of our support plans or manage the system internally — we provide full documentation either way.",
  },
  {
    q: "Do you work with specific industries?",
    a: "We work across 13+ industries including healthcare, finance, retail, manufacturing, hospitality, legal, logistics, education, real estate, construction, e-commerce, SMEs, and startups. Our AI solutions are always customised to your specific industry context, regulations, and terminology.",
  },
  {
    q: "What if I don't know exactly what AI solution I need?",
    a: "That's exactly what our AI consulting service is for. Most clients come to us knowing they have a problem, not necessarily knowing the AI solution. We help you identify where AI can create the most value, prioritise the best opportunities, and then build the right solution.",
  },
  {
    q: "How do I get started?",
    a: "Book a free 30-minute consultation call. We'll listen to your business challenges, identify the most promising AI opportunities, and explain how we'd approach building a solution. No sales pressure — just an honest conversation about what AI can do for your business.",
  },
];

export default function FAQsPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "30%", width: "600px", height: "400px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.25 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-6">FAQs</div>
            <h1 className="display-xl mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              Everything you need to know about Squadify Solutions and how we work.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="card">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--blue)" }} />
                  <div>
                    <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem", fontSize: "1rem" }}>{q}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.8 }}>{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Still have questions? We&apos;re happy to answer them directly.
            </p>
            <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
              Book a Free Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
