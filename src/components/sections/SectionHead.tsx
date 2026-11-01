import type { ReactNode } from "react";

interface SectionHeadProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}

/** Shared lab header: eyebrow + title on the left, lede/links on the right. */
export default function SectionHead({ id, eyebrow, title, children }: SectionHeadProps) {
  return (
    <header className="hs-head">
      <div>
        <p className="lab-eyebrow">
          <span className="lab-eyebrow__tick" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 id={id} className="hs-title">
          {title}
        </h2>
      </div>
      {children ? <div className="hs-side">{children}</div> : null}
    </header>
  );
}
