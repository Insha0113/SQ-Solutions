import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="lab-404">
      <div className="lab-page-hero__grid" aria-hidden="true" />
      <div className="lab-404__rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="lab-404__inner">
        <p className="lab-404__code" aria-hidden="true">
          404
        </p>
        <h1 className="lab-404__title">Page Not Found</h1>
        <p className="lab-404__lede">
          The page you&apos;re looking for doesn&apos;t exist. But don&apos;t worry — we can still help solve your
          business problems with AI.
        </p>
        <div className="lab-404__actions">
          <Link href="/" className="lab-btn">
            Back to Home <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link href="/contact" className="lab-link">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
