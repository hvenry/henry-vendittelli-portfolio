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
      <div className="p-4 border transition-transform duration-300 ease-in-out border-primary basic-glow hover:scale-105">
        <div className="text-3xl font-bold pb-4 flex justify-center">
          Contact Me
        </div>
        <div className="sm:text-2xl text-lg text-primary-1">
          <div className="flex justify-between gap-6 sm:gap-12">
            <p>Email:</p>
            <a
              href="mailto:hvendittelli@gmail.com"
              className="hover:text-blue-300"
            >
              hvendittelli@gmail.com
            </a>
          </div>
          <div className="flex justify-between">
            <p>Phone:</p>
            <p>647-926-6820</p>
          </div>
          <div className="flex justify-between">
            <p>More Info:</p>
            <a
              className="text-blue-600 hover:text-blue-300"
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
