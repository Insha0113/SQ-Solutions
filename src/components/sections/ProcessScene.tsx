"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STAGES } from "./process";

const COUNT = STAGES.length;

/**
 * Scene 05 — Concept to Reality.
 * The five delivery stages as stations on an assembly line. Scrolling sends a
 * cyan signal along the track and lights each station as it arrives. CSS +
 * one ScrollTrigger; no WebGL. Without JS or with reduced motion, every
 * station is shown lit.
 */
export default function ProcessScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const stations = Array.from(line.querySelectorAll<HTMLElement>(".pr__station"));
    section.setAttribute("data-ready", "");
    let lastLit = -1;
    const st = ScrollTrigger.create({
      trigger: line,
      start: "top 78%",
      end: "bottom 58%",
      onUpdate: (self) => {
        const p = self.progress;
        section.style.setProperty("--p", p.toFixed(4));
        // A station lights when the signal reaches it (slightly early, so the last one completes).
        const lit = Math.min(COUNT, Math.floor(p * (COUNT - 1) + 1.02));
        if (lit !== lastLit) {
          lastLit = lit;
          stations.forEach((el, i) => el.toggleAttribute("data-lit", i < lit));
        }
      },
    });
    // Earlier scenes switch layout (pinned 3D vs list) on resize/rotation, which
    // shifts this section; re-measure once the page height settles.
    let timer = 0;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    });
    ro.observe(document.body);
    return () => {
      ro.disconnect();
      window.clearTimeout(timer);
      st.kill();
      section.removeAttribute("data-ready");
      section.style.removeProperty("--p");
    };
  }, []);

  return (
    <section ref={sectionRef} className="pr" aria-labelledby="pr-heading">
      <div className="pr__glow" aria-hidden="true" />
      <div className="pr__inner">
        <header className="pr__head">
          <div>
            <p className="lab-eyebrow">
              <span className="lab-eyebrow__tick" aria-hidden="true" />
              The 150-Hour Framework
            </p>
            <h2 id="pr-heading" className="pr__title">
              Problem to <span className="lab-accent">Working AI Solution.</span>
            </h2>
          </div>
          <div>
            <p className="pr__lede">
              Our structured delivery approach moves from an agreed business challenge to a practical, deployed AI
              solution. Scope is confirmed during the discovery workshop.
            </p>
            <Link href="/150-hour-delivery" className="lab-link pr__cta">
              Explore the framework <ArrowRight className="w-4 h-4 inline" aria-hidden="true" />
            </Link>
          </div>
        </header>

        <div ref={lineRef} className="pr__line">
          <div className="pr__track" aria-hidden="true">
            <span className="pr__track-fill" />
            <span className="pr__signal" />
          </div>
          <ol className="pr__stations">
          {STAGES.map((s) => (
            <li key={s.num} className="pr__station" data-lit="">
              <span className="pr__node" aria-hidden="true">
                <span className="pr__node-core" />
              </span>
              <div className="pr__card">
                <span className="holo-panel__corner holo-panel__corner--tl" aria-hidden="true" />
                <span className="holo-panel__corner holo-panel__corner--br" aria-hidden="true" />
                <p className="pr__num">{s.num}</p>
                <h3 className="pr__card-title">{s.title}</h3>
                <p className="pr__card-desc">{s.desc}</p>
                <ul className="pr__deliverables">
                  {s.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          </ol>
        </div>

        <div className="pr__note">
          <p>
            <strong>Scope note: </strong>
            The deliverables achievable within 150 hours depend on discovery outcomes, system integrations, data
            readiness, and deployment complexity. All scope is agreed during the discovery workshop.
          </p>
          <Link href="/contact" className="lab-btn pr__note-cta">
            Start Discovery <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
