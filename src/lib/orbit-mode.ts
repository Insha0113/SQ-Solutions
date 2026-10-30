"use client";

import { useSyncExternalStore } from "react";
import { probeWebGL } from "@/lib/device-tier";

/** Wide screens with motion allowed: scenes run pinned over the shared 3D stage. */
export const ORBIT_QUERY = "(min-width: 1200px) and (prefers-reduced-motion: no-preference)";

let webglCache: boolean | null = null;
function hasWebGL() {
  if (webglCache === null) webglCache = probeWebGL().webgl;
  return webglCache;
}

function subscribe(cb: () => void) {
  const mq = window.matchMedia(ORBIT_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
const getOrbit = () => window.matchMedia(ORBIT_QUERY).matches && hasWebGL();
const getOrbitServer = () => false;

/** Pinned 3D "orbit" layout only on wide screens, with motion allowed and WebGL available. */
export function useOrbitMode() {
  return useSyncExternalStore(subscribe, getOrbit, getOrbitServer);
}
