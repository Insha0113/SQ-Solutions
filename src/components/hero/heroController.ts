import * as THREE from "three";
import type { RootState } from "@react-three/fiber";
import { REGION_CENTERS } from "@/components/brain/brainGeometry";
import { createClusterUniforms, createSharedUniforms, type SharedUniforms } from "@/components/brain/uniforms";
import { PROBLEMS } from "@/components/sections/problems";
import { ANCHOR_COUNT, CLUSTER_COUNT, sceneStore } from "@/lib/scene-store";

const { damp, smoothstep, lerp } = THREE.MathUtils;
const TAU = Math.PI * 2;

/** Brain yaw used for the Scene 02 close-up (three-quarter view). */
const SCENE2_YAW = -0.5;
/** Camera distance and brain scale in Scene 02. */
const SCENE2_CAM_Z = 4.6;
const SCENE2_SCALE = 0.52;
/** Horizontal screen position of the brain in Scene 02, as a fraction of half-width. */
const SCENE2_SCREEN_X = 0.31;

/** Scene 03: brain at the hub of the service constellation, right of the copy. */
const SCENE3_CAM_Z = 6.0;
const SCENE3_SCALE = 0.36;
/** Constellation centre in NDC. */
const SCENE3_SCREEN_X = 0.3;
const SCENE3_SCREEN_Y = -0.02;
/** Constellation radii in NDC. */
const SCENE3_RX = 0.4;
const SCENE3_RY = 0.56;
/** Pentagon slots (unit), clockwise from the top: one per service cluster. */
const CLUSTER_SLOTS = Array.from({ length: CLUSTER_COUNT }, (_, i) => {
  const a = Math.PI / 2 - (i * TAU) / CLUSTER_COUNT;
  return [Math.cos(a), Math.sin(a), Math.sin(i * 2.1) * 0.25] as const;
});
const HALF_FOV_TAN = Math.tan(THREE.MathUtils.degToRad(19));
/** Narrate mode (small screens): brain scale and constellation radii (fractions of the half-extents). */
const NARRATE3_SCALE = 0.42;
const NARRATE3_RX = 0.78;
const NARRATE3_RY = 0.72;

/** Angle equivalent to `target` that is nearest to `from` (avoids unwinding spins). */
function nearestAngle(from: number, target: number) {
  return target + TAU * Math.round((from - target) / TAU);
}

/**
 * Owns the lab scene's mutable per-frame state (uniforms, easing, camera rig,
 * Scene 02 anchors). Kept outside React so per-frame mutation never goes
 * through component state.
 */
export class HeroController {
  readonly uniforms: SharedUniforms = createSharedUniforms();
  readonly clusterUniforms = createClusterUniforms(CLUSTER_COUNT);
  private reducedMotion = false;
  private start = -1;
  private scroll = 0;
  private scene2 = 0;
  private px = 0;
  private py = 0;
  private spin = 0;
  private hover = 0;
  private hoverTarget = 0;
  private focus = 0;
  private scene3In = 0;
  private scene3 = 0;
  private spin3 = 0;
  private sel = 0;
  /** Narrate mode: 0..1 blend toward facing the narrated anchor, and that anchor's yaw. */
  private turn = 0;
  private turnYaw = 0;
  private readonly lookAt = new THREE.Vector3();
  private readonly anchors: THREE.Vector3[] = [];
  private readonly tmp = new THREE.Vector3();
  private readonly center = new THREE.Vector3();

  setReducedMotion(reduced: boolean) {
    this.reducedMotion = reduced;
    this.uniforms.uMotion.value = reduced ? 0 : 1;
    sceneStore.reducedMotion = reduced;
  }

  /** Snap each problem's view-space direction onto the brain surface (once per geometry). */
  setGeometry(geometry: THREE.BufferGeometry) {
    const pos = geometry.attributes.position as THREE.BufferAttribute;
    const c = new THREE.Vector3(0, 0.05, 0);
    const v = new THREE.Vector3();
    const dir = new THREE.Vector3();
    const yAxis = new THREE.Vector3(0, 1, 0);
    this.anchors.length = 0;
    PROBLEMS.slice(0, ANCHOR_COUNT).forEach((p, i) => {
      // View space -> brain-local space for the Scene 02 pose.
      dir.fromArray(p.dir).normalize().applyAxisAngle(yAxis, -SCENE2_YAW);
      let best = -Infinity;
      const hit = new THREE.Vector3();
      for (let k = 0; k < pos.count; k++) {
        v.fromBufferAttribute(pos, k);
        const len = v.distanceTo(c) || 1;
        // Mostly direction match; a small reach bonus prefers the outer cortex.
        const score = ((v.x - c.x) * dir.x + (v.y - c.y) * dir.y + (v.z - c.z) * dir.z) / len + len * 0.05;
        if (score > best) {
          best = score;
          hit.copy(v);
        }
      }
      this.anchors.push(hit);
      sceneStore.anchorLocal.set([hit.x, hit.y, hit.z], i * 3);
    });
    sceneStore.anchorsReady = true;
  }

