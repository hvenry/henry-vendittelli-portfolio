import React from "react";
import Image from "next/image";
import { clubs } from "@/data"; // Make sure this path is correct
import { StaticImageData } from "next/image";
import partisans_icon from "@/public/assets/images/icons/partisans_icon.png";
import qdaa_icon from "@/public/assets/images/icons/qdaa_icon.png";
import quantt_icon from "@/public/assets/images/icons/quantt_icon.png";
import compsa_icon from "@/public/assets/images/icons/compsa_icon.png";
import project_red_icon from "@/public/assets/images/icons/project_red_icon.png";
import qmind_icon from "@/public/assets/images/icons/qmind_icon.png";
import qfsf_icon from "@/public/assets/images/icons/qfsf_icon.png";

interface ImageMap {
  [key: string]: StaticImageData;
}

const imageMap: ImageMap = {
  partisans_icon: partisans_icon, // Map the identifier to the imported image
  qdaa_icon: qdaa_icon,
  quantt_icon: quantt_icon,
  compsa_icon: compsa_icon,
  project_red_icon: project_red_icon,
  qmind_icon: qmind_icon,
  qfsf_icon: qfsf_icon,
};

const ClubInvolvement = () => {
  return (
    <>
      {clubs.map((club, index) => (
        <div key={index} className="pb-8">
          <div className="flex items-end gap-3 pb-2">
            <div className="flex justify-center items-center gap-2">
              <Image
                src={imageMap[club.club_image]}
                alt={club.club_name}
                width={24}
                height={24}
              />
              <a
                href={club.club_link}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:text-3xl text-2xl hover:text-blue-300"
              >
                {club.club_name}
              </a>
            </div>
            <p className="sm:text-xl text-md opacity-50">
              {club.club_position}
            </p>
          </div>
          <p className="lg:text-xl sm:text-lg text-sm font-mono text-justify text-gray-300">
            {club.club_desc}
          </p>
        </div>
      ))}
    </>
  );
};

export default ClubInvolvement;
