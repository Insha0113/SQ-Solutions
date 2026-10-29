import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";

export default function BookCallPage() {
  return (
    <div className="pt-20 bg-[#080808] min-h-screen">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#1000FF]/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="label mb-5">Book a Discovery Call</div>
          <h1 className="display-lg text-white mb-6">
            Let&apos;s Talk About Your{" "}
            <span className="text-gradient">Business Challenge</span>
          </h1>
          <p className="text-[#B6B6C2] text-lg leading-relaxed mb-10">
            A free 30-minute call where we understand your business problem,
            identify where AI can help, and outline a solution — no obligation.
          </p>

          <div className="rounded-2xl border border-[#292929] bg-[#141414] p-8 text-left mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1000FF] flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold">Discovery Call</p>
                <p className="text-[#858591] text-sm">30 minutes · Free · No commitment</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "We learn about your business and pain points",
                "We identify where AI can make the biggest impact",
                "We outline a potential solution approach",
                "You get an honest assessment — no pressure",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                  <CheckCircle className="w-4 h-4 text-[#1000FF] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="mailto:hello@squadifysolutions.com?subject=Discovery Call Request"
              className="btn-primary w-full justify-center flex items-center gap-2 py-4"
            >
              Request Discovery Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-center text-[#858591] text-xs mt-4">
              Or email us at{" "}
              <a href="mailto:hello@squadifysolutions.com" className="text-[#1000FF] hover:underline">
                hello@squadifysolutions.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

