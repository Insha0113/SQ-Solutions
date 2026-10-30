import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { LabChecklist, LabField, LabPageHero, LabPanel } from "@/components/lab/LabPage";

export const metadata: Metadata = {
  title: "Book Your Free 30-Minute Discovery Call",
  description:
    "Tell us about your business challenge. We'll identify the right AI solution and give you a clear picture of what's possible in 150 hours.",
};

export default function DiscoveryCallPage() {
  return (
    <>
      <LabPageHero eyebrow="Free Discovery Call" title="Book Your" accent="Free 30-Minute Discovery Call">
        Tell us about your business challenge. We&apos;ll identify the right AI solution and give you a clear picture of what&apos;s possible in 150 hours.
      </LabPageHero>
      <section className="lab-section">
        <div className="container">
          <LabPanel className="lab-narrow">
            <h2 className="lab-panel__title">What We Cover in the Call</h2>
            <LabChecklist
              items={[
                "Understanding your business challenges",
                "Identifying AI opportunities",
                "Estimating potential ROI",
                "Recommending the right AI solution",
                "Outlining the 150-hour delivery scope",
                "Answering all your questions",
              ]}
            />
            <div className="lab-panel__divider" aria-hidden="true" />
            <form className="lab-form">
              <div className="lab-form__row">
                <LabField id="dc-first-name" label="First Name *">
                  <input id="dc-first-name" type="text" required placeholder="John" className="lab-input" />
                </LabField>
                <LabField id="dc-last-name" label="Last Name *">
                  <input id="dc-last-name" type="text" required placeholder="Smith" className="lab-input" />
                </LabField>
              </div>
              <LabField id="dc-email" label="Business Email *">
                <input id="dc-email" type="email" required placeholder="john@company.com" className="lab-input" />
              </LabField>
              <LabField id="dc-company" label="Company *">
                <input id="dc-company" type="text" required placeholder="Your Company" className="lab-input" />
              </LabField>
              <LabField id="dc-challenge" label="Your Biggest Business Challenge *">
                <textarea
                  id="dc-challenge"
                  required
                  rows={4}
                  placeholder="What's the problem you're trying to solve? What's currently slowing your business down?"
                  className="lab-input"
                />
              </LabField>
              <LabField id="dc-time" label="Preferred Call Time">
                <select id="dc-time" className="lab-input">
                  <option>Morning (9am–12pm GMT)</option>
                  <option>Afternoon (12pm–5pm GMT)</option>
                  <option>Evening (5pm–8pm GMT)</option>
                  <option>Flexible — Any time works</option>
                </select>
              </LabField>
              <button type="submit" className="lab-btn lab-btn--block">
                Book My Free Discovery Call
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
              <p className="lab-form__note">No commitment required. We confirm your call within 2 hours.</p>
            </form>
          </LabPanel>
        </div>
      </section>
    </>
  );
}
