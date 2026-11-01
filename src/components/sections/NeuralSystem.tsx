"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROBLEMS } from "./problems";
import { useLabMode } from "@/lib/orbit-mode";
import NarrateSteps, { type NarrateItem } from "./NarrateSteps";
import { sceneStore } from "@/lib/scene-store";

const COUNT = PROBLEMS.length;

/** Scroll progress -> which problem is narrated, and how many are revealed. */
const autoIndexFor = (p: number) => (p < 0.04 ? -1 : Math.min(COUNT - 1, Math.floor(((p - 0.04) / 0.86) * COUNT)));
const revealedFor = (p: number) => Math.max(0, Math.min(COUNT, Math.floor((p - 0.02) / 0.06) + 1));

const NARRATE_ITEMS: NarrateItem[] = PROBLEMS.map((p) => ({
  num: p.num,
  kicker: `Signal ${p.num}`,
  title: p.title,
  desc: p.desc,
  primary: { href: p.href, label: "See solution" },
  secondary: { href: `/contact?topic=${encodeURIComponent(p.title)}#enquiry`, label: "Discuss this problem" },
}));

/** Narrated problem lights and turns toward its anchor on the brain. */
const narrateFocus = (i: number) => {
  sceneStore.focusAnchor = i;
  window.dispatchEvent(new Event("hero:focus"));
};

/**
 * Scene 02 — The Neural System.
 * Wide screens: the section pins while the lab brain (shared stage) holds a
 * close-up; the eight problems surface as anchors on the cortex, joined to
 * their labels by live leader lines. Scrolling narrates them in turn; hover,
 * focus or click selects one. Small screens (narrate): the brain sticks at the
 * top while a dock below narrates one problem at a time and the brain turns to
 * it. Reduced motion: a plain, accessible disclosure list.
 */
