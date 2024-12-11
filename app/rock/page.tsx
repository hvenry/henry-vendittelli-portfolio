"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, } from "@react-three/drei";

// export const metadata = {
//   title: "Rock - henryvendittelli.com",
//   description: "3d rock."
// };

// A component to load and display the GLB model

const RockModel = () => {
  const { scene } = useGLTF("/models/rock.glb");
  return <primitive object={scene} />;
};

export default function Page() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <p> this is my rock </p>
      <Canvas style={{ height: "100%", width: "100%" }}>
        <Environment preset="studio" />
        <RockModel />
        <OrbitControls />
      </Canvas>
    </main>
  );
}
