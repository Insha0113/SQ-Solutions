import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DiscoveryCallPage() {
  return (
    <div className="pt-20">
      <section className="hero-gradient py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container-custom relative z-10 text-center">
          <span className="bg-white/20 text-white border border-white/30 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4 inline-block">Free Discovery Call</span>
          <h1 className="text-4xl md:text-5xl font-black mb-5">
            Book Your <span className="text-orange-300">Free 30-Minute Discovery Call</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Tell us about your business challenge. We&apos;ll identify the right AI solution and give you a clear picture of what&apos;s possible in 150 hours.
          </p>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-900 mb-2">What We Cover in the Call</h2>
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {[
                "Understanding your business challenges",
                "Identifying AI opportunities",
                "Estimating potential ROI",
                "Recommending the right AI solution",
                "Outlining the 150-hour delivery scope",
                "Answering all your questions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                  <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-500 text-xs">✓</span>
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name *</label>
                  <input type="text" required placeholder="John" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name *</label>
                  <input type="text" required placeholder="Smith" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-900" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Business Email *</label>
                <input type="email" required placeholder="john@company.com" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company *</label>
                <input type="text" required placeholder="Your Company" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Biggest Business Challenge *</label>
                <textarea required rows={4} placeholder="What's the problem you're trying to solve? What's currently slowing your business down?" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm resize-none text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Call Time</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-900">
                  <option>Morning (9am–12pm GMT)</option>
                  <option>Afternoon (12pm–5pm GMT)</option>
                  <option>Evening (5pm–8pm GMT)</option>
                  <option>Flexible — Any time works</option>
                </select>
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                Book My Free Discovery Call
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-xs text-gray-400">No commitment required. We confirm your call within 2 hours.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

