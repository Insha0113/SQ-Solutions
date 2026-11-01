import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare, Mail } from "lucide-react";

/** Closing contact options (content carried over verbatim from the previous ContactCTA section). */
const OPTIONS = [
  {
    Icon: Calendar,
    num: "01",
    title: "Book a Discovery Call",
    desc: "A free 30-minute call to understand your business challenge and outline a potential AI approach. No commitment required.",
    cta: "Book Now",
    href: "/get-started/book-call",
    featured: true,
  },
  {
    Icon: MessageSquare,
    num: "02",
    title: "Tell Us Your Problem",
    desc: "Describe your operational challenge. We'll identify where AI can help and get back to you.",
    cta: "Contact Us",
    href: "/contact",
    featured: false,
  },
  {
    Icon: Mail,
    num: "03",
    title: "Request a Proposal",
    desc: "Know what you need? Submit a brief and we'll outline a structured engagement proposal tailored to your scope.",
    cta: "Submit Brief",
    href: "/get-started/request-solution",
    featured: false,
  },
];

/**
 * Scene 06 — Connect.
 * The lab's closing console: three glass terminals under a final overhead
 * light whose rings echo the hero brain. CSS only; each terminal is one link
 * (the CTA), stretched over the whole panel.
 */
export default function ConnectScene() {
  return (
    <section className="cx" aria-labelledby="cx-heading">
      <div className="cx__backdrop" aria-hidden="true">
        <div className="cx__lamp" />
        <div className="cx__core">
          <span className="cx__ring cx__ring--1" />
          <span className="cx__ring cx__ring--2" />
          <span className="cx__ring cx__ring--3" />
          <span className="cx__core-dot" />
        </div>
        <div className="cx__grid" />
      </div>

      <div className="cx__inner">
        <header className="cx__head">
          <p className="lab-eyebrow cx__eyebrow">
            <span className="lab-eyebrow__tick" aria-hidden="true" />
            Get Started
          </p>
          <h2 id="cx-heading" className="cx__title">
            Let&apos;s Solve Your Next <span className="lab-accent">Business Challenge.</span>
          </h2>
          <p className="cx__lede">
            Tell us what&apos;s slowing your business down. We&apos;ll identify the right AI approach and outline a
            realistic path — no commitment, no obligation.
          </p>
        </header>

        <ul className="cx__terminals">
          {OPTIONS.map(({ Icon, num, title, desc, cta, href, featured }) => (
            <li key={num} className="cx__terminal" data-featured={featured || undefined}>
              <span className="holo-panel__corner holo-panel__corner--tl" aria-hidden="true" />
              <span className="holo-panel__corner holo-panel__corner--br" aria-hidden="true" />
              <span className="cx__scan" aria-hidden="true" />
              <div className="cx__bar" aria-hidden="true">
                <span className="cx__led" />
                <span className="cx__bar-num">{num}</span>
                <span className="cx__bar-line" />
              </div>
              <span className="cx__icon" aria-hidden="true">
                <Icon size={18} />
              </span>
              <h3 id={`cx-${num}`} className="cx__terminal-title">
                {title}
              </h3>
              <p id={`cx-${num}-desc`} className="cx__terminal-desc">
                {desc}
              </p>
              <Link href={href} className="cx__cta" aria-describedby={`cx-${num} cx-${num}-desc`}>
                {cta} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        <p className="cx__foot">
          No commitment required · Every enquiry reviewed · All enquiries treated confidentially
        </p>
      </div>
    </section>
  );
}
