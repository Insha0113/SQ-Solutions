import type { Metadata } from "next";
import Link from "next/link";
import { LabPageHero } from "@/components/lab/LabPage";
import { LabDocument, slug } from "@/components/lab/LabDocument";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Squadify Solutions collects, uses and protects the information you share through this website.",
};

const EMAIL = (
  <a href="mailto:hello@squadifysolutions.com" className="lab-doc__link">
    hello@squadifysolutions.com
  </a>
);

/*
 * Keep in step with what the site actually collects: the enquiry forms
 * (src/components/lead/LeadForm.tsx and the pages that use it), the lead API
 * (src/lib/leads.ts) and the chat assistant (src/components/assistant/).
 * Update section 4 when a lead destination or the Claude chat path is enabled.
 */
const SECTIONS = [
  {
    title: "1. Who We Are",
    body: (
      <p>
        This website is operated by Squadify Solutions (&ldquo;we&rdquo;, &ldquo;us&rdquo;). We are responsible for the
        personal information you share with us through it. You can contact us about anything in this policy at {EMAIL}.
      </p>
    ),
  },
  {
    title: "2. Information We Collect",
    body: (
      <>
        <p>When you send us an enquiry through one of our forms or the website assistant, we collect what you enter:</p>
        <ul className="lab-doc__list">
          <li>your name and email address;</li>
          <li>your company name and, where asked, your industry;</li>
          <li>the service or area you are interested in, a budget range or a preferred call time, where those fields appear;</li>
          <li>the description of your business challenge or requirements.</li>
        </ul>
        <p>
          With each enquiry we also record which form or page it was sent from, any topic you clicked through from, and
          your consent to us using your details to respond, with the date and time you gave it.
        </p>
        <p>
          To protect the forms from spam and abuse, our server briefly uses your IP address to limit repeated
          submissions. It is held in memory only for that purpose and is not stored with your enquiry. Like most
          websites, our hosting provider may also keep standard technical logs (such as IP address, browser type and
          pages requested) for security and reliability.
        </p>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    body: (
      <>
        <p>
          We use your enquiry details to review your request and respond to you, including arranging any call or
          consultation you ask for. We rely on your consent, given when you submit the form, and on our legitimate
          interest in responding to business enquiries.
        </p>
        <p>
          We do not use your details to send you marketing, and we do not add you to a mailing list, unless you
          separately ask us to.
        </p>
      </>
    ),
  },
  {
    title: "4. Who We Share It With",
    body: (
      <>
        <p>
          We do not sell your personal information. We share it only with service providers that help us run this
          website and receive enquiries — such as our website host and the email or workflow service that delivers
          enquiries to our team — and only so they can provide that service to us. We may also disclose information
          where the law requires it.
        </p>
        <p>
          The website assistant answers questions in your browser using information from this website; your
          conversation is not sent to us unless you choose to submit an enquiry through it.
        </p>
      </>
    ),
  },
  {
    title: "5. How Long We Keep It",
    body: (
      <p>
        We keep enquiry details for as long as we need them to respond to you and follow up on your request, and for any
        longer period the law requires. When we no longer need them, we delete them.
      </p>
    ),
  },
  {
    title: "6. Your Rights",
    body: (
      <>
        <p>Depending on where you live, you may have the right to:</p>
        <ul className="lab-doc__list">
          <li>ask for a copy of the personal information we hold about you;</li>
          <li>ask us to correct or delete it;</li>
          <li>object to or ask us to restrict how we use it;</li>
          <li>withdraw your consent at any time, without affecting anything we did before you withdrew it.</li>
        </ul>
        <p>
          To make a request, email {EMAIL}. You can also complain to your local data protection authority (in the UK,
          the Information Commissioner&rsquo;s Office).
        </p>
      </>
    ),
  },
  {
    title: "7. Data Security",
    body: (
      <p>
        Enquiries are sent to us over encrypted connections, and we take reasonable technical and organisational steps to
        protect the information we hold. No method of transmission or storage is completely secure, so we cannot
        guarantee absolute security.
      </p>
    ),
  },
  {
    title: "8. Cookies and Browser Storage",
    body: (
      <p>
        This website does not use cookies or analytics tracking. The website assistant uses your browser&rsquo;s session
        storage to remember whether it has already shown you its invitation. See our{" "}
        <Link href="/cookies" className="lab-doc__link">
          Cookie Policy
        </Link>{" "}
        for details.
      </p>
    ),
  },
  {
    title: "9. Changes to This Policy",
    body: (
      <p>
        We will update this policy if the way we handle your information changes, and change the date at the top of the
        page when we do.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <LabPageHero eyebrow="Legal" title="Privacy Policy" />
      <LabDocument updated="Last updated: November 2026" sections={SECTIONS.map((s) => ({ ...s, id: slug(s.title) }))} />
    </>
  );
}
