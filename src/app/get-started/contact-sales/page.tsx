import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactSalesPage() {
  return (
    <div className="pt-20 bg-[#05070D] min-h-screen">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#2563EB]/6 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="label mb-5">Enterprise Enquiries</div>
          <h1 className="display-lg text-white mb-6">
            Talk to Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-[#B6B6C2] text-lg leading-relaxed mb-8">
            Looking for enterprise AI solutions, custom engagements, or dedicated AI teams?
            Our team is here to help you build the right solution.
          </p>
          <a
            href="mailto:hello@squadifysolutions.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            Email Our Team
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

