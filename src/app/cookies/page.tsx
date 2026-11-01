import type { Metadata } from "next";
import { LabPageHero } from "@/components/lab/LabPage";
import { LabDocument, slug } from "@/components/lab/LabDocument";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Squadify Solutions does not use cookies or analytics tracking. This page explains the small amount of browser storage the website does use.",
};

/*
 * Keep in step with the site: no cookies are set and no analytics run today.
 * The only browser storage is the assistant's sessionStorage keys
 * (src/components/assistant/AssistantLauncher.tsx). Update this page before
 * adding analytics, embeds or any cookie-setting service.
 */
const SECTIONS = [
  {
    title: "What Are Cookies?",
    body: "Cookies are small text files a website can store on your device. Similar technologies, such as your browser's session storage, can also keep small pieces of information on your device.",
  },
  {
    title: "Our Use of Cookies",
    body: "This website does not set any cookies, and it does not use analytics, advertising or social media tracking.",
  },
  {
    title: "Browser Storage We Use",
    body: "The website assistant uses your browser's session storage to remember when you arrived and whether it has already shown or you have dismissed its invitation, so it appears no more than once per visit. This information stays on your device, is not sent to us, and is cleared automatically when you close the browser tab.",
  },
  {
    title: "Managing Browser Storage",
    body: "You can clear or block site data, including session storage, in your browser settings. The website will still work; the assistant may simply show its invitation again.",
  },
  {
    title: "Changes to This Policy",
    body: "If we introduce cookies or analytics in future, we will update this policy first and, where the law requires it, ask for your consent before they are used.",
  },
  {
    title: "Contact",
    body: "For questions about this policy, contact us at hello@squadifysolutions.com.",
  },
];

export default function CookiesPage() {
  return (
    <>
      <LabPageHero eyebrow="Legal" title="Cookie Policy" />
      <LabDocument
        updated="Last updated: November 2026"
        sections={SECTIONS.map(({ title, body }) => ({ id: slug(title), title, body: <p>{body}</p> }))}
      />
    </>
  );
}
