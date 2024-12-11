import React from "react";
import RotatingRockCanvas from "@/components/ui/RotatingRock";

export const metadata = {
  title: "Rock - henryvendittelli.com",
  description: "3d rock."
};

export default function Page() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <RotatingRockCanvas />
    </main>
  );
}
