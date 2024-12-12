import { Metadata } from "next";
import { Oswald } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { navItems } from "@/data";
import { ThemeProvider } from "next-themes";
import ViewportHeightSetter from "@/components/layout/ViewportHeightSetter";
import React from "react";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "henryvendittelli.com",
  description: "Henry Vendittelli's portfolio website."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <ViewportHeightSetter />
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
            <div className="h-[calc(var(--vh)_*100)] px-0 mx-2 sm:mx-4 sm:px-4 pt-20 w-full md:w-2/3 lg:w-1/2">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
