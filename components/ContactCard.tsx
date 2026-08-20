"use client";

import { useState } from "react";

export default function ContactCard() {
  const [isHovered, setIsHovered] = useState(false);
  const resume = "/assets/pdfs/HenryVendittelliResume2024.pdf";

  return (
    <div
      className="relative flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="panel-ticks glow relative border border-line bg-background">
        <div className="border-b border-line px-6 py-4">
          <p className="font-display text-xl font-semibold tracking-wide text-foreground sm:text-2xl">
            Contact Me
          </p>
        </div>
        <div className="flex flex-col gap-3 px-6 py-5 text-sm text-muted sm:text-base">
          <div className="flex justify-between gap-10 sm:gap-16">
            <p className="text-subtle">Email</p>
            <a href="mailto:hvendittelli@gmail.com" className="link">
              hvendittelli@gmail.com
            </a>
          </div>
          <div className="flex justify-between gap-10 sm:gap-16">
            <p className="text-subtle">Phone</p>
            <p>647-926-6820</p>
          </div>
          <div className="flex justify-between gap-10 sm:gap-16">
            <p className="text-subtle">More Info</p>
            <a
              className="link"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
          </div>
        </div>
      </div>
      <div
        className={`absolute bottom-[-60px] text-3xl transition-opacity duration-300 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        😎
      </div>
    </div>
  );
}