export default function NeuralSystem() {
  const mode = useLabMode();
  const orbit = mode === "orbit";
  const narrate = mode === "narrate";
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const labelRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [auto, setAuto] = useState(-1);
  const [hovered, setHovered] = useState(-1);
  const [pinned, setPinned] = useState(-1);
  const active = orbit ? (hovered >= 0 ? hovered : pinned >= 0 ? pinned : auto) : pinned;

  // Tell the journey/stage which mode we are in (CSS makes the stage sticky in orbit mode).
  useLayoutEffect(() => {
    const journey = sectionRef.current?.closest(".lab-journey");
    journey?.setAttribute("data-orbit", orbit ? "on" : narrate ? "narrate" : "off");
    sceneStore.scene2Enabled = orbit;
    sceneStore.narrate = narrate;
    return () => {
      sceneStore.scene2Enabled = false;
      sceneStore.narrate = false;
      sceneStore.scene2 = 0;
    };
  }, [orbit, narrate]);

  // Scroll progress through the pinned section.
  useEffect(() => {
    if (!orbit) return;
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;
    let lastAuto = -2;
    let lastRevealed = -1;
    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const p = self.progress;
        sceneStore.scene2 = p;
        const a = autoIndexFor(p);
        if (a !== lastAuto) {
          lastAuto = a;
          setAuto(a);
        }
        const n = revealedFor(p);
        if (n !== lastRevealed) {
          lastRevealed = n;
          itemRefs.current.forEach((el, i) => el?.toggleAttribute("data-revealed", i < n));
        }
      },
    });
    ScrollTrigger.refresh();
    return () => st.kill();
  }, [orbit]);

  // Selected problem lights its region of the brain.
  useEffect(() => {
    if (narrate) return; // NarrateSteps drives the focus.
    sceneStore.focusAnchor = orbit ? active : -1;
    window.dispatchEvent(new Event("hero:focus"));
  }, [orbit, narrate, active]);
  useEffect(() => () => void (sceneStore.focusAnchor = -1), []);

  // Leader lines: follow projected anchors every frame while the section is on screen.
  useEffect(() => {
    if (!orbit) return;
    const pin = pinRef.current;
    const svg = svgRef.current;
    const section = sectionRef.current;
    if (!pin || !svg || !section) return;
    const lines = Array.from(svg.querySelectorAll<SVGPolylineElement>("polyline"));
    const dots = Array.from(svg.querySelectorAll<SVGCircleElement>("circle"));
    let ends: { x: number; y: number }[] = [];

    const measure = () => {
      const base = pin.getBoundingClientRect();
      ends = labelRefs.current.map((el, i) => {
        if (!el) return { x: 0, y: 0 };
        const r = el.getBoundingClientRect();
        const left = PROBLEMS[i].side === "left";
        return { x: (left ? r.right + 10 : r.left - 10) - base.left, y: r.top + r.height / 2 - base.top };
      });
    };

    let raf = 0;
    let visible = false;
    const tick = () => {
      raf = 0;
      if (!visible) return;
      const w = pin.clientWidth;
      const h = pin.clientHeight;
      const a = sceneStore.anchors;
      const ready = sceneStore.anchorsReady;
      // Lines let go of the brain as it leaves for Scene 03.
      const hold = Math.max(0, 1 - sceneStore.scene3In * 2.5);
      for (let i = 0; i < COUNT; i++) {
        const ax = (a[i * 3] * 0.5 + 0.5) * w;
        const ay = (-a[i * 3 + 1] * 0.5 + 0.5) * h;
        const facing = ready ? a[i * 3 + 2] * hold : 0;
        const e = ends[i];
        const elbow = e.x + (PROBLEMS[i].side === "left" ? 28 : -28);
        lines[i].setAttribute("points", `${e.x},${e.y} ${elbow},${e.y} ${ax},${ay}`);
        const rev = itemRefs.current[i]?.hasAttribute("data-revealed") ? "1" : "0";
        lines[i].style.setProperty("--facing", String(facing));
        lines[i].style.setProperty("--rev", rev);
        dots[i].setAttribute("cx", String(ax));
        dots[i].setAttribute("cy", String(ay));
        dots[i].style.setProperty("--facing", String(facing));
        dots[i].style.setProperty("--rev", rev);
      }
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        measure();
        if (!raf) raf = requestAnimationFrame(tick);
      }
    });
    io.observe(section);
    window.addEventListener("resize", measure);
    return () => {
      io.disconnect();
      window.removeEventListener("resize", measure);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [orbit]);

  const toggle = (i: number) => setPinned((p) => (p === i ? -1 : i));
  const shown = active >= 0 ? active : -1;

  return (
    <section
      ref={sectionRef}
      className="neural"
      data-mode={mode}
      aria-labelledby="neural-heading"
    >
      <div ref={pinRef} className="neural__pin">
        <div className="neural__veil" aria-hidden="true" />
        <header className="neural__intro">
          <p className="lab-eyebrow">
            <span className="lab-eyebrow__tick" aria-hidden="true" />
            Problems We Solve
          </p>
          <h2 id="neural-heading" className="neural__title">
            What&apos;s Slowing Your <span className="lab-accent">Business Down?</span>
          </h2>
          <p className="neural__lede">
            We start with your operational pain points — not technology. Identify your challenge and see how AI
            transforms it.
          </p>
          <Link href="/contact" className="lab-link neural__cta">
            Tell us your problem <ArrowRight className="w-4 h-4 inline" aria-hidden="true" />
          </Link>
        </header>

        {orbit ? (
          <svg ref={svgRef} className="neural__wires" aria-hidden="true">
            {PROBLEMS.map((p, i) => (
              <g key={p.num} className={i === shown ? "is-active" : undefined}>
                <polyline points="0,0 0,0 0,0" />
                <circle r="3.5" cx="0" cy="0" />
              </g>
            ))}
          </svg>
        ) : null}

        {narrate ? (
          <NarrateSteps items={NARRATE_ITEMS} label="Problems" onActive={narrateFocus} />
        ) : (
        <ol className="neural__list">
          {PROBLEMS.map((p, i) => {
            const isActive = i === shown;
            return (
              <li
                key={p.num}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="neural__item"
                data-side={p.side}
                data-slot={i % 4}
                data-active={isActive || undefined}
              >
                <button
                  ref={(el) => {
                    labelRefs.current[i] = el;
                  }}
                  type="button"
                  id={`problem-${p.num}`}
                  className="neural__label"
                  aria-expanded={isActive}
                  aria-controls={`problem-${p.num}-detail`}
                  onPointerEnter={(e) => orbit && e.pointerType === "mouse" && setHovered(i)}
                  onPointerLeave={() => orbit && setHovered(-1)}
                  onFocus={() => orbit && setHovered(i)}
                  onBlur={() => orbit && setHovered(-1)}
                  onClick={() => toggle(i)}
                >
                  <span className="neural__num">{p.num}</span>
                  <span className="neural__name">{p.title}</span>
                  <span className="neural__tick" aria-hidden="true" />
                </button>
                <div
                  id={`problem-${p.num}-detail`}
                  role="region"
                  aria-labelledby={`problem-${p.num}`}
                  className="neural__detail"
                  hidden={!isActive}
                >
                  <span className="holo-panel__corner holo-panel__corner--tl" aria-hidden="true" />
                  <span className="holo-panel__corner holo-panel__corner--br" aria-hidden="true" />
                  <p className="neural__detail-kicker" aria-hidden="true">
                    Signal {p.num} <span>/ 0{COUNT}</span>
                  </p>
                  <h3 className="neural__detail-title">{p.title}</h3>
                  <p className="neural__detail-desc">{p.desc}</p>
                  <span className="neural__detail-actions">
                    <Link href={p.href} className="neural__detail-link">
                      See solution <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                    <Link
                      href={`/contact?topic=${encodeURIComponent(p.title)}#enquiry`}
                      className="neural__detail-link neural__detail-link--ghost"
                    >
                      Discuss this problem
                    </Link>
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
        )}
      </div>
    </section>
  );
}
