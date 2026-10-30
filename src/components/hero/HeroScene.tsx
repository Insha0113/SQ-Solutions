"use client";

import { Suspense, useEffect, useMemo, useRef, useState, type RefObject } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { Bvh, PerformanceMonitor, useGLTF } from "@react-three/drei";
import Brain from "@/components/brain/Brain";
import { createProceduralBrain, normalizeBrainGeometry } from "@/components/brain/brainGeometry";
import NeuralNetwork from "@/components/neural-network/NeuralNetwork";
import Laboratory from "@/components/laboratory/Laboratory";
import { sceneStore } from "@/lib/scene-store";
import { HeroController } from "./heroController";
import type { TierSettings } from "@/lib/device-tier";

/**
 * Path to a licensed, optimised brain scan (GLB, e.g. "/models/brain.glb").
 * While null, the procedural brain is used.
 */
export const BRAIN_MODEL_URL: string | null = null;

const BG = "#05070D";

interface HeroSceneProps {
  settings: TierSettings;
  active: boolean;
  reducedMotion: boolean;
  eventSource: RefObject<HTMLElement | null>;
  onContextLost: () => void;
}

export default function HeroScene({ settings, active, reducedMotion, eventSource, onContextLost }: HeroSceneProps) {
  const [dprMax, setDprMax] = useState(settings.dpr[1]);

  return (
    <Canvas
      flat
      dpr={[settings.dpr[0], dprMax]}
      frameloop={!active ? "never" : reducedMotion ? "demand" : "always"}
      camera={{ position: [0, 0.3, 6.2], fov: 38, near: 0.1, far: 60 }}
      gl={{ antialias: settings.tier !== "low", alpha: false, stencil: false, powerPreference: "high-performance" }}
      eventSource={eventSource as RefObject<HTMLElement>}
      eventPrefix="client"
      onCreated={({ scene, gl }) => {
        scene.background = new THREE.Color(BG);
        scene.fog = new THREE.FogExp2(BG, 0.055);
        gl.domElement.addEventListener("webglcontextlost", onContextLost, { once: true });
      }}
      aria-hidden="true"
    >
      <PerformanceMonitor
        onDecline={() => setDprMax((d) => Math.max(settings.dpr[0], +(d - 0.25).toFixed(2)))}
      />
      <Suspense fallback={null}>
        {BRAIN_MODEL_URL ? (
          <ScanBrain url={BRAIN_MODEL_URL} settings={settings} reducedMotion={reducedMotion} />
        ) : (
          <ProceduralBrain settings={settings} reducedMotion={reducedMotion} />
        )}
      </Suspense>
    </Canvas>
  );
}

interface RigOptions {
  settings: TierSettings;
  reducedMotion: boolean;
}

function ProceduralBrain(props: RigOptions) {
  const geometry = useMemo(() => createProceduralBrain(props.settings.brainDetail), [props.settings.brainDetail]);
  return <Rig geometry={geometry} {...props} />;
}

function ScanBrain({ url, ...props }: RigOptions & { url: string }) {
  const gltf = useGLTF(url, true, true);
  const geometry = useMemo(() => {
    const geos: THREE.BufferGeometry[] = [];
    gltf.scene.updateMatrixWorld(true);
    gltf.scene.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh) geos.push(mesh.geometry.clone().applyMatrix4(mesh.matrixWorld));
    });
    return normalizeBrainGeometry(geos);
  }, [gltf]);
  return <Rig geometry={geometry} {...props} />;
}

function Rig({ geometry, settings, reducedMotion }: RigOptions & { geometry: THREE.BufferGeometry }) {
  const [controller] = useState(() => new HeroController());
  const group = useRef<THREE.Group>(null);
  const invalidate = useThree((s) => s.invalidate);

  useEffect(() => {
    controller.setReducedMotion(reducedMotion);
    if (!reducedMotion) return;
    // On-demand rendering: redraw only when something changes.
    const redraw = () => invalidate();
    window.addEventListener("scroll", redraw, { passive: true });
    window.addEventListener("pointermove", redraw, { passive: true });
    window.addEventListener("hero:focus", redraw);
    return () => {
      window.removeEventListener("scroll", redraw);
      window.removeEventListener("pointermove", redraw);
      window.removeEventListener("hero:focus", redraw);
    };
  }, [reducedMotion, controller, invalidate]);

  useEffect(() => {
    sceneStore.ready = true;
    return () => {
      sceneStore.ready = false;
    };
  }, []);

  useFrame((frame, delta) => controller.step(frame, delta, group.current));

  return (
    <>
      <group ref={group}>
        <Bvh firstHitOnly>
          <Brain
            geometry={geometry}
            uniforms={controller.uniforms}
            backFaces={settings.backFaces}
            onPointerMove={(e: ThreeEvent<PointerEvent>) => controller.pointerMove(e.point)}
            onPointerLeave={() => controller.pointerLeave()}
          />
        </Bvh>
        <NeuralNetwork geometry={geometry} uniforms={controller.uniforms} count={settings.neuralNodes} />
      </group>
      <Laboratory uniforms={controller.uniforms} dust={settings.dustParticles} reflections={settings.reflections} />
    </>
  );
}
