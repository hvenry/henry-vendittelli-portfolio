import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { navItems } from "@/data";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "henry vendittelli",
  description: "A next.js portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-screen flex justify-center">
            <Navbar navItems={navItems} />
            {/* page content auto-sizing margins and space for nav */}
            <div className="mx-4 mt-28 h-[calc(100vh-196px)] w-full md:w-2/3 lg:w-1/2">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
