"use client";
import { useEffect } from "react";

export default function ViewportHeightSetter() {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", setViewportHeight);
    setViewportHeight();

    return () => window.removeEventListener("resize", setViewportHeight);
  }, []);

  return null;
}
