import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags?: string[];
  draft?: boolean;
};

/** Drafts (frontmatter `draft: true`) are only visible outside production */
const isVisible = (draft: boolean) =>
  !draft || process.env.NODE_ENV !== "production";

function readPost(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    description: data.description || "",
    content,
    tags: data.tags || [],
    draft: data.draft === true
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readPost)
    .filter((post) => isVisible(post.draft ?? false))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const post = readPost(`${slug}.md`);
  return isVisible(post.draft ?? false) ? post : null;
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}
