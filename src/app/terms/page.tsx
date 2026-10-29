export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-gray-500 mb-8">Last updated: October 2026</p>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 space-y-6">
            {[
              { title: "1. Acceptance of Terms", body: "By engaging Squadify Solutions for AI consulting, development, or any other services, you agree to these Terms and Conditions. If you do not agree, please do not use our services." },
              { title: "2. Services", body: "Squadify Solutions provides AI consulting, development, automation, and related services as agreed in individual project scopes. All services are subject to a signed project agreement or statement of work." },
              { title: "3. Intellectual Property", body: "Upon full payment, all intellectual property created specifically for your project — including code, models, and documentation — transfers to you. We retain rights to our methodologies, frameworks, and reusable components." },
              { title: "4. Payment Terms", body: "Payment terms are specified in individual project agreements. Standard terms are 50% upfront and 50% upon delivery. All fees are non-refundable unless otherwise agreed in writing." },
              { title: "5. Confidentiality", body: "We treat all client information as confidential. We do not share your business information, processes, or data with third parties without your explicit consent." },
              { title: "6. Limitation of Liability", body: "Squadify Solutions' liability is limited to the fees paid for the specific service that caused the issue. We are not liable for indirect, consequential, or incidental damages." },
              { title: "7. Governing Law", body: "These Terms are governed by applicable law. Any disputes will be resolved through good-faith negotiation before proceeding to arbitration or legal action." },
            ].map(({ title, body }) => (
              <div key={title}>
                <h2 className="text-xl font-black text-gray-900 mb-2">{title}</h2>
                <p className="text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

