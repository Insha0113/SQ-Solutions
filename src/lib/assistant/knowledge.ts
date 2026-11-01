import { SERVICES } from "@/components/sections/services";
import { PROBLEMS } from "@/components/sections/problems";

/**
 * The assistant's only source of truth: facts taken from this website's own
 * pages, each linked to the page it came from. Deliberately excludes the
 * figures flagged as unsourced (solution "note" percentages, the 40%/90%
 * blog claim, partner implications). Edit the pages and this file together.
 */

export interface KnowledgeLink {
  label: string;
  href: string;
}

export interface KnowledgeEntry {
  id: string;
  /** Short heading shown above the answer. */
  title: string;
  /** Phrases (weighted heavily) and words that suggest this entry. */
  keywords: string[];
  answer: string;
  links: KnowledgeLink[];
  /** Service group this entry points toward, for recommendations. */
  service?: string;
}

export const CONTACT = {
  email: "hello@squadifysolutions.com",
  hours: "Mon–Fri, 9am–6pm GMT",
};

const SOLUTIONS = [
  { title: "Customer Support AI", desc: "24/7 intelligent customer support that resolves queries instantly and learns from every interaction.", href: "/solutions/customer-support", keywords: ["customer support", "support tickets", "helpdesk", "customer service", "queries", "tickets"] },
  { title: "Sales Automation", desc: "Automate lead qualification, follow-ups, and pipeline management so your sales team closes more deals.", href: "/solutions/sales-automation", keywords: ["sales", "follow up", "follow-up", "pipeline", "deals"] },
  { title: "Lead Qualification", desc: "Intelligent lead scoring and qualification that prioritizes your best opportunities automatically.", href: "/solutions/lead-qualification", keywords: ["lead scoring", "qualify leads", "lead qualification", "prospects"] },
  { title: "HR Automation", desc: "Streamline recruitment, onboarding, leave management, and employee queries with AI.", href: "/solutions/hr-automation", keywords: ["hr", "human resources", "recruitment", "hiring", "onboarding", "leave"] },
  { title: "Finance Automation", desc: "Automate invoice processing, expense reporting, and financial reconciliation.", href: "/solutions/finance-automation", keywords: ["invoice", "invoices", "expenses", "reconciliation", "accounts", "bookkeeping", "finance"] },
  { title: "Document Intelligence", desc: "Extract, classify, and process business documents automatically with high accuracy.", href: "/solutions/document-intelligence", keywords: ["documents", "pdf", "extract", "paperwork", "forms", "contracts"] },
  { title: "Knowledge Management", desc: "Build an intelligent company knowledge base that employees can query naturally.", href: "/solutions/knowledge-management", keywords: ["knowledge base", "internal docs", "wiki", "policies", "find information"] },
  { title: "AI Analytics Dashboard", desc: "Real-time executive insights from your business data with AI-powered predictions.", href: "/solutions/analytics", keywords: ["dashboard", "reporting", "reports", "analytics", "kpi", "insights", "bi"] },
  { title: "AI CRM", desc: "Supercharge your CRM with AI-powered insights, automation, and customer intelligence.", href: "/solutions/ai-crm", keywords: ["crm", "salesforce", "hubspot", "customer data"] },
  { title: "Voice AI", desc: "Natural language voice interfaces for customer support, scheduling, and operations.", href: "/solutions/voice-ai", keywords: ["voice", "phone", "calls", "call centre", "call center", "receptionist"] },
  { title: "Internal AI Assistant", desc: "A company-wide AI assistant that helps your team work smarter and faster.", href: "/solutions/internal-assistant", keywords: ["internal assistant", "employee assistant", "copilot", "team assistant"] },
  { title: "Enterprise AI Platform", desc: "A unified AI platform connecting all your business functions with intelligent automation.", href: "/solutions/enterprise", keywords: ["enterprise", "platform", "company-wide", "all departments"] },
];

