"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PiSun, PiMoon, PiList, PiX } from "react-icons/pi";
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

  useEffect(() => {
    if (isDesktop) setIsOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleNavItemClick = (path: string) => {
    setActiveItem(path);
    setIsOpen(false);
    // Same-route clicks don't navigate, so ScrollToTop never fires
    if (path === pathname) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Theme is unknown until hydration; render a placeholder so nothing shifts
  const themeToggle = (
    <button
      aria-label="toggle theme"
      onClick={toggleTheme}
      className="link-quiet"
    >
      {mounted ? (
        resolvedTheme === "dark" ? (
          <PiSun className="size-5 cursor-pointer" />
        ) : (
          <PiMoon className="size-5 cursor-pointer" />
        )
      ) : (
        <span className="block size-5" />
      )}
    </button>
  );

  return (
    <>
      <div className="fixed top-0 z-50 h-16 w-full md:w-[calc(67vw)] lg:w-[calc(50vw)] xl:w-1/3">
        {/* Progressive blur: stacked masked layers fading strong -> none */}
        <div aria-hidden className="progressive-blur absolute inset-0">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="relative z-10 flex h-full items-center justify-between px-4">
          <Link
            href="/"
            onClick={() => handleNavItemClick("/")}
            className="font-display text-lg font-medium tracking-wide text-foreground transition-opacity hover:opacity-70"
          >
            henryvendittelli.com/
          </Link>
          <div className="nav-links hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                onClick={() => handleNavItemClick(item.path)}
                className={`nav-link px-2 py-1 font-display text-sm tracking-wide transition-colors ${
                  activeItem === item.path
                    ? "bg-foreground text-background"
                    : "text-subtle hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-3">{themeToggle}</div>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            {themeToggle}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "close navigation" : "open navigation"}
              className="link-quiet text-2xl"
            >
              {isOpen ? <PiX /> : <PiList />}
            </button>
          </div>
        </div>
      </div>
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 bg-background/85 backdrop-blur-xl transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex h-full flex-col justify-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => handleNavItemClick(item.path)}
              tabIndex={isOpen ? 0 : -1}
              className={`block w-full px-6 py-4 font-display text-5xl font-semibold tracking-wide text-foreground transition-opacity hover:opacity-60 ${
                activeItem === item.path
                  ? "underline decoration-2 underline-offset-8"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};
