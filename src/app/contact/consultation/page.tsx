import type { Metadata } from "next";
import LeadForm from "@/components/lead/LeadForm";
import { LabField, LabPageHero, LabPanel } from "@/components/lab/LabPage";

export const metadata: Metadata = {
  title: "Get Your Free AI Consultation",
  description:
    "Tell us about your business challenges and get expert AI advice on the best solutions — no commitment required.",
};

export default function ConsultationPage() {
  return (
    <>
      <LabPageHero eyebrow="Free Consultation" title="Get Your Free" accent="AI Consultation">
        Tell us about your business challenges and get expert AI advice on the best solutions — no commitment required.
      </LabPageHero>
      <section className="lab-section">
        <div className="container">
          <LabPanel className="lab-narrow">
            <h2 className="lab-panel__title">Request Your Free Consultation</h2>
            <LeadForm source="consultation" className="lab-form" submitLabel="Request Free Consultation" note={<>No commitment. We&apos;ll review your enquiry and get back to you.</>}>
              <div className="lab-form__row">
                <LabField id="fc-first-name" label="First Name *">
                  <input id="fc-first-name" name="firstName" autoComplete="given-name" type="text" required placeholder="John" className="lab-input" />
                </LabField>
                <LabField id="fc-last-name" label="Last Name">
                  <input id="fc-last-name" name="lastName" autoComplete="family-name" type="text" placeholder="Smith" className="lab-input" />
                </LabField>
              </div>
              <LabField id="fc-email" label="Email *">
                <input id="fc-email" name="email" autoComplete="email" type="email" required placeholder="john@company.com" className="lab-input" />
              </LabField>
              <LabField id="fc-company" label="Company">
                <input id="fc-company" name="company" autoComplete="organization" type="text" placeholder="Your Company" className="lab-input" />
              </LabField>
              <LabField id="fc-challenge" label="Your Business Challenge">
                <textarea
                  id="fc-challenge" name="message"
                  rows={4}
                  placeholder="What problem are you trying to solve with AI?"
                  className="lab-input"
                />
              </LabField>
            </LeadForm>
          </LabPanel>
        </div>
      </section>
    </>
  );
}
