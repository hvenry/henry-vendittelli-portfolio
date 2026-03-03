import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog - henryvendittelli.com",
  description: "Thoughts, tutorials, and insights on software development."
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="pt-8 pb-16 sm:pb-24">
      {/* Blog posts */}
      <div className="space-y-6">
        {posts.length === 0 ? (
          <p className="text-lg">No blog posts yet. Check back soon!</p>
        ) : (
          posts.map((post) => (
            <article
              key={post.slug}
              className="border border-transparent hover:border-primary basic-glow transition-transform duration-300 ease-in-out hover:scale-[1.02] p-4"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-primary-1">
                    {post.title}
                  </h2>
                  <p className="text-sm opacity-75">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </p>
                  <p className="text-base opacity-90">{post.description}</p>
                </div>
              </Link>
            </article>
          ))
        )}
      </div>
    </main>
  );
}
