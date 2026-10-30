"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare, Mail, Phone, Clock, MapPin, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
                {["Response within 24 hours", "No-obligation consultation", "Transparent process"].map((i) => (
                  <div key={i} className="flex items-center gap-2 text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--blue)" }} /> {i}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 card p-8 rounded-2xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ background: "var(--blue-glass)", border: "1px solid var(--border-blue)" }}>
                    <CheckCircle className="w-7 h-7" style={{ color: "var(--blue)" }} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "var(--font-sora)" }}>Message Received</h3>
                  <p className="mb-6" style={{ color: "var(--text-secondary)" }}>We&apos;ll review your challenge and respond within 24 hours.</p>
                  <Link href="/" className="btn-primary">Back to Home <ArrowRight className="w-4 h-4" /></Link>
                </div>
              ) : (
                <>
                  <h2 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "var(--font-sora)" }}>Describe Your Challenge</h2>
                  <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>Tell us about your business problem — we&apos;ll identify where AI can help.</p>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>First Name *</label><input type="text" required placeholder="John" className="input" /></div>
                      <div><label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Last Name *</label><input type="text" required placeholder="Smith" className="input" /></div>
                    </div>
                    <div><label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Business Email *</label><input type="email" required placeholder="john@company.com" className="input" /></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Company *</label><input type="text" required placeholder="Your Company" className="input" /></div>
                      <div><label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Industry</label>
                        <select className="input">
                          <option value="">Select</option>
                          {["Manufacturing","Healthcare","Retail","Finance","Logistics","Education","Legal","Technology","Other"].map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                    </div>
                    <div><label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Describe Your Business Challenge *</label>
                      <textarea required rows={5} placeholder="Tell us what's slowing your business down, your current process, and what success looks like..." className="input resize-none" />
                    </div>
                    <div><label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Budget Range</label>
                      <select className="input">
                        <option value="">Select range</option>
                        {["Under £10,000","£10,000–£25,000","£25,000–£50,000","£50,000–£100,000","Over £100,000","Let's Discuss"].map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center py-3 text-base">
                      Send Message <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-xs" style={{ color: "var(--text-muted)" }}>No commitment · 24-hour response · Treated confidentially</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
