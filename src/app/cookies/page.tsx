export default function CookiesPage() {
  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: October 2026</p>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 space-y-6">
            {[
              { title: "What Are Cookies?", body: "Cookies are small text files stored on your device when you visit our website. They help us understand how you use our site and improve your experience." },
              { title: "How We Use Cookies", body: "We use essential cookies to make our website work, analytics cookies to understand how visitors interact with our content, and preference cookies to remember your settings." },
              { title: "Essential Cookies", body: "These cookies are necessary for the website to function. They enable core functionality such as security and form submission. You cannot opt out of these." },
              { title: "Analytics Cookies", body: "We use analytics tools to understand how visitors use our website — which pages they visit, how long they stay, and what content they find useful. This helps us improve our website." },
              { title: "Managing Cookies", body: "You can control and delete cookies through your browser settings. Disabling certain cookies may affect website functionality." },
              { title: "Contact", body: "For questions about our cookie policy, contact us at hello@squadifysolutions.com." },
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

