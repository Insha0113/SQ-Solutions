import type { Metadata } from "next";
import { LabPageHero } from "@/components/lab/LabPage";
import { LabDocument, slug } from "@/components/lab/LabDocument";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

const SECTIONS = [
  { title: "What Are Cookies?", body: "Cookies are small text files stored on your device when you visit our website. They help us understand how you use our site and improve your experience." },
  { title: "How We Use Cookies", body: "We use essential cookies to make our website work, analytics cookies to understand how visitors interact with our content, and preference cookies to remember your settings." },
  { title: "Essential Cookies", body: "These cookies are necessary for the website to function. They enable core functionality such as security and form submission. You cannot opt out of these." },
  { title: "Analytics Cookies", body: "We use analytics tools to understand how visitors use our website — which pages they visit, how long they stay, and what content they find useful. This helps us improve our website." },
  { title: "Managing Cookies", body: "You can control and delete cookies through your browser settings. Disabling certain cookies may affect website functionality." },
  { title: "Contact", body: "For questions about our cookie policy, contact us at hello@squadifysolutions.com." },
];

export default function CookiesPage() {
  return (
    <>
      <LabPageHero eyebrow="Legal" title="Cookie Policy" />
      <LabDocument
        updated="Last updated: October 2026"
        sections={SECTIONS.map(({ title, body }) => ({ id: slug(title), title, body: <p>{body}</p> }))}
      />
    </>
  );
}
