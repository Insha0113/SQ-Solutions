import { Brain, Cpu, Zap, Bot, LineChart, type LucideIcon } from "lucide-react";

export interface Service {
  num: string;
  Icon: LucideIcon;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  href: string;
}

/** The five capability groups (content carried over verbatim from the previous services section). */
export const SERVICES: Service[] = [
  {
    num: "01",
    Icon: Brain,
    title: "AI Advisory",
    subtitle: "Strategy & Consulting",
    desc: "We map your operations, identify AI opportunities, and deliver a concrete transformation roadmap — aligned to your budget and business goals.",
    tags: ["AI Consulting", "AI Strategy", "AI Readiness", "Transformation"],
    href: "/services/ai-consulting",
  },
  {
    num: "02",
    Icon: Cpu,
    title: "AI Engineering",
    subtitle: "Custom Development",
    desc: "Custom AI software, solution development, and MVP delivery — built around your specific business requirements, not off-the-shelf templates.",
    tags: ["AI Development", "Custom Software", "MVP", "AI Products"],
    href: "/services/ai-development",
  },
  {
    num: "03",
    Icon: Zap,
    title: "AI Automation",
    subtitle: "Workflow & Process",
    desc: "Eliminate manual work with intelligent automation — from document processing and approvals to end-to-end business process automation.",
    tags: ["Workflow Automation", "BPA", "RPA", "Document AI"],
    href: "/services/ai-automation",
  },
  {
    num: "04",
    Icon: Bot,
    title: "AI Applications",
    subtitle: "Agents & Chatbots",
    desc: "Intelligent agents, chatbots, voice AI, and internal assistants that handle real customer interactions and operational tasks autonomously.",
    tags: ["AI Agents", "Chatbots", "Voice AI", "Assistants"],
    href: "/services/ai-agents",
  },
  {
    num: "05",
    Icon: LineChart,
    title: "Data & Intelligence",
    subtitle: "Analytics & Integration",
    desc: "Business intelligence dashboards, AI integrations across your tool stack, API development, and ongoing managed AI team support.",
    tags: ["BI Dashboards", "AI Integration", "API Dev", "Dedicated Team"],
    href: "/services/analytics",
  },
];
