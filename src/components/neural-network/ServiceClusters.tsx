"use client";

import { useMemo, type Ref } from "react";
import * as THREE from "three";
import { mulberry32 } from "@/components/brain/noise";
import type { ClusterUniforms, SharedUniforms } from "@/components/brain/uniforms";

const STRANDS = 3;
const STRAND_SEGMENTS = 20;
const RINGS = 2;
const RING_SEGMENTS = 48;
/** Cluster cloud radius (world units). */
const CLUSTER_RADIUS = 0.24;

/**
 * Geometry is built in "cluster space": every vertex stores its cluster index
 * and a local offset; the vertex shaders place it relative to the live cluster
 * centres (uEnds), so layout changes never rebuild buffers.
 */
function buildClusters(clusters: number, pointsPerCluster: number) {
  const rand = mulberry32(7);

  // ---- Points: a fibonacci-sphere cloud per cluster plus one bright core.
  const perCluster = pointsPerCluster + 1;
  const pCount = clusters * perCluster;
  const offsets = new Float32Array(pCount * 3);
  const pCluster = new Float32Array(pCount);
  const pSeed = new Float32Array(pCount);
  const pSize = new Float32Array(pCount);
  const golden = Math.PI * (3 - Math.sqrt(5));
  let v = 0;
  for (let c = 0; c < clusters; c++) {
    for (let i = 0; i < perCluster; i++, v++) {
      pCluster[v] = c;
      pSeed[v] = rand();
      if (i === 0) {
        pSize[v] = 9.0; // core
        continue;
      }
      const y = 1 - ((i - 0.5) / pointsPerCluster) * 2;
      const r = Math.sqrt(1 - y * y);
      const a = i * golden;
      const reach = CLUSTER_RADIUS * (0.35 + 0.65 * Math.cbrt(rand()));
      offsets.set([Math.cos(a) * r * reach, y * reach, Math.sin(a) * r * reach], v * 3);
      pSize[v] = 1.1 + rand() * rand() * 2.6;
    }
  }
  const points = new THREE.BufferGeometry();
  points.setAttribute("position", new THREE.BufferAttribute(offsets, 3));
  points.setAttribute("aCluster", new THREE.BufferAttribute(pCluster, 1));
  points.setAttribute("aSeed", new THREE.BufferAttribute(pSeed, 1));
  points.setAttribute("aSize", new THREE.BufferAttribute(pSize, 1));

  // ---- Lines: curved strands brain -> cluster (kind 0) and gyroscope rings (kind 1..RINGS).
  const lCount = clusters * (STRANDS * STRAND_SEGMENTS + RINGS * RING_SEGMENTS) * 2;
  const lPos = new Float32Array(lCount * 3); // unused by the shader; keeps three.js happy
  const lCluster = new Float32Array(lCount);
  const lT = new Float32Array(lCount);
  const lKind = new Float32Array(lCount);
  const lSeed = new Float32Array(lCount);
  const lBend = new Float32Array(lCount * 3);
  v = 0;
  const push = (c: number, t: number, kind: number, seed: number, bx: number, by: number, bz: number) => {
    lCluster[v] = c;
    lT[v] = t;
    lKind[v] = kind;
    lSeed[v] = seed;
    lBend.set([bx, by, bz], v * 3);
    v++;
  };
  for (let c = 0; c < clusters; c++) {
    for (let s = 0; s < STRANDS; s++) {
      const seed = rand();
      const bx = rand() * 2 - 1, by = rand() * 2 - 1, bz = rand() * 2 - 1;
      for (let k = 0; k < STRAND_SEGMENTS; k++) {
        push(c, k / STRAND_SEGMENTS, 0, seed, bx, by, bz);
        push(c, (k + 1) / STRAND_SEGMENTS, 0, seed, bx, by, bz);
      }
    }
    for (let r = 1; r <= RINGS; r++) {
      const seed = rand();
      // Ring tilt angles (x, z) stored in the bend slot.
      const tx = 0.5 + rand() * 0.9, tz = (rand() * 2 - 1) * 0.6;
      for (let k = 0; k < RING_SEGMENTS; k++) {
        push(c, k / RING_SEGMENTS, r, seed, tx, 0, tz);
        push(c, (k + 1) / RING_SEGMENTS, r, seed, tx, 0, tz);
      }
    }
  }
  const lines = new THREE.BufferGeometry();
  lines.setAttribute("position", new THREE.BufferAttribute(lPos, 3));
  lines.setAttribute("aCluster", new THREE.BufferAttribute(lCluster, 1));
  lines.setAttribute("aT", new THREE.BufferAttribute(lT, 1));
  lines.setAttribute("aKind", new THREE.BufferAttribute(lKind, 1));
  lines.setAttribute("aSeed", new THREE.BufferAttribute(lSeed, 1));
  lines.setAttribute("aBend", new THREE.BufferAttribute(lBend, 3));

  return { points, lines };
}

