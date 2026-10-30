import * as THREE from "three";
import type { RootState } from "@react-three/fiber";
import { REGION_CENTERS } from "@/components/brain/brainGeometry";
import { createSharedUniforms, type SharedUniforms } from "@/components/brain/uniforms";
import { sceneStore } from "@/lib/scene-store";

const { damp, smoothstep, lerp } = THREE.MathUtils;

/**
 * Owns the hero's mutable per-frame state (uniforms, easing, camera rig).
 * Kept outside React so per-frame mutation never goes through component state.
 */
export class HeroController {
  readonly uniforms: SharedUniforms = createSharedUniforms();
  private reducedMotion = false;
  private start = -1;
  private scroll = 0;
  private px = 0;
  private py = 0;
  private spin = 0;
  private hover = 0;
  private hoverTarget = 0;
  private focus = 0;
  private readonly lookAt = new THREE.Vector3();

  setReducedMotion(reduced: boolean) {
    this.reducedMotion = reduced;
    this.uniforms.uMotion.value = reduced ? 0 : 1;
    sceneStore.reducedMotion = reduced;
  }

  pointerMove(worldPoint: THREE.Vector3) {
    this.uniforms.uPointer.value.copy(worldPoint);
    this.hoverTarget = 1;
  }

  pointerLeave() {
    this.hoverTarget = 0;
  }

  step(frame: RootState, rawDelta: number, group: THREE.Group | null) {
    const u = this.uniforms;
    const reduced = this.reducedMotion;
    const delta = Math.min(rawDelta, 1 / 20);
    const now = frame.clock.elapsedTime;
    if (this.start < 0) this.start = now;
    const t = now - this.start;

    // Under reduced motion, snap instead of easing (frames are rendered on demand).
    const ease = (from: number, to: number, lambda: number) => (reduced ? to : damp(from, to, lambda, delta));
    const intro = (a: number, b: number) => (reduced ? 1 : smoothstep(t, a, b));

    this.scroll = ease(this.scroll, sceneStore.scroll, 5);
    this.px = ease(this.px, reduced ? 0 : sceneStore.pointer.x, 3);
    this.py = ease(this.py, reduced ? 0 : sceneStore.pointer.y, 3);
    this.hover = ease(this.hover, this.hoverTarget, 6);
    const fr = sceneStore.focusRegion;
    if (fr >= 0) u.uFocus.value.fromArray(REGION_CENTERS[fr]);
    this.focus = ease(this.focus, fr >= 0 ? 1 : 0, 5);

    const sc = this.scroll;
    u.uTime.value = reduced ? 0 : t;
    u.uReveal.value = intro(0.25, 1.9);
    u.uLab.value = intro(0.1, 2.6) * (1 - sc * 0.65);
    u.uActivation.value = Math.min(1, intro(0.9, 3.0) * 0.55 + sc * 0.45 + this.focus * 0.1);
    u.uPointerStrength.value = this.hover;
    u.uFocusStrength.value = this.focus;
    u.uPixelRatio.value = frame.gl.getPixelRatio();

    // Layout: brain sits right of the copy on wide screens, above it on narrow ones.
    const aspect = frame.size.width / frame.size.height;
    const wide = aspect > 1.15;
    const baseX = wide ? Math.min(1.1, 0.6 * aspect) : 0;
    const baseY = wide ? 0.05 : 0.1;
    // On portrait screens, fit the brain to the width of its (shorter) canvas.
    const baseScale = wide ? 0.9 : Math.min(0.9, 1.15 * aspect);

    if (group) {
      if (!reduced) this.spin += delta * 0.07;
      group.position.x = ease(group.position.x, lerp(baseX, 0, sc * 0.7), 4);
      group.position.y = ease(group.position.y, baseY - sc * 0.1, 4);
      group.rotation.y = ease(group.rotation.y, -0.55 + this.spin + this.px * 0.35 + sc * 1.1, 4);
      group.rotation.x = ease(group.rotation.x, 0.06 - this.py * 0.12, 4);
      group.scale.setScalar(baseScale * (0.92 + 0.08 * u.uReveal.value) * (1 + sc * 0.12));
    }

    const cam = frame.camera;
    cam.position.x = ease(cam.position.x, this.px * 0.35, 3);
    cam.position.y = ease(cam.position.y, 0.3 + this.py * 0.18 - sc * 0.2, 3);
    cam.position.z = ease(cam.position.z, 6.2 - sc * 1.5, 3);
    this.lookAt.set((group?.position.x ?? 0) * 0.45, 0, 0);
    cam.lookAt(this.lookAt);
  }
}
