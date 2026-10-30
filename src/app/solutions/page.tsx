import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const solutions = [
  { title: "Customer Support AI", desc: "24/7 intelligent customer support that resolves queries instantly and learns from every interaction.", href: "/solutions/customer-support", icon: "💬", results: "85% query resolution rate" },
  { title: "Sales Automation", desc: "Automate lead qualification, follow-ups, and pipeline management so your sales team closes more deals.", href: "/solutions/sales-automation", icon: "📈", results: "3x faster lead response" },
  { title: "Lead Qualification", desc: "Intelligent lead scoring and qualification that prioritizes your best opportunities automatically.", href: "/solutions/lead-qualification", icon: "🎯", results: "60% better conversion" },
  { title: "HR Automation", desc: "Streamline recruitment, onboarding, leave management, and employee queries with AI.", href: "/solutions/hr-automation", icon: "👥", results: "60% HR workload reduced" },
  { title: "Finance Automation", desc: "Automate invoice processing, expense reporting, and financial reconciliation.", href: "/solutions/finance-automation", icon: "💰", results: "90% processing time saved" },
  { title: "Document Intelligence", desc: "Extract, classify, and process business documents automatically with high accuracy.", href: "/solutions/document-intelligence", icon: "📄", results: "95% extraction accuracy" },
  { title: "Knowledge Management", desc: "Build an intelligent company knowledge base that employees can query naturally.", href: "/solutions/knowledge-management", icon: "🧠", results: "70% faster information access" },
  { title: "AI Analytics Dashboard", desc: "Real-time executive insights from your business data with AI-powered predictions.", href: "/solutions/analytics", icon: "📊", results: "Decision speed 10x faster" },
  { title: "AI CRM", desc: "Supercharge your CRM with AI-powered insights, automation, and customer intelligence.", href: "/solutions/ai-crm", icon: "🤝", results: "40% revenue increase" },
  { title: "Voice AI", desc: "Natural language voice interfaces for customer support, scheduling, and operations.", href: "/solutions/voice-ai", icon: "🎤", results: "24/7 voice support" },
  { title: "Internal AI Assistant", desc: "A company-wide AI assistant that helps your team work smarter and faster.", href: "/solutions/internal-assistant", icon: "🤖", results: "3hrs saved per employee/day" },
  { title: "Enterprise AI Platform", desc: "A unified AI platform connecting all your business functions with intelligent automation.", href: "/solutions/enterprise", icon: "🏢", results: "End-to-end automation" },
];

export default function SolutionsPage() {
  return (
    <div className="pt-20 bg-[#05070D] min-h-screen">
      <section className="py-24 relative overflow-hidden relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container-custom relative z-10 text-center">
          <span className="bg-white/20 text-white border border-white/30 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4 inline-block">AI Solutions</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Outcome-Focused <span className="text-orange-300">AI Solutions</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Pre-built AI solutions designed for specific business outcomes. Ready to deploy, customizable to your needs, delivered in 150 hours.
          </p>
          <Link href="/contact/discovery-call" className="bg-[#141414] text-orange-600 font-bold px-8 py-4 rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all inline-flex items-center gap-2">
            Find Your Solution
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="section-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <Link key={s.title} href={s.href}
                className="group bg-[#141414] rounded-2xl overflow-hidden border border-gray-100 rounded-2xl border border-[#292929] bg-[#141414] hover:border-[#2563EB]/30 transition-all">
                <div className="h-1.5 bg-gradient-to-r from-orange-500 to-red-600"></div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors">{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/8">
                    <span className="text-xs font-bold text-orange-500">✦ {s.results}</span>
                    <ArrowRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

