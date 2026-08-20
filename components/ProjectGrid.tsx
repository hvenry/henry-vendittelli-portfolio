import React from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { projects } from "@/data";
import { slugify } from "@/lib/string";
import { getProjectImagePath } from "@/lib/images";
import Panel from "@/components/Panel";

interface ProjectGridProps {
  projectSlugs: string[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projectSlugs }) => {
  const selectedProjects = projectSlugs
    .map((slug) => projects.find((project) => slugify(project.title) === slug))
    .filter((project) => project !== undefined) as typeof projects;

  return (
    <div className="mx-2 grid grid-cols-1 gap-4 sm:mx-0 sm:grid-cols-2 md:grid-cols-3">
      {selectedProjects.map((project) => (
        <Panel
          key={slugify(project.title)}
          interactive
          className="flex h-full flex-col sm:last:col-span-2 md:last:col-span-1"
        >
          <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-2.5">
            <a
              className="font-display text-lg font-medium tracking-wide text-foreground transition-colors hover:text-subtle sm:text-xl"
              href={`/projects/${slugify(project.title)}`}
            >
              {project.title}
            </a>
            {project.youtubeLink && (
              <a
                href={project.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="link-quiet"
              >
                <FaYoutube className="size-5" />
              </a>
            )}
          </div>
          {project.imageName && (
            <Image
              src={getProjectImagePath(project.imageName)}
              alt={project.title}
              width={1000}
              height={500}
              className="aspect-[2/1] w-full border-b border-line bg-white object-contain"
            />
          )}
          <div className="flex flex-1 flex-col px-4 py-3">
            <p className="text-sm font-medium text-foreground">
              {project.bodyTitle}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-subtle">
              {project.smallDescription}
            </p>
          </div>
        </Panel>
      ))}
    </div>
  );
};

export default ProjectGrid;
