"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Scrolls to top after each route change (post-render, so no pre-nav jump) */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
