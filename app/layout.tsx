import { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { navItems } from "@/data";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

import ViewportHeightSetter from "@/components/ViewportHeightSetter";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import React from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap"
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${oswald.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ClerkProvider>
          <ViewportHeightSetter />
          <ScrollToTop />
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex justify-center">
              <Navbar navItems={navItems} />
            </div>
            <div className="flex justify-center w-full">
              <div className="flex min-h-[calc(var(--vh)_*100)] flex-col px-0 mx-2 sm:mx-4 sm:px-4 pt-20 pb-20 w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                <div className="flex-1">{children}</div>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
