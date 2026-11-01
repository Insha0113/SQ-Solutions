import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Squadify Solutions team. We're building the future of business AI. See open roles and learn about life at Squadify.",
};

const values = [
  { emoji: "🚀", title: "Move Fast", desc: "We ship working solutions in 150 hours. Speed without sacrificing quality is our standard." },
  { emoji: "🎯", title: "Business First", desc: "Every technical decision is grounded in business impact. We solve real problems, not impressive-sounding ones." },
  { emoji: "🤝", title: "Transparent", desc: "With clients and with each other. We say what we think and do what we say." },
  { emoji: "🌱", title: "Always Learning", desc: "AI moves fast. We invest heavily in staying at the frontier — and sharing what we learn." },
];

const openRoles = [
  { title: "Senior AI/ML Engineer", type: "Full-time", location: "Remote (UK)", tag: "Engineering" },
  { title: "AI Automation Specialist", type: "Full-time", location: "Remote (UK)", tag: "Engineering" },
  { title: "AI Consultant", type: "Full-time", location: "Remote / Hybrid", tag: "Consulting" },
  { title: "Full-Stack Developer (AI-focused)", type: "Full-time", location: "Remote (UK)", tag: "Engineering" },
  { title: "Business Development Manager", type: "Full-time", location: "Remote / Hybrid", tag: "Sales" },
];

export default function CareersPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "30%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Careers</div>
            <h1 className="display-xl mb-6">
              Build the Future of{" "}
              <span className="text-gradient">Business AI With Us</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Squadify is a small, high-impact team of AI engineers, consultants, and builders.
              We work on genuinely hard problems with real business stakes — and we move fast.
              If that sounds like your kind of work, we want to hear from you.
            </p>
            <Link href="#roles" className="btn-primary inline-flex items-center gap-2">
              See Open Roles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Our Values</div>
            <h2 className="display-md mb-4">How We <span className="text-gradient">Work</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ emoji, title, desc }) => (
              <div key={title} className="card text-center">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{emoji}</div>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roles" className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Open Roles</div>
            <h2 className="display-md mb-4">Current <span className="text-gradient">Opportunities</span></h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {openRoles.map(({ title, type, location, tag }) => (
              <div key={title} className="card flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <span className="tag-blue mb-2 inline-block">{tag}</span>
                  <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>{title}</h3>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
                      <Clock className="w-3.5 h-3.5" />{type}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
                      <MapPin className="w-3.5 h-3.5" />{location}
                    </span>
                  </div>
                </div>
                <Link href="/contact" className="btn-secondary flex-shrink-0">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "0.9rem" }}>
              Don&apos;t see the right role? Send us a speculative application.
            </p>
            <Link href="/contact" className="btn-ghost inline-flex items-center gap-2">
              Send Speculative CV
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
