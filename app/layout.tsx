import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import "./globals.css";

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "HENRY VENDITTELLI",
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
        <div className="flex justify-center">
          <FloatingNav navItems={navItems} />
          <div className="w-full md:w-1/2 flex justify-center">{children}</div>
        </div>
      </body>
    </html>
  );
}
