import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Search, Cpu, Shield, Clock, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Document Intelligence AI — Squadify Solutions",
  description: "Extract, classify, and process documents automatically with AI. Invoices, contracts, forms — processed in seconds, not hours.",
};

const features = [
  { Icon: Search, title: "Intelligent Data Extraction", desc: "Extract structured data from unstructured documents — invoices, contracts, forms, receipts — with 99%+ accuracy." },
  { Icon: Cpu, title: "Document Classification", desc: "Automatically categorise and route incoming documents to the correct workflow, system, or team." },
  { Icon: FileText, title: "Contract Analysis", desc: "AI reviews contracts for key terms, obligations, risks, and renewal dates — flagging issues for human review." },
  { Icon: Shield, title: "Compliance Validation", desc: "Automatically check documents against compliance rules and flag missing information or policy violations." },
  { Icon: Clock, title: "Real-Time Processing", desc: "Process hundreds of documents per minute. From upload to structured data in under 5 seconds." },
  { Icon: BarChart3, title: "Analytics & Reporting", desc: "Track document volumes, processing times, extraction accuracy, and exception rates in a live dashboard." },
];

const formats = ["PDF", "Word (.docx)", "Excel (.xlsx)", "Images (JPG/PNG)", "Scanned Documents", "Emails", "HTML", "CSV", "XML", "JSON"];

export default function DocumentIntelligencePage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg-base)" }}>
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ position: "absolute", top: 0, right: "10%", width: "600px", height: "500px", background: "var(--blue-glow)", borderRadius: "50%", filter: "blur(120px)", opacity: 0.35 }} />
          <div className="dot-grid opacity-20" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="label mb-6">Document Intelligence</div>
            <h1 className="display-xl mb-6">
              Turn Unstructured Documents into{" "}
              <span className="text-gradient">Structured Intelligence</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Invoices, contracts, forms, and reports — processed automatically in seconds.
              Squadify&apos;s document intelligence AI extracts, classifies, and validates data
              so your team never touches another document manually.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/book-call" className="btn-primary inline-flex items-center gap-2">
                Automate Document Processing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ val: "99%+", label: "Extraction accuracy" }, { val: "< 5s", label: "Per document processing" }, { val: "100+", label: "Document types supported" }, { val: "150hrs", label: "Deployment time" }].map(({ val, label }) => (
              <div key={label}>
                <div className="metric" style={{ color: "var(--blue)" }}>{val}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="label mb-5">Features</div>
            <h2 className="display-md mb-4">Complete <span className="text-gradient">Document AI System</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ Icon, title, desc }) => (
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

      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="label mb-5">Supported Formats</div>
            <h2 className="display-md mb-4">Works With <span className="text-gradient">Any Document Format</span></h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {formats.map((f) => <span key={f} className="tag" style={{ fontSize: "0.95rem" }}>{f}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-2xl p-12 text-center relative overflow-hidden" style={{ background: "var(--blue)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 60%)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <FileText className="w-10 h-10 mx-auto mb-5" style={{ color: "rgba(255,255,255,0.8)" }} />
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#fff", marginBottom: "1rem" }}>
                Stop Processing Documents Manually
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                Book a demo. We&apos;ll show you how AI handles your specific document types.
              </p>
              <Link href="/get-started/book-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm" style={{ background: "#fff", color: "var(--blue)" }}>
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
