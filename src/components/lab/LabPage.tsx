import type { ReactNode } from "react";
import { Check } from "lucide-react";

/**
 * Shared server-rendered building blocks for inner pages in the
 * intelligence-lab style (dark architecture, fine grid, cyan accents).
 */

export function LabPageHero({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: ReactNode;
}) {
  return (
    <section className="lab-page-hero">
      <div className="lab-page-hero__grid" aria-hidden="true" />
      <div className="lab-page-hero__glow" aria-hidden="true" />
      <div className="container relative">
        <p className="lab-eyebrow">
          <span className="lab-eyebrow__tick" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="lab-page-hero__title">
          {title}
          {accent ? (
            <>
              {" "}
              <span className="lab-accent">{accent}</span>
            </>
          ) : null}
        </h1>
        {children ? <p className="lab-page-hero__lede">{children}</p> : null}
      </div>
    </section>
  );
}

export function LabPanel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`lab-panel ${className ?? ""}`}>
      <span className="holo-panel__corner holo-panel__corner--tl" aria-hidden="true" />
      <span className="holo-panel__corner holo-panel__corner--br" aria-hidden="true" />
      {children}
    </div>
  );
}

export function LabChecklist({ items }: { items: string[] }) {
  return (
    <ul className="lab-checklist">
      {items.map((item) => (
        <li key={item}>
          <span className="lab-checklist__mark" aria-hidden="true">
            <Check className="w-3 h-3" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function LabField({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="lab-field">
      <label htmlFor={id} className="lab-field__label">
        {label}
      </label>
      {children}
    </div>
  );
}
