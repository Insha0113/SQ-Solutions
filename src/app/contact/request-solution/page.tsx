import type { Metadata } from "next";
import LeadForm from "@/components/lead/LeadForm";
import { LabField, LabPageHero, LabPanel } from "@/components/lab/LabPage";

export const metadata: Metadata = {
  title: "Request a Solution",
  description:
    "Describe your requirements in detail and our team will review your requirements and respond with next steps.",
};

export default function RequestSolutionPage() {
  return (
    <>
      <LabPageHero eyebrow="Request a Solution" title="Tell Us What You Need." accent="We'll Build It.">
        Describe your requirements in detail and our team will review your requirements and respond with next steps.
      </LabPageHero>
      <section className="lab-section">
        <div className="container">
          <LabPanel className="lab-narrow">
            <h2 className="lab-panel__title">Solution Request Form</h2>
            <LeadForm source="request-solution" className="lab-form" submitLabel="Submit Solution Request" note={<>We&apos;ll review your requirements and respond with next steps.</>}>
              <div className="lab-form__row">
                <LabField id="rs-first-name" label="First Name *">
                  <input id="rs-first-name" name="firstName" autoComplete="given-name" type="text" required placeholder="John" className="lab-input" />
                </LabField>
                <LabField id="rs-last-name" label="Last Name *">
                  <input id="rs-last-name" name="lastName" autoComplete="family-name" type="text" required placeholder="Smith" className="lab-input" />
                </LabField>
              </div>
              <LabField id="rs-email" label="Business Email *">
                <input id="rs-email" name="email" autoComplete="email" type="email" required placeholder="john@company.com" className="lab-input" />
              </LabField>
              <LabField id="rs-company" label="Company & Industry *">
                <input id="rs-company" name="company" autoComplete="organization" type="text" required placeholder="Acme Corp — Manufacturing" className="lab-input" />
              </LabField>
              <LabField id="rs-type" label="Solution Type">
                <select id="rs-type" name="service" className="lab-input">
                  <option>AI Automation</option>
                  <option>AI Chatbot</option>
                  <option>Document Intelligence</option>
                  <option>AI Analytics Dashboard</option>
                  <option>Custom AI Application</option>
                  <option>AI Integration</option>
                  <option>Other</option>
                </select>
              </LabField>
              <LabField id="rs-requirements" label="Describe Your Requirements *">
                <textarea
                  id="rs-requirements" name="message"
                  required
                  rows={5}
                  placeholder="Please describe: What problem are you solving? What does success look like? Any specific requirements or constraints?"
                  className="lab-input"
                />
              </LabField>
              <LabField id="rs-budget" label="Budget Range">
                <select id="rs-budget" name="budget" className="lab-input">
                  <option>Under $10,000</option>
                  <option>$10,000 – $25,000</option>
                  <option>$25,000 – $50,000</option>
                  <option>$50,000 – $100,000</option>
                  <option>Over $100,000</option>
                  <option>Let&apos;s Discuss</option>
                </select>
              </LabField>
            </LeadForm>
          </LabPanel>
        </div>
      </section>
    </>
  );
}
