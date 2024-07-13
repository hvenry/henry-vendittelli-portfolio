"use client";
import React from "react";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    path: string;
  }[];
}) => {
  return (
    <div className="w-full fixed top-4 z-10 mb-4 flex justify-between items-center h-12 bg-black bg-opacity-60 backdrop-blur-lg">
      {/* home link */}
      <Link href={"/"} legacyBehavior>
        <a className="text-white hover:text-blue-300">henry</a>
      </Link>
      {/* page links */}
      <div>
        {navItems.map((item, index) => (
          <Link key={index} href={item.path} legacyBehavior>
            <a className="text-white hover:text-blue-300">{item.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};
