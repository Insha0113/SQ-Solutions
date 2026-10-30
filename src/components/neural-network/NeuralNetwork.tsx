"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
import { mulberry32 } from "@/components/brain/noise";
import type { SharedUniforms } from "@/components/brain/uniforms";

const SEGMENTS = 6;
const NEIGHBOURS = 3;
const MAX_LINK = 0.42;

/**
 * Builds nodes sampled on and just beneath the cortex, then links each node to
 * its nearest neighbours with gently curved pathways that bow toward the core.
 */
function buildNetwork(geometry: THREE.BufferGeometry, count: number) {
  const rand = mulberry32(42);
  const sampler = new MeshSurfaceSampler(new THREE.Mesh(geometry)).build();
  const p = new THREE.Vector3();
  const n = new THREE.Vector3();

  const nodes = new Float32Array(count * 3);
  const nodeSeed = new Float32Array(count);
  const nodeSize = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    sampler.sample(p, n);
    const inset = rand() < 0.6 ? rand() * 0.04 : 0.08 + rand() * 0.32;
    p.addScaledVector(n, -inset);
    nodes.set([p.x, p.y, p.z], i * 3);
    nodeSeed[i] = rand();
    nodeSize[i] = 0.6 + rand() * rand() * 2.2;
  }

  // k-nearest links (O(n²) once at load; n ≤ 1400).
  const seen = new Set<number>();
  const edges: [number, number][] = [];
  const bestD = new Float32Array(NEIGHBOURS);
  const bestJ = new Int32Array(NEIGHBOURS);
  for (let i = 0; i < count; i++) {
    const ax = nodes[i * 3], ay = nodes[i * 3 + 1], az = nodes[i * 3 + 2];
    bestD.fill(Infinity);
    bestJ.fill(-1);
    for (let j = 0; j < count; j++) {
      if (j === i) continue;
      const dx = nodes[j * 3] - ax, dy = nodes[j * 3 + 1] - ay, dz = nodes[j * 3 + 2] - az;
      const d = dx * dx + dy * dy + dz * dz;
      if (d >= bestD[NEIGHBOURS - 1]) continue;
      let k = NEIGHBOURS - 1;
      while (k > 0 && bestD[k - 1] > d) {
        bestD[k] = bestD[k - 1];
        bestJ[k] = bestJ[k - 1];
        k--;
      }
      bestD[k] = d;
      bestJ[k] = j;
    }
    for (let k = 0; k < NEIGHBOURS; k++) {
      const j = bestJ[k];
      if (j < 0 || bestD[k] > MAX_LINK * MAX_LINK) continue;
      const key = i < j ? i * count + j : j * count + i;
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push([i, j]);
    }
  }

  const vCount = edges.length * SEGMENTS * 2;
  const positions = new Float32Array(vCount * 3);
  const aT = new Float32Array(vCount);
  const aSeed = new Float32Array(vCount);
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Vector3();
  const curve = new THREE.QuadraticBezierCurve3(a, c, b);
  const tmp = new THREE.Vector3();
  let v = 0;
  for (const [i, j] of edges) {
    a.fromArray(nodes, i * 3);
    b.fromArray(nodes, j * 3);
    c.addVectors(a, b).multiplyScalar(0.5).multiplyScalar(0.9);
    const seed = rand();
    for (let s = 0; s < SEGMENTS; s++) {
      for (const t of [s / SEGMENTS, (s + 1) / SEGMENTS]) {
        curve.getPoint(t, tmp);
        positions.set([tmp.x, tmp.y, tmp.z], v * 3);
        aT[v] = t;
        aSeed[v] = seed;
        v++;
      }
    }
  }

  const lines = new THREE.BufferGeometry();
  lines.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  lines.setAttribute("aT", new THREE.BufferAttribute(aT, 1));
  lines.setAttribute("aSeed", new THREE.BufferAttribute(aSeed, 1));

  const points = new THREE.BufferGeometry();
  points.setAttribute("position", new THREE.BufferAttribute(nodes, 3));
  points.setAttribute("aSeed", new THREE.BufferAttribute(nodeSeed, 1));
  points.setAttribute("aSize", new THREE.BufferAttribute(nodeSize, 1));

  return { lines, points };
}

const proximity = /* glsl */ `
  uniform vec3 uPointer;
  uniform float uPointerStrength;
  uniform vec3 uFocus;
  uniform float uFocusStrength;
  float proximityGlow(vec3 local, vec3 world) {
    float dp = distance(world, uPointer);
    float df = distance(local, uFocus);
    return exp(-dp * dp * 8.0) * uPointerStrength + exp(-df * df * 4.0) * uFocusStrength * 1.4;
  }
`;

