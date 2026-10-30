"use client";
import Link from "next/link";
import { ArrowRight, Calculator, TrendingUp, DollarSign } from "lucide-react";
import { useState } from "react";

export default function ROICalculatorPage() {
  const [employees, setEmployees] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyCost, setHourlyCost] = useState(30);
  const [savingPercent, setSavingPercent] = useState(60);

  const annualHoursSaved = employees * hoursPerWeek * 52 * (savingPercent / 100);
  const annualSaving = annualHoursSaved * hourlyCost;

  const fmt = (n: number) =>
    n >= 1000 ? `£${(n / 1000).toFixed(0)}k` : `£${n.toFixed(0)}`;

  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "30%", width: "600px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-6">ROI Calculator</div>
            <h1 className="display-xl mb-6">
              Estimate Your <span className="text-gradient">AI Automation ROI</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              Illustrative estimates based on your inputs. Actual results vary by use case and implementation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Inputs */}
            <div className="card">
              <h2 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "1.5rem", fontSize: "1.1rem" }}>Your Business Details</h2>
              <div className="space-y-6">
                {[
                  { label: "Employees on this process", value: employees, setter: setEmployees, min: 1, max: 500, step: 1 },
                  { label: "Hours/week on repetitive tasks (per employee)", value: hoursPerWeek, setter: setHoursPerWeek, min: 1, max: 80, step: 1 },
                  { label: "Average hourly cost (£)", value: hourlyCost, setter: setHourlyCost, min: 10, max: 200, step: 5 },
                  { label: "Estimated time saving (%)", value: savingPercent, setter: setSavingPercent, min: 10, max: 90, step: 5 },
                ].map(({ label, value, setter, min, max, step }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-2">
                      <label style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{label}</label>
                      <span style={{ color: "var(--blue)", fontWeight: 700, fontSize: "0.95rem" }}>
                        {label.includes("£") ? `£${value}` : label.includes("%") ? `${value}%` : value}
                      </span>
                    </div>
                    <input
                      type="range" min={min} max={max} step={step} value={value}
                      onChange={(e) => setter(Number(e.target.value))}
                      style={{ width: "100%", accentColor: "var(--blue)", cursor: "pointer" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="card mb-6" style={{ border: "1px solid var(--border-blue)", background: "var(--blue-glass)" }}>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>Estimated Annual Hours Saved</div>
                <div className="metric" style={{ color: "var(--blue)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                  {Math.round(annualHoursSaved).toLocaleString()}h
                </div>
              </div>
              <div className="card lab-cta-panel mb-6">
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>Estimated Annual Saving</div>
                <div style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#fff", lineHeight: 1.1 }}>
                  {fmt(annualSaving)}
                </div>
              </div>
              <div className="rounded-xl p-4 mb-6" style={{ background: "var(--bg-raised)", border: "1px solid var(--border)" }}>
                <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.6 }}>
                  ⚠️ These are illustrative estimates for planning purposes only. Actual savings depend on your specific workflows, AI implementation quality, and adoption rate. Squadify does not guarantee specific ROI outcomes.
                </p>
              </div>
              <Link href="/get-started/book-call" className="btn-primary w-full text-center block">
                Get a Real ROI Assessment →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
