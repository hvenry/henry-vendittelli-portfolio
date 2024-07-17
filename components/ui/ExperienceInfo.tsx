import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

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
  return (
    <>
      {info.map((info, index) => (
        <div key={index} className="pb-16">
          <div className="p-4 transition-all duration-300 ease-in-out hover:border-neutral-300 border border-transparent">
            <div className="flex items-end gap-3 pb-2">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={imageMap[info.image]}
                  alt={info.name}
                  width={24}
                  height={24}
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
              <p className="sm:text-xl text-md opacity-50">{info.position}</p>
            </div>
            <p className="lg:text-xl sm:text-lg text-sm font-mono text-justify text-gray-300">
              {info.desc}
            </p>
            <p className="flex justify-end sm:text-xl text-md opacity-25">{info.time}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExperienceInfo;
