export interface Solution {
  num: string;
  title: string;
  category: string;
  desc: string;
  href: string;
}

/** Outcome-focused solutions (content carried over verbatim from the previous solutions section). */
export const SOLUTIONS: Solution[] = [
  { num: "01", title: "Customer Support AI", category: "CX", desc: "24/7 intelligent support handling queries, routing tickets, and reducing resolution times.", href: "/solutions/customer-support" },
  { num: "02", title: "Sales Automation", category: "Revenue", desc: "Automate lead qualification, follow-ups, and CRM updates so your team focuses on closing.", href: "/solutions/sales-automation" },
  { num: "03", title: "Document Intelligence", category: "Process", desc: "Automatically extract, classify, and route data from contracts, invoices, and documents.", href: "/solutions/document-intelligence" },
  { num: "04", title: "Internal AI Assistant", category: "Productivity", desc: "An AI assistant trained on your company knowledge — answering staff questions instantly.", href: "/solutions/internal-assistant" },
  { num: "05", title: "AI Knowledge Base", category: "Knowledge", desc: "Centralise your company knowledge and make it instantly searchable for staff and AI systems.", href: "/solutions/knowledge-management" },
  { num: "06", title: "Executive Dashboards", category: "Intelligence", desc: "Real-time operational insight across departments — powered by AI, updated automatically.", href: "/solutions/analytics" },
  { num: "07", title: "AI CRM", category: "CRM", desc: "AI-enhanced CRM with automated contact management, activity tracking, and recommendations.", href: "/solutions/ai-crm" },
  { num: "08", title: "Enterprise AI Platform", category: "Enterprise", desc: "A unified AI layer connecting all business functions with intelligent automation at scale.", href: "/solutions/enterprise" },
];
