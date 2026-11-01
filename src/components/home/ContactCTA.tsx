import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare, Mail } from "lucide-react";

const options = [
  {
    Icon: Calendar,
    num: "01",
    title: "Book a Discovery Call",
    desc: "A free 30-minute call to understand your business challenge and outline a potential AI approach. No commitment required.",
    cta: "Book Now",
    href: "/get-started/book-call",
    featured: true,
  },
  {
    Icon: MessageSquare,
    num: "02",
    title: "Tell Us Your Problem",
    desc: "Describe your operational challenge. We'll identify where AI can help and get back to you.",
    cta: "Contact Us",
    href: "/contact",
    featured: false,
  },
  {
    Icon: Mail,
    num: "03",
    title: "Request a Proposal",
    desc: "Know what you need? Submit a brief and we'll outline a structured engagement proposal tailored to your scope.",
    cta: "Submit Brief",
    href: "/get-started/request-solution",
    featured: false,
  },
];

export default function ContactCTA() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: "var(--bg-base)", borderTop: "1px solid var(--border)" }}
    >
      {/* Full bleed background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.12) 0%, transparent 65%)",
        }}
      />
      <div className="dot-grid absolute inset-0 opacity-[0.25] pointer-events-none" />

      <div className="container relative" style={{ zIndex: 1 }}>
        {/* Large editorial headline — centered */}
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "5rem" }}>
          <div className="label mb-6 mx-auto inline-flex">Get Started</div>
          <h2
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            Let&apos;s Solve Your Next{" "}
            <span className="text-gradient">Business Challenge.</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              lineHeight: 1.75,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Tell us what&apos;s slowing your business down. We&apos;ll identify the right AI approach
            and outline a realistic path — no commitment, no obligation.
          </p>
        </div>

        {/* 3-option cards — borderless grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            marginBottom: "3rem",
          }}
        >
          {options.map(({ Icon, num, title, desc, cta, href, featured }) => (
            <div
              key={num}
              style={{
                background: featured ? "var(--blue)" : "var(--bg-base)",
                padding: "2.25rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Inner glow for featured */}
              {featured && (
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "200px",
                    height: "200px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "50%",
                    filter: "blur(60px)",
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* Icon */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: featured ? "rgba(255,255,255,0.15)" : "var(--blue-glass)",
                  border: `1px solid ${featured ? "rgba(255,255,255,0.2)" : "var(--border-blue)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={18} style={{ color: featured ? "#fff" : "var(--blue)" }} />
              </div>

              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 800,
                    fontSize: "1.15rem",
                    color: "#fff",
                    marginBottom: "0.6rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    color: featured ? "rgba(255,255,255,0.72)" : "var(--text-secondary)",
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                  }}
                >
                  {desc}
                </p>
              </div>

              <Link
                href={href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: featured ? "#fff" : "var(--blue)",
                  textDecoration: "none",
                }}
              >
                {cta} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Trust footer */}
        <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--text-muted)" }}>
          No commitment required · Every enquiry reviewed · All enquiries treated confidentially
        </p>
      </div>
    </section>
  );
}
