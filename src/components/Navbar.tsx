"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Zap } from "lucide-react";

const nav = [
  {
    label: "Company",
    items: [
      { label: "About Squadify", href: "/company/about" },
      { label: "Our Story", href: "/company/story" },
      { label: "Mission & Vision", href: "/company/mission" },
      { label: "Why Squadify", href: "/company/why-squadify" },
      { label: "Our AI-First Approach", href: "/company/ai-approach" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
  {
    label: "Services",
    groups: [
      {
        title: "AI Advisory",
        items: [
          { label: "AI Consulting", href: "/services/ai-consulting" },
          { label: "AI Strategy", href: "/services/ai-consulting#strategy" },
          { label: "AI Transformation", href: "/services/ai-consulting#transformation" },
        ],
      },
      {
        title: "AI Engineering",
        items: [
          { label: "AI Solution Development", href: "/services/ai-development" },
          { label: "Custom AI Software", href: "/services/custom-software" },
          { label: "MVP Development", href: "/services/custom-software#mvp" },
        ],
      },
      {
        title: "AI Automation",
        items: [
          { label: "Workflow Automation", href: "/services/ai-automation" },
          { label: "Business Process Automation", href: "/services/ai-automation#bpa" },
          { label: "Document Automation", href: "/services/ai-automation#docs" },
        ],
      },
      {
        title: "AI Applications",
        items: [
          { label: "AI Agent Development", href: "/services/ai-agents" },
          { label: "AI Chatbots", href: "/services/ai-chatbots" },
          { label: "Voice AI", href: "/services/ai-agents#voice" },
          { label: "Internal AI Assistants", href: "/services/ai-agents#internal" },
        ],
      },
      {
        title: "Data & Support",
        items: [
          { label: "Analytics & Dashboards", href: "/services/analytics" },
          { label: "AI Integration", href: "/services/ai-integration" },
          { label: "Dedicated AI Team", href: "/services/dedicated-team" },
          { label: "Maintenance & Support", href: "/services/support" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    groups: [
      {
        title: "Customer & Sales",
        items: [
          { label: "Customer Support AI", href: "/solutions/customer-support" },
          { label: "Sales Automation", href: "/solutions/sales-automation" },
          { label: "Lead Qualification", href: "/solutions/lead-qualification" },
          { label: "AI CRM", href: "/solutions/ai-crm" },
        ],
      },
      {
        title: "Operations",
        items: [
          { label: "HR Automation", href: "/solutions/hr-automation" },
          { label: "Finance Automation", href: "/solutions/finance-automation" },
          { label: "Document Intelligence", href: "/solutions/document-intelligence" },
          { label: "AI Workflow Platform", href: "/solutions/knowledge-management" },
        ],
      },
      {
        title: "Intelligence",
        items: [
          { label: "Executive Dashboards", href: "/solutions/analytics" },
          { label: "Knowledge Management", href: "/solutions/knowledge-management" },
          { label: "Internal AI Assistant", href: "/solutions/internal-assistant" },
          { label: "Voice AI", href: "/solutions/voice-ai" },
        ],
      },
      {
        title: "Enterprise",
        items: [
          { label: "Enterprise AI Platform", href: "/solutions/enterprise" },
          { label: "Multi-Agent Systems", href: "/solutions/enterprise#multi-agent" },
          { label: "AI ERP Extensions", href: "/solutions/ai-crm#erp" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Retail", href: "/industries/retail" },
      { label: "E-commerce", href: "/industries/ecommerce" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Finance", href: "/industries/finance" },
      { label: "Education", href: "/industries/education" },
      { label: "Construction", href: "/industries/construction" },
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Legal", href: "/industries/legal" },
      { label: "Startups", href: "/industries/startups" },
      { label: "SMEs", href: "/industries/smes" },
    ],
  },
  {
    label: "Our Work",
    items: [
      { label: "Case Studies", href: "/our-work" },
      { label: "Success Stories", href: "/our-work#stories" },
      { label: "Results & ROI", href: "/our-work#roi" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Blog & AI Insights", href: "/resources/blog" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Business Guides", href: "/resources/whitepapers" },
      { label: "AI Readiness Assessment", href: "/resources/ai-readiness" },
      { label: "ROI Calculator", href: "/resources/roi-calculator" },
      { label: "FAQs", href: "/resources/faqs" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on navigation (adjust state during render, not in an effect).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setOpen(null);
  }

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen ? "nav-glass" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span
              className="font-heading font-800 text-white text-lg tracking-tight"
              style={{ fontFamily: "var(--font-sora)", fontWeight: 800 }}
            >
              Squadify.
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 whitespace-nowrap" aria-label="Main navigation">
            {nav.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-[#B6B6C2] hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ) : (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleEnter(item.label)}
                  onMouseLeave={handleLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      open === item.label
                        ? "text-white bg-white/5"
                        : "text-[#B6B6C2] hover:text-white hover:bg-white/5"
                    }`}
                    aria-expanded={open === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        open === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {open === item.label && (
                    <div
                      className="absolute top-full left-0 mt-1 rounded-xl overflow-hidden shadow-2xl"
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        minWidth: item.groups ? "680px" : "220px",
                      }}
                      onMouseEnter={() => handleEnter(item.label)}
                      onMouseLeave={handleLeave}
                    >
                      {item.groups ? (
                        <div className="p-5 grid grid-cols-2 lg:grid-cols-3 gap-5" style={{ minWidth: "640px" }}>
                          {item.groups.map((group) => (
                            <div key={group.title}>
                              <p className="text-[10px] font-700 uppercase tracking-[0.15em] text-[#858591] mb-2 px-2">
                                {group.title}
                              </p>
                              {group.items.map((link) => (
                                <Link
                                  key={link.label}
                                  href={link.href}
                                  className="block px-2 py-1.5 text-sm text-[#B6B6C2] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : item.items && item.items.length > 8 ? (
                        <div className="p-3 grid grid-cols-2 gap-0.5" style={{ minWidth: "360px" }}>
                          {item.items.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="block px-3 py-2 text-sm text-[#B6B6C2] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="p-2">
                          {item.items?.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="block px-3 py-2 text-sm text-[#B6B6C2] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            )}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3 whitespace-nowrap">
            <Link href="/contact" className="btn-secondary py-2 px-4 text-sm">
              Contact
            </Link>
            <Link href="/get-started/book-call" className="btn-primary py-2 px-4 text-sm">
              Start Your AI Project
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t"
            style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
          >
            <div className="container py-4 space-y-1 max-h-[75vh] overflow-y-auto">
              {nav.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block px-3 py-2.5 text-sm font-medium text-[#B6B6C2] hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-[#B6B6C2] hover:text-white"
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="pl-4 pb-2 space-y-0.5">
                          {item.groups
                            ? item.groups.flatMap((g) => g.items).map((link) => (
                                <Link
                                  key={link.label}
                                  href={link.href}
                                  className="block px-3 py-2 text-sm text-[#858591] hover:text-white"
                                >
                                  {link.label}
                                </Link>
                              ))
                            : item.items?.map((link) => (
                                <Link
                                  key={link.label}
                                  href={link.href}
                                  className="block px-3 py-2 text-sm text-[#858591] hover:text-white"
                                >
                                  {link.label}
                                </Link>
                              ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t flex flex-col gap-2" style={{ borderColor: "var(--border)" }}>
                <Link href="/contact" className="btn-secondary justify-center text-sm py-3">
                  Contact
                </Link>
                <Link href="/get-started/book-call" className="btn-primary justify-center text-sm py-3">
                  Start Your AI Project
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

    </>
  );
}
