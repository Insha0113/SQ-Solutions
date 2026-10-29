"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "What exactly is included in 150 hours?",
    a: "The 150 hours covers the full build cycle — discovery and planning, design, development, testing, and deployment. It's a structured sprint with defined deliverables at each phase. Some complex projects may require multiple 150-hour sprints.",
  },
  {
    q: "Does 150 hours mean my project will be done in under a week?",
    a: "The 150 hours refers to the active development hours, not calendar time. Depending on team size and project complexity, this typically translates to 2–4 weeks of elapsed calendar time. We work with you on the timeline during discovery.",
  },
  {
    q: "What happens if my project is more complex than 150 hours?",
    a: "We scope projects carefully in the discovery phase. If a project requires more than 150 hours, we'll structure it as multiple sprints with working deliverables at the end of each sprint. You never pay for undefined work upfront.",
  },
  {
    q: "What do I need to provide before the project starts?",
    a: "Primarily: access to your team for the discovery session, any relevant business documentation, and access to existing systems we'll need to integrate with. We guide you through exactly what we need and when.",
  },
  {
    q: "Can you guarantee the 150-hour timeline?",
    a: "We design our process around delivering in 150 hours for clearly-scoped projects. The key is a thorough discovery session to define the scope precisely before we start building. We've refined this over many projects.",
  },
  {
    q: "What technology stack do you use?",
    a: "We choose the best technology for your specific needs — not a one-size-fits-all approach. Common choices include Python, Node.js, React, cloud platforms (AWS, GCP, Azure), and leading AI platforms (OpenAI, Anthropic, Google AI). We always use production-ready, maintainable technology.",
  },
  {
    q: "What happens after my AI solution goes live?",
    a: "We offer support and maintenance plans to ensure your solution stays running, secure, and optimised. We also offer expansion sprints to add features and capabilities as your needs grow.",
  },
  {
    q: "How does the discovery session work?",
    a: "A focused 60–90 minute workshop (virtual or in-person) where we map your business problem, explore AI opportunities, define the scope of the solution, and agree on success metrics. By the end, you'll have a clear picture of what we'll build and what to expect.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors gap-4"
      >
        <span className="font-semibold text-gray-900">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#1000FF] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function DeliveryFaqsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient section px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            150-Hour Delivery
          </span>
          <h1 className="text-5xl font-bold mb-4">
            Delivery <span className="text-[#1000FF]">FAQs</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to know about how our 150-hour AI delivery framework works.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gray-900 rounded-3xl p-12 text-white">
            <div className="w-16 h-16 rounded-2xl bg-[#1000FF] flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-xl">150</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your 150-Hour Sprint?</h2>
            <p className="text-gray-400 mb-8">
              Book a free discovery call to see how we solve your business problem in 150 hours.
            </p>
            <Link
              href="/contact/discovery-call"
              className="btn-primary inline-flex items-center gap-2"
            >
              Book a Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