const lineVertex = /* glsl */ `
  attribute float aT;
  attribute float aSeed;
  varying float vT;
  varying float vSeed;
  varying float vGlow;
  ${proximity}
  void main() {
    vT = aT;
    vSeed = aSeed;
    vec4 w = modelMatrix * vec4(position, 1.0);
    vGlow = proximityGlow(position, w.xyz);
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;

const lineFragment = /* glsl */ `
  uniform float uTime;
  uniform float uActivation;
  uniform float uReveal;
  uniform float uMotion;
  uniform vec3 uBlue;
  uniform vec3 uCyan;
  uniform vec3 uIce;
  varying float vT;
  varying float vSeed;
  varying float vGlow;
  void main() {
    float lit = smoothstep(vSeed - 0.05, vSeed, uActivation);
    float speed = 0.16 + fract(vSeed * 7.13) * 0.32;
    float t = fract(vSeed * 3.7) > 0.5 ? vT : 1.0 - vT;
    float head = fract(uTime * speed + vSeed * 13.0) * 1.6 - 0.3;
    float d = head - t;
    float pulse = d > 0.0 && d < 0.2 ? pow(1.0 - d / 0.2, 3.0) : 0.0;
    float glow = clamp(vGlow, 0.0, 1.0);
    // Pathways near the focused region light up and carry stronger pulses.
    lit = max(lit, glow);
    pulse *= lit * uMotion * (1.0 + glow * 1.5);
    vec3 col = mix(uBlue, uCyan, 0.35 + 0.65 * max(pulse, glow));
    col = mix(col, uIce, pulse * 0.45);
    float alpha = (0.035 + 0.2 * lit + 0.85 * pulse + 0.55 * glow) * uReveal;
    gl_FragColor = vec4(col * alpha, alpha);
  }
`;

const pointVertex = /* glsl */ `
  attribute float aSeed;
  attribute float aSize;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uActivation;
  uniform float uMotion;
  varying float vSeed;
  varying float vGlow;
  varying float vLit;
  ${proximity}
  void main() {
    vSeed = aSeed;
    vec4 w = modelMatrix * vec4(position, 1.0);
    vGlow = clamp(proximityGlow(position, w.xyz), 0.0, 1.0);
    vLit = smoothstep(aSeed - 0.08, aSeed, uActivation);
    vec4 mv = viewMatrix * w;
    float flicker = 0.75 + 0.25 * sin(uTime * uMotion * (0.8 + aSeed * 2.0) + aSeed * 40.0);
    gl_PointSize = aSize * (1.0 + vGlow * 1.6) * flicker * uPixelRatio * (9.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const pointFragment = /* glsl */ `
  uniform float uReveal;
  uniform vec3 uCyan;
  uniform vec3 uIce;
  varying float vSeed;
  varying float vGlow;
  varying float vLit;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float halo = smoothstep(0.5, 0.0, d);
    float core = smoothstep(0.16, 0.0, d);
    vec3 col = mix(uCyan, uIce, core * (0.4 + 0.6 * vGlow));
    float alpha = (halo * 0.35 + core * 0.8) * (0.25 + 0.75 * max(vLit, vGlow)) * uReveal;
    gl_FragColor = vec4(col * alpha, alpha);
  }
`;

interface NeuralNetworkProps {
  geometry: THREE.BufferGeometry;
  uniforms: SharedUniforms;
  count: number;
}

export default function NeuralNetwork({ geometry, uniforms, count }: NeuralNetworkProps) {
  const { lines, points } = useMemo(() => buildNetwork(geometry, count), [geometry, count]);

  const [lineMat, pointMat] = useMemo(() => {
    const common = {
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      // Premultiplied: colour already scaled by alpha in the shader.
      premultipliedAlpha: true,
    };
    return [
      new THREE.ShaderMaterial({ ...common, vertexShader: lineVertex, fragmentShader: lineFragment }),
      new THREE.ShaderMaterial({ ...common, vertexShader: pointVertex, fragmentShader: pointFragment }),
    ];
  }, [uniforms]);

  return (
    <>
      <lineSegments geometry={lines} material={lineMat} renderOrder={1} raycast={() => null} />
      <points geometry={points} material={pointMat} renderOrder={2} raycast={() => null} />
    </>
  );
}
