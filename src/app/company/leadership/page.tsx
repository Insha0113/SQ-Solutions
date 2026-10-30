import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Star, Award, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership Team",
  description: "Meet the Squadify Solutions leadership team — AI engineers, strategists, and business operators building the future of practical business AI.",
};

export default function LeadershipPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "25%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-6">Leadership</div>
            <h1 className="display-xl mb-6">
              The Team Behind <span className="text-gradient">Squadify</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              Squadify is built by a team of AI engineers, product strategists, and business operators
              who have worked on AI systems across multiple industries.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Placeholder — no fabricated profiles */}
            <div className="card text-center mb-8" style={{ border: "1px solid var(--border-blue)", background: "var(--blue-glass)" }}>
              <Users className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--blue)" }} />
              <h2 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                Team profiles coming soon
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto" }}>
                Our leadership team details will be published shortly. In the meantime, book a call to speak directly with one of our AI consultants and strategists.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { Icon: Target, title: "AI Engineering", desc: "Deep expertise in building production AI systems across LLMs, automation, and integration." },
                { Icon: Star, title: "Business Strategy", desc: "Experienced in helping SMEs and mid-market businesses identify and capture AI opportunities." },
                { Icon: Award, title: "Delivery Excellence", desc: "Track record of delivering complex technical projects on time, on budget, and to specification." },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="card text-center">
                  <div className="icon-box mx-auto mb-4"><Icon className="w-5 h-5" style={{ color: "var(--blue)" }} /></div>
                  <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>{title}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Talk to the Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
