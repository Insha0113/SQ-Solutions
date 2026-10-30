/**
 * Mutable, non-reactive store shared between DOM (GSAP, pointer handlers)
 * and the WebGL scene (read every frame inside useFrame).
 * Writing here never triggers a React render.
 */
export const sceneStore = {
  /** Hero scroll progress: 0 at top, 1 when the hero has scrolled out. */
  scroll: 0,
  /** Pointer in normalised device coords relative to the hero (-1..1). */
  pointer: { x: 0, y: 0 },
  /** Index of the delivery stage being hovered/focused in the HUD, or -1. */
  focusRegion: -1,
  /** True when the user prefers reduced motion. */
  reducedMotion: false,
  /** Set by the scene so the DOM can react if needed. */
  ready: false,
};

export type SceneStore = typeof sceneStore;
