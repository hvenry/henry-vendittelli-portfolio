import React from "react";
import { FaGithubSquare, FaYoutube } from "react-icons/fa";
import Image from "next/image";

import { projects } from "@/data";

type ProjectGridProps = {
  projectIds: string[];
};

const ProjectsGrid: React.FC<ProjectGridProps> = ({ projectIds }) => {
  // Filter and sort projects based on the order of projectIds
  const selectedProjects = projectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project) => project !== undefined) as typeof projects; // Ensure all items exist

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:w-2/3 md:w-full">
        {selectedProjects.map((project) => (
          <div
            key={project.id}
            className="border transition ease-in-out duration-300 basic-glow border-primary p-4 h-full"
          >
            {/* title */}
            <div className="flex justify-between lg:mb-2">
              <div>
                <a
                  className="text-blue-600 hover:text-blue-300"
                  href={`/projects/${project.id}`}
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
            {/* image */}
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
