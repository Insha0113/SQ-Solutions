import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export interface LabTile {
  title: string;
  desc: string;
  href: string;
  Icon: LucideIcon;
  /** Optional footnote line (kept verbatim from existing content). */
  note?: string;
}

/** Directory grid of linked lab tiles (index pages). Each tile is one link. */
export function LabTiles({ items, cta }: { items: LabTile[]; cta: string }) {
  return (
    <ul className="lab-tiles">
      {items.map(({ title, desc, href, Icon, note }, i) => (
        <li key={title}>
          <Link href={href} className="lab-tile">
            <span className="lab-tile__head" aria-hidden="true">
              <span className="lab-tile__icon">
                <Icon size={18} />
              </span>
              <span className="lab-tile__num">{String(i + 1).padStart(2, "0")}</span>
            </span>
            <h2 className="lab-tile__title">{title}</h2>
            <p className="lab-tile__desc">{desc}</p>
            {note ? <p className="lab-tile__note">{note}</p> : null}
            <span className="lab-tile__cta">
              {cta} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Closing call-to-action panel in the lab style. */
export function LabCta({
  title,
  children,
  href,
  label,
}: {
  title: string;
  children?: ReactNode;
  href: string;
  label: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="lab-cta-panel rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="lab-cta-panel__light" aria-hidden="true" />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 className="lab-cta-panel__title">{title}</h2>
            {children ? <p className="lab-cta-panel__lede">{children}</p> : null}
            <Link href={href} className="lab-btn">
              {label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
