import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import CopyUrlButton from "@/components/CopyUrlButton";
import CommentSection from "@/components/CommentSection";
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
        className="text-sm opacity-75 hover:text-muted hover:underline mb-6 block text-center"
      >
        ← blog
      </Link>

      <article className="border border-foreground p-8 sm:p-16 md:p-20 max-w-4xl mx-auto w-full">
        <header className="mb-8">
          <h1
            className="text-4xl sm:text-5xl font-bold text-muted mb-6 text-center"
            style={{ WebkitTextStroke: "0.5px currentColor" }}
          >
            {post.title}
          </h1>
          <div className="flex justify-between items-center text-sm text-subtle pb-6 border-b border-foreground">
            <CopyUrlButton />
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </span>
          </div>
        </header>

        <BlogContent content={post.content} />
      </article>

      <CommentSection postSlug={slug} />
    </div>
  );
}
