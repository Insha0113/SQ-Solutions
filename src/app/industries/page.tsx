import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  { name: "Manufacturing", icon: "🏭", challenge: "Equipment downtime, quality control, supply chain inefficiencies", href: "/industries/manufacturing" },
  { name: "Healthcare", icon: "🏥", challenge: "Patient scheduling, documentation, care coordination", href: "/industries/healthcare" },
  { name: "Retail", icon: "🛍️", challenge: "Inventory management, customer experience, demand forecasting", href: "/industries/retail" },
  { name: "E-commerce", icon: "🛒", challenge: "Cart abandonment, personalization, customer support", href: "/industries/ecommerce" },
  { name: "Logistics", icon: "🚛", challenge: "Route optimization, tracking, warehouse management", href: "/industries/logistics" },
  { name: "Finance", icon: "💰", challenge: "Fraud detection, compliance, reporting automation", href: "/industries/finance" },
  { name: "Education", icon: "🎓", challenge: "Student engagement, administrative tasks, personalized learning", href: "/industries/education" },
  { name: "Construction", icon: "🏗️", challenge: "Project management, safety compliance, resource planning", href: "/industries/construction" },
  { name: "Hospitality", icon: "🏨", challenge: "Guest experience, revenue management, operations", href: "/industries/hospitality" },
  { name: "Real Estate", icon: "🏢", challenge: "Lead qualification, property matching, tenant management", href: "/industries/real-estate" },
  { name: "Legal", icon: "⚖️", challenge: "Document review, contract analysis, compliance tracking", href: "/industries/legal" },
  { name: "Startups", icon: "🚀", challenge: "Growth automation, customer acquisition, product development", href: "/industries/startups" },
];

export default function IndustriesPage() {
  return (
    <div className="pt-20 bg-[#080808] min-h-screen">
      <section className="py-24 relative overflow-hidden relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container-custom relative z-10 text-center">
          <span className="bg-white/20 text-white border border-white/30 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4 inline-block">Industries</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            AI Solutions for Every <span className="text-orange-300">Industry</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            No matter your industry, we have the expertise to build AI solutions tailored to your specific challenges and growth opportunities.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <Link key={ind.name} href={ind.href}
                className="group bg-[#141414] rounded-2xl p-7 border border-gray-100 card-hover hover:border-orange-200">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform">{ind.icon}</span>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-orange-500 transition-colors">{ind.name}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-4">{ind.challenge}</p>
                <div className="flex items-center gap-1 text-orange-500 font-semibold text-sm">
                  View AI Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-orange-500 to-red-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Don&apos;t See Your Industry?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            We work across all industries. Tell us your specific business challenge and we&apos;ll build the right AI solution.
          </p>
          <Link href="/contact" className="bg-[#141414] text-orange-600 font-bold px-8 py-4 rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all inline-flex items-center gap-2">
            Talk to Our Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

