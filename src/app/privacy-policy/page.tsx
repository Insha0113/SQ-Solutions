import type { Metadata } from "next";
import { LabPageHero } from "@/components/lab/LabPage";
import { LabDocument, slug } from "@/components/lab/LabDocument";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const SECTIONS = [
  { title: "1. Information We Collect", body: <p>We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us. This may include your name, email address, company name, and details about your business challenge.</p> },
  { title: "2. How We Use Your Information", body: <p>We use the information we collect to respond to your inquiries, provide AI consulting services, improve our services, and communicate with you about relevant AI solutions and insights.</p> },
  { title: "3. Information Sharing", body: <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.</p> },
  { title: "4. Data Security", body: <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p> },
  {
    title: "5. Contact Us",
    body: (
      <p>
        If you have questions about this Privacy Policy, please contact us at{" "}
        <a href="mailto:hello@squadifysolutions.com" className="lab-doc__link">
          hello@squadifysolutions.com
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <LabPageHero eyebrow="Legal" title="Privacy Policy" />
      <LabDocument updated="Last updated: October 2026" sections={SECTIONS.map((s) => ({ ...s, id: slug(s.title) }))} />
    </>
  );
}
