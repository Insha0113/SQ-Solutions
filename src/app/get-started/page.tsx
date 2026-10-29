import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GetStartedPage() {
  return (
    <div className="pt-20 bg-[#080808] min-h-screen">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#1000FF]/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="label mb-5">Get Started</div>
          <h1 className="display-xl text-white mb-6">
            Start Your <span className="text-gradient">AI Project</span>
          </h1>
          <p className="text-[#B6B6C2] text-xl leading-relaxed mb-12">
            Choose how you&apos;d like to begin your AI journey with Squadify.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Book a Discovery Call", desc: "Free 30-min call to understand your business challenge", href: "/get-started/book-call", featured: true },
              { title: "Free Consultation", desc: "Get expert AI advice for your specific problem", href: "/get-started/consultation", featured: false },
              { title: "Request a Solution", desc: "Describe your needs, get a custom proposal", href: "/get-started/request-solution", featured: false },
              { title: "Contact Sales", desc: "Talk to our enterprise sales team directly", href: "/get-started/contact-sales", featured: false },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`rounded-2xl border p-6 text-left transition-all hover:-translate-y-1 ${
                  item.featured
                    ? "border-[#1000FF]/40 bg-[#1000FF]/5"
                    : "border-white/8 bg-[#141414] hover:border-[#1000FF]/30"
                }`}
              >
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-[#B6B6C2] text-sm mb-4">{item.desc}</p>
                <span className={`inline-flex items-center gap-1.5 text-sm font-bold ${item.featured ? "text-[#1000FF]" : "text-[#858591]"}`}>
                  Get Started <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

