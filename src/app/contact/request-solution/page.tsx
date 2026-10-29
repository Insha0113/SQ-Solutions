import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RequestSolutionPage() {
  return (
    <div className="pt-20">
      <section className="hero-gradient py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container-custom relative z-10 text-center">
          <span className="bg-white/20 text-white border border-white/30 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4 inline-block">Request a Solution</span>
          <h1 className="text-4xl md:text-5xl font-black mb-5">Tell Us What You Need. <span className="text-orange-300">We&apos;ll Build It.</span></h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">Describe your requirements in detail and our team will respond with a customized AI solution proposal within 48 hours.</p>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-gray-900 mb-6">Solution Request Form</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
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
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company & Industry *</label>
                <input type="text" required placeholder="Acme Corp — Manufacturing" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Solution Type</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-900">
                  <option>AI Automation</option>
                  <option>AI Chatbot</option>
                  <option>Document Intelligence</option>
                  <option>AI Analytics Dashboard</option>
                  <option>Custom AI Application</option>
                  <option>AI Integration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Describe Your Requirements *</label>
                <textarea required rows={5} placeholder="Please describe: What problem are you solving? What does success look like? Any specific requirements or constraints?" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm resize-none text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Budget Range</label>
                <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm text-gray-900">
                  <option>Under $10,000</option>
                  <option>$10,000 – $25,000</option>
                  <option>$25,000 – $50,000</option>
                  <option>$50,000 – $100,000</option>
                  <option>Over $100,000</option>
                  <option>Let&apos;s Discuss</option>
                </select>
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-3.5 text-base">
                Submit Solution Request
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-xs text-gray-400">We&apos;ll respond with a detailed proposal within 48 hours.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

