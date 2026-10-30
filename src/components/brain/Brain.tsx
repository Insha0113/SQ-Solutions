"use client";

import { useMemo } from "react";
import * as THREE from "three";
import type { ThreeEvent } from "@react-three/fiber";
import type { SharedUniforms } from "./uniforms";

const vertex = /* glsl */ `
  attribute float aFold;
  varying vec3 vN;
  varying vec3 vWorld;
  varying vec3 vLocal;
  varying float vFold;
  void main() {
    vFold = aFold;
    vLocal = position;
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;

const fragment = /* glsl */ `
  uniform float uTime;
  uniform float uReveal;
  uniform float uActivation;
  uniform float uPointerStrength;
  uniform float uFocusStrength;
  uniform float uBack;
  uniform vec3 uPointer;
  uniform vec3 uFocus;
  uniform vec3 uDeep;
  uniform vec3 uBlue;
  uniform vec3 uCyan;
  uniform vec3 uIce;
  varying vec3 vN;
  varying vec3 vWorld;
  varying vec3 vLocal;
  varying float vFold;

  void main() {
    vec3 N = normalize(vN);
    if (uBack > 0.5) N = -N;
    vec3 V = normalize(cameraPosition - vWorld);
    float ndv = clamp(dot(N, V), 0.0, 1.0);
    float fres = pow(1.0 - ndv, 2.4);

    vec3 L = normalize(vec3(-0.45, 0.9, 0.55));
    float wrap = dot(N, L) * 0.5 + 0.5;
    float spec = pow(max(dot(reflect(-L, N), V), 0.0), 42.0);

    // Sulci glow faintly, as if lit from within.
    float sulcus = 1.0 - smoothstep(0.12, 0.85, vFold);
    float flow = 0.5 + 0.5 * sin(vLocal.z * 3.4 - uTime * 0.8 + sin(vLocal.x * 4.0 + uTime * 0.35) * 1.3);

    vec3 col = uDeep * (0.35 + 0.45 * wrap);
    col += mix(uBlue, uCyan, fres) * fres * 1.25;
    col += uCyan * sulcus * (0.06 + 0.3 * flow * uActivation);
    col += uIce * spec * 0.45 * smoothstep(0.45, 1.0, vFold);

    float dp = distance(vWorld, uPointer);
    float pg = exp(-dp * dp * 6.0) * uPointerStrength;
    float df = distance(vLocal, uFocus);
    float fg = exp(-df * df * 4.0) * uFocusStrength;
    // Focused region: brighter sulci plus a slow scan band so the highlight reads clearly.
    float scan = 0.65 + 0.35 * sin(df * 18.0 - uTime * 3.0);
    col += uCyan * pg * (0.25 + 0.75 * sulcus);
    col += mix(uCyan, uIce, 0.25) * fg * (0.45 + 1.1 * sulcus) * scan;

    float alpha = 0.12 + fres * 0.72 + sulcus * 0.06 + pg * 0.22 + fg * 0.4;
    alpha *= uReveal;
    if (uBack > 0.5) alpha *= 0.3;
    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`;

interface BrainProps {
  geometry: THREE.BufferGeometry;
  uniforms: SharedUniforms;
  backFaces: boolean;
  onPointerMove?: (e: ThreeEvent<PointerEvent>) => void;
  onPointerLeave?: () => void;
}

export default function Brain({ geometry, uniforms, backFaces, onPointerMove, onPointerLeave }: BrainProps) {
  const [front, back] = useMemo(() => {
    const make = (isBack: boolean) =>
      new THREE.ShaderMaterial({
        vertexShader: vertex,
        fragmentShader: fragment,
        uniforms: { ...uniforms, uBack: { value: isBack ? 1 : 0 } },
        transparent: true,
        depthWrite: false,
        side: isBack ? THREE.BackSide : THREE.FrontSide,
      });
    return [make(false), make(true)];
  }, [uniforms]);

  return (
    <>
      {backFaces && <mesh geometry={geometry} material={back} renderOrder={0} />}
      <mesh
        geometry={geometry}
        material={front}
        renderOrder={3}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      />
    </>
  );
}
