import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithubSquare, FaYoutube } from "react-icons/fa";
import { PiGlobeSimple } from "react-icons/pi";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { buildTechQuery } from "@/lib/techFilter";
import TechBadge from "@/components/TechBadge";
import BlogContent from "@/components/BlogContent";
import ProjectImage from "@/components/ProjectImage";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projects - henryvendittelli.com",
      description: "Explore various projects by Henry Vendittelli."
    };
  }

  return {
    title: `${project.title} Project - henryvendittelli.com`,
    description: project.summary
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const externalLinks = [
    { href: project.github, label: "GitHub", Icon: FaGithubSquare },
    { href: project.youtube, label: "Youtube", Icon: FaYoutube },
    { href: project.live, label: "Live site", Icon: PiGlobeSimple }
  ].filter((link) => Boolean(link.href));

  return (
    <main className="mx-auto w-full max-w-2xl px-2 pt-8 pb-16 sm:pb-24">
      <Link
        href="/projects"
        className="link-quiet mb-6 block text-xs uppercase tracking-[0.2em]"
      >
        ← projects
      </Link>
      <div className="flex items-end gap-3">
        <h1 className="font-display text-2xl font-semibold tracking-wide text-foreground sm:text-3xl">
          {project.bodyTitle}
        </h1>
        {externalLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="link-quiet"
          >
            <Icon className="size-6 sm:size-7" />
          </a>
        ))}
      </div>
      {(project.year || project.role) && (
        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-subtle">
          {[project.year, project.role].filter(Boolean).join(" · ")}
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <TechBadge
            key={tech}
            name={tech}
            size="sm"
            href={`/projects${buildTechQuery(tech)}`}
          />
        ))}
      </div>
      {project.image && (
        <ProjectImage
          image={project.image}
          imageLight={project.imageLight}
          alt={project.title}
          className="mt-6 h-auto w-full border border-line"
          priority
        />
      )}
      <div className="mt-6">
        <BlogContent content={project.content} />
      </div>
    </main>
  );
}