const INDUSTRIES = [
  ["Manufacturing", "Equipment downtime, quality control, supply chain inefficiencies", "/industries/manufacturing"],
  ["Healthcare", "Patient scheduling, documentation, care coordination", "/industries/healthcare"],
  ["Retail", "Inventory management, customer experience, demand forecasting", "/industries/retail"],
  ["E-commerce", "Cart abandonment, personalization, customer support", "/industries/ecommerce"],
  ["Logistics", "Route optimization, tracking, warehouse management", "/industries/logistics"],
  ["Finance", "Fraud detection, compliance, reporting automation", "/industries/finance"],
  ["Education", "Student engagement, administrative tasks, personalized learning", "/industries/education"],
  ["Construction", "Project management, safety compliance, resource planning", "/industries/construction"],
  ["Hospitality", "Guest experience, revenue management, operations", "/industries/hospitality"],
  ["Real Estate", "Lead qualification, property matching, tenant management", "/industries/real-estate"],
  ["Legal", "Document review, contract analysis, compliance tracking", "/industries/legal"],
  ["Startups", "Growth automation, customer acquisition, product development", "/industries/startups"],
  ["SMEs", "Practical, cost-effective AI for small and medium businesses", "/industries/smes"],
] as const;

const SERVICE_KEYWORDS: Record<string, string[]> = {
  "AI Advisory": ["strategy", "consulting", "consultant", "advice", "roadmap", "readiness", "where to start", "not sure", "don't know", "transformation", "assessment"],
  "AI Engineering": ["custom", "build", "develop", "development", "software", "app", "application", "mvp", "product", "prototype"],
  "AI Automation": ["automate", "automation", "workflow", "manual", "repetitive", "data entry", "process", "rpa", "approvals"],
  "AI Applications": ["chatbot", "chat bot", "agent", "agents", "assistant", "voice", "bot"],
  "Data & Intelligence": ["data", "dashboard", "integration", "integrate", "api", "connect systems", "analytics", "reporting", "dedicated team"],
};

const serviceEntries: KnowledgeEntry[] = SERVICES.map((s) => ({
  id: `service-${s.num}`,
  title: `${s.title} — ${s.subtitle}`,
  keywords: [s.title.toLowerCase(), s.subtitle.toLowerCase(), ...s.tags.map((t) => t.toLowerCase()), ...(SERVICE_KEYWORDS[s.title] ?? [])],
  answer: `${s.desc} It covers ${s.tags.join(", ")}.`,
  links: [{ label: `Explore ${s.title}`, href: s.href }],
  service: s.title,
}));

/** How visitors tend to describe each Scene 02 problem, keyed by problem number. */
const PROBLEM_KEYWORDS: Record<string, string[]> = {
  "01": ["manual", "repetitive", "data entry", "copy paste", "keying", "spreadsheets", "admin", "scheduling"],
  "02": ["costs", "overheads", "expensive", "save money", "cut costs", "efficiency"],
  "03": ["support", "response times", "ticket", "tickets", "customer complaints", "backlog"],
  "04": ["leads", "follow-up", "follow up", "prospects", "losing customers", "slow response"],
  "05": ["documents", "emails", "inbox", "email overload", "paperwork", "pdfs"],
  "06": ["reports", "reporting", "dashboards", "kpis", "monthly report"],
  "07": ["silos", "disconnected", "systems don't talk", "single view", "integrate systems"],
  "08": ["approvals", "approval", "sign off", "sign-off", "bottleneck", "purchase orders"],
};

const problemEntries: KnowledgeEntry[] = PROBLEMS.map((p) => {
  const service = SERVICES.find((s) => p.href === s.href)?.title;
  return {
    id: `problem-${p.num}`,
    title: p.title,
    keywords: [p.title.toLowerCase(), ...(PROBLEM_KEYWORDS[p.num] ?? [])],
    answer: `${p.desc} This is one of the problems we focus on — the related page explains how AI is applied to it.`,
    links: [{ label: `How we approach ${p.title.toLowerCase()}`, href: p.href }],
    service,
  };
});

const solutionEntries: KnowledgeEntry[] = SOLUTIONS.map((s) => ({
  id: `solution-${s.href.split("/").pop()}`,
  title: s.title,
  keywords: [s.title.toLowerCase(), ...s.keywords],
  answer: s.desc,
  links: [{ label: `See ${s.title}`, href: s.href }],
}));

