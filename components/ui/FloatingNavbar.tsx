"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    path: string;
  }[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeItem, setActiveItem] = useState<null | string>(null);

  // update active item whenever pathname changes
  useEffect(() => {
    setActiveItem(pathname); 
  }, [pathname]);

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
    <div className="w-[calc(100vw-32px)] lg:w-[calc(50vw-32px)] md:w-[calc(67vw-32px)] fixed top-4 z-10 px-4 flex justify-between items-center h-16 bg-black bg-opacity-50 backdrop-blur-sm border-4 border-black drop-shadow-lg">
      {/* big navbar */}
      <div className="hidden md:flex w-full h-full justify-between items-center">
        {/* home link */}
        <Link href={"/"} legacyBehavior>
          <a
            onClick={() => setActiveItem(null)}
            className="text-white text-xl font-bold hover:text-blue-300"
          >
            henryvendittelli.com/
          </a>
        </Link>
        {/* page links */}
        <div>
          {navItems.map((item, index) => (
            <Link key={index} href={item.path} legacyBehavior>
              <a
                className={`text-white text-lg px-4 hover:text-blue-300 ${
                  activeItem === item.path
                    ? "border border-r-0 border-l-0 border-neutral-300"
                    : ""
                }`}
              >
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
          {isOpen ? <IoMdClose /> : <RiMenu3Fill />}
        </button>
      </div>
      {/* Conditionally visible dropdown content */}
      {isOpen && (
        <div className="absolute flex-col top-full z-20 right-0 bg-black">
          {navItems.map((item, index) => (
            <Link key={index} href={item.path} legacyBehavior>
              <a
                className={`px-4 flex justify-end text-white h-8 text-lg hover:text-blue-300 ${
                  activeItem === item.path
                    ? "border border-r-0 border-l-0 border-t-0 border-white"
                    : ""
                }`}
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