  pointerMove(worldPoint: THREE.Vector3) {
    this.uniforms.uPointer.value.copy(worldPoint);
    this.hoverTarget = 1;
  }

  pointerLeave() {
    this.hoverTarget = 0;
  }

  step(frame: RootState, rawDelta: number, group: THREE.Group | null, constellation: THREE.Group | null) {
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
    this.scene2 = ease(this.scene2, sceneStore.scene2, 5);
    this.px = ease(this.px, reduced ? 0 : sceneStore.pointer.x, 3);
    this.py = ease(this.py, reduced ? 0 : sceneStore.pointer.y, 3);
    this.hover = ease(this.hover, this.hoverTarget, 6);
    this.scene3In = ease(this.scene3In, sceneStore.scene3In, 5);
    this.scene3 = ease(this.scene3, sceneStore.scene3, 5);
    // Scene 03 takes over from the problem/stage focus.
    const narrate = sceneStore.narrate && !sceneStore.scene2Enabled;
    const k3 = sceneStore.scene2Enabled || narrate ? smoothstep(this.scene3In, 0, 1) : 0;

    // Focus: a Scene 02 problem anchor wins over a hero delivery-stage region.
    const fa = sceneStore.focusAnchor;
    const fr = sceneStore.focusRegion;
    if (fa >= 0 && this.anchors[fa]) u.uFocus.value.copy(this.anchors[fa]);
    else if (fr >= 0) u.uFocus.value.fromArray(REGION_CENTERS[fr]);
    this.focus = ease(this.focus, (fa >= 0 || fr >= 0) && k3 < 0.5 ? 1 : 0, 5);

    const s1 = this.scroll;
    const s2 = this.scene2;
    const e2 = sceneStore.scene2Enabled;

    u.uTime.value = reduced ? 0 : t;
    u.uReveal.value = intro(0.25, 1.9);
    u.uLab.value = intro(0.1, 2.6) * (1 - s1 * (e2 ? 0.55 : 0.65)) * (1 - k3 * 0.25);
    u.uActivation.value = Math.min(1, intro(0.9, 3.0) * 0.55 + s1 * 0.3 + s2 * 0.25 + k3 * 0.2 + this.focus * 0.1);
    u.uPointerStrength.value = this.hover;
    u.uFocusStrength.value = this.focus;
    u.uPixelRatio.value = frame.gl.getPixelRatio();

    // Hero layout: brain sits right of the copy on wide screens, above it on narrow ones.
    const aspect = frame.size.width / frame.size.height;
    const wide = aspect > 1.15;
    const baseX = wide ? Math.min(1.1, 0.6 * aspect) : 0;
    const baseY = wide ? 0.05 : 0.1;
    // On portrait screens, fit the brain to the width of its (shorter) canvas.
    const baseScale = wide ? 0.9 : Math.min(0.9, 1.15 * aspect);

    if (!reduced) this.spin += delta * 0.07 * (e2 ? 1 - s1 : 1);
    const heroYaw = -0.55 + this.spin + this.px * 0.35;

    let x: number, y: number, scale: number, yaw: number, camZ: number, lookFactor: number;
    if (e2) {
      // Hero exit flows directly into the Scene 02 close-up pose.
      const x2 = SCENE2_SCREEN_X * Math.tan(THREE.MathUtils.degToRad(19)) * SCENE2_CAM_Z * aspect;
      const k = smoothstep(s1, 0, 1);
      x = lerp(baseX, x2, k);
      y = lerp(baseY, 0, k);
      scale = lerp(baseScale, SCENE2_SCALE, k) * (1 + s2 * 0.08);
      const scene2Yaw = SCENE2_YAW + this.px * 0.12 + (s2 - 0.5) * 0.18;
      yaw = lerp(heroYaw, nearestAngle(heroYaw, scene2Yaw), k);
      camZ = lerp(6.2, SCENE2_CAM_Z, k) - s2 * 0.25;
      lookFactor = 0.45 * (1 - k);

      if (k3 > 0) {
        // Scene 03: the brain recentres as the hub of the service constellation.
        const halfH = HALF_FOV_TAN * SCENE3_CAM_Z;
        if (!reduced) this.spin3 += delta * 0.06;
        x = lerp(x, SCENE3_SCREEN_X * halfH * aspect, k3);
        y = lerp(y, SCENE3_SCREEN_Y * halfH, k3);
        scale = lerp(scale, SCENE3_SCALE, k3);
        yaw += this.spin3 * k3;
        camZ = lerp(camZ, SCENE3_CAM_Z - this.scene3 * 0.2, k3);
      }
    } else {
      x = lerp(baseX, 0, s1 * 0.7);
      y = baseY - s1 * 0.1;
      scale = baseScale * (1 + s1 * 0.12);
      yaw = heroYaw + s1 * 1.1;
      camZ = 6.2 - s1 * 1.5;
      lookFactor = 0.45;

      if (narrate) {
        // Turn the brain so the narrated problem's anchor faces the viewer:
        // rotation.y = atan2(-x, z) brings local (x, z) onto the +z axis.
        const a = fa >= 0 ? this.anchors[fa] : undefined;
        if (a) this.turnYaw = Math.atan2(-a.x, a.z);
        this.turn = ease(this.turn, a && k3 < 0.5 ? 1 : 0, 3);
        yaw = lerp(yaw, nearestAngle(yaw, this.turnYaw), this.turn);
        if (k3 > 0) {
          // Scene 03: brain recentres, smaller, as the hub of the constellation.
          if (!reduced) this.spin3 += delta * 0.06;
          x = lerp(x, 0, k3);
          scale = lerp(scale, baseScale * NARRATE3_SCALE, k3);
          yaw += this.spin3 * k3;
          camZ = lerp(camZ, SCENE3_CAM_Z, k3);
        }
      }
    }

    if (group) {
      group.position.x = ease(group.position.x, x, 4);
      group.position.y = ease(group.position.y, y, 4);
      group.rotation.y = ease(group.rotation.y, yaw, 4);
      group.rotation.x = ease(group.rotation.x, 0.06 - this.py * 0.12, 4);
      group.scale.setScalar(scale * (0.92 + 0.08 * u.uReveal.value));
    }

    const cam = frame.camera;
    cam.position.x = ease(cam.position.x, this.px * (e2 ? 0.2 : 0.35) * (1 - s2 * 0.5), 3);
    cam.position.y = ease(cam.position.y, 0.3 + this.py * 0.18 - s1 * (e2 ? 0.3 : 0.2), 3);
    cam.position.z = ease(cam.position.z, camZ, 3);
    this.lookAt.set((group?.position.x ?? 0) * lookFactor, 0, 0);
    cam.lookAt(this.lookAt);
    cam.updateMatrixWorld();

    if (group && this.anchors.length) this.projectAnchors(group, cam);
    if (group && constellation) this.stepConstellation(group, constellation, cam, k3, aspect, t, ease);
  }

