import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { LabPageHero } from "@/components/lab/LabPage";
import { LabCta } from "@/components/lab/LabTiles";

export const metadata: Metadata = {
  title: "Delivery FAQs",
  description: "Everything you need to know about how our 150-hour AI delivery framework works.",
};

/* Content carried over verbatim. Answer 05 ("refined this over many projects") is flagged for owner review. */
const FAQS = [
  {
    q: "What exactly is included in 150 hours?",
    a: "The 150 hours covers the full build cycle — discovery and planning, design, development, testing, and deployment. It's a structured sprint with defined deliverables at each phase. Some complex projects may require multiple 150-hour sprints.",
  },
  {
    q: "Does 150 hours mean my project will be done in under a week?",
    a: "The 150 hours refers to the active development hours, not calendar time. Depending on team size and project complexity, this typically translates to 2–6 weeks of elapsed calendar time. We work with you on the timeline during discovery.",
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
    a: "We offer ongoing support plans, with the level of support agreed with you, to help keep your solution working well as your business changes. We also offer expansion sprints to add features and capabilities as your needs grow.",
  },
  {
    q: "How does the discovery session work?",
    a: "A focused 60–90 minute workshop (virtual or in-person) where we map your business problem, explore AI opportunities, define the scope of the solution, and agree on success metrics. By the end, you'll have a clear picture of what we'll build and what to expect.",
  },
];

/** Native <details> disclosures: keyboard and screen-reader support without script. */
export default function DeliveryFaqsPage() {
  return (
    <>
      <LabPageHero eyebrow="150-Hour Delivery" title="Delivery" accent="FAQs">
        Everything you need to know about how our 150-hour AI delivery framework works.
      </LabPageHero>

      <section className="lab-section">
        <div className="container lab-narrow">
          <div className="lab-faq">
            {FAQS.map(({ q, a }, i) => (
              <details key={q} className="lab-faq__item">
                <summary className="lab-faq__q">
                  <span className="lab-faq__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="lab-faq__text">{q}</span>
                  <ChevronDown className="lab-faq__chev w-5 h-5" aria-hidden="true" />
                </summary>
                <p className="lab-faq__a">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <LabCta title="Ready to Start Your 150-Hour Sprint?" href="/contact/discovery-call" label="Book a Discovery Call">
        Book a free discovery call to see how we solve your business problem in 150 hours.
      </LabCta>
    </>
  );
}
