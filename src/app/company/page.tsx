import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="pt-20 bg-[#080808] min-h-screen">
      <section className="py-24 relative overflow-hidden relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container-custom relative z-10 text-center">
          <span className="bg-white/20 text-white border border-white/30 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4 inline-block">Company</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            About <span className="text-orange-300">Squadify Solutions</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            An AI-first technology company built to solve real business problems.
          </p>
        </div>
      </section>
      <section className="section-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "About Squadify", desc: "Learn who we are and what drives us.", href: "/company/about", icon: "🏢" },
              { title: "Our Story", desc: "How Squadify Solutions was founded.", href: "/company/story", icon: "📖" },
              { title: "Mission & Vision", desc: "Our purpose and long-term goals.", href: "/company/mission", icon: "🎯" },
              { title: "Why Squadify", desc: "What makes us different from the rest.", href: "/company/why-squadify", icon: "⭐" },
              { title: "Our AI-First Approach", desc: "How we think about solving problems.", href: "/company/ai-approach", icon: "🧠" },
              { title: "Leadership", desc: "Meet the team driving Squadify.", href: "/company/leadership", icon: "👥" },
              { title: "Careers", desc: "Join our growing AI-first team.", href: "/company/careers", icon: "🚀" },
              { title: "Contact", desc: "Get in touch with our team.", href: "/contact", icon: "📬" },
            ].map((item) => (
              <Link key={item.title} href={item.href}
                className="group bg-[#141414] rounded-2xl p-7 border border-gray-100 card-hover hover:border-orange-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
                <div className="flex items-center gap-1 text-orange-500 font-semibold text-sm">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

