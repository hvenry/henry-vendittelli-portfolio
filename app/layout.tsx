import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <FloatingNav
          navItems={navItems}
        />
        <div >{children}</div>
      </body>
    </html>
  );
}
