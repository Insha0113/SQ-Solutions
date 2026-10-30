"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticLink from "@/components/ui/MagneticLink";
import { CapabilityPanel, StagePanel } from "./HudPanels";
import { sceneStore } from "@/lib/scene-store";

const TRUST_MARKS = [
  "Business-first approach",
  "No off-the-shelf assumptions",
  "End-to-end delivery",
  "Ongoing support",
];

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export default function LabHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Scroll progress feeds the 3D scene (camera dolly, pathway activation).
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          sceneStore.scroll = self.progress;
        },
      });
      if (!reduced) {
        gsap.to(contentRef.current, {
          yPercent: -10,
          opacity: 0,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top top", end: "70% top", scrub: true },
        });
      }
    }, section);

    return () => {
      ctx.revert();
      sceneStore.scroll = 0;
      sceneStore.focusRegion = -1;
    };
  }, []);

  return (
    <section ref={sectionRef} className="lab-hero" aria-labelledby="hero-heading">
      <div className="lab-hero__vignette" aria-hidden="true" />

      <div ref={contentRef} className="container lab-hero__content">
        <div className="lab-hero__copy">
          <p className="lab-hero__eyebrow reveal" style={delay(0.8)}>
            <span className="lab-hero__eyebrow-tick" aria-hidden="true" />
            Squadify Solutions · AI-powered business transformation
          </p>

          <h1 id="hero-heading" className="lab-hero__title">
            <span className="lab-hero__line">
              <span className="reveal-up" style={delay(1.0)}>
                Beyond Intelligence.
              </span>
            </span>
            <span className="lab-hero__line">
              <span className="reveal-up lab-hero__accent" style={delay(1.15)}>
                Into Possibility.
              </span>
            </span>
          </h1>

          <p className="lab-hero__lede reveal" style={delay(1.5)}>
            We turn your operational challenges into practical, cost-effective AI solutions — from
            discovery to live deployment.
          </p>

          <div className="lab-hero__actions reveal" style={delay(1.8)}>
            <MagneticLink href="/150-hour-delivery" className="lab-btn">
              See the 150-hour framework
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </MagneticLink>
            <Link href="/industries" className="lab-link">
              Industries we serve
            </Link>
          </div>

          <CapabilityPanel className="lab-hero__caps-inline reveal" />
        </div>

        <div className="lab-hero__hud">
          <div className="reveal" style={delay(2.2)}>
            <StagePanel />
          </div>
          <div className="reveal" style={delay(2.4)}>
            <CapabilityPanel />
          </div>
        </div>
      </div>

      <div className="container lab-hero__status reveal" style={delay(2.4)}>
        <ul className="lab-hero__marks">
          {TRUST_MARKS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <span className="lab-hero__scroll" aria-hidden="true">
          Scroll to explore
          <span className="lab-hero__scroll-line" />
        </span>
      </div>
    </section>
  );
}
