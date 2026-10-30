"use client";
import Link from "next/link";
import { ArrowRight, RefreshCw, Shield, Monitor, BarChart2 } from "lucide-react";

const stages = [
  { label: "Discovery Workshop", color: "#2563EB" },
  { label: "Design", color: "#2B7BF0" },
  { label: "Build", color: "#1E93F3" },
  { label: "Deploy", color: "#0EA9F6" },
  { label: "Training", color: "#03C2FA" },
  { label: "Support", color: "#00D9FF" },
];

const capabilities = [
  { Icon: RefreshCw, label: "Data & Automation" },
  { Icon: Shield, label: "Cloud & Security" },
  { Icon: Monitor, label: "Digitalisation" },
  { Icon: BarChart2, label: "Business Analysis" },
];

// SVG donut chart — pure CSS/SVG, no library needed
function DonutChart() {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  // 6 segments, equal arcs, with small gap between
  const gap = 4;
  const total = circumference;
  const segCount = 6;
  const segLen = (total - gap * segCount) / segCount;

  const colors = ["#2563EB", "#2B7BF0", "#1E93F3", "#0EA9F6", "#03C2FA", "#00D9FF"];

  return (
    <svg width="140" height="140" viewBox="0 0 140 140" style={{ transform: "rotate(-90deg)" }}>
      {colors.map((color, i) => {
        const offset = i * (segLen + gap);
        return (
          <circle
            key={i}
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeDasharray={`${segLen} ${total - segLen}`}
            strokeDashoffset={-offset}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--bg-base)",
        paddingTop: "90px",
        paddingBottom: "0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 0%, rgba(37,99,235,0.13) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />
      {/* Blue glow left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background: "rgba(37,99,235,0.10)",
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
      />
      {/* Top gradient line */}
      <div className="gradient-line absolute top-0 left-0 right-0" />

      {/* Main content */}
      <div className="container relative z-10 flex-1 flex flex-col justify-center" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <div className="label mb-6 inline-flex">AI-Powered Business Transformation</div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 900,
                fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
                lineHeight: 1.08,
                color: "#fff",
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Transform Your Business with AI Solutions{" "}
              <span className="text-gradient">Built in 150 Hours</span>
            </h1>

            {/* Sub */}
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.15rem",
                lineHeight: 1.75,
                marginBottom: "2.25rem",
                maxWidth: "520px",
              }}
            >
              Your trusted partner in AI-powered business transformation. We turn your operational
              challenges into practical, cost-effective AI solutions — from discovery to live deployment.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/150-hour-delivery"
                className="inline-flex items-center gap-2"
                style={{
                  background: "transparent",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.6)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.25)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                See the 150-hour framework
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.7)",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.12)";
                }}
              >
                Industries we serve
              </Link>
            </div>

            {/* Trust marks */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 2rem" }}>
              {[
                "Business-first approach",
                "No off-the-shelf assumptions",
                "End-to-end delivery",
                "Ongoing support",
              ].map((t) => (
                <div
                  key={t}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--blue)",
                      display: "inline-block",
                      boxShadow: "0 0 6px var(--blue)",
                      flexShrink: 0,
                    }}
                  />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — 150hr Widget Card ── */}
          <div className="flex justify-center lg:justify-end">
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                padding: "2rem",
                width: "100%",
                maxWidth: "380px",
                boxShadow: "0 0 60px rgba(37,99,235,0.12), 0 24px 48px rgba(0,0,0,0.4)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Card glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "200px",
                  height: "200px",
                  background: "rgba(37,99,235,0.08)",
                  borderRadius: "50%",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />

              {/* Card header */}
              <div className="flex items-center justify-between mb-5" style={{ position: "relative", zIndex: 1 }}>
                <p style={{ fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>
                  One sprint, six stages
                </p>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: i === 0 ? "var(--blue)" : "var(--border-light)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Donut + stages */}
              <div className="flex items-center gap-6" style={{ position: "relative", zIndex: 1 }}>
                {/* Donut */}
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <DonutChart />
                  {/* Center text */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-sora)",
                        fontWeight: 900,
                        fontSize: "2.1rem",
                        color: "#fff",
                        lineHeight: 1,
                      }}
                    >
                      150
                    </span>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.7rem", marginTop: "2px" }}>
                      hours
                    </span>
                  </div>
                </div>

                {/* Stage list */}
                <div style={{ flex: 1 }}>
                  {stages.map(({ label, color }) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        marginBottom: "0.55rem",
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: color,
                          flexShrink: 0,
                          boxShadow: `0 0 6px ${color}`,
                        }}
                      />
                      <span style={{ color: "var(--text-secondary)", fontSize: "0.82rem", fontWeight: 500 }}>
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", lineHeight: 1.6 }}>
                  Business Problem → AI Opportunity → Solution →{" "}
                  <span style={{ color: "var(--blue)", fontWeight: 600 }}>Live in 150 Hours</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── CAPABILITY PILLS ROW ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            marginTop: "4rem",
            background: "var(--border)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
          className="hidden md:grid"
        >
          {capabilities.map(({ Icon, label }) => (
            <div
              key={label}
              style={{
                background: "var(--bg-card)",
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "var(--bg-raised)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "var(--bg-card)";
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "var(--blue-glass)",
                  border: "1px solid var(--border-blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={16} style={{ color: "var(--blue)" }} />
              </div>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Mobile capability pills */}
        <div className="flex flex-wrap gap-3 justify-center mt-10 md:hidden">
          {capabilities.map(({ Icon, label }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "0.6rem 1rem",
              }}
            >
              <Icon size={14} style={{ color: "var(--blue)" }} />
              <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.85rem" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
