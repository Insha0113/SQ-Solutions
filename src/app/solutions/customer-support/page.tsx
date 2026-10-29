import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Headphones, Bot, BarChart3, Globe, Clock, TrendingDown, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Support AI — Squadify Solutions",
  description: "Resolve 80% of customer queries automatically with AI. Squadify builds intelligent customer support systems that cut costs and delight customers.",
};

const features = [
  { Icon: Bot, title: "AI-Powered Ticket Resolution", desc: "Automatically classify, prioritise, and resolve support tickets. Handles 80% of queries without human involvement." },
  { Icon: Globe, title: "Omnichannel Support", desc: "One AI brain across email, live chat, WhatsApp, social media, and your mobile app." },
  { Icon: BarChart3, title: "Real-Time Analytics", desc: "Dashboards showing ticket volume, resolution rates, CSAT scores, and AI performance in real time." },
  { Icon: Headphones, title: "Smart Escalation", desc: "AI detects complex or high-priority queries and escalates to the right human agent with full context." },
  { Icon: Clock, title: "24/7 Availability", desc: "Always-on support that never sleeps. Customers get instant responses at any hour, any day." },
  { Icon: TrendingDown, title: "Cost Reduction", desc: "Reduce per-ticket support costs by 60–80% while simultaneously improving response times and satisfaction." },
];

const stats = [
  { val: "80%", label: "Queries resolved by AI" },
  { val: "< 5s", label: "Average response time" },
  { val: "60–80%", label: "Cost reduction" },
  { val: "24/7", label: "Availability" },
];

export default function CustomerSupportPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "20%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.35 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Customer Support AI</div>
            <h1 className="display-xl mb-6">
              Resolve 80% of Support Queries{" "}
              <span className="text-gradient">Automatically</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Squadify builds AI-powered customer support systems that handle the majority of queries
              instantly — reducing costs by 60–80% while improving response times and customer satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Automate My Support
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services/ai-chatbots" className="btn-secondary">AI Chatbots</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ val, label }) => (
              <div key={label}>
                <div className="metric" style={{ color: "var(--blue)" }}>{val}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Features</div>
            <h2 className="display-md mb-4">Complete <span className="text-gradient">Support AI System</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ Icon, title, desc }) => (
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

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="label mb-5">The Business Case</div>
              <h2 className="display-md mb-6">Support That Scales Without <span className="text-gradient">Scaling Headcount</span></h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Traditional support scales linearly — more customers means more agents. AI support scales exponentially. Handle 10x the ticket volume at the same cost, with faster response times and consistent quality.
              </p>
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Get a Support AI Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { before: "4–24h response time", after: "Under 5 seconds" },
                { before: "80% of queries need human", after: "80% resolved by AI" },
                { before: "Support costs scale with volume", after: "Fixed cost regardless of volume" },
                { before: "9–5 support availability", after: "24/7/365 availability" },
              ].map(({ before, after }) => (
                <div key={before} className="p-4 rounded-xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="flex items-center justify-between gap-4">
                    <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", textDecoration: "line-through" }}>{before}</div>
                    <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: "var(--blue)" }} />
                    <div style={{ color: "var(--text-primary)", fontSize: "0.85rem", fontWeight: 600 }}>{after}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-2xl p-12 text-center relative overflow-hidden" style={{ background: "var(--blue)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 60%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Headphones className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Ready to Transform Your Support?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Book a free demo. See exactly how AI handles your support queries before you commit.
              </p>
              <Link href="/get-started/book-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#fff", color: "var(--blue)" }}>
                Book Free Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
