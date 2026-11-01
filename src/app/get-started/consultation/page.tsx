import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ConsultationPage() {
  return (
    <div className="pt-20 bg-[#05070D] min-h-screen">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#2563EB]/6 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="label mb-5">Free Consultation</div>
          <h1 className="display-lg text-white mb-6">
            Get Free <span className="text-gradient">AI Advice</span>
          </h1>
          <p className="text-[#B6B6C2] text-lg leading-relaxed mb-8">
            Not sure where to start? Our AI consultants will listen to your business challenges
            and give you honest, expert advice — completely free.
          </p>
          <a
            href="mailto:hello@squadifysolutions.com?subject=Free Consultation Request"
            className="btn-primary inline-flex items-center gap-2"
          >
            Request Free Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-[#858591] text-sm mt-6">
            Or{" "}
            <Link href="/contact" className="text-[#2563EB] hover:underline">
              fill out our contact form
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

