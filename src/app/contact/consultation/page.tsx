import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ConsultationPage() {
  return (
    <div className="pt-20">
      <section className="hero-gradient py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container-custom relative z-10 text-center">
          <span className="bg-white/20 text-white border border-white/30 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4 inline-block">Free Consultation</span>
          <h1 className="text-4xl md:text-5xl font-black mb-5">Get Your Free <span className="text-orange-300">AI Consultation</span></h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">Tell us about your business challenges and get expert AI advice on the best solutions — no commitment required.</p>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-900 mb-6">Request Your Free Consultation</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                  <input type="text" placeholder="Smith" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-900" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                <input type="email" placeholder="john@company.com" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company</label>
                <input type="text" placeholder="Your Company" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Business Challenge</label>
                <textarea rows={4} placeholder="What problem are you trying to solve with AI?" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm resize-none text-gray-900" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-3.5 text-base">
                Request Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-xs text-gray-400">No commitment. We respond within 24 hours.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