const common = (count: number) => /* glsl */ `
  uniform vec3 uEnds[${count}];
  uniform float uCount;
  uniform float uScene3;
  uniform float uSel;
  uniform float uSelStrength;
  uniform float uTime;
  uniform float uMotion;
  attribute float aCluster;
  float clusterReveal() { return clamp(uCount - aCluster, 0.0, 1.0); }
  float clusterSel() { return abs(aCluster - uSel) < 0.5 ? uSelStrength : 0.0; }
  vec3 clusterEnd() {
    vec3 e = uEnds[0];
    ${Array.from({ length: count - 1 }, (_, i) => `if (aCluster > ${i + 0.5}) e = uEnds[${i + 1}];`).join("\n    ")}
    return e;
  }
`;

const lineVertex = (count: number) => /* glsl */ `
  ${common(count)}
  attribute float aT;
  attribute float aKind;
  attribute float aSeed;
  attribute vec3 aBend;
  varying float vT;
  varying float vKind;
  varying float vSeed;
  varying float vReveal;
  varying float vSel;
  void main() {
    float rev = clusterReveal();
    float sel = clusterSel();
    vec3 end = clusterEnd();
    vec3 p;
    if (aKind < 0.5) {
      // Strand: grows out of the brain surface toward its cluster.
      vec3 dir = normalize(end + vec3(1e-4));
      vec3 start = dir * 0.36 + aBend * 0.07;
      vec3 mid = mix(start, end, 0.5) + aBend * 0.3;
      float t = aT * smoothstep(0.0, 1.0, rev);
      p = mix(mix(start, mid, t), mix(mid, end, t), t);
    } else {
      // Gyroscope ring around the cluster; counter-rotating pairs.
      float dirn = aKind > 1.5 ? -1.0 : 1.0;
      float a = aT * 6.2831853 + uTime * uMotion * (0.22 + 0.12 * aSeed) * dirn;
      float r = 0.3 * (aKind > 1.5 ? 1.22 : 1.0) * smoothstep(0.3, 1.0, rev) * (1.0 + 0.12 * sel);
      vec3 q = vec3(cos(a), 0.0, sin(a)) * r;
      float cx = cos(aBend.x), sx = sin(aBend.x);
      q = vec3(q.x, q.y * cx - q.z * sx, q.y * sx + q.z * cx);
      float cz = cos(aBend.z), sz = sin(aBend.z);
      q = vec3(q.x * cz - q.y * sz, q.x * sz + q.y * cz, q.z);
      p = end + q;
    }
    vT = aT;
    vKind = aKind;
    vSeed = aSeed;
    vReveal = rev;
    vSel = sel;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const lineFragment = /* glsl */ `
  uniform float uTime;
  uniform float uMotion;
  uniform float uScene3;
  uniform float uSelStrength;
  uniform vec3 uBlue;
  uniform vec3 uCyan;
  uniform vec3 uIce;
  varying float vT;
  varying float vKind;
  varying float vSeed;
  varying float vReveal;
  varying float vSel;
  void main() {
    // Unselected clusters recede slightly while one is in focus.
    float dim = 1.0 - uSelStrength * 0.45 * (1.0 - vSel);
    float alpha;
    float pulse = 0.0;
    if (vKind < 0.5) {
      float speed = (0.3 + vSeed * 0.25) * (1.0 + vSel * 1.2);
      float head = fract(uTime * speed + vSeed * 7.0) * 1.4 - 0.2;
      float d = head - vT;
      pulse = d > 0.0 && d < 0.18 ? pow(1.0 - d / 0.18, 3.0) * uMotion : 0.0;
      alpha = 0.14 + 0.2 * vSel + pulse * (0.7 + 0.6 * vSel);
    } else {
      float dash = step(0.45, fract(vT * 18.0));
      alpha = (0.24 + 0.36 * vSel) * dash;
    }
    vec3 col = mix(uBlue, uCyan, 0.45 + 0.55 * max(pulse, vSel));
    col = mix(col, uIce, pulse * 0.5);
    alpha *= vReveal * uScene3 * dim;
    gl_FragColor = vec4(col * alpha, alpha);
  }
