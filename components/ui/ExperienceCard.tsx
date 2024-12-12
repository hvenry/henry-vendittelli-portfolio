"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Experience {
  name: string;
  position: string;
  desc: string;
  link: string;
  time: string;
  image: string;
}

interface ExperienceProps {
  info: Experience[] | null;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ info }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getImagePath = (imageName: string) =>
    `/assets/images/icons/${imageName}.png`;

  // Group experiences by 'name'
  const groupedExperiences = info
    ? info.reduce((acc: Record<string, Experience[]>, experience) => {
        if (!acc[experience.name]) {
          acc[experience.name] = [];
        }
        acc[experience.name].push(experience);
        return acc;
      }, {})
    : {};

  if (!mounted || !info) {
    const skeletons = Array.from(
      { length: info ? info.length : 1 },
      (_, index) => (
        <div key={index} className="pr-4">
          <div className="px-4 py-2">
            <div className="flex flex-col items-start sm:flex-row sm:items-end sm:gap-4 gap-2 pb-2">
              <div className="flex justify-center items-center gap-2">
                <Skeleton height={24} width={24} circle className="skeleton" />
                <Skeleton height={30} width={150} className="skeleton" />
              </div>
              <Skeleton height={20} width={100} className="skeleton" />
            </div>
            <Skeleton
              height={15}
              width={"100%"}
              count={5}
              className="skeleton"
            />
            <div className="sm:hidden">
              <Skeleton
                height={15}
                width={"100%"}
                count={5}
                className="skeleton"
              />
            </div>
            <Skeleton height={15} width={"40%"} className="skeleton" />
            <div className="mt-1 flex justify-end">
              <Skeleton height={15} width={125} className="skeleton" />
            </div>
          </div>
        </div>
      )
    );
    return <div className="flex flex-col gap-8">{skeletons}</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      {Object.keys(groupedExperiences).map((name) => (
        <div key={name} className="mr-4">
          <div className="pl-2 pr-5 pt-2 pb-4 hover:translate-x-2 transition-transform transition-border-color duration-300 ease-in-out border border-transparent hover:border-primary basic-glow">
            <div className="flex flex-col items-start sm:flex-row sm:items-end sm:gap-4 gap-2">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={getImagePath(groupedExperiences[name][0].image)}
                  alt={name}
                  width={32}
                  height={32}
                  className={
                    groupedExperiences[name][0].image === "partisans_icon"
                      ? theme === "light"
                        ? "size-9 icon-light"
                        : "size-9 icon-dark"
                      : "size-9"
                  }
                />
                <a
                  href={groupedExperiences[name][0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:text-3xl text-2xl hover:text-blue-300"
                >
                  {name}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {groupedExperiences[name].map((role, idx) => (
                <div key={idx} className="grid grid-cols-[36px_auto]">
                  {/* Position Title Bullet */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-full items-center justify-center">
                      <div className="w-[6px] h-[6px] sm:w-2 sm:h-2 bg-gray-500"></div>
                    </div>
                  </div>
                  {/* Position Title */}
                  <div className="py-2 flex justify-between items-center">
                    <p className="sm:text-2xl text-md text-primary-1">
                      {role.position}
                    </p>
                    <p className="pt-1 flex justify-end sm:text-xl text-sm text-gray-500">
                      {role.time}
                    </p>
                  </div>
                  {/* Description Vertical Line */}
                  <div className="flex items-start justify-center">
                    {idx < groupedExperiences[name].length && (
                      <div className="w-[2px] bg-gray-500 h-full"></div>
                    )}
                  </div>
                  {/* Description */}
                  <p className="lg:text-xl sm:text-lg text-xs font-mono text-justify text-primary-2">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
