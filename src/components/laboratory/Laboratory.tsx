"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import { mulberry32 } from "@/components/brain/noise";
import type { SharedUniforms } from "@/components/brain/uniforms";

export const FLOOR_Y = -1.55;
const RIB_COUNT = 22;
const RIB_RADIUS = 8.5;
const RIB_HEIGHT = 11;

/** Fine technical grid with a pool of light beneath the brain. */
const floorVertex = /* glsl */ `
  varying vec2 vXZ;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vXZ = w.xz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;
const floorFragment = /* glsl */ `
  uniform float uLab;
  uniform float uTime;
  uniform float uMotion;
  uniform vec3 uBlue;
  uniform vec3 uCyan;
  varying vec2 vXZ;
  float gridLine(vec2 p, float spacing, float width) {
    vec2 g = abs(fract(p / spacing - 0.5) - 0.5) / fwidth(p / spacing);
    return 1.0 - min(min(g.x, g.y) / width, 1.0);
  }
  void main() {
    float r = length(vXZ);
    float fade = exp(-r * 0.18);
    float grid = gridLine(vXZ, 0.6, 1.0) * 0.16 + gridLine(vXZ, 3.0, 1.2) * 0.22;
    float pool = exp(-r * r * 0.35);
    // Two thin calibration rings, one slowly sweeping.
    float ring1 = smoothstep(0.02, 0.0, abs(r - 1.9));
    float ang = atan(vXZ.y, vXZ.x);
    float sweep = 0.5 + 0.5 * sin(ang * 3.0 - uTime * 0.4 * uMotion);
    float ring2 = smoothstep(0.015, 0.0, abs(r - 2.6)) * (0.3 + 0.7 * sweep);
    vec3 col = uBlue * grid * fade + uCyan * (pool * 0.22 + ring1 * 0.35 + ring2 * 0.25);
    float a = (grid * fade + pool * 0.25 + ring1 * 0.4 + ring2 * 0.3) * uLab;
    gl_FragColor = vec4(col * uLab, a);
  }
`;

/** Soft volumetric shaft from the ceiling aperture down onto the brain. */
const coneVertex = /* glsl */ `
  varying float vH;
  varying float vEdge;
  void main() {
    vH = uv.y;
    vec3 n = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vEdge = abs(dot(n, normalize(-mv.xyz)));
    gl_Position = projectionMatrix * mv;
  }
`;
const coneFragment = /* glsl */ `
  uniform float uLab;
  uniform float uTime;
  uniform vec3 uCyan;
  varying float vH;
  varying float vEdge;
  void main() {
    float a = pow(vEdge, 2.0) * smoothstep(0.0, 0.9, vH) * 0.075;
    a *= 0.85 + 0.15 * sin(uTime * 0.7);
    a *= uLab;
    gl_FragColor = vec4(uCyan * a, a);
  }
