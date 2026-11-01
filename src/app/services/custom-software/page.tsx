import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Smartphone, Globe, Layers, Zap, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development",
  description: "Custom software built for your exact requirements. Squadify delivers web applications, mobile apps, and bespoke business tools with AI baked in.",
};

const services = [
  { Icon: Globe, title: "Web Applications", desc: "Fast, scalable web apps built with modern frameworks. From internal tools to customer-facing SaaS platforms." },
  { Icon: Smartphone, title: "Mobile Applications", desc: "Native and cross-platform mobile apps for iOS and Android with AI-powered features built in." },
  { Icon: Layers, title: "Internal Business Tools", desc: "Custom-built tools that replace spreadsheet chaos with streamlined, AI-assisted workflows your team will love." },
  { Icon: Code2, title: "SaaS Platforms", desc: "Multi-tenant SaaS products with subscription management, user analytics, and AI capabilities." },
  { Icon: Zap, title: "API & Backend Systems", desc: "High-performance backend systems and APIs that power your product at any scale." },
  { Icon: Shield, title: "Legacy Modernisation", desc: "Upgrade outdated systems to modern, maintainable architecture without disrupting live operations." },
];

const stack = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "FastAPI",
  "PostgreSQL", "MongoDB", "Redis", "AWS", "GCP", "Docker", "Kubernetes",
  "React Native", "Flutter", "Tailwind CSS", "Stripe", "Auth0",
];

const features = [
  "Clean, documented, maintainable code",
  "Code ownership agreed before work begins",
  "Mobile-first, fully responsive design",
  "Automated testing and CI/CD",
  "GDPR-compliant data handling",
  "Enterprise-grade security",
  "Scalable to millions of users",
  "Post-launch support period agreed with you",
];

export default function CustomSoftwarePage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: 0, width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Custom Software</div>
            <h1 className="display-xl mb-6">
              Software Built Exactly for{" "}
              <span className="text-gradient">Your Business</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Generic tools rarely fit your specific workflows. Squadify builds custom web apps,
              mobile applications, and internal business tools — all with AI capabilities built in
              from day one, delivered in 150 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/our-work" className="btn-secondary">See Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">What We Build</div>
            <h2 className="display-md mb-4">
              Software for Every <span className="text-gradient">Business Need</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ Icon, title, desc }) => (
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

      {/* Quality + Stack */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="label mb-5">Our Standards</div>
              <h2 className="display-md mb-6">
                Built to <span className="text-gradient">Last & Scale</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Every line of code we write is production-grade. We build software with the
                maintainability, security, and scalability that your business needs as it grows.
              </p>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {features.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "var(--blue)" }} />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="label mb-5">Technology</div>
              <h2 className="display-md mb-6">
                Our <span className="text-gradient">Technology Stack</span>
              </h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {stack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="lab-cta-panel rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="lab-cta-panel__light" aria-hidden="true" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Code2 className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Have a Software Project in Mind?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Book a discovery call. We&apos;ll scope your project, provide a fixed quote, and start building.
              </p>
              <Link href="/get-started/book-call" className="lab-btn">
                Book a Discovery Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
