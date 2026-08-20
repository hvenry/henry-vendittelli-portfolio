"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Socials from "@/components/Socials";

const resume = "/assets/pdfs/HenryVendittelliResume2024.pdf";

/** Full-viewport pages are sized to fit exactly; the footer would force a scrollbar */
const HIDDEN_ROUTES = ["/rock", "/random", "/reach-out"];

export default function Footer({ force = false }: { force?: boolean }) {
  const pathname = usePathname();
  if (!force && HIDDEN_ROUTES.some((route) => pathname.startsWith(route)))
    return null;

  return (
    <footer
      className={`site-footer mt-16 border-t border-line px-2 pt-8 ${
        force ? "site-footer-forced" : ""
      }`}
    >
      <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-3">
        <div className="flex justify-center gap-2 sm:justify-start">
          <Socials />
        </div>
        <Link
          href="/"
          onClick={() => {
            // Same-route clicks don't navigate, so ScrollToTop never fires
            if (pathname === "/")
              window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-center font-display text-base font-medium tracking-wide text-foreground transition-opacity hover:opacity-70"
        >
          henryvendittelli.com/
        </Link>
        <div className="flex justify-center gap-5 sm:justify-end">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet font-display text-xs uppercase tracking-wider"
          >
            Resume
          </a>
          <a
            href="mailto:hvendittelli@gmail.com"
            className="link-quiet font-display text-xs uppercase tracking-wider"
          >
            Email
          </a>
          <Link
            href="/reach-out"
            className="link-quiet font-display text-xs uppercase tracking-wider"
          >
            Reach Out
          </Link>
        </div>
      </div>
      <p className="mt-8 text-center text-[10px] uppercase tracking-[0.2em] text-subtle">
        © {new Date().getFullYear()} Henry Vendittelli · Toronto, Canada
      </p>
    </footer>
  );
}
