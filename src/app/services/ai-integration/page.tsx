import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Plug, Database, Cloud, RefreshCw, Shield, Zap, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Integration — Connect AI to Your Systems | Squadify Solutions",
  description: "Seamlessly integrate AI into your existing software stack. Squadify connects AI capabilities with your CRM, ERP, helpdesk, and business tools.",
};

const integrations = [
  { Icon: Database, title: "CRM Integration", desc: "Connect AI to Salesforce, HubSpot, Pipedrive. Auto-enrich leads, draft follow-ups, and predict deal outcomes." },
  { Icon: Cloud, title: "ERP & Finance Systems", desc: "Integrate AI with SAP, NetSuite, QuickBooks. Automate data entry, reconciliation, and financial reporting." },
  { Icon: Plug, title: "Helpdesk & Support Tools", desc: "Plug AI into Zendesk, Freshdesk, Intercom. Auto-classify tickets, draft responses, and resolve common issues." },
  { Icon: RefreshCw, title: "Data Synchronisation", desc: "Keep all your systems in sync. Bidirectional real-time sync between any combination of SaaS tools." },
  { Icon: Shield, title: "Secure API Layer", desc: "Production-grade API middleware with authentication, rate limiting, error handling, and comprehensive logging." },
  { Icon: Zap, title: "Webhook & Event Pipelines", desc: "Event-driven integrations that trigger AI actions in real time when things happen in your business systems." },
];

const platforms = [
  "Salesforce", "HubSpot", "Pipedrive", "Zoho CRM",
  "Zendesk", "Freshdesk", "Intercom", "Crisp",
  "Slack", "Microsoft Teams", "Notion", "Airtable",
  "QuickBooks", "Xero", "Stripe", "PayPal",
  "Shopify", "WooCommerce", "BigCommerce", "Magento",
  "Google Workspace", "Microsoft 365", "Dropbox", "Box",
];

export default function AIIntegrationPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, left: "40%", width: "700px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.3 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">AI Integration</div>
            <h1 className="display-xl mb-6">
              Connect AI to Your{" "}
              <span className="text-gradient">Entire Business Stack</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Your existing tools — CRM, ERP, helpdesk, finance software — become dramatically more
              powerful when connected to AI. Squadify builds the integration layer that makes it happen,
              securely and reliably.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Integrate AI Into My Stack
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services/ai-automation" className="btn-secondary">
                AI Automation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Types */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Integration Services</div>
            <h2 className="display-md mb-4">
              AI Integration for Every <span className="text-gradient">System</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map(({ Icon, title, desc }) => (
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

      {/* Platforms We Integrate With */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="label mb-5">Supported Platforms</div>
            <h2 className="display-md mb-4">
              We Integrate With <span className="text-gradient">100+ Platforms</span>
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>
              Don&apos;t see your tool? We build custom integrations for any system with an API.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {platforms.map((p) => (
              <span key={p} className="tag">{p}</span>
            ))}
          </div>
          <p className="text-center mt-6" style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            + any system with a REST API, webhooks, or database access
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="label mb-5">Why Proper Integration Matters</div>
              <h2 className="display-md mb-6">
                AI Without Integration Is Just{" "}
                <span className="text-gradient">a Demo</span>
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                The real value of AI comes when it&apos;s embedded in your actual workflows — reading
                from your CRM, writing to your helpdesk, triggering automations in your ERP.
                We build the integration layer that makes AI work inside your business, not alongside it.
              </p>
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Start Integration Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                "No disruption to existing workflows",
                "Works with your current tools — no migration needed",
                "Bidirectional sync and real-time event handling",
                "Enterprise-grade security and authentication",
                "Full error handling and retry logic",
                "Detailed logging for audit and debugging",
                "Scalable to millions of events per day",
                "Complete technical documentation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "var(--blue)" }} />
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="rounded-2xl p-12 text-center relative overflow-hidden" style={{ background: "var(--blue)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 60%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Plug className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Ready to Connect Your Stack?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Tell us your systems. We&apos;ll map the integration points and deliver a connected AI system in 150 hours.
              </p>
              <Link href="/get-started/book-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#fff", color: "var(--blue)" }}>
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
