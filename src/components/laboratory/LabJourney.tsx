"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { sceneStore } from "@/lib/scene-store";

// Browser-only: probes WebGL, then lazy-loads three.js.
const HeroCanvas = dynamic(() => import("@/components/hero/HeroCanvas"), { ssr: false, loading: () => null });

/**
 * One continuous lab environment spanning several scenes. A single WebGL stage
 * sits behind the scenes: sticky across Hero + Scene 02 on wide screens,
 * confined to the hero on narrow ones (see lab-hero.css).
 */
export default function LabJourney({ children }: { children: ReactNode }) {
  const journeyRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    // Normalise against the viewport: the stage is viewport-sized while it is in view.
    sceneStore.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    sceneStore.pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
  };
  const onPointerLeave = () => {
    sceneStore.pointer.x = 0;
    sceneStore.pointer.y = 0;
  };

  return (
    <div ref={journeyRef} className="lab-journey" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <div ref={stageRef} className="lab-journey__stage" aria-hidden="true">
        <HeroCanvas observeRef={stageRef} eventSource={journeyRef} />
      </div>
      {children}
    </div>
  );
}
