"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface NarrateItem {
  num: string;
  kicker: string;
  title: string;
  desc: string;
  tags?: string[];
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
}

interface NarrateStepsProps {
  items: NarrateItem[];
  /** Accessible name for the step navigation. */
  label: string;
  /** Called with the narrated index (-1 before the first step). */
  onActive: (index: number) => void;
}

/**
 * Small-screen narration for the brain scenes: the dock sticks to the bottom
 * of the viewport, under the sticky brain stage, while scrolling steps through
 * the items one at a time. Dots jump straight to an item.
 */
export default function NarrateSteps({ items, label, onActive }: NarrateStepsProps) {
  const count = items.length;
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const onActiveRef = useRef(onActive);
  useEffect(() => {
    onActiveRef.current = onActive;
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;
    let last = -2;
    const st = ScrollTrigger.create({
      trigger: root,
      start: "top bottom",
      end: "bottom bottom",
      onUpdate: (self) => {
        // Narration starts once the dock reaches the top (the first 100svh of travel is the entry).
        const travel = root.offsetHeight - window.innerHeight;
        const scrolled = self.progress * root.offsetHeight - window.innerHeight;
        const i = scrolled < 0 ? -1 : Math.min(count - 1, Math.floor((scrolled / Math.max(1, travel)) * count));
        if (i !== last) {
          last = i;
          if (i >= 0) setActive(i);
          onActiveRef.current(i);
        }
      },
      onLeave: () => onActiveRef.current(-1),
      onLeaveBack: () => onActiveRef.current(-1),
      onEnter: () => onActiveRef.current(last),
      onEnterBack: () => onActiveRef.current(last),
    });
    return () => {
      st.kill();
      onActiveRef.current(-1);
    };
  }, [count]);

  const jump = (i: number) => {
    const root = rootRef.current;
    if (!root) return;
    const travel = root.offsetHeight - window.innerHeight;
    const top = root.getBoundingClientRect().top + window.scrollY + ((i + 0.5) / count) * travel;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(i);
  };

  const item = items[active];

  return (
    <div ref={rootRef} className="nsteps" style={{ "--steps": count } as CSSProperties}>
      <div className="nsteps__dock">
        <div className="nsteps__card" aria-live="polite">
          <span className="holo-panel__corner holo-panel__corner--tl" aria-hidden="true" />
          <span className="holo-panel__corner holo-panel__corner--br" aria-hidden="true" />
          <div key={item.num} className="nsteps__body">
            <p className="nsteps__kicker">
              {item.kicker} <span>/ {String(count).padStart(2, "0")}</span>
            </p>
            <h3 className="nsteps__title">{item.title}</h3>
            <p className="nsteps__desc">{item.desc}</p>
            {item.tags ? (
              <ul className="nsteps__tags">
                {item.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ) : null}
            <div className="nsteps__actions">
              <Link href={item.primary.href} className="nsteps__link">
                {item.primary.label} <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              <Link href={item.secondary.href} className="nsteps__link nsteps__link--ghost">
                {item.secondary.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <ol className="nsteps__dots" aria-label={label}>
          {items.map((it, i) => (
            <li key={it.num}>
              <button
                type="button"
                className="nsteps__dot"
                aria-current={i === active ? "step" : undefined}
                aria-label={`${it.num}: ${it.title}`}
                onClick={() => jump(i)}
              >
                {it.num}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
