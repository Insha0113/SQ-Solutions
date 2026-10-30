/**
 * Content carried over verbatim from the previous partners strip. The label
 * implies formal partnerships; flagged for owner review before launch.
 */
const PARTNERS = [
  "OpenAI", "Microsoft Azure", "Google Cloud", "AWS", "Anthropic",
  "Salesforce", "HubSpot", "Zapier", "Make.com", "n8n",
  "Notion", "Slack", "Stripe", "Twilio", "Airtable",
];

/**
 * Trusted Partners — a signal readout band. Screen readers get one plain
 * list; the scrolling tracks are decorative duplicates. Reduced motion shows
 * a static, wrapped readout instead.
 */
export default function PartnerTicker() {
  const half = Math.ceil(PARTNERS.length / 2);
  const rows = [PARTNERS.slice(0, half), PARTNERS.slice(half)];
  return (
    <section className="ptk" aria-labelledby="ptk-heading">
      <div className="ptk__frame">
        <h2 id="ptk-heading" className="ptk__label">
          <span className="ptk__led" aria-hidden="true" />
          Technology Partners &amp; Integrations
        </h2>

        <ul className="sr-only">
          {PARTNERS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <div className="ptk__tracks" aria-hidden="true">
          {rows.map((row, r) => (
            <div key={r} className="ptk__track" data-row={r}>
              <div className="ptk__belt">
                {[0, 1, 2, 3].map((copy) => (
                  <div key={copy} className="ptk__set">
                    {row.map((p) => (
                      <span key={p} className="ptk__item">
                        {p}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <ul className="ptk__static" aria-hidden="true">
          {PARTNERS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
