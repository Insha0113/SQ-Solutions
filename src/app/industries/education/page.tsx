import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, BarChart2, MessageSquare, FileText, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Education AI Solutions | Squadify Solutions",
  description: "AI solutions for education providers — student support chatbots, personalised learning paths, administrative automation, and early intervention alerts to improve outcomes and reduce churn.",
};

const useCases = [
  { Icon: MessageSquare, num: "01", title: "Student Support AI Chatbot", desc: "An always-on AI assistant handles student queries about courses, deadlines, enrolment, and campus services instantly. Free support staff for complex cases while improving student satisfaction." },
  { Icon: BookOpen, num: "02", title: "Personalised Learning Paths", desc: "AI analyses learning pace, assessment results, and engagement signals to recommend tailored content sequences for each student. Improve outcomes by adapting to individual needs rather than one-size-fits-all curricula." },
  { Icon: FileText, num: "03", title: "Administrative Automation", desc: "Automate enrolment processing, timetabling, fee collection reminders, and report generation with AI workflows. Reduce administrative burden on staff and improve accuracy across back-office operations." },
  { Icon: BarChart2, num: "04", title: "Attendance & Engagement Tracking", desc: "AI monitors attendance patterns and digital engagement signals to surface at-risk students early. Give tutors and pastoral teams actionable insights before students disengage entirely." },
  { Icon: Calendar, num: "05", title: "Curriculum Content Generation", desc: "Generative AI supports educators in creating lesson plans, quiz banks, and supplementary materials aligned to curriculum standards. Reduce content creation time while maintaining academic quality." },
  { Icon: Users, num: "06", title: "Early Intervention Alerts", desc: "Predictive models identify students showing early signs of academic difficulty or disengagement and trigger automated outreach to support teams. Intervene earlier and improve retention rates." },
];

const stats = [
  { value: "40%", label: "Reduction in administrative workload with AI" },
  { value: "3x", label: "Faster student query resolution" },
  { value: "60%", label: "Improvement in personalised learning outcomes" },
  { value: "25%", label: "Reduction in student churn with early intervention AI" },
];

export default function EducationPage() {
  return (
    <>
      {/* Hero */}
      <section className="section relative overflow-hidden" style={{ background: "var(--bg-base)", paddingTop: "7rem" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 60% 0%, rgba(16,0,255,0.12) 0%, transparent 60%)" }} />
        <div className="dot-grid absolute inset-0 opacity-25 pointer-events-none" />
        <div className="container relative" style={{ zIndex: 1 }}>
          <div className="label mb-6">Education Solutions</div>
          <h1 className="display-xl mb-6" style={{ maxWidth: "700px" }}>
            AI Solutions for Education <span className="text-gradient">Businesses.</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "580px", marginBottom: "2.5rem" }}>
            Education providers are under pressure to do more with less while improving student outcomes. Squadify deploys AI across student support, personalised learning, and administrative workflows — helping institutions scale impact without scaling cost.
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
          <h2 className="display-lg mb-16">Where AI Delivers Value in <span className="text-gradient">Education.</span></h2>
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
            Ready to Explore AI for Your Education Business?
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
