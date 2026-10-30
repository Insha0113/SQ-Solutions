"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "./services";
import { useOrbitMode } from "@/lib/orbit-mode";
import { sceneStore } from "@/lib/scene-store";

const COUNT = SERVICES.length;

/** Pinned scroll progress -> which service is narrated. */
const autoIndexFor = (p: number) => (p < 0.06 ? -1 : Math.min(COUNT - 1, Math.floor(((p - 0.06) / 0.84) * COUNT)));

/**
 * Scene 03 — Intelligence in Motion.
 * Wide screens: the brain's network extends into five service clusters on the
 * shared 3D stage; each cluster carries a focusable label, scrolling narrates
 * them in turn, and hover/focus/click selects one. Elsewhere: a card grid with
 * every service fully visible.
 */
export default function ServicesScene() {
  const orbit = useOrbitMode();
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [auto, setAuto] = useState(-1);
  const [hovered, setHovered] = useState(-1);
  const [pinned, setPinned] = useState(-1);
  const active = orbit ? (hovered >= 0 ? hovered : pinned >= 0 ? pinned : auto) : -1;

  // Entry (brain recentres, clusters grow out) and pinned narration.
  useEffect(() => {
    if (!orbit) return;
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;
    let lastAuto = -2;
    const entry = ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "top top",
      onUpdate: (self) => {
        sceneStore.scene3In = self.progress;
      },
    });
    const pin = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        sceneStore.scene3 = self.progress;
        const a = autoIndexFor(self.progress);
        if (a !== lastAuto) {
          lastAuto = a;
          setAuto(a);
        }
      },
    });
    ScrollTrigger.refresh();
    return () => {
      entry.kill();
      pin.kill();
      sceneStore.scene3In = 0;
      sceneStore.scene3 = 0;
    };
  }, [orbit]);

  // Selected service brightens its cluster and the strands feeding it.
  useEffect(() => {
    sceneStore.focusCluster = orbit ? active : -1;
    window.dispatchEvent(new Event("hero:focus"));
  }, [orbit, active]);
  useEffect(() => () => void (sceneStore.focusCluster = -1), []);

  // Labels ride on the projected cluster centres while the section is on screen.
  useEffect(() => {
    if (!orbit) return;
    const pin = pinRef.current;
    const section = sectionRef.current;
    const stage = section?.closest(".lab-journey")?.querySelector<HTMLElement>(".lab-journey__stage");
    if (!pin || !section || !stage) return;

    let raf = 0;
    let visible = false;
    const tick = () => {
      raf = 0;
      if (!visible) return;
      const s = stage.getBoundingClientRect();
      const p = pin.getBoundingClientRect();
      const c = sceneStore.clusters;
      for (let i = 0; i < COUNT; i++) {
        const el = nodeRefs.current[i];
        if (!el) continue;
        const x = s.left + (c[i * 3] * 0.5 + 0.5) * s.width - p.left;
        const y = s.top + (-c[i * 3 + 1] * 0.5 + 0.5) * s.height - p.top;
        const rev = c[i * 3 + 2];
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
        el.style.setProperty("--rev", rev.toFixed(3));
        el.toggleAttribute("data-hidden", rev < 0.05);
      }
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(tick);
    });
    io.observe(section);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [orbit]);

  const toggle = (i: number) => setPinned((p) => (p === i ? -1 : i));

  return (
    <section ref={sectionRef} className="svc" data-mode={orbit ? "orbit" : "list"} aria-labelledby="svc-heading">
      <div ref={pinRef} className="svc__pin">
        <div className="svc__veil" aria-hidden="true" />
        <header className="svc__intro">
          <p className="lab-eyebrow">
            <span className="lab-eyebrow__tick" aria-hidden="true" />
            Our Services
          </p>
          <h2 id="svc-heading" className="svc__title">
            Five Capability <span className="lab-accent">Groups.</span>
          </h2>
          <p className="svc__lede">
            We organize our work into five clear areas, each designed to solve a specific category of business
            challenge with artificial intelligence.
          </p>
          <Link href="/services" className="lab-link svc__cta">
            All services <ArrowRight className="w-4 h-4 inline" aria-hidden="true" />
          </Link>
        </header>

        {orbit ? (
          <ol className="svc__nodes">
            {SERVICES.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.num} className="svc__item" data-active={isActive || undefined}>
                  <button
                    ref={(el) => {
                      nodeRefs.current[i] = el;
                    }}
                    type="button"
                    id={`service-${s.num}`}
                    className="svc__node"
                    data-hidden=""
                    data-beside={i === 0 || undefined}
                    aria-expanded={isActive}
                    aria-controls={`service-${s.num}-detail`}
                    onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(i)}
                    onPointerLeave={() => setHovered(-1)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(-1)}
                    onClick={() => toggle(i)}
                  >
                    <span className="svc__ring" aria-hidden="true" />
                    <span className="svc__num">{s.num}</span>
                    <span className="svc__name">{s.title}</span>
                  </button>
                  <div
                    id={`service-${s.num}-detail`}
                    role="region"
                    aria-labelledby={`service-${s.num}`}
                    className="svc__detail"
                    hidden={!isActive}
                  >
                    <span className="holo-panel__corner holo-panel__corner--tl" aria-hidden="true" />
                    <span className="holo-panel__corner holo-panel__corner--br" aria-hidden="true" />
                    <ServiceBody index={i} />
                  </div>
                </li>
              );
            })}
          </ol>
        ) : (
          <ol className="svc__grid">
            {SERVICES.map((s, i) => (
              <li key={s.num}>
                <Link href={s.href} className="svc__card">
                  <span className="holo-panel__corner holo-panel__corner--tl" aria-hidden="true" />
                  <span className="holo-panel__corner holo-panel__corner--br" aria-hidden="true" />
                  <ServiceBody index={i} asCard />
                </Link>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

function ServiceBody({ index, asCard }: { index: number; asCard?: boolean }) {
  const { num, Icon, title, subtitle, desc, tags, href } = SERVICES[index];
  return (
    <>
      <div className="svc__body-head">
        <span className="svc__icon" aria-hidden="true">
          <Icon size={17} />
        </span>
        <span className="svc__kicker">
          {num} <span aria-hidden="true">·</span> {subtitle}
        </span>
      </div>
      <h3 className="svc__body-title">{title}</h3>
      <p className="svc__body-desc">{desc}</p>
      <ul className="svc__tags">
        {tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {asCard ? (
        <span className="svc__explore">
          Explore <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </span>
      ) : (
        <Link href={href} className="svc__explore">
          Explore<span className="sr-only"> {title}</span> <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      )}
    </>
  );
}
