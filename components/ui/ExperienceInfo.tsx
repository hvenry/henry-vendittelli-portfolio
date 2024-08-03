"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface Experience {
  name: string;
  position: string;
  desc: string;
  link: string;
  time: string;
  image: string; // Name of the icon image file
}

interface ExperienceProps {
  info: Experience[];
}

const ExperienceInfo: React.FC<ExperienceProps> = ({ info }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getImagePath = (imageName: string) =>
    `/assets/images/icons/${imageName}.png`;

  return (
    <div className="flex flex-col gap-8">
      {info.map((experience, index) => (
        <div key={index} className="pr-4">
          <div className="px-4 py-2 hover:translate-x-2 transition-all duration-300 ease-in-out border border-transparent hover:border-primary basic-glow">
            <div className="flex flex-col items-start sm:flex-row sm:items-end sm:gap-4 gap-2 pb-2">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={getImagePath(experience.image)}
                  alt={experience.name}
                  width={24}
                  height={24}
                  className={
                    experience.image === "partisans_icon"
                      ? theme === "light"
                        ? "icon-light"
                        : "icon-dark"
                      : ""
                  }
                />
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:text-3xl text-2xl hover:text-blue-300"
                >
                  {experience.name}
                </a>
              </div>
              <p className="sm:text-xl text-md text-primary-1">
                {experience.position}
              </p>
            </div>
            <p className="lg:text-xl sm:text-lg text-sm font-mono text-justify text-primary-2">
              {experience.desc}
            </p>
            <p className="pt-1 flex justify-end sm:text-lg text-sm text-gray-500 font-mono">
              {experience.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceInfo;
