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
          <div className="flex justify-center">
            <Navbar navItems={navItems} />
            <div className="transition-all w-full lg:w-1/2 md:w-2/3 flex justify-center">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}