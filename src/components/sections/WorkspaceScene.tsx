"use client";

import { useEffect, useRef, type CSSProperties, type PointerEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SOLUTIONS } from "./solutions";

/**
 * Scene 04 — Workspace.
 * The lab's research bench: solutions laid out as floating glass panels over
 * a perspective grid. CSS only (no WebGL); a small script drives the reveal
 * and a pointer-following light on the hovered panel.
 */
export default function WorkspaceScene() {
  const sectionRef = useRef<HTMLElement>(null);

  // Reveal once in view. Content stays visible without JS (data-ready gates the hidden state).
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section.setAttribute("data-ready", "");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        section.setAttribute("data-inview", "");
        io.disconnect();
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  // Pointer light: one delegated handler writes the local cursor position on the hovered panel.
  const onPointerMove = (e: PointerEvent<HTMLOListElement>) => {
    if (e.pointerType !== "mouse") return;
    const panel = (e.target as HTMLElement).closest<HTMLElement>(".ws__panel");
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    panel.style.setProperty("--mx", `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
    panel.style.setProperty("--my", `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
  };

  return (
    <section ref={sectionRef} className="ws" aria-labelledby="ws-heading">
      <div className="ws__backdrop" aria-hidden="true">
        <div className="ws__beam" />
        <div className="ws__floor" />
      </div>

      <div className="ws__inner">
        <header className="ws__head">
          <div className="ws__head-main">
            <p className="lab-eyebrow">
              <span className="lab-eyebrow__tick" aria-hidden="true" />
              AI Solutions
            </p>
            <h2 id="ws-heading" className="ws__title">
              Outcome-Focused <span className="lab-accent">Solutions.</span>
            </h2>
          </div>
          <div className="ws__head-side">
            <p className="ws__lede">
              Each solution is designed around a specific business outcome — not a technology. We build and configure
              the AI around your actual needs.
            </p>
            <Link href="/solutions" className="lab-link ws__cta">
              All solutions <ArrowRight className="w-4 h-4 inline" aria-hidden="true" />
            </Link>
          </div>
        </header>

        <ol className="ws__bench" onPointerMove={onPointerMove}>
          {SOLUTIONS.map((s, i) => (
            <li key={s.num} className="ws__slot" style={{ "--i": i } as CSSProperties}>
              <Link href={s.href} className="ws__panel">
                <span className="ws__panel-light" aria-hidden="true" />
                <span className="holo-panel__corner holo-panel__corner--tl" aria-hidden="true" />
                <span className="holo-panel__corner holo-panel__corner--br" aria-hidden="true" />
                <span className="ws__panel-head">
                  <span className="ws__chip">{s.category}</span>
                  <span className="ws__num">{s.num}</span>
                </span>
                <h3 className="ws__panel-title">{s.title}</h3>
                <p className="ws__panel-desc">{s.desc}</p>
                <span className="ws__more">
                  Learn more <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
