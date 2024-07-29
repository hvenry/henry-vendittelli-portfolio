"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export const Navbar = ({
  navItems,
}: {
  navItems: {
    name: string;
    path: string;
  }[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<null | string>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // listener for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [setTheme]);

  // toggle between themes
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  // handle resize of nav
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

  // account for clicks outside nav
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // handle click of nav item
  const handleNavItemClick = (path: string) => {
    setActiveItem(path);
    setIsOpen(false);
  };

  // if not mounted, don't render
  if (!mounted) return null;

  return (
    <div className="bg-gray-500 bg-opacity-5 w-[calc(100vw-32px)] lg:w-[calc(50vw-32px)] md:w-[calc(67vw-32px)] fixed top-4 z-10 px-4 flex justify-between items-center h-16 backdrop-blur rounded-3xl">
      {/* medium or larger nav */}
      <div className="hidden md:flex w-full h-full justify-between items-center">
        <Link href={"/"} legacyBehavior>
          <a
            onClick={() => handleNavItemClick("/")}
            className="text-nav text-xl font-bold hover:text-blue-300"
          >
            henryvendittelli.com/
          </a>
        </Link>
        <div className="gap-4 flex items-center">
          {navItems.map((item, index) => (
            <Link key={index} href={item.path} legacyBehavior>
              <a
                onClick={() => handleNavItemClick(item.path)}
                className={`text-nav text-lg px-2 pb-[2px] ${
                  activeItem === item.path
                    ? "border border-r-0 border-l-0 border-primary"
                    : "hover:text-blue-300"
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
          {resolvedTheme === "dark" ? (
            <MdLightMode onClick={toggleTheme} className="size-6 cursor-pointer icon-nav" />
          ) : (
            <MdDarkMode onClick={toggleTheme} className="size-6 cursor-pointer icon-nav" />
          )}
        </div>
      </div>
      {/* small nav */}
      <div className="md:hidden flex w-full h-full justify-between items-center">
        <Link href={"/"} legacyBehavior>
          <a
            onClick={() => handleNavItemClick("/")}
            className="text-nav text-xl font-bold hover:text-blue-300"
          >
            henryvendittelli.com/
          </a>
        </Link>
        <div className="flex items-center gap-4">
          {resolvedTheme === "dark" ? (
            <MdLightMode onClick={toggleTheme} className="size-6 cursor-pointer icon-nav" />
          ) : (
            <MdDarkMode onClick={toggleTheme} className="size-6 cursor-pointer icon-nav" />
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-bold text-3xl hover:text-blue-300 icon-nav"
          >
            {isOpen ? <IoMdClose /> : <RiMenu3Fill />}
          </button>
        </div>
      </div>
      <div
        ref={dropdownRef}
        className={`absolute flex-col top-full z-20 right-[24px] bg-primary rounded-b-lg nav-dropdown ${isOpen ? "open" : ""}`}
      >
        {navItems.map((item, index) => (
          <Link key={index} href={item.path} legacyBehavior>
            <a
              onClick={() => handleNavItemClick(item.path)}
              className={`text-nav px-3 my-1 flex justify-end h-8 text-lg ${
                activeItem === item.path
                  ? "border border-r-0 border-l-0 border-t-0 border-primary"
                  : "hover:text-blue-300"
              }`}
            >
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
