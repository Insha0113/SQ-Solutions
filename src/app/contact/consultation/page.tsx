import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
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
            <form className="lab-form">
              <div className="lab-form__row">
                <LabField id="fc-first-name" label="First Name">
                  <input id="fc-first-name" type="text" placeholder="John" className="lab-input" />
                </LabField>
                <LabField id="fc-last-name" label="Last Name">
                  <input id="fc-last-name" type="text" placeholder="Smith" className="lab-input" />
                </LabField>
              </div>
              <LabField id="fc-email" label="Email">
                <input id="fc-email" type="email" placeholder="john@company.com" className="lab-input" />
              </LabField>
              <LabField id="fc-company" label="Company">
                <input id="fc-company" type="text" placeholder="Your Company" className="lab-input" />
              </LabField>
              <LabField id="fc-challenge" label="Your Business Challenge">
                <textarea
                  id="fc-challenge"
                  rows={4}
                  placeholder="What problem are you trying to solve with AI?"
                  className="lab-input"
                />
              </LabField>
              <button type="submit" className="lab-btn lab-btn--block">
                Request Free Consultation
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
              <p className="lab-form__note">No commitment. We respond within 24 hours.</p>
            </form>
          </LabPanel>
        </div>
      </section>
    </>
  );
}
