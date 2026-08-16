"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface NavbarProps {
  navItems: {
    name: string;
    path: string;
  }[];
}

export const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [setTheme]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const activePath = pathname.split("/")[1];
    if (activePath === "projects") {
      setActiveItem("/projects");
    } else {
      setActiveItem(`/${activePath}`);
    }
  }, [pathname]);

  // Close mobile nav on resize to desktop
  useEffect(() => {
    if (isDesktop) setIsOpen(false);
  }, [isDesktop]);

  // Close on outside click
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

  const handleNavItemClick = (path: string) => {
    setActiveItem(path);
    setIsOpen(false);
  };

  if (!mounted) return null;

  const themeToggle =
    resolvedTheme === "dark" ? (
      <MdLightMode
        onClick={toggleTheme}
        className="size-6 cursor-pointer hover:text-yellow-500"
      />
    ) : (
      <MdDarkMode
        onClick={toggleTheme}
        className="size-6 cursor-pointer hover:text-accent-hover"
      />
    );

  return (
    <div className="bg-background/10 w-full md:w-[calc(67vw)] lg:w-[calc(50vw)] xl:w-1/3 fixed top-4 z-50 px-4 flex justify-between h-16 backdrop-blur rounded-3xl">
      {/* Desktop nav */}
      <div className="hidden md:flex w-full h-full justify-between items-center">
        <Link
          href="/"
          onClick={() => handleNavItemClick("/")}
          className="text-foreground text-xl font-bold hover:text-accent-hover"
        >
          henryvendittelli.com/
        </Link>
        <div className="gap-4 flex items-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => handleNavItemClick(item.path)}
              className={`text-foreground text-lg px-2 pb-[2px] ${
                activeItem === item.path
                  ? "border border-r-0 border-l-0 border-foreground"
                  : "hover:text-accent-hover"
              }`}
            >
              {item.name}
            </Link>
          ))}
          {themeToggle}
        </div>
      </div>
      {/* Mobile nav */}
      <div className="md:hidden flex w-full h-full justify-between items-center">
        <Link
          href="/"
          onClick={() => handleNavItemClick("/")}
          className="text-foreground text-xl font-bold hover:text-accent-hover"
        >
          henryvendittelli.com/
        </Link>
        <div className="flex items-center gap-4">
          {themeToggle}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-bold text-3xl hover:text-accent-hover"
          >
            {isOpen ? (
              <IoMdClose aria-label="close navigation" />
            ) : (
              <RiMenu3Fill aria-label="open navigation" />
            )}
          </button>
        </div>
      </div>
      <div
        ref={dropdownRef}
        className={`absolute flex-col top-full z-50 right-[24px] bg-background rounded-b-lg nav-dropdown ${
          isOpen ? "open" : ""
        }`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            onClick={() => handleNavItemClick(item.path)}
            className={`text-foreground px-3 my-1 flex justify-end h-8 text-lg ${
              activeItem === item.path
                ? "border border-r-0 border-l-0 border-t-0 border-foreground"
                : "hover:text-accent-hover"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
