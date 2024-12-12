import React from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { projects } from "@/data";
import { slugify } from "@/utils/string";
import { ProjectGridProps } from "./ProjectsGrid.types";

const ProjectsGrid: React.FC<ProjectGridProps> = ({ projectSlugs }) => {
  const selectedProjects = projectSlugs
    .map((slug) => projects.find((project) => slugify(project.title) === slug))
    .filter((project) => project !== undefined) as typeof projects;

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 sm:w-2/3 md:w-full mx-2 sm:mx-0">
        {selectedProjects.map((project) => (
          <div
            key={slugify(project.title)}
            className="basic-glow border transition-transform ease-in-out duration-300 transform hover:scale-105 border-primary p-4 pt-2 h-full"
          >
            <div className="flex justify-between lg:mb-2">
              <div>
                <a
                  className="text-blue-600 hover:text-blue-300"
                  href={`/projects/${slugify(project.title)}`}
                >
                  <p className="text-2xl lg:text-3xl">{project.title}</p>
                </a>
              </div>
              <div className="flex flex-row gap-1">
                {project.youtubeLink && (
                  <a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="size-8 fill-red-600 hover:fill-blue-300" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-lg lg:text-xl text-primary-1">
              {project.bodyTitle}
            </p>
            <p className="mb-2 mt-1 text-primary-2 font-mono text-sm md:text-md lg:text-lg">
              {project.smallDescription}
            </p>
            {project.imageName && (
              <div className="w-full items-center flex justify-center">
                <Image
                  src={`/assets/images/projects/${project.imageName}`}
                  alt={project.title}
                  width={1000}
                  height={500}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
