import * as THREE from "three";
import { mergeGeometries, mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { createNoise3D } from "./noise";

/**
 * Procedural, anatomically proportioned brain:
 * two cerebral hemispheres (flat medial walls, temporal lobes, lateral fissure,
 * noise-driven gyri/sulci), a foliated cerebellum and a brainstem.
 *
 * Coordinates: +x = right, +y = up, +z = anterior (front). Length ≈ 2.2 units.
 * Every vertex carries `aFold` (0 = deep sulcus, 1 = gyral crest) for shading.
 *
 * This is the fallback until a licensed scan (GLB) is placed in /public/models.
 */

const smoothstep = (e0: number, e1: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

function icosphere(detail: number) {
  const g = new THREE.IcosahedronGeometry(1, detail);
  g.deleteAttribute("normal");
  g.deleteAttribute("uv");
  return mergeVertices(g);
}

function buildHemisphere(side: 1 | -1, detail: number, noise: (x: number, y: number, z: number) => number) {
  const g = icosphere(detail);
  const pos = g.attributes.position as THREE.BufferAttribute;
  const fold = new Float32Array(pos.count);
  const v = new THREE.Vector3();
  const radial = new THREE.Vector3();
  const centerX = side * 0.22;

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    const mx = v.x * side; // > 0 lateral, < 0 medial

    // Ellipsoid with a flattened medial wall and underside.
    let sx = mx > 0 ? 0.66 : 0.2;
    let sy = v.y > 0 ? 0.74 : 0.5;
    const sz = 1.08;
    // Occipital pole is slightly lower and narrower than the frontal pole.
    if (v.z < 0) {
      sy *= 1 - 0.1 * -v.z;
      sx *= 1 - 0.08 * -v.z;
    }
    let x = v.x * sx;
    let y = v.y * sy;
    const z = v.z * sz;

    // Temporal lobe: lateral, low, mid-anterior bulge.
    const t = Math.exp(-((v.y + 0.45) ** 2) / 0.07 - ((v.z - 0.1) ** 2) / 0.22) * Math.max(mx, 0);
    x += side * 0.07 * t;
    y -= 0.1 * t;

    // Folding pattern: zero-crossings of warped noise become meandering sulci.
    const f = 2.35;
    let qx = x * f, qy = y * f, qz = z * f;
    const w = 0.42;
    const wx = noise(qx * 0.6 + 11.3, qy * 0.6, qz * 0.6);
    const wy = noise(qx * 0.6, qy * 0.6 + 7.1, qz * 0.6);
    const wz = noise(qx * 0.6, qy * 0.6, qz * 0.6 + 3.7);
    qx += w * wx; qy += w * wy; qz += w * wz;
    const n1 = Math.abs(noise(qx, qy, qz));
    const n2 = Math.abs(noise(qx * 2.15 + 5.2, qy * 2.15, qz * 2.15 - 1.3));
    let h = 0.78 * smoothstep(0.0, 0.3, n1) + 0.22 * smoothstep(0.0, 0.28, n2);

    // Lateral (Sylvian) fissure separating the temporal lobe.
    const yf = -0.16 + 0.2 * z;
    const fissure =
      Math.exp(-((y - yf) ** 2) / 0.0016) *
      smoothstep(0.78, 0.45, z) *
      smoothstep(-0.6, -0.25, z) *
      smoothstep(0.25, 0.55, mx);
    h = Math.min(h, 1 - fissure * 0.9);

    // Folds are shallower on the medial wall, which is mostly hidden.
    const depth = (mx > 0 ? 0.075 : 0.035) + 0.06 * fissure;
    radial.set(x, y, z).normalize();
    x += radial.x * depth * (h - 1);
    y += radial.y * depth * (h - 1);
    const zz = z + radial.z * depth * (h - 1);

    pos.setXYZ(i, x + centerX, y, zz);
    fold[i] = h;
  }

  g.setAttribute("aFold", new THREE.BufferAttribute(fold, 1));
  g.computeVertexNormals();
  return g;
}

function buildCerebellum(detail: number, noise: (x: number, y: number, z: number) => number) {
  const g = icosphere(Math.max(8, Math.round(detail * 0.6)));
  const pos = g.attributes.position as THREE.BufferAttribute;
  const fold = new Float32Array(pos.count);
  const v = new THREE.Vector3();
  const center = new THREE.Vector3(0, -0.55, -0.6);

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    // Vermis notch along the posterior midline.
    const notch = Math.exp(-(v.x * v.x) / 0.02) * smoothstep(0.0, -0.6, v.z) * 0.18;
    let x = v.x * 0.62;
    let y = v.y * (0.29 - notch * 0.4);
    let z = v.z * (0.4 - notch);

    // Folia: fine, roughly concentric ridges.
    const r = Math.sqrt(x * x + (y + 0.25) ** 2 + (z - 0.25) ** 2);
    const ph = r * 52 + 1.4 * noise(x * 3, y * 3, z * 3);
    const h = smoothstep(0.0, 0.55, Math.abs(Math.sin(ph)));
    const d = 0.02 * (h - 1);
    const len = Math.sqrt(x * x + y * y + z * z) || 1;
    x += (x / len) * d;
    y += (y / len) * d;
    z += (z / len) * d;

    pos.setXYZ(i, x + center.x, y + center.y, z + center.z);
    fold[i] = 0.35 + 0.65 * h;
  }

  g.setAttribute("aFold", new THREE.BufferAttribute(fold, 1));
  g.computeVertexNormals();
  return g;
}