const coreEntries: KnowledgeEntry[] = [
  {
    id: "about",
    title: "About Squadify Solutions",
    keywords: ["what do you do", "who are you", "about", "squadify", "company", "what is squadify", "tell me about"],
    answer:
      "Squadify Solutions is an AI-first technology company that helps businesses identify, build, and implement AI solutions to solve operational challenges. We start with your operational pain points — not technology — and work across AI consulting, custom AI development, automation, chatbots and agents, and analytics, delivered through a structured 150-hour framework.",
    links: [
      { label: "About us", href: "/company/about" },
      { label: "Our services", href: "/services" },
    ],
  },
  {
    id: "services",
    title: "Our five service groups",
    keywords: ["services", "what services", "offer", "capabilities", "what can you do", "help with"],
    answer: `We organise our work into five capability groups: ${SERVICES.map((s) => `${s.title} (${s.subtitle})`).join("; ")}.`,
    links: [{ label: "All services", href: "/services" }],
  },
  {
    id: "solutions",
    title: "Pre-built solutions",
    keywords: ["solutions", "ready made", "pre-built", "off the shelf", "products"],
    answer: `Alongside custom work we offer solutions designed for specific outcomes, customised to your needs: ${SOLUTIONS.map((s) => s.title).join(", ")}.`,
    links: [{ label: "All solutions", href: "/solutions" }],
  },
  {
    id: "150-hours",
    title: "The 150-hour delivery framework",
    keywords: ["150", "150 hours", "150-hour", "framework", "delivery model", "sprint", "process", "how do you work", "methodology", "stages"],
    answer:
      "Our 150-hour framework moves an agreed business challenge to a deployed AI solution in five stages: Understand (hours 1–15, discovery and scope), Design (16–35, architecture and specification — nothing is built until it's approved), Build (36–115), Launch (116–140, testing, deployment and validation) and Scale (141–150+, training, handover and support). Scope is confirmed during discovery.",
    links: [
      { label: "The 150-hour framework", href: "/150-hour-delivery" },
      { label: "Delivery FAQs", href: "/150-hour-delivery/faqs" },
    ],
  },
  {
    id: "timeline",
    title: "How long a project takes",
    keywords: ["how long", "timeline", "weeks", "calendar", "time frame", "timeframe", "duration", "when will", "how fast", "deadline"],
    answer:
      "The 150 hours are active development hours, not calendar time. Depending on team size and complexity, that typically means 2–6 weeks of elapsed time. We agree the timeline with you during discovery.",
    links: [{ label: "Delivery FAQs", href: "/150-hour-delivery/faqs" }],
  },
  {
    id: "bigger",
    title: "Projects larger than 150 hours",
    keywords: ["bigger", "larger", "complex", "more than 150", "multiple sprints", "large project", "phases"],
    answer:
      "We scope carefully in discovery. If a project needs more than 150 hours, we structure it as multiple sprints with working deliverables at the end of each one, so you never pay for undefined work upfront. Multi-phase and enterprise programmes are handled through a custom proposal.",
    links: [
      { label: "Request a solution", href: "/contact/request-solution" },
      { label: "Pricing models", href: "/pricing" },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    keywords: ["price", "pricing", "cost", "costs", "how much", "budget", "quote", "fee", "fees", "expensive", "cheap", "rates"],
    answer:
      "We don't publish fixed prices — costs depend on scope, complexity, and ongoing requirements. There are three engagement models (the 150-Hour AI Sprint, a custom proposal for multi-phase work, and enterprise engagements), and we provide a clear quote before any work begins. The quickest way to a number is a short discovery call.",
    links: [
      { label: "Pricing & engagement models", href: "/pricing" },
      { label: "Book a discovery call", href: "/contact/discovery-call" },
    ],
  },
  {
    id: "support",
    title: "Support after launch",
    keywords: ["support", "maintenance", "after launch", "after delivery", "aftercare", "ongoing", "bugs", "monitoring", "go live"],
    answer:
      "Each project includes a post-launch support period agreed with you. After that you can continue on a support plan (Essential, Standard, or Managed — priced by discussion) or run the system internally; documentation is provided either way. We also offer expansion sprints to add features.",
    links: [
      { label: "Support plans", href: "/pricing" },
      { label: "Ongoing support service", href: "/services/support" },
    ],
  },
  {
    id: "industries",
    title: "Industries we work with",
    keywords: ["industry", "industries", "sector", "sectors", "work with", ...INDUSTRIES.map(([n]) => n.toLowerCase())],
    answer: `We work across ${INDUSTRIES.map(([n]) => n).join(", ")}, and tailor each solution to the industry's context, regulations and terminology. Typical focus areas: ${INDUSTRIES.slice(0, 6)
      .map(([n, d]) => `${n.toLowerCase()} — ${d.toLowerCase()}`)
      .join("; ")}.`,
    links: [{ label: "Industries", href: "/industries" }],
  },
  {
    id: "data",
    title: "Do I need a lot of data?",
    keywords: ["need data", "how much data", "lot of data", "our data", "data ready", "historical data"],
    answer:
      "Not necessarily. Many solutions — particularly automation, integration, and chatbot projects — work with minimal historical data. During discovery we assess your data situation and recommend the right approach for where you are now.",
    links: [{ label: "AI readiness assessment", href: "/resources/ai-readiness" }],
  },
  {
    id: "security",
    title: "Data security and privacy",
    keywords: ["security", "secure", "privacy", "gdpr", "confidential", "data protection", "compliance", "safe"],
    answer:
      "Our FAQ states that solutions are built with GDPR compliance in mind, using encrypted connections and role-based access controls, and that your business data isn't shared with third parties. For enterprise clients we can work within your existing security frameworks. Specific requirements are confirmed during discovery.",
    links: [
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Privacy policy", href: "/privacy-policy" },
    ],
  },
  {
    id: "tech",
    title: "Technology we use",
    keywords: ["technology", "tech stack", "stack", "python", "react", "aws", "azure", "gcp", "openai", "anthropic", "llm", "which ai", "tools"],
    answer:
      "We choose technology to fit your needs rather than one stack for everything. Common choices include Python, Node.js, React, cloud platforms (AWS, GCP, Azure) and leading AI platforms (OpenAI, Anthropic, Google AI) — always production-ready and maintainable.",
    links: [{ label: "Delivery FAQs", href: "/150-hour-delivery/faqs" }],
  },
  {
    id: "jobs",
    title: "Will AI replace my team?",
    keywords: ["replace", "employees", "jobs", "staff", "headcount", "redundant"],
    answer:
      "Our approach is that AI augments people rather than replacing them: we automate repetitive, low-value tasks so your team can focus on creative, strategic, and relationship-driven work.",
    links: [{ label: "Our AI approach", href: "/company/ai-approach" }],
  },
  {
    id: "discovery",
    title: "Discovery calls and workshops",
    keywords: ["discovery", "discovery call", "consultation", "free call", "workshop", "first step", "first meeting", "book a call"],
    answer:
      "It starts with a free 30-minute discovery call to understand your challenge and outline a potential AI approach — no commitment required. Projects then begin with a focused 60–90 minute discovery workshop (virtual or in-person) to map the problem, define scope, and agree success metrics.",
    links: [
      { label: "Book a discovery call", href: "/contact/discovery-call" },
      { label: "Free consultation", href: "/contact/consultation" },
    ],
  },
  {
    id: "unsure",
    title: "Not sure what you need?",
    keywords: ["not sure", "don't know", "dont know", "where to start", "unsure", "which service", "recommend", "advice", "help me choose"],
    answer:
      "That's what AI Advisory is for. Most clients come to us knowing the problem, not the AI solution. Tell me what's slowing your business down — manual work, support load, reporting, documents, lead follow-up — and I'll point you to the most relevant service, or we can pass it to the team.",
    links: [{ label: "AI Advisory", href: "/services/ai-consulting" }],
    service: "AI Advisory",
  },
  {
    id: "contact",
    title: "Contacting the team",
    keywords: ["contact", "email address", "phone number", "talk to", "human", "real person", "someone", "get in touch", "opening hours", "office hours", "office", "location", "where are you"],
    answer: `You can email ${CONTACT.email} (${CONTACT.hours}) — we'll review your enquiry and get back to you. Or leave your details here and the team will reply by email.`,
    links: [
      { label: "Contact page", href: "/contact" },
      { label: "Book a discovery call", href: "/contact/discovery-call" },
    ],
  },
];

export const KNOWLEDGE: KnowledgeEntry[] = [...coreEntries, ...serviceEntries, ...solutionEntries, ...problemEntries];

export const SERVICE_TITLES = SERVICES.map((s) => s.title);

/** Plain-text rendering of the knowledge base for the optional LLM path. */
export function knowledgeAsText() {
  return KNOWLEDGE.map(
    (e) => `## ${e.title}\n${e.answer}\nPages: ${e.links.map((l) => `${l.label} (${l.href})`).join(", ")}`,
  ).join("\n\n");
}
