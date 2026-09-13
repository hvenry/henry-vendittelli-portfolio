import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type Project = {
  slug: string;
  title: string;
  bodyTitle: string;
  summary: string;
  technologies: string[];
  github?: string;
  youtube?: string;
  live?: string;
  image?: string;
  imageLight?: string;
  year?: string;
  role?: string;
  content: string;
  order: number;
  /** Position on the home page's featured grid; absent = not featured */
  featured?: number;
  draft?: boolean;
};

/** Drafts (frontmatter `draft: true`) are only visible outside production */
const isVisible = (draft: boolean) =>
  !draft || process.env.NODE_ENV !== "production";

function readProject(fileName: string): Project {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(projectsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    bodyTitle: data.bodyTitle || data.title || "",
    summary: data.summary || "",
    technologies: data.technologies || [],
    github: data.github,
    youtube: data.youtube,
    live: data.live,
    image: data.image,
    imageLight: data.imageLight,
    year: data.year ? String(data.year) : undefined,
    role: data.role,
    content,
    order:
      typeof data.order === "number" ? data.order : Number.MAX_SAFE_INTEGER,
    featured: typeof data.featured === "number" ? data.featured : undefined,
    draft: data.draft === true
  };
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(projectsDirectory)
    .filter((fileName) => fileName.endsWith(".md") && !fileName.startsWith("_"))
    .map(readProject)
    .filter((project) => isVisible(project.draft ?? false))
    .sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | null {
  // Slug comes from the URL; reject anything that could traverse the filesystem
  if (!/^[a-z0-9-]+$/i.test(slug)) return null;
  const fullPath = path.join(projectsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const project = readProject(`${slug}.md`);
  return isVisible(project.draft ?? false) ? project : null;
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects()
    .filter((project) => project.featured !== undefined)
    .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));
}

export function getAllProjectSlugs(): string[] {
  return getAllProjects().map((project) => project.slug);
}
