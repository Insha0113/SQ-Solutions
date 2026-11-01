const partners = [
  "OpenAI", "Microsoft Azure", "Google Cloud", "AWS", "Anthropic",
  "Salesforce", "HubSpot", "Zapier", "Make.com", "n8n",
  "Notion", "Slack", "Stripe", "Twilio", "Airtable",
];

export default function TrustedPartners() {
  return (
    <section
      className="section-sm relative overflow-hidden"
      style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}
    >
      {/* Edge fades */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg-2), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg-2), transparent)" }}
      />

      <div className="text-center mb-12">
        <p
          style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          Technologies We Work With
        </p>
      </div>

      {/* Row 1 */}
      <div className="overflow-hidden mb-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners, ...partners].map((p, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                margin: "0 2.5rem",
                fontFamily: "var(--font-sora)",
                fontWeight: 800,
                fontSize: "0.95rem",
                letterSpacing: "-0.01em",
                color: "var(--border-light)",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "var(--border-light)",
                  marginRight: "0.6rem",
                  flexShrink: 0,
                }}
              />
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="overflow-hidden">
        <div
          className="flex animate-marquee-slow whitespace-nowrap"
          style={{ animationDirection: "reverse" }}
        >
          {[...partners, ...partners, ...partners].reverse().map((p, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                margin: "0 2.5rem",
                fontFamily: "var(--font-sora)",
                fontWeight: 800,
                fontSize: "0.82rem",
                letterSpacing: "-0.01em",
                color: "var(--border)",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: "50%",
                  background: "var(--border)",
                  marginRight: "0.6rem",
                  flexShrink: 0,
                }}
              />
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
