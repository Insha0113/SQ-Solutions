import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, MessageSquare, Calendar, Users, BarChart2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Hospitality AI Solutions | Squadify Solutions",
  description: "AI solutions for hospitality businesses — AI guest concierge, dynamic pricing, reservation management, guest feedback analysis, and loyalty programme automation to increase bookings and guest satisfaction.",
};

const useCases = [
  { Icon: MessageSquare, num: "01", title: "AI Guest Concierge", desc: "An intelligent virtual concierge handles guest requests, local recommendations, room service queries, and check-in assistance around the clock. Deliver a premium guest experience without round-the-clock staffing costs." },
  { Icon: BarChart2, num: "02", title: "Dynamic Pricing Intelligence", desc: "AI models analyse occupancy trends, competitor rates, local events, and booking pace to recommend optimal room pricing in real time. Maximise revenue per available room across every night of the year." },
  { Icon: Calendar, num: "03", title: "Reservation Management AI", desc: "Intelligent systems handle booking modifications, cancellations, and upsell opportunities automatically. Reduce no-shows with personalised pre-arrival communications and offers." },
  { Icon: Star, num: "04", title: "Guest Feedback Analysis", desc: "AI aggregates and analyses reviews, surveys, and social mentions to surface actionable insights about guest experience. Identify recurring issues and track sentiment trends across properties." },
  { Icon: Users, num: "05", title: "Staff Scheduling Optimisation", desc: "Predictive models forecast occupancy and service demand to generate optimal staffing rotas. Balance labour costs with service quality during peak periods and quieter midweek slots." },
  { Icon: Zap, num: "06", title: "Loyalty Programme AI", desc: "AI personalises loyalty rewards, identifies high-value guests at risk of churning, and triggers targeted retention offers at the right moment. Increase repeat bookings and direct channel revenue." },
];

const stats = [
  { value: "30%", label: "Increase in direct bookings with AI personalisation" },
  { value: "24/7", label: "AI concierge availability" },
  { value: "25%", label: "Reduction in staff admin time" },
  { value: "40%", label: "Faster guest request resolution" },
];

export default function HospitalityPage() {
  return (
    <>
      {/* Hero */}
      <section className="section relative overflow-hidden" style={{ background: "var(--bg-base)", paddingTop: "7rem" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 60% 0%, rgba(16,0,255,0.12) 0%, transparent 60%)" }} />
        <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />
        <div className="container relative" style={{ zIndex: 1 }}>
          <div className="label mb-6">Hospitality Solutions</div>
          <h1 className="display-xl mb-6" style={{ maxWidth: "700px" }}>
            AI Solutions for Hospitality <span className="text-gradient">Businesses.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "580px", marginBottom: "2.5rem" }}>
            Hospitality businesses live and die by guest experience and operational efficiency. Squadify applies AI to guest services, pricing, reservations, and staff planning — helping hotels and venues deliver exceptional experiences while controlling costs.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" className="btn-primary">Start a Conversation <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/resources/ai-readiness" className="btn-secondary">AI Readiness Check <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "var(--border)" }}>
            {stats.map(({ value, label }) => (
              <div key={label} style={{ background: "var(--bg-card)", padding: "2rem 1.5rem" }}>
                <div style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--blue)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "0.5rem" }}>{value}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.82rem", fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section" style={{ background: "var(--bg-base)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="label mb-6">AI Use Cases</div>
          <h2 className="display-lg mb-16">Where AI Delivers Value in <span className="text-gradient">Hospitality.</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "var(--border)" }}>
            {useCases.map(({ Icon, num, title, desc }) => (
              <div key={num} style={{ background: "var(--bg-base)", padding: "2rem 1.75rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div className="icon-box"><Icon className="w-5 h-5" style={{ color: "var(--blue)" }} /></div>
                  <span style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "0.65rem", color: "var(--border-light)", letterSpacing: "0.08em" }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--blue)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#fff", marginBottom: "1.25rem", letterSpacing: "-0.025em" }}>
            Ready to Explore AI for Your Hospitality Business?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Book a discovery call and we&apos;ll identify where AI can deliver genuine value for your specific operation.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", color: "var(--blue)", padding: "0.85rem 2rem", borderRadius: "9999px", fontWeight: 800, fontSize: "0.9rem", textDecoration: "none" }}>
              Book Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", padding: "0.85rem 2rem", borderRadius: "9999px", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
