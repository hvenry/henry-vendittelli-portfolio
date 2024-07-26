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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

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

  return (
    <div className="w-[calc(100vw-32px)] lg:w-[calc(50vw-32px)] md:w-[calc(67vw-32px)] fixed top-4 z-10 px-4 flex justify-between items-center h-16 backdrop-blur">
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
          {theme === "dark" ? (
            <MdLightMode onClick={toggleTheme} className="size-6 cursor-pointer" />
          ) : (
            <MdDarkMode onClick={toggleTheme} className="size-6 cursor-pointer" />
          )}
        </div>
      </div>
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
          {theme === "dark" ? (
            <MdLightMode onClick={toggleTheme} className="size-6 cursor-pointer" />
          ) : (
            <MdDarkMode onClick={toggleTheme} className="size-6 cursor-pointer" />
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-bold text-3xl hover:text-blue-300"
          >
            {isOpen ? <IoMdClose /> : <RiMenu3Fill />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute flex-col top-full z-20 right-1 bg-primary"
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
      )}
    </div>
  );
};
