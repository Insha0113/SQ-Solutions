import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — AI Sprint, Custom & Enterprise Engagements",
  description: "Transparent engagement models for AI projects — from structured 150-hour sprints to custom enterprise programmes.",
};

const plans = [
  {
    name: "AI Sprint",
    sub: "Structured Delivery",
    price: "Discuss Requirements",
    desc: "Our core engagement model. A structured, focused sprint from discovery to live solution.",
    features: ["Discovery & requirements workshop", "AI solution design & architecture", "Development within agreed scope", "Testing, deployment & go-live", "Team training & documentation", "30-day post-launch support period"],
    featured: false,
    cta: "Discuss Your Sprint",
    href: "/get-started/book-call",
  },
  {
    name: "Custom Engagement",
    sub: "Multi-Phase Delivery",
    price: "Request a Proposal",
    desc: "For businesses with complex, multi-phase AI transformation requirements across multiple areas.",
    features: ["Everything in AI Sprint", "Multiple solution areas", "Phased delivery approach", "Dedicated AI team allocation", "Regular strategy reviews", "Extended support agreement"],
    featured: true,
    cta: "Request Proposal",
    href: "/get-started/request-solution",
  },
  {
    name: "Enterprise",
    sub: "Full Programme",
    price: "Contact Sales",
    desc: "Enterprise-grade AI transformation with dedicated engineering resource and full programme management.",
    features: ["Everything in Custom Engagement", "Dedicated AI engineering team", "Enterprise security & compliance review", "Custom integration & API development", "SLA-backed support", "Quarterly business reviews"],
    featured: false,
    cta: "Contact Enterprise Sales",
    href: "/get-started/contact-sales",
  },
];

const support = [
  { name: "Essential", price: "Discuss", features: ["Email support", "Business hours", "Monthly check-in"] },
  { name: "Standard", price: "Discuss", features: ["Priority support", "Extended hours", "Weekly check-in", "Minor updates"] },
  { name: "Managed", price: "Discuss", features: ["Dedicated engineer", "24/7 monitoring", "Daily ops review", "Ongoing optimisation"] },
];

export default function PricingPage() {
  return (
    <div style={{ background: "var(--bg-base)" }}>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(37,99,235,0.1) 0%, transparent 65%)" }} />
        <div className="container relative z-10 text-center">
          <span className="label mb-6 inline-flex">Pricing</span>
          <h1 className="display-hero text-white mb-5" style={{ fontFamily: "var(--font-sora)" }}>
            Transparent, <span className="text-gradient">Value-First Pricing</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            No invented prices. No hidden fees. Our engagement models are tailored to your project scope
            — confirmed through a discovery conversation.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {plans.map(({ name, sub, price, desc, features, featured, cta, href }) => (
              <div key={name} className="relative flex flex-col rounded-2xl p-7"
                style={{
                  background: featured ? "var(--blue)" : "var(--bg-card)",
                  border: `1px solid ${featured ? "var(--blue)" : "var(--border)"}`,
                  boxShadow: featured ? "0 0 60px rgba(37,99,235,0.2)" : "none",
                }}>
                {featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 text-xs font-bold px-4 py-1.5 rounded-full"
                      style={{ background: "var(--bg-base)", color: "var(--blue)", border: "1px solid var(--border-blue)" }}>
                      <Star className="w-3 h-3" /> Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-5">
                  <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: featured ? "rgba(255,255,255,0.15)" : "var(--blue-glass)", color: featured ? "#fff" : "#8FE3FF" }}>
                    {sub}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "var(--font-sora)" }}>{name}</h3>
                <p className="text-sm mb-4" style={{ color: featured ? "rgba(255,255,255,0.7)" : "var(--text-muted)" }}>{desc}</p>
                <div className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-sora)" }}>{price}</div>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm"
                      style={{ color: featured ? "rgba(255,255,255,0.8)" : "var(--text-secondary)" }}>
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: featured ? "#fff" : "var(--blue)" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={href}
                  className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm transition-all"
                  style={{
                    background: featured ? "#fff" : "var(--blue)",
                    color: featured ? "var(--blue)" : "#fff",
                  }}>
                  {cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Support Plans */}
          <div className="mb-14">
            <div className="text-center mb-10">
              <span className="label mb-4 inline-flex">Support Plans</span>
              <h2 className="display-lg text-white mb-3" style={{ fontFamily: "var(--font-sora)" }}>
                Ongoing <span className="text-gradient">AI Support</span>
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>Keep your AI solution performing at its best with a managed support plan.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {support.map(({ name, price, features }) => (
                <div key={name} className="card p-6">
                  <h3 className="text-white font-semibold text-lg mb-1" style={{ fontFamily: "var(--font-sora)" }}>{name}</h3>
                  <div className="text-xl font-bold mb-4" style={{ color: "var(--blue)", fontFamily: "var(--font-sora)" }}>{price}</div>
                  <ul className="space-y-2">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--blue)" }} /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="rounded-2xl p-8 text-center" style={{ background: "var(--blue-glass)", border: "1px solid var(--border-blue)" }}>
            <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "var(--font-sora)" }}>Not Sure Which Engagement Fits?</h3>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
              Book a free 30-minute discovery call. We&apos;ll understand your requirements and recommend the right approach — no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/get-started/book-call" className="btn-primary">Book Discovery Call <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/resources/faqs" className="btn-secondary">View FAQs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
