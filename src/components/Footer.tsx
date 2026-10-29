import Link from "next/link";
import { Zap, Mail } from "lucide-react";
import type { CSSProperties } from "react";

const footerLinks = {
  Services: [
    { label: "AI Consulting", href: "/services/ai-consulting" },
    { label: "AI Development", href: "/services/ai-development" },
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "AI Agents", href: "/services/ai-agents" },
    { label: "AI Chatbots", href: "/services/ai-chatbots" },
    { label: "Analytics & Dashboards", href: "/services/analytics" },
    { label: "Dedicated AI Team", href: "/services/dedicated-team" },
  ],
  Solutions: [
    { label: "Customer Support AI", href: "/solutions/customer-support" },
    { label: "Sales Automation", href: "/solutions/sales-automation" },
    { label: "Document Intelligence", href: "/solutions/document-intelligence" },
    { label: "HR Automation", href: "/solutions/hr-automation" },
    { label: "AI CRM", href: "/solutions/ai-crm" },
    { label: "Enterprise AI Platform", href: "/solutions/enterprise" },
    { label: "Internal AI Assistant", href: "/solutions/internal-assistant" },
  ],
  Company: [
    { label: "About Squadify", href: "/company/about" },
    { label: "Our Story", href: "/company/story" },
    { label: "Mission & Vision", href: "/company/mission" },
    { label: "Why Squadify", href: "/company/why-squadify" },
    { label: "Our Work", href: "/our-work" },
    { label: "Careers", href: "/company/careers" },
    { label: "150-Hour Delivery", href: "/150-hour-delivery" },
  ],
  Resources: [
    { label: "Blog & Insights", href: "/resources/blog" },
    { label: "Whitepapers", href: "/resources/whitepapers" },
    { label: "AI Readiness Assessment", href: "/resources/ai-readiness" },
    { label: "ROI Calculator", href: "/resources/roi-calculator" },
    { label: "FAQs", href: "/resources/faqs" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/squadify-solutions",
    color: "#0A66C2",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/squadifysolutions",
    color: "#E1306C",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/squadifysol",
    color: "#FFFFFF",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/squadifysolutions",
    color: "#1877F2",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-base)" }}>
      {/* CTA Band */}
      <div style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div className="container py-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--blue)" }}
              >
                Ready to get started?
              </p>
              <h2
                className="display-lg text-white mb-2"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Let&apos;s Solve Your Next{" "}
                <span className="text-gradient">Business Challenge.</span>
              </h2>
              <p className="text-sm max-w-lg" style={{ color: "var(--text-secondary)" }}>
                Tell us your operational challenge. We&apos;ll identify the right AI solution and
                outline a structured delivery approach — no obligation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link href="/get-started/book-call" className="btn-primary">
                Book a Discovery Call
              </Link>
              <Link href="/contact" className="btn-secondary">
                Tell Us Your Problem
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--blue)" }}
              >
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span
                className="text-white text-base"
                style={{ fontFamily: "var(--font-sora)", fontWeight: 800 }}
              >
                Squadify.
              </span>
            </Link>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              An AI-first technology company helping businesses solve real operational challenges
              with practical, cost-effective AI solutions.
            </p>

            <a
              href="mailto:hello@squadifysolutions.com"
              className="flex items-center gap-2 text-xs mb-6 hover:text-white transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              <Mail className="w-3.5 h-3.5" style={{ color: "var(--blue)" }} />
              hello@squadifysolutions.com
            </a>

            {/* Social Icons */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Follow Us
              </p>
              <div className="flex gap-2 flex-wrap">
                {socials.map(({ label, href, svg, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="social-icon-btn"
                    style={{
                      "--social-color": color,
                    } as CSSProperties}
                  >
                    {svg}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)", fontWeight: 700, letterSpacing: "0.12em" }}
              >
                {section}
              </p>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Squadify Solutions Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xs transition-colors hover:text-white"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
