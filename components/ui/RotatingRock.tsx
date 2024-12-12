"use client";

import * as THREE from "three";
import React, { useRef, forwardRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

// RockModel Component
const RockModel = forwardRef((props, ref) => {
  const { scene } = useGLTF("/models/rock.glb");
  return <primitive object={scene} ref={ref} {...props} />;
});

RockModel.displayName = "RockModel";

// RotatingRock Component
const RotatingRock = () => {
  const rockRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (rockRef.current) {
      rockRef.current.rotation.y += 0.005;
    }
  });

  return <RockModel ref={rockRef} />;
};

// RotatingRockCanvas Component
const RotatingRockCanvas = () => {
  return (
    <Canvas style={{ height: "80%", width: "100%" }}>
      <Environment preset="studio" />
      <RotatingRock />
      <OrbitControls
        target={[0, 0, 0]}
        minDistance={1}
        maxDistance={1.5}
      />
    </Canvas>
  );
};

export default RotatingRockCanvas;

