import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { getFeaturedProjects } from "@/lib/projects";
import Panel from "@/components/Panel";
import ProjectImage from "@/components/ProjectImage";

/** Home page grid of projects marked `featured` in their frontmatter */
export default function ProjectGrid() {
  const featured = getFeaturedProjects();

  return (
    <div className="mx-2 grid grid-cols-1 gap-4 sm:mx-0 sm:grid-cols-2 md:grid-cols-3">
      {featured.map((project) => (
        <Panel
          key={project.slug}
          interactive
          className="panel-ticks-hover flex h-full flex-col sm:last:col-span-2 md:last:col-span-1"
        >
          {/* Whole-card click target; interactive children sit above it at z-10 */}
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`${project.title} writeup`}
            className="absolute inset-0"
          />
          <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-2.5">
            <span className="font-display text-lg font-medium tracking-wide text-foreground sm:text-xl">
              {project.title}
            </span>
            {project.youtube && (
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="link-quiet relative z-10"
              >
                <FaYoutube className="size-5" />
              </a>
            )}
          </div>
          {project.image && (
            <ProjectImage
              image={project.image}
              imageLight={project.imageLight}
              alt={project.title}
              className="aspect-[1200/630] w-full border-b border-line bg-background object-contain"
            />
          )}
          <div className="flex flex-1 flex-col px-4 py-3">
            <p className="text-sm font-medium text-foreground">
              {project.bodyTitle}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-subtle">
              {project.summary}
            </p>
          </div>
        </Panel>
      ))}
    </div>
  );
}
