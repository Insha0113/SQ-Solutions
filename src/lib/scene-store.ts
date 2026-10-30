/** Number of problem anchors projected for Scene 02. */
export const ANCHOR_COUNT = 8;
/** Number of service clusters in Scene 03. */
export const CLUSTER_COUNT = 5;

/**
 * Mutable, non-reactive store shared between DOM (GSAP, pointer handlers)
 * and the WebGL scene (read every frame inside useFrame).
 * Writing here never triggers a React render.
 */
export const sceneStore = {
  /** Hero scroll progress: 0 at top, 1 when the hero has scrolled out. */
  scroll: 0,
  /** Scene 02 (pinned problems section) progress, 0..1. */
  scene2: 0,
  /** True when Scene 02 runs in pinned 3D mode (wide screens). */
  scene2Enabled: false,
  /** Pointer in normalised device coords relative to the lab journey (-1..1). */
  pointer: { x: 0, y: 0 },
  /** Index of the delivery stage being hovered/focused in the HUD, or -1. */
  focusRegion: -1,
  /** Index of the Scene 02 problem anchor in focus, or -1. Takes precedence. */
  focusAnchor: -1,
  /** Anchor positions in brain-local space (x, y, z per anchor). Written once by the scene. */
  anchorLocal: new Float32Array(ANCHOR_COUNT * 3),
  /** Projected anchors: NDC x, NDC y, facing (0..1) per anchor. Written every frame. */
  anchors: new Float32Array(ANCHOR_COUNT * 3),
  anchorsReady: false,
  /** Scene 03 entry (0 when its top meets the viewport bottom, 1 when it pins). */
  scene3In: 0,
  /** Scene 03 (pinned services section) progress, 0..1. */
  scene3: 0,
  /** Index of the Scene 03 service cluster in focus, or -1. */
  focusCluster: -1,
  /** Projected cluster centres: NDC x, NDC y, reveal (0..1) per cluster. Written every frame. */
  clusters: new Float32Array(CLUSTER_COUNT * 3),
  /** True when the user prefers reduced motion. */
  reducedMotion: false,
  /** Set by the scene so the DOM can react if needed. */
  ready: false,
};

export type SceneStore = typeof sceneStore;