  /** Scene 03: place the cluster constellation around the brain and project it for the DOM labels. */
  private stepConstellation(
    group: THREE.Group,
    constellation: THREE.Group,
    cam: THREE.Camera,
    k3: number,
    aspect: number,
    t: number,
    ease: (from: number, to: number, lambda: number) => number,
  ) {
    const cu = this.clusterUniforms;
    const out = sceneStore.clusters;
    constellation.visible = k3 > 0.001;
    if (!constellation.visible) {
      out.fill(0);
      return;
    }
    // Clusters grow out of the brain one after another during the entry.
    const count = THREE.MathUtils.clamp((this.scene3In - 0.3) / 0.6, 0, 1) * CLUSTER_COUNT;
    const fc = sceneStore.focusCluster;
    if (fc >= 0) cu.uSel.value = fc;
    this.sel = ease(this.sel, fc >= 0 ? 1 : 0, 6);
    cu.uCount.value = count;
    cu.uScene3.value = k3;
    cu.uSelStrength.value = this.sel;

    constellation.position.set(group.position.x, group.position.y, 0);
    constellation.updateMatrixWorld();
    const halfH = HALF_FOV_TAN * SCENE3_CAM_Z;
    const reach = 0.35 + 0.65 * k3;
    const narrate = !sceneStore.scene2Enabled;
    const rx = (narrate ? NARRATE3_RX : SCENE3_RX) * halfH * aspect;
    const ry = (narrate ? NARRATE3_RY : SCENE3_RY) * halfH;
    for (let i = 0; i < CLUSTER_COUNT; i++) {
      const [sx, sy, sz] = CLUSTER_SLOTS[i];
      const bob = this.reducedMotion ? 0 : Math.sin(t * 0.5 + i * 1.7) * 0.03;
      const end = cu.uEnds.value[i];
      end.set(sx * rx * reach, (sy * ry + bob) * reach, sz * reach);
      this.tmp.copy(end).applyMatrix4(constellation.matrixWorld).project(cam);
      out[i * 3] = this.tmp.x;
      out[i * 3 + 1] = this.tmp.y;
      out[i * 3 + 2] = THREE.MathUtils.clamp(count - i, 0, 1) * k3;
    }
  }

  /** Project anchors to NDC for the DOM leader lines; `facing` fades anchors on the far side. */
  private projectAnchors(group: THREE.Group, cam: THREE.Camera) {
    group.updateMatrixWorld();
    this.center.set(0, 0.05, 0).applyMatrix4(group.matrixWorld);
    const dCenter = this.center.distanceTo(cam.position);
    const out = sceneStore.anchors;
    for (let i = 0; i < this.anchors.length; i++) {
      this.tmp.copy(this.anchors[i]).applyMatrix4(group.matrixWorld);
      const dAnchor = this.tmp.distanceTo(cam.position);
      this.tmp.project(cam);
      out[i * 3] = this.tmp.x;
      out[i * 3 + 1] = this.tmp.y;
      out[i * 3 + 2] = THREE.MathUtils.clamp((dCenter - dAnchor) / 0.25 + 0.5, 0, 1);
    }
  }
}
