"use client";

import * as THREE from "three";
import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useTheme } from "next-themes";

const studioUrl =
  "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr";

function RockModel({ ref }: { ref?: React.Ref<THREE.Object3D> }) {
  const { scene } = useGLTF("/models/rock.glb");
  const clone = useMemo(() => scene.clone(), [scene]);
  return <primitive object={clone} ref={ref} />;
}

function RotatingRock() {
  const rockRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (rockRef.current) {
      rockRef.current.rotation.y += 0.005;
    }
  });

  return <RockModel ref={rockRef} />;
}

function SceneLighting({ isLight }: { isLight: boolean }) {
  return (
    <>
      <ambientLight intensity={isLight ? 4.0 : 0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={isLight ? 6.0 : 1.2}
      />
      <directionalLight
        position={[-3, 2, -4]}
        intensity={isLight ? 5.0 : 0.5}
      />
      <directionalLight
        position={[0, -3, 3]}
        intensity={isLight ? 3.0 : 0.3}
      />
    </>
  );
}

export default function RotatingRockCanvas() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <Canvas
      style={{ height: "100%", width: "100%" }}
      dpr={[1, 2]}
      fallback={<div>WebGL not supported</div>}
    >
      <Suspense fallback={null}>
        <Environment files={studioUrl} environmentIntensity={isLight ? 5.0 : 1.0} />
      </Suspense>
      <SceneLighting isLight={isLight} />
      <RotatingRock />
      <OrbitControls target={[0, 0, 0]} minDistance={1.1} maxDistance={1.1} />
    </Canvas>
  );
}

useGLTF.preload("/models/rock.glb");
