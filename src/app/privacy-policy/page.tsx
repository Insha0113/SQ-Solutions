import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: October 2026</p>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 prose prose-gray max-w-none">
            <h2 className="text-xl font-black text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="text-gray-600 mb-5">We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us. This may include your name, email address, company name, and details about your business challenge.</p>
            <h2 className="text-xl font-black text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-5">We use the information we collect to respond to your inquiries, provide AI consulting services, improve our services, and communicate with you about relevant AI solutions and insights.</p>
            <h2 className="text-xl font-black text-gray-900 mb-3">3. Information Sharing</h2>
            <p className="text-gray-600 mb-5">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.</p>
            <h2 className="text-xl font-black text-gray-900 mb-3">4. Data Security</h2>
            <p className="text-gray-600 mb-5">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            <h2 className="text-xl font-black text-gray-900 mb-3">5. Contact Us</h2>
            <p className="text-gray-600">If you have questions about this Privacy Policy, please contact us at <a href="mailto:hello@squadifysolutions.com" className="text-orange-500">hello@squadifysolutions.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