`;

const dustVertex = /* glsl */ `
  attribute float aSeed;
  uniform float uTime;
  uniform float uMotion;
  uniform float uPixelRatio;
  varying float vA;
  void main() {
    vec3 p = position;
    float t = uTime * uMotion;
    p.y = mod(p.y + t * (0.05 + aSeed * 0.08) + 1.5, 6.5) - 1.5;
    p.x += sin(t * 0.3 + aSeed * 20.0) * 0.15;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vA = smoothstep(-1.5, -0.5, p.y) * (1.0 - smoothstep(4.0, 5.0, p.y)) * (0.25 + 0.75 * aSeed);
    gl_PointSize = (1.0 + aSeed * 1.5) * uPixelRatio * (6.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;
const dustFragment = /* glsl */ `
  uniform float uLab;
  uniform vec3 uCyan;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d) * vA * 0.35 * uLab;
    gl_FragColor = vec4(uCyan * a, a);
  }
`;

/** Line/rib materials whose opacity follows the environment reveal. */
function createLabMaterials() {
  const additive = { transparent: true, blending: THREE.AdditiveBlending, depthWrite: false };
  const rib = new THREE.MeshBasicMaterial({ color: "#070B16", transparent: true });
  const edge = new THREE.MeshBasicMaterial({ color: "#00D9FF", ...additive });
  const ring = new THREE.MeshBasicMaterial({ color: "#00D9FF", ...additive });
  const outerRing = new THREE.MeshBasicMaterial({ color: "#2563EB", ...additive });
  return {
    rib,
    edge,
    ring,
    outerRing,
    fade(lab: number) {
      rib.opacity = lab;
      edge.opacity = 0.5 * lab;
      ring.opacity = 0.7 * lab;
      outerRing.opacity = 0.4 * lab;
    },
  };
}

interface LaboratoryProps {
  uniforms: SharedUniforms;
  dust: number;
  reflections: boolean;
  /** False on small screens: drops the ribs and ceiling rings and shrinks the floor to what the camera sees. */
  full?: boolean;
}

export default function Laboratory({ uniforms, dust, reflections, full = true }: LaboratoryProps) {
  const lineMats = useMemo(() => createLabMaterials(), []);

  const { ribs, edges } = useMemo(() => {
    const ribs: { pos: [number, number, number]; rot: number }[] = [];
    const edges: { pos: [number, number, number]; rot: number }[] = [];
    // Arc of architectural ribs behind and around the brain (open toward the viewer).
    for (let i = 0; i < RIB_COUNT; i++) {
      const a = THREE.MathUtils.lerp(-2.25, 2.25, i / (RIB_COUNT - 1)) + Math.PI;
      const x = Math.sin(a) * RIB_RADIUS;
      const z = Math.cos(a) * RIB_RADIUS;
      const y = FLOOR_Y + RIB_HEIGHT / 2;
      ribs.push({ pos: [x, y, z], rot: a });
      const ix = Math.sin(a) * (RIB_RADIUS - 0.32);
      const iz = Math.cos(a) * (RIB_RADIUS - 0.32);
      edges.push({ pos: [ix, y, iz], rot: a });
    }
    return { ribs, edges };
  }, []);

  const floorMat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: floorVertex,
        fragmentShader: floorFragment,
        uniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        premultipliedAlpha: true,
      }),
    [uniforms],
  );

  const coneMat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: coneVertex,
        fragmentShader: coneFragment,
        uniforms,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        premultipliedAlpha: true,
      }),
    [uniforms],
  );

  const dustGeo = useMemo(() => {
    const rand = mulberry32(9);
    const pos = new Float32Array(dust * 3);
    const seed = new Float32Array(dust);
    for (let i = 0; i < dust; i++) {
      const r = 1.2 + rand() * 6;
      const a = rand() * Math.PI * 2;
      pos.set([Math.cos(a) * r, -1.5 + rand() * 6.5, Math.sin(a) * r - 1], i * 3);
      seed[i] = rand();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    return g;
  }, [dust]);

  const dustMat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: dustVertex,
        fragmentShader: dustFragment,
        uniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        premultipliedAlpha: true,
      }),
    [uniforms],
  );

  useFrame(() => lineMats.fade(uniforms.uLab.value));

  return (
    <group>
      {/* Floor: reflective slab on capable GPUs, grid overlay everywhere. */}
      {reflections ? (
        <mesh rotation-x={-Math.PI / 2} position-y={FLOOR_Y - 0.002} raycast={() => null}>
          <circleGeometry args={[30, 64]} />
          <MeshReflectorMaterial
            color="#04060B"
            metalness={0.6}
            roughness={0.9}
            blur={[400, 120]}
            resolution={512}
            mixBlur={1}
            mixStrength={1.4}
            mirror={0.6}
            depthScale={0}
          />
        </mesh>
      ) : null}
      <mesh rotation-x={-Math.PI / 2} position-y={FLOOR_Y} material={floorMat} raycast={() => null}>
        {/* The grid has faded out (exp(-r * 0.18)) well before r = 12. */}
        <circleGeometry args={full ? [30, 64] : [12, 48]} />
      </mesh>

      {/* Architectural ribs and their thin illuminated inner edges. */}
      {full && ribs.map(({ pos, rot }, i) => (
        <mesh key={`rib-${i}`} position={pos} rotation-y={rot} material={lineMats.rib} raycast={() => null}>
          <boxGeometry args={[0.5, RIB_HEIGHT, 0.6]} />
        </mesh>
      ))}
      {full && edges.map(({ pos, rot }, i) => (
        <mesh key={`edge-${i}`} position={pos} rotation-y={rot} material={lineMats.edge} raycast={() => null}>
          <boxGeometry args={[0.018, RIB_HEIGHT, 0.018]} />
        </mesh>
      ))}

      {/* Ceiling aperture rings (above a portrait camera's view). */}
      {full ? (
        <>
          <mesh position-y={4.4} rotation-x={Math.PI / 2} material={lineMats.ring} raycast={() => null}>
            <torusGeometry args={[2.4, 0.012, 8, 160]} />
          </mesh>
          <mesh position-y={4.4} rotation-x={Math.PI / 2} material={lineMats.outerRing} raycast={() => null}>
            <torusGeometry args={[4.6, 0.008, 8, 200]} />
          </mesh>
        </>
      ) : null}

      {/* Light shaft. ConeGeometry apex points +y; uv.y = 1 at the apex. */}
      <mesh position-y={1.4} material={coneMat} raycast={() => null}>
        <coneGeometry args={[2.6, 6, full ? 64 : 32, 1, true]} />
      </mesh>

      <points geometry={dustGeo} material={dustMat} raycast={() => null} />
    </group>
  );
}
