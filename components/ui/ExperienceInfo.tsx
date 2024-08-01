"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useTheme } from "next-themes";

// education icons
import queens_icon from "@/public/assets/images/icons/queens_icon.png";

// club icons
import qdaa_icon from "@/public/assets/images/icons/qdaa_icon.png";
import quantt_icon from "@/public/assets/images/icons/quantt_icon.png";
import compsa_icon from "@/public/assets/images/icons/compsa_icon.png";
import project_red_icon from "@/public/assets/images/icons/project_red_icon.png";
import qmind_icon from "@/public/assets/images/icons/qmind_icon.png";
import qfsf_icon from "@/public/assets/images/icons/qfsf_icon.png";
// work icons
import empire_icon from "@/public/assets/images/icons/empire_icon.png";
import insights_icon from "@/public/assets/images/icons/360insights_icon.png";
import partisans_icon from "@/public/assets/images/icons/partisans_icon.png";

interface Experience {
  name: string;
  position: string;
  desc: string;
  link: string;
  time: string;
  image: keyof ImageMap;
}

interface ExperienceProps {
  info: Experience[];
}

interface ImageMap {
  [key: string]: StaticImageData;
}

const imageMap: ImageMap = {
  queens_icon,
  qdaa_icon,
  quantt_icon,
  compsa_icon,
  project_red_icon,
  qmind_icon,
  qfsf_icon,
  empire_icon,
  insights_icon,
  partisans_icon,
};

const ExperienceInfo: React.FC<ExperienceProps> = ({ info }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Ensures theme is rendered correctly on the client side

  return (
    <div className="flex flex-col gap-8">
      {info.map((info, index) => (
        <div key={index} className="pr-4">
          <div className="px-4 py-2 hover:translate-x-2 transition-all duration-300 ease-in-out border border-transparent hover:border-primary basic-glow">
            <div className="flex flex-col items-start sm:flex-row sm:items-end sm:gap-4 gap-2 pb-2">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={imageMap[info.image]}
                  alt={info.name}
                  width={24}
                  height={24}
                  className={
                    info.image === "partisans_icon"
                      ? theme === "light"
                        ? "icon-light"
                        : "icon-dark"
                      : ""
                  }
                />
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:text-3xl text-2xl hover:text-blue-300"
                >
                  {info.name}
                </a>
              </div>
              <p className="sm:text-xl text-md text-primary-1">
                {info.position}
              </p>
            </div>
            <p className="lg:text-xl sm:text-lg text-sm font-mono text-justify text-primary-2">
              {info.desc}
            </p>
            <p className="pt-1 flex justify-end sm:text-lg text-sm text-gray-500 font-mono">
              {info.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceInfo;
