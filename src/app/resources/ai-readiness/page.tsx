"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { useState } from "react";

const questions = [
  { id: "data", label: "Data Quality", q: "Does your business generate and store digital data from its core processes?" },
  { id: "volume", label: "Process Volume", q: "Do you have repetitive, high-volume tasks your team performs regularly?" },
  { id: "pain", label: "Clear Pain Points", q: "Can you clearly articulate the operational challenges costing you most time or money?" },
  { id: "budget", label: "Investment Readiness", q: "Is your business prepared to invest in technology that delivers ROI over 6–12 months?" },
  { id: "leadership", label: "Leadership Buy-In", q: "Does your leadership team support exploring AI as a business strategy?" },
  { id: "integration", label: "System Integration", q: "Do you have existing digital systems (CRM, ERP, helpdesk, etc.) that AI could connect to?" },
  { id: "team", label: "Team Adaptability", q: "Is your team open to changing how they work if it makes them significantly more productive?" },
  { id: "data_access", label: "Data Accessibility", q: "Is your data stored in accessible formats (databases, spreadsheets, cloud tools) rather than paper?" },
];

export default function AIReadinessPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = Object.values(answers).filter((v) => v === "yes").length;
  const total = questions.length;
  const pct = Math.round((score / total) * 100);

  const getLevel = () => {
    if (pct >= 75) return { label: "AI-Ready", color: "var(--blue)", icon: CheckCircle, msg: "Your business has strong foundations for AI adoption. The right solution can deliver results quickly." };
    if (pct >= 50) return { label: "AI-Capable", color: "#22c55e", icon: CheckCircle, msg: "You have good AI potential with some areas to strengthen. Start with a focused pilot." };
    if (pct >= 25) return { label: "Getting Ready", color: "#f59e0b", icon: AlertCircle, msg: "Building some AI foundations first will maximise your success. We can help with that." };
    return { label: "Early Stage", color: "#ef4444", icon: XCircle, msg: "Focus on digitising core processes first. AI will be most valuable once you have structured data." };
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length >= 4) setSubmitted(true);
  };

  const level = getLevel();
  const LevelIcon = level.icon;

  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "25%", width: "600px", height: "400px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.25 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="label mb-6">AI Readiness Assessment</div>
            <h1 className="display-xl mb-6">
              Is Your Business <span className="text-gradient">Ready for AI?</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              Answer 8 quick questions to assess your AI readiness and get a personalised recommendation.
            </p>
          </div>

          {!submitted ? (
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4 mb-8">
                {questions.map(({ id, label, q }) => (
                  <div key={id} className="card">
                    <div style={{ color: "var(--blue)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{label}</div>
                    <p style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "1rem", fontSize: "0.95rem" }}>{q}</p>
                    <div className="flex gap-3">
                      {["yes", "no", "unsure"].map((val) => (
                        <button
                          key={val}
                          onClick={() => setAnswers((a) => ({ ...a, [id]: val }))}
                          className="px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all"
                          style={{
                            background: answers[id] === val ? "var(--blue)" : "var(--bg-raised)",
                            color: answers[id] === val ? "#fff" : "var(--text-secondary)",
                            border: answers[id] === val ? "1px solid var(--blue)" : "1px solid var(--border)",
                          }}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleSubmit}
                disabled={Object.keys(answers).length < 4}
                className="btn-primary w-full"
                style={{ opacity: Object.keys(answers).length < 4 ? 0.5 : 1 }}
              >
                Get My AI Readiness Score
              </button>
              <p className="text-center mt-3" style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                Answer at least 4 questions to see your result
              </p>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <div className="card mb-8" style={{ border: `1px solid ${level.color}`, background: `${level.color}15` }}>
                <LevelIcon className="w-12 h-12 mx-auto mb-4" style={{ color: level.color }} />
                <div style={{ color: level.color, fontWeight: 800, fontSize: "2rem", marginBottom: "0.5rem" }}>{level.label}</div>
                <div style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>{score}/{total} indicators positive ({pct}%)</div>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>{level.msg}</p>
              </div>
              <div className="card text-left mb-6">
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>Recommended Next Step</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  Book a free 30-minute AI readiness consultation with Squadify. We&apos;ll review your specific situation and give you a concrete, honest recommendation — no sales pressure.
                </p>
                <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <button onClick={() => { setAnswers({}); setSubmitted(false); }} style={{ color: "var(--text-muted)", fontSize: "0.85rem", background: "none", border: "none", cursor: "pointer" }}>
                Retake Assessment
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