`;

const pointVertex = (count: number) => /* glsl */ `
  ${common(count)}
  uniform float uPixelRatio;
  attribute float aSeed;
  attribute float aSize;
  varying float vReveal;
  varying float vSel;
  varying float vCore;
  void main() {
    float rev = clusterReveal();
    float sel = clusterSel();
    // Slow swirl of the cloud around its core.
    float a = uTime * uMotion * (0.12 + aSeed * 0.1);
    float c = cos(a), s = sin(a);
    vec3 o = vec3(position.x * c - position.z * s, position.y, position.x * s + position.z * c);
    o *= smoothstep(0.0, 1.0, rev) * (1.0 + 0.18 * sel);
    vec4 mv = modelViewMatrix * vec4(clusterEnd() + o, 1.0);
    vReveal = rev;
    vSel = sel;
    vCore = aSize > 8.0 ? 1.0 : 0.0;
    float flicker = 0.8 + 0.2 * sin(uTime * uMotion * (1.0 + aSeed * 2.0) + aSeed * 30.0);
    gl_PointSize = aSize * (1.0 + sel * 0.5) * flicker * uPixelRatio * (9.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const pointFragment = /* glsl */ `
  uniform float uScene3;
  uniform float uSelStrength;
  uniform vec3 uCyan;
  uniform vec3 uIce;
  varying float vReveal;
  varying float vSel;
  varying float vCore;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float halo = smoothstep(0.5, 0.0, d);
    float core = smoothstep(0.16, 0.0, d);
    float dim = 1.0 - uSelStrength * 0.45 * (1.0 - vSel);
    vec3 col = mix(uCyan, uIce, core * (0.35 + 0.65 * max(vSel, vCore)));
    float alpha = (halo * (0.3 + 0.25 * vCore) + core * 0.85) * (0.8 + 0.4 * vSel) * vReveal * uScene3 * dim;
    gl_FragColor = vec4(col * alpha, alpha);
  }
`;

interface ServiceClustersProps {
  shared: SharedUniforms;
  clusterUniforms: ClusterUniforms;
  count: number;
  pointsPerCluster: number;
  ref?: Ref<THREE.Group>;
}

/**
 * Scene 03: five service clusters wired to the brain. One line draw and one
 * point draw for the whole constellation; the parent group is positioned on
 * the brain by the scene controller.
 */
export default function ServiceClusters({ shared, clusterUniforms, count, pointsPerCluster, ref }: ServiceClustersProps) {
  const { points, lines } = useMemo(() => buildClusters(count, pointsPerCluster), [count, pointsPerCluster]);

  const [lineMat, pointMat] = useMemo(() => {
    const uniforms = { ...shared, ...clusterUniforms };
    const opts = {
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      // Premultiplied: colour already scaled by alpha in the shader.
      premultipliedAlpha: true,
    };
    return [
      new THREE.ShaderMaterial({ ...opts, vertexShader: lineVertex(count), fragmentShader: lineFragment }),
      new THREE.ShaderMaterial({ ...opts, vertexShader: pointVertex(count), fragmentShader: pointFragment }),
    ];
  }, [shared, clusterUniforms, count]);

  return (
    <group ref={ref} visible={false}>
      <lineSegments geometry={lines} material={lineMat} renderOrder={3} frustumCulled={false} raycast={() => null} />
      <points geometry={points} material={pointMat} renderOrder={4} frustumCulled={false} raycast={() => null} />
    </group>
  );
}
