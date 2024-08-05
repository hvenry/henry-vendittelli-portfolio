"use client";

import { useEffect } from "react";
import { Oswald } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { navItems } from "@/data";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { metadata } from "@/app/metadata"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", setViewportHeight);
    setViewportHeight();

    return () => window.removeEventListener("resize", setViewportHeight);
  }, []);

  return (
    <html lang="en">
      <body className={oswald.className}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* nav rendered independently of page content */}
          <div className="flex justify-center">
            <Navbar navItems={navItems} />
          </div>
          {/* page content */}
          <div className="flex justify-center w-full overflow-y-auto">
            <div className="h-[calc(var(--vh)_*100)] mx-4 px-4 pt-20 w-full md:w-2/3 lg:w-1/2">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
