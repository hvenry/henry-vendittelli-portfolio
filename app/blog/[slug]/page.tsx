import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import CopyUrlButton from "@/components/CopyUrlButton";
import { formatDate } from "@/lib/date";
import BlogContent from "@/components/BlogContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col mt-8 pb-32">
      <Link
        href="/blog"
        className="link-quiet mb-6 block text-center text-xs uppercase tracking-[0.2em]"
      >
        ← blog
      </Link>

      <article className="px-2 sm:px-4 max-w-4xl mx-auto w-full">
        <header className="mb-8">
          <h1 className="mb-6 text-center font-display text-3xl font-semibold tracking-wide text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <div className="flex items-center justify-between border-b border-line pb-6 text-sm text-subtle">
            <CopyUrlButton />
            <span>{formatDate(post.date)}</span>
          </div>
        </header>

        <BlogContent content={post.content} />
      </article>
    </div>
  );
}
