import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Services — Squadify Solutions",
  description: "Five capability groups covering AI advisory, engineering, automation, applications, and data & integration support.",
};

const groups = [
  { title: "AI Advisory", desc: "Strategy, readiness, and AI transformation consulting.", services: ["AI Consulting", "AI Strategy", "AI Readiness Assessment", "AI Transformation"], href: "/services/ai-consulting" },
  { title: "AI Engineering", desc: "Custom AI software, solution and product development.", services: ["AI Solution Development", "AI Product Development", "Custom AI Software", "MVP Development"], href: "/services/ai-development" },
  { title: "AI Automation", desc: "Workflow, business process, RPA, and document automation.", services: ["Workflow Automation", "Business Process Automation", "Robotic Process Automation", "Document Automation"], href: "/services/ai-automation" },
  { title: "AI Applications", desc: "Agents, chatbots, voice AI, and internal assistants.", services: ["AI Agent Development", "AI Chatbots", "Voice AI", "Internal AI Assistants"], href: "/services/ai-agents" },
  { title: "Data, Integration & Support", desc: "Dashboards, integrations, cloud deployment, and managed support.", services: ["BI Dashboards", "AI Integrations", "API Development", "Dedicated AI Team"], href: "/services/analytics" },
];

export default function ServicesPage() {
  return (
    <div style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="container relative z-10">
          <span className="label mb-6 inline-flex">Services</span>
          <h1 className="display-hero text-white mb-5" style={{ fontFamily: "var(--font-sora)" }}>
            AI Services Built Around <span className="text-gradient">Your Business</span>
          </h1>
          <p className="text-lg max-w-2xl mb-10" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Five capability groups covering the full range of AI implementation — from initial strategy
            through to development, deployment, and ongoing support.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {groups.map(({ title, desc, services, href }) => (
              <Link key={title} href={href} className="card p-6 flex flex-col gap-4 no-underline group">
                <h3 className="text-white font-semibold text-lg group-hover:text-[#4B3FFF] transition-colors"
                  style={{ fontFamily: "var(--font-sora)" }}>{title}</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{desc}</p>
                <ul className="space-y-1.5 flex-1">
                  {services.map(s => (
                    <li key={s} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--blue)" }} /> {s}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1.5 text-sm font-medium mt-auto" style={{ color: "var(--blue)" }}>
                  Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container text-center">
          <h2 className="display-lg text-white mb-4" style={{ fontFamily: "var(--font-sora)" }}>
            Not Sure Which Service You Need?
          </h2>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
            Tell us your business challenge — we&apos;ll recommend the right approach.
          </p>
          <Link href="/get-started/book-call" className="btn-primary">
            Book a Free Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
