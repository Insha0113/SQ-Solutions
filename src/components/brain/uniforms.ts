import * as THREE from "three";

/** sRGB hex -> raw vec3 (shaders here write display-space colour directly). */
export function srgb(hex: string) {
  const c = new THREE.Color();
  c.setStyle(hex, THREE.SRGBColorSpace);
  const out = { r: 0, g: 0, b: 0 };
  c.getRGB(out, THREE.SRGBColorSpace);
  return new THREE.Vector3(out.r, out.g, out.b);
}

export const PALETTE = {
  deep: "#0A1020",
  blue: "#2563EB",
  cyan: "#00D9FF",
  ice: "#F5F8FF",
};

/** One uniform set shared by every material in the hero scene. */
export function createSharedUniforms() {
  return {
    uTime: { value: 0 },
    /** 0..1 brain emergence. */
    uReveal: { value: 0 },
    /** 0..1 fraction of neural pathways lit. */
    uActivation: { value: 0 },
    /** 0..1 environment reveal. */
    uLab: { value: 0 },
    /** 1 = animate pulses, 0 = reduced motion. */
    uMotion: { value: 1 },
    uPointer: { value: new THREE.Vector3(0, 0, 99) },
    uPointerStrength: { value: 0 },
    /** Focus point in brain-local space (delivery stage highlight). */
    uFocus: { value: new THREE.Vector3(0, 0, 99) },
    uFocusStrength: { value: 0 },
    uPixelRatio: { value: 1 },
    uDeep: { value: srgb(PALETTE.deep) },
    uBlue: { value: srgb(PALETTE.blue) },
    uCyan: { value: srgb(PALETTE.cyan) },
    uIce: { value: srgb(PALETTE.ice) },
  };
}

export type SharedUniforms = ReturnType<typeof createSharedUniforms>;
