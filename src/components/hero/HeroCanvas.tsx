"use client";

import { Component, useEffect, useState, type ReactNode, type RefObject } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { detectTier, probeWebGL, TIER_SETTINGS, type TierSettings } from "@/lib/device-tier";

// three.js + the scene ship in their own chunk, fetched only when WebGL is usable.
const loadScene = () => import("./HeroScene");
const HeroScene = dynamic(loadScene, { ssr: false, loading: () => null });

/** Static composition shown without WebGL, on context loss, or if the scene errors. */
export function HeroFallback() {
  return (
    <div className="lab-fallback" aria-hidden="true">
      <div className="lab-fallback__glow" />
      <div className="lab-fallback__ring lab-fallback__ring--a" />
      <div className="lab-fallback__ring lab-fallback__ring--b" />
      <div className="lab-fallback__grid" />
    </div>
  );
}

class SceneBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function initialSettings(): TierSettings | null {
  const caps = probeWebGL();
  if (!caps.webgl) return null;
  // Start fetching the scene now rather than after the first render (avoids a waterfall).
  void loadScene();
  return TIER_SETTINGS[detectTier(caps)];
}

interface HeroCanvasProps {
  sectionRef: RefObject<HTMLElement | null>;
}

/** Client-only (loaded with ssr:false), so probing the browser in state init is safe. */
export default function HeroCanvas({ sectionRef }: HeroCanvasProps) {
  const [settings] = useState(initialSettings);
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState(true);
  const reducedMotion = useReducedMotion() ?? false;

  // Stop rendering entirely while the hero is off-screen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, [sectionRef]);

  if (!settings || failed) return <HeroFallback />;

  return (
    <div className="lab-canvas" data-tier={settings.tier}>
      <SceneBoundary onError={() => setFailed(true)}>
        <HeroScene
          settings={settings}
          active={active}
          reducedMotion={reducedMotion}
          eventSource={sectionRef}
          onContextLost={() => setFailed(true)}
        />
      </SceneBoundary>
    </div>
  );
}
