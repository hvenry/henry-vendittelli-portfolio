"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    path: string;
  }[];
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // handle case where screen is extended to a larger size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-[calc(100vw-32px)] lg:w-[calc(50vw-32px)] md:w-[calc(67vw-32px)] fixed top-4 z-10 px-4 flex justify-between items-center h-16 bg-black bg-opacity-50 backdrop-blur">
      {/* big navbar */}
      <div className="hidden md:flex w-full h-full justify-between items-center">
        {/* home link */}
        <Link href={"/"} legacyBehavior>
          <a className="text-white text-xl font-bold hover:text-blue-300">
            henryvendittelli.com/
          </a>
        </Link>
        {/* page links */}
        <div>
          {navItems.map((item, index) => (
            <Link key={index} href={item.path} legacyBehavior>
              <a className="text-white text-lg pl-8 hover:text-blue-300">
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
      {/* dropdown navbar */}
      {/* Toggle button and dropdown navbar visible only on small screens */}
      <div className="md:hidden flex w-full h-full justify-between items-center">
        <Link href={"/"} legacyBehavior>
          <a className="text-white text-xl font-bold hover:text-blue-300">
            henryvendittelli.com/
          </a>
        </Link>
        {/* Always visible toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white font-bold text-3xl hover:text-blue-300"
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {/* Conditionally visible dropdown content */}
      {isOpen && (
        <div className="absolute flex-col top-full z-20 right-0 bg-black">
          {navItems.map((item, index) => (
            <Link key={index} href={item.path} legacyBehavior>
              <a
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 flex justify-end text-white h-8 text-lg hover:text-blue-300"
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
