import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RequestSolutionPage() {
  return (
    <div className="pt-20 bg-[#05070D] min-h-screen">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#2563EB]/6 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="label mb-5">Request a Solution</div>
          <h1 className="display-lg text-white mb-6">
            Describe Your Problem,{" "}
            <span className="text-gradient">We Build the Solution</span>
          </h1>
          <p className="text-[#B6B6C2] text-lg leading-relaxed mb-8">
            Tell us what business challenge you&apos;re facing. We&apos;ll put together a custom
            AI solution proposal within 48 hours.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Submit Your Request
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

