import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  TrendingUp,
  Target,
  Users,
  Wallet,
  FileText,
  Brain,
  BarChart3,
  Handshake,
  Mic,
  Bot,
  Building2,
} from "lucide-react";
import { LabPageHero } from "@/components/lab/LabPage";
import { LabTiles } from "@/components/lab/LabTiles";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Pre-built AI solutions designed for specific business outcomes. Ready to deploy, customizable to your needs, delivered in 150 hours.",
};

/*
 * Content carried over verbatim. The `note` figures (e.g. "85% query
 * resolution rate") are unsourced performance claims, flagged for owner
 * review before launch.
 */
const SOLUTIONS = [
  { title: "Customer Support AI", desc: "24/7 intelligent customer support that resolves queries instantly and learns from every interaction.", href: "/solutions/customer-support", Icon: MessageSquare, note: "85% query resolution rate" },
  { title: "Sales Automation", desc: "Automate lead qualification, follow-ups, and pipeline management so your sales team closes more deals.", href: "/solutions/sales-automation", Icon: TrendingUp, note: "3x faster lead response" },
  { title: "Lead Qualification", desc: "Intelligent lead scoring and qualification that prioritizes your best opportunities automatically.", href: "/solutions/lead-qualification", Icon: Target, note: "60% better conversion" },
  { title: "HR Automation", desc: "Streamline recruitment, onboarding, leave management, and employee queries with AI.", href: "/solutions/hr-automation", Icon: Users, note: "60% HR workload reduced" },
  { title: "Finance Automation", desc: "Automate invoice processing, expense reporting, and financial reconciliation.", href: "/solutions/finance-automation", Icon: Wallet, note: "90% processing time saved" },
  { title: "Document Intelligence", desc: "Extract, classify, and process business documents automatically with high accuracy.", href: "/solutions/document-intelligence", Icon: FileText, note: "95% extraction accuracy" },
  { title: "Knowledge Management", desc: "Build an intelligent company knowledge base that employees can query naturally.", href: "/solutions/knowledge-management", Icon: Brain, note: "70% faster information access" },
  { title: "AI Analytics Dashboard", desc: "Real-time executive insights from your business data with AI-powered predictions.", href: "/solutions/analytics", Icon: BarChart3, note: "Decision speed 10x faster" },
  { title: "AI CRM", desc: "Supercharge your CRM with AI-powered insights, automation, and customer intelligence.", href: "/solutions/ai-crm", Icon: Handshake, note: "40% revenue increase" },
  { title: "Voice AI", desc: "Natural language voice interfaces for customer support, scheduling, and operations.", href: "/solutions/voice-ai", Icon: Mic, note: "24/7 voice support" },
  { title: "Internal AI Assistant", desc: "A company-wide AI assistant that helps your team work smarter and faster.", href: "/solutions/internal-assistant", Icon: Bot, note: "3hrs saved per employee/day" },
  { title: "Enterprise AI Platform", desc: "A unified AI platform connecting all your business functions with intelligent automation.", href: "/solutions/enterprise", Icon: Building2, note: "End-to-end automation" },
];

export default function SolutionsPage() {
  return (
    <>
      <LabPageHero eyebrow="AI Solutions" title="Outcome-Focused" accent="AI Solutions">
        Pre-built AI solutions designed for specific business outcomes. Ready to deploy, customizable to your needs,
        delivered in 150 hours.
      </LabPageHero>
      <section className="lab-section">
        <div className="container">
          <div className="lab-index-cta">
            <Link href="/contact/discovery-call" className="lab-btn">
              Find Your Solution <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <LabTiles items={SOLUTIONS} cta="Explore" />
        </div>
      </section>
    </>
  );
}
