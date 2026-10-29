import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, MessageCircle, Headphones, ShoppingCart, Calendar, Globe, Cpu, Zap, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Chatbots — Squadify Solutions",
  description: "Build intelligent AI chatbots and virtual assistants. Squadify delivers custom chatbots that handle support, sales, and operations 24/7.",
};

const types = [
  { Icon: Headphones, title: "Customer Support Bot", desc: "Handle 80% of support queries automatically. Resolve tickets instantly, escalate complex issues to humans, and maintain full conversation history." },
  { Icon: ShoppingCart, title: "Sales & Lead Qualifier", desc: "Engage website visitors, qualify leads, answer product questions, and book calls — 24/7 without a sales rep." },
  { Icon: Calendar, title: "Booking & Scheduling Bot", desc: "Let customers book appointments, get quotes, and manage reservations through a natural conversation interface." },
  { Icon: Bot, title: "Internal Knowledge Bot", desc: "Give your team instant access to company policies, documentation, and procedures through a conversational AI assistant." },
  { Icon: Globe, title: "Multilingual Support Bot", desc: "Serve global customers in their native language. Our bots handle 50+ languages with context-aware responses." },
  { Icon: Cpu, title: "Custom Domain Expert", desc: "Purpose-built AI assistants trained on your specific domain knowledge, products, and business rules." },
];

const features = [
  "Trained on your specific business knowledge",
  "Seamless human handoff for complex queries",
  "Integration with CRM, helpdesk & ticketing systems",
  "Natural language understanding in 50+ languages",
  "Full conversation history and analytics dashboard",
  "No-code interface for non-technical content updates",
  "GDPR-compliant data handling",
  "Custom branding and personality",
];

const platforms = [
  { name: "Website Widget", icon: "🌐" },
  { name: "WhatsApp", icon: "📱" },
  { name: "Slack", icon: "💬" },
  { name: "Microsoft Teams", icon: "🔷" },
  { name: "Facebook Messenger", icon: "💙" },
  { name: "Instagram", icon: "📸" },
  { name: "SMS / Text", icon: "📨" },
  { name: "Mobile App SDK", icon: "📲" },
];

const metrics = [
  { val: "80%", label: "Queries resolved without human" },
  { val: "24/7", label: "Always-on availability" },
  { val: "< 2s", label: "Average response time" },
  { val: "150hrs", label: "Deployment time" },
];

export default function AIChatbotsPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "800px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(130px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">AI Chatbots</div>
            <h1 className="display-xl mb-6">
              Your Business Needs an Assistant{" "}
              <span className="text-gradient">That Never Sleeps</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Squadify builds AI chatbots and virtual assistants that handle customer support, qualify
              leads, and streamline operations — 24 hours a day, 7 days a week, in any language.
              Custom-built for your business in 150 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Build My Chatbot
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/solutions/customer-support" className="btn-secondary inline-flex items-center gap-2">
                Customer Support AI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map(({ val, label }) => (
              <div key={label}>
                <div className="metric" style={{ color: "var(--blue)" }}>{val}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot Types */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">What We Build</div>
            <h2 className="display-md mb-4">
              AI Assistants for Every{" "}
              <span className="text-gradient">Business Function</span>
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              From customer-facing support bots to internal knowledge assistants, we build AI
              that fits your specific use case.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map(({ Icon, title, desc }) => (
              <div key={title} className="card group">
                <div className="icon-box mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" style={{ color: "var(--blue)" }} />
                </div>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="label mb-5">Deployment Channels</div>
            <h2 className="display-md mb-4">
              Deploy Everywhere Your <span className="text-gradient">Customers Are</span>
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              One bot brain, multiple channels. Reach customers wherever they prefer to communicate.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platforms.map(({ name, icon }) => (
              <div key={name} className="card text-center p-6">
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{icon}</div>
                <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.9rem" }}>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="label mb-5">Built-In Capabilities</div>
              <h2 className="display-md mb-6">
                Everything a Production Chatbot{" "}
                <span className="text-gradient">Needs</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                We don&apos;t just build the bot — we build the entire system. From training data
                and integrations to analytics dashboards and escalation workflows.
              </p>
              <Link href="/get-started/consultation" className="btn-primary inline-flex items-center gap-2">
                Discuss Your Bot Requirements
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "var(--blue)" }} />
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="rounded-2xl p-12 text-center relative overflow-hidden" style={{ background: "var(--blue)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 60%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <MessageCircle className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Let&apos;s Build Your AI Assistant
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Book a 30-minute call to discuss your use case. We&apos;ll scope a chatbot solution and deliver it in 150 hours.
              </p>
              <Link href="/get-started/book-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#fff", color: "var(--blue)" }}>
                Book a Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
