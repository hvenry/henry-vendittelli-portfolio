"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { useRef, forwardRef } from 'react';
import { OrbitControls, useGLTF, Environment, } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// export const metadata = {
//   title: "Rock - henryvendittelli.com",
//   description: "3d rock."
// };

const RockModel = forwardRef((props, ref) => {
  const { scene } = useGLTF("/models/rock.glb");
  return <primitive object={scene} ref={ref} {...props} />;
});

const RotatingRock = () => {
  const rockRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (rockRef.current) {
      // Rotate the object on the Y-axis
      rockRef.current.rotation.y += 0.005; // Adjust speed by changing this value
    }
  });

  return <RockModel ref={rockRef} />;
};

export default function Page() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      {/* <p> this is my rock </p> */}
      <Canvas
        style={{ height: "80%", width: "100%" }}>
        <Environment preset="studio" />
        <RotatingRock />
        <OrbitControls
          target={[0, 0, 0]} // Set the target the camera orbits around
          minDistance={1} // Minimum zoom distance
          maxDistance={1.5} // Maximum zoom distance
        />
      </Canvas>
    </main>
  );
}
