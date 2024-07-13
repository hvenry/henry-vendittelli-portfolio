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
    <div className="w-[calc(100vw-32px)] md:w-[calc(50vw-32px)] fixed top-4 z-10 px-4 flex justify-between items-center h-16 bg-black bg-opacity-80 backdrop-blur-lg">
      {/* home link */}
      <Link href={"/"} legacyBehavior>
        <a className="text-white text-xl font-bold hover:text-blue-300">henryvendittelli.com/</a>
      </Link>
      {/* page links */}
      <div>
        {navItems.map((item, index) => (
          <Link key={index} href={item.path} legacyBehavior>
            <a className="text-white text-lg pl-8 hover:text-blue-300">{item.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};