function buildBrainstem() {
  const g = new THREE.CylinderGeometry(0.15, 0.09, 0.8, 28, 10, true);
  g.deleteAttribute("uv");
  g.rotateX(0.32);
  g.translate(0, -0.78, -0.18);
  const fold = new Float32Array(g.attributes.position.count).fill(0.85);
  g.setAttribute("aFold", new THREE.BufferAttribute(fold, 1));
  return g;
}

export function createProceduralBrain(detail = 40, seed = 7) {
  const noise = createNoise3D(seed);
  const parts = [
    buildHemisphere(1, detail, noise),
    buildHemisphere(-1, detail, noise),
    buildCerebellum(detail, noise),
    buildBrainstem(),
  ];
  const merged = mergeGeometries(parts, false);
  parts.forEach((p) => p.dispose());
  if (!merged) throw new Error("Brain geometry merge failed");
  merged.computeBoundingSphere();
  return merged;
}

/**
 * Normalise an imported scan (GLB) to the same space as the procedural brain:
 * centred, longest axis ≈ 2.2 units, with an `aFold` attribute present.
 */
export function normalizeBrainGeometry(geometries: THREE.BufferGeometry[]) {
  const clean = geometries.map((g) => {
    const c = new THREE.BufferGeometry();
    c.setAttribute("position", g.attributes.position.clone());
    if (g.index) c.setIndex(g.index.clone());
    return c;
  });
  const merged = mergeGeometries(clean, false);
  clean.forEach((c) => c.dispose());
  if (!merged) throw new Error("Brain model merge failed");

  merged.computeBoundingBox();
  const box = merged.boundingBox!;
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);
  merged.translate(-center.x, -center.y, -center.z);
  const s = 2.2 / Math.max(size.x, size.y, size.z);
  merged.scale(s, s, s);

  merged.computeVertexNormals();
  const fold = new Float32Array(merged.attributes.position.count).fill(0.7);
  merged.setAttribute("aFold", new THREE.BufferAttribute(fold, 1));
  merged.computeBoundingSphere();
  return merged;
}

/** Approximate anatomical anchor points used to light up regions of the brain. */
export const REGION_CENTERS: [number, number, number][] = [
  [-0.45, 0.35, 0.75], // 0 left frontal
  [0.45, 0.35, 0.75], // 1 right frontal
  [0.0, 0.7, -0.05], // 2 parietal (crown)
  [0.75, -0.3, 0.15], // 3 right temporal
  [0.0, 0.15, -1.0], // 4 occipital
  [0.0, -0.58, -0.62], // 5 cerebellum
];
