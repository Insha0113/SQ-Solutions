export type Tier = "low" | "mid" | "high";

export interface TierSettings {
  tier: Tier;
  /** Max device pixel ratio. */
  dpr: [number, number];
  /** Icosphere subdivision for the procedural brain. */
  brainDetail: number;
  neuralNodes: number;
  dustParticles: number;
  /** Points per Scene 03 service cluster. */
  clusterPoints: number;
  /** Planar floor reflection (renders the scene twice). */
  reflections: boolean;
  /** Back-face glass pass for depth. */
  backFaces: boolean;
  /** Frame-rate cap (0 = uncapped). Steady 30 fps paces better than an erratic 35-50 on fill-limited GPUs. */
  maxFps: number;
  /** Architectural ribs, ceiling rings and a full-size floor (mostly overdraw on small portrait screens). */
  fullLab: boolean;
}

export const TIER_SETTINGS: Record<Tier, TierSettings> = {
  low: { tier: "low", dpr: [1, 1.25], brainDetail: 26, neuralNodes: 420, dustParticles: 220, clusterPoints: 36, reflections: false, backFaces: false, maxFps: 0, fullLab: true },
  mid: { tier: "mid", dpr: [1, 1.5], brainDetail: 40, neuralNodes: 850, dustParticles: 500, clusterPoints: 60, reflections: false, backFaces: true, maxFps: 0, fullLab: true },
  high: { tier: "high", dpr: [1, 2], brainDetail: 56, neuralNodes: 1400, dustParticles: 900, clusterPoints: 90, reflections: true, backFaces: true, maxFps: 0, fullLab: true },
};

export interface Capabilities {
  webgl: boolean;
  software: boolean;
  renderer: string;
}

export function probeWebGL(): Capabilities {
  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl2") || canvas.getContext("webgl")) as WebGLRenderingContext | null;
    if (!gl) return { webgl: false, software: false, renderer: "" };
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : "";
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    const software = /swiftshader|llvmpipe|software|basic render/i.test(renderer);
    return { webgl: true, software, renderer };
  } catch {
    return { webgl: false, software: false, renderer: "" };
  }
}

/** Heuristic tier. `?tier=low|mid|high` in the URL overrides it for testing. */
export function detectTier(caps: Capabilities): Tier {
  const override = new URLSearchParams(window.location.search).get("tier");
  if (override === "low" || override === "mid" || override === "high") return override;

  if (caps.software) return "low";
  const nav = navigator as Navigator & { deviceMemory?: number };
  const cores = nav.hardwareConcurrency ?? 4;
  const memory = nav.deviceMemory ?? 8;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.innerWidth < 768;

  if (coarse || narrow || cores <= 4 || memory <= 4) return "low";
  const discrete = /nvidia|geforce|rtx|radeon rx|apple m[1-9]/i.test(caps.renderer);
  if (discrete && cores >= 8) return "high";
  return "mid";
}

/**
 * Phones and small tablets: the brain fills a short portrait canvas, so the
 * ribs and far floor are almost all off-screen or overdraw, and a 30 fps cap
 * keeps frame pacing even on fill-limited mobile GPUs. Desktop is unaffected.
 */
export function compactSettings(settings: TierSettings): TierSettings {
  const small = window.matchMedia("(max-width: 1023px)").matches || window.matchMedia("(pointer: coarse)").matches;
  if (!small || settings.tier !== "low") return settings;
  return { ...settings, maxFps: 30, fullLab: false };
}
