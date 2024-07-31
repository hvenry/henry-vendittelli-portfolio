"use client";
import { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={scrollToTop}
        className="rounded-3xl px-5 py-1 border-2 border-primary text-3xl font-bold hover:text-blue-300 hover:border-blue-300"
        aria-label="Go to top"
      >
        <div className="flex items-center justify-center"><MdArrowUpward size={28}/></div>
      </button>
    </div>
  );
}
