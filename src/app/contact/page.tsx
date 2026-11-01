import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare, Mail, Clock, MapPin, CheckCircle } from "lucide-react";
import LeadForm from "@/components/lead/LeadForm";
import { SERVICES } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us your business problem. We'll review your enquiry and get back to you.",
};

export default function ContactPage() {
  return (
    <div style={{ background: "var(--bg-base)" }}>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(37,99,235,0.1) 0%, transparent 65%)" }} />
        <div className="container relative z-10 text-center">
          <span className="label mb-6 inline-flex">Get in Touch</span>
          <h1 className="display-hero text-white mb-5" style={{ fontFamily: "var(--font-sora)" }}>
            Tell Us Your <span className="text-gradient">Business Problem</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            You bring the problem. We bring the AI solution. Reach out to start your journey from
            operational challenge to practical AI implementation.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="section-sm" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="space-y-4">
              <h2 className="text-white font-semibold text-lg mb-5" style={{ fontFamily: "var(--font-sora)" }}>How Can We Help?</h2>
              {[
                { Icon: Calendar, title: "Book a Discovery Call", desc: "Free 30-min call to explore your challenge", href: "/get-started/book-call", primary: true },
                { Icon: MessageSquare, title: "Free Consultation", desc: "Expert AI advice for your specific problem", href: "/get-started/consultation", primary: false },
                { Icon: ArrowRight, title: "Request a Solution", desc: "Submit a brief for a custom proposal", href: "/get-started/request-solution", primary: false },
              ].map(({ Icon, title, desc, href, primary }) => (
                <Link key={title} href={href} className="flex gap-4 p-4 rounded-xl no-underline transition-all"
                  style={{ background: "var(--bg-card)", border: `1px solid ${primary ? "var(--border-blue)" : "var(--border)"}` }}>
                  <div className="icon-box flex-shrink-0"><Icon className="w-4 h-4" style={{ color: "var(--blue)" }} /></div>
                  <div>
                    <p className="text-white font-medium text-sm mb-0.5" style={{ fontFamily: "var(--font-sora)" }}>{title}</p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{desc}</p>
                  </div>
                </Link>
              ))}

              <div className="card p-5 space-y-3 mt-2">
                <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-sora)" }}>Direct Contact</p>
                {[
                  { Icon: Mail, text: "hello@squadifysolutions.com", href: "mailto:hello@squadifysolutions.com" },
                  { Icon: Clock, text: "Mon–Fri, 9am–6pm GMT" },
                  { Icon: MapPin, text: "Global AI Solutions Partner" },
                ].map(({ Icon, text, href }) => (
                  <div key={text} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--blue)" }} />
                    {href ? <a href={href} className="hover:text-white transition-colors">{text}</a> : <span>{text}</span>}
                  </div>
                ))}
              </div>

              <div className="rounded-xl p-4" style={{ background: "var(--blue-glass)", border: "1px solid var(--border-blue)" }}>
                <p className="text-xs font-semibold mb-2" style={{ color: "#8FE3FF" }}>Our Promise</p>
                {["Every enquiry reviewed by our team", "No-obligation consultation", "Transparent process"].map((i) => (
                  <div key={i} className="flex items-center gap-2 text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--blue)" }} /> {i}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div id="enquiry" className="lg:col-span-2 card p-8 rounded-2xl scroll-mt-24">
              <h2 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "var(--font-sora)" }}>Describe Your Challenge</h2>
              <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>Tell us about your business problem — we&apos;ll identify where AI can help.</p>
              <LeadForm
                source="contact"
                variant="classic"
                className="space-y-4"
                submitLabel="Send Message"
                note={<>No commitment · We&apos;ll get back to you · Treated confidentially</>}
                successTitle="Message Received"
                successBody="We'll review your challenge and get back to you."
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label htmlFor="ct-first" className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>First Name *</label><input id="ct-first" name="firstName" type="text" required autoComplete="given-name" placeholder="John" className="input" /></div>
                  <div><label htmlFor="ct-last" className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Last Name *</label><input id="ct-last" name="lastName" type="text" required autoComplete="family-name" placeholder="Smith" className="input" /></div>
                </div>
                <div><label htmlFor="ct-email" className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Business Email *</label><input id="ct-email" name="email" type="email" required autoComplete="email" placeholder="john@company.com" className="input" /></div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label htmlFor="ct-company" className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Company *</label><input id="ct-company" name="company" type="text" required autoComplete="organization" placeholder="Your Company" className="input" /></div>
                  <div><label htmlFor="ct-industry" className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Industry</label>
                    <select id="ct-industry" name="industry" className="input">
                      <option value="">Select</option>
                      {["Manufacturing","Healthcare","Retail","Finance","Logistics","Education","Legal","Technology","Other"].map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                </div>
                <div><label htmlFor="ct-service" className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>What do you need help with?</label>
                  <select id="ct-service" name="service" className="input">
                    <option value="">Not sure yet</option>
                    {SERVICES.map((s) => <option key={s.num} value={s.title}>{s.title} — {s.subtitle}</option>)}
                  </select>
                </div>
                <div><label htmlFor="ct-message" className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Describe Your Business Challenge *</label>
                  <textarea id="ct-message" name="message" required rows={5} placeholder="Tell us what's slowing your business down, your current process, and what success looks like..." className="input resize-none" />
                </div>
                <div><label htmlFor="ct-budget" className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Budget Range</label>
                  <select id="ct-budget" name="budget" className="input">
                    <option value="">Select range</option>
                    {["Under £10,000","£10,000–£25,000","£25,000–£50,000","£50,000–£100,000","Over £100,000","Let's Discuss"].map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </LeadForm>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
