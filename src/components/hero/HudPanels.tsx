"use client";

import { useState, type ReactNode, type PointerEvent } from "react";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight, RefreshCw, Shield, Monitor, BarChart2 } from "lucide-react";
import { sceneStore } from "@/lib/scene-store";

// Content carried over verbatim from the previous hero.
const STAGES = ["Discovery Workshop", "Design", "Build", "Deploy", "Training", "Support"];

const CAPABILITIES = [
  { Icon: RefreshCw, label: "Data & Automation" },
  { Icon: Shield, label: "Cloud & Security" },
  { Icon: Monitor, label: "Digitalisation" },
  { Icon: BarChart2, label: "Business Analysis" },
];

/** Glass panel with corner brackets that tilts gently toward a fine pointer. */
function HoloPanel({ className, children, label }: { className?: string; children: ReactNode; label: string }) {
  const reduced = useReducedMotion();
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (reduced || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 7);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 7);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.section
      aria-label={label}
      className={`holo-panel ${className ?? ""}`}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <span className="holo-panel__corner holo-panel__corner--tl" aria-hidden="true" />
      <span className="holo-panel__corner holo-panel__corner--br" aria-hidden="true" />
      {children}
    </motion.section>
  );
}

function setRegion(i: number) {
  sceneStore.focusRegion = i;
  window.dispatchEvent(new Event("hero:focus"));
}

export function StagePanel() {
  const [hovered, setHovered] = useState(-1);
  const [pinned, setPinned] = useState(-1);
  const active = hovered >= 0 ? hovered : pinned;

  const enter = (i: number) => {
    setHovered(i);
    setRegion(i);
  };
  const leave = () => {
    setHovered(-1);
    setRegion(pinned);
  };
  const toggle = (i: number) => {
    const next = pinned === i ? -1 : i;
    setPinned(next);
    setRegion(next);
  };

  return (
    <HoloPanel label="Delivery sprint" className="holo-panel--stages">
      <header className="holo-panel__head">
        <span className="holo-panel__kicker">Delivery sprint</span>
        <span className="holo-panel__metric">
          150<small>hours</small>
        </span>
      </header>
      <p className="holo-panel__title">One sprint, six stages</p>
      <ol className="stage-list">
        {STAGES.map((label, i) => (
          <li key={label}>
            <button
              type="button"
              className={`stage-list__item${active === i ? " is-active" : ""}`}
              aria-pressed={pinned === i}
              onPointerEnter={() => enter(i)}
              onPointerLeave={leave}
              onFocus={() => enter(i)}
              onBlur={leave}
              onClick={() => toggle(i)}
            >
              <span className="stage-list__index">{String(i + 1).padStart(2, "0")}</span>
              <span className="stage-list__label">{label}</span>
              <span className="stage-list__signal" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ol>
      <Link href="/150-hour-delivery" className="holo-panel__link">
        Business Problem → AI Opportunity → Solution
        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
      </Link>
    </HoloPanel>
  );
}

export function CapabilityPanel({ className }: { className?: string }) {
  return (
    <HoloPanel label="Capabilities" className={`holo-panel--caps ${className ?? ""}`}>
      <span className="holo-panel__kicker">Capabilities</span>
      <ul className="cap-list">
        {CAPABILITIES.map(({ Icon, label }) => (
          <li key={label}>
            <Icon className="w-3.5 h-3.5" aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </HoloPanel>
  );
}
