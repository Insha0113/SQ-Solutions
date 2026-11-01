import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mic, Phone, Globe, Clock, BarChart3, Zap, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice AI — AI-Powered Voice Assistants",
  description: "Build intelligent voice AI systems for customer service, booking, and support. Squadify delivers custom voice agents that handle calls 24/7.",
};

const useCases = [
  { Icon: Phone, title: "Inbound Call Handling", desc: "AI handles incoming calls — answering questions, taking bookings, routing to the right department, all without a human." },
  { Icon: Mic, title: "Outbound Calling Agents", desc: "AI makes outbound calls for appointment reminders, payment follow-ups, and customer feedback collection." },
  { Icon: Globe, title: "Multilingual Voice Support", desc: "Serve international customers in their native language with natural-sounding AI voices in 30+ languages." },
  { Icon: Clock, title: "24/7 Phone Availability", desc: "Your phone lines never go to voicemail. AI handles every call at any hour with consistent quality." },
  { Icon: BarChart3, title: "Call Analytics", desc: "Full transcription, sentiment analysis, and call outcome tracking for every conversation." },
  { Icon: Zap, title: "CRM Integration", desc: "Every call automatically logged in your CRM with transcript, summary, and action items extracted by AI." },
];

export default function VoiceAIPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "30%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Voice AI</div>
            <h1 className="display-xl mb-6">
              AI That Answers Your Phones{" "}
              <span className="text-gradient">24 Hours a Day</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Squadify builds intelligent voice AI systems that handle inbound and outbound calls with
              natural, human-like conversation — answering questions, taking bookings, following up on
              payments, and routing complex calls to the right person.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Build a Voice AI System
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
            {[{ val: "24/7", label: "Call availability" }, { val: "Multilingual", label: "Voice conversations" }, { val: "Real-time", label: "Spoken responses" }, { val: "150hrs", label: "Deployment time" }].map(({ val, label }) => (
              <div key={label}>
                <div className="metric" style={{ color: "var(--blue)", fontSize: "clamp(1.25rem, 2.4vw, 2.25rem)" }}>{val}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Use Cases</div>
            <h2 className="display-md mb-4">Voice AI for <span className="text-gradient">Every Call Type</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map(({ Icon, title, desc }) => (
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
          <div className="lab-cta-panel rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="lab-cta-panel__light" aria-hidden="true" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Mic className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Never Miss Another Call
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Book a call to hear a Voice AI demo and discuss your phone use case.
              </p>
              <Link href="/get-started/book-call" className="lab-btn">
                Book a Voice AI Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
