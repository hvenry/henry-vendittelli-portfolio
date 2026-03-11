"use client";

import * as THREE from "three";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function RockModel({ ref }: { ref?: React.Ref<THREE.Object3D> }) {
  const { scene } = useGLTF("/models/rock.glb");
  return <primitive object={scene.clone()} ref={ref} />;
}

const RotatingRock = () => {
  const rockRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (rockRef.current) {
      rockRef.current.rotation.y += 0.005;
    }
  });

  return <RockModel ref={rockRef} />;
};

const RotatingRockCanvas = () => {
  return (
    <Canvas style={{ height: "100%", width: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -2, -3]} intensity={0.4} />
      <RotatingRock />
      <OrbitControls target={[0, 0, 0]} minDistance={1.1} maxDistance={1.1} />
    </Canvas>
  );
};

export default RotatingRockCanvas;
