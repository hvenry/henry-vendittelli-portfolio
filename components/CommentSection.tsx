"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ImSpinner2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { isFeatureEnabled } from "@/lib/features";

type BlogComment = {
  id: string;
  postSlug: string;
  userId: string;
  name: string;
  profileUrl: string;
  content: string;
  createdAt: string;
};

type CommentSectionProps = {
  postSlug: string;
};

// Content validation and sanitization
const MAX_COMMENT_LENGTH = 500;
const MIN_COMMENT_LENGTH = 1;

const sanitizeContent = (content: string): string => {
  return content
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .slice(0, MAX_COMMENT_LENGTH);
};

const validateContent = (content: string): string | null => {
  const trimmed = content.trim();

  if (trimmed.length < MIN_COMMENT_LENGTH) {
    return "Comment cannot be empty";
  }

  if (trimmed.length > MAX_COMMENT_LENGTH) {
    return `Comment must be ${MAX_COMMENT_LENGTH} characters or less`;
  }

  // Check for spam patterns
  const urlCount = (trimmed.match(/https?:\/\//g) || []).length;
  if (urlCount > 2) {
    return "Too many links in comment";
  }

  return null;
};

export default function CommentSection({ postSlug }: CommentSectionProps) {
  const { user, isLoading } = useUser();
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingComments, setLoadingComments] = useState(true);
  const [charCount, setCharCount] = useState(0);

  const fetchComments = async () => {
    try {
      setLoadingComments(true);
      const response = await fetch(
        `/api/blog-comments?postSlug=${encodeURIComponent(postSlug)}`
      );
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    } catch (err) {
      console.error("Error fetching comments:", err);
    } finally {
      setLoadingComments(false);
    }
  };

  useEffect(() => {
    if (isFeatureEnabled("BLOG_COMMENTS_ENABLED")) {
      fetchComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postSlug]);

  // Feature flag check - return null if comments are disabled
  // (Must be after all hooks to comply with React's Rules of Hooks)
  if (!isFeatureEnabled("BLOG_COMMENTS_ENABLED")) {
    return null;
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    setCharCount(newContent.length);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!user?.nickname) {
      setError("You must be logged in to comment");
      return;
    }

    const validationError = validateContent(content);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const sanitizedContent = sanitizeContent(content);

      const response = await fetch("/api/blog-comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          postSlug,
          userId: user.sub,
          name: user.nickname,
          profileUrl: user.picture,
          content: sanitizedContent
        })
      });

      if (response.ok) {
        const newComment = await response.json();
        setComments([newComment, ...comments]);
        setContent("");
        setCharCount(0);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to post comment");
      }
    } catch (err) {
      setError("An error occurred while posting your comment");
      console.error("Error posting comment:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800)
      return `${Math.floor(diffInSeconds / 86400)}d ago`;

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: diffInSeconds < 31536000 ? undefined : "numeric"
    });
  };

  return (
    <section className="mt-12 max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-primary/10">
        <h2 className="text-xl sm:text-2xl font-bold text-primary-1">
          Discussion
        </h2>
        <span className="text-sm text-primary-2">
          {comments.length} {comments.length === 1 ? "comment" : "comments"}
        </span>
      </div>

      {/* Comment Form */}
      {!isLoading && (
        <div className="mb-8">
          {user?.nickname ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-shrink-0 pt-1">
                  <Image
                    src={user.picture || "/default-avatar.png"}
                    alt={user.nickname}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover border border-primary/20"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <textarea
                    value={content}
                    onChange={handleContentChange}
                    placeholder="Add your thoughts..."
                    className="w-full px-3 py-2 text-sm border border-primary/20 bg-primary text-primary-1 placeholder:text-primary-2 placeholder:opacity-50 focus:outline-none focus:border-primary/40 transition-all resize-none"
                    rows={3}
                    disabled={isSubmitting}
                    maxLength={MAX_COMMENT_LENGTH}
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting || !content.trim()}
                        className="px-4 py-1.5 text-sm border border-primary bg-primary text-primary-1 hover:bg-reversed hover:text-reversed disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-primary-1 transition-all duration-200"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <ImSpinner2 className="animate-spin" size={12} />
                            Posting
                          </span>
                        ) : (
                          "Post"
                        )}
                      </button>
                      {error && <p className="text-xs text-red-500">{error}</p>}
                    </div>
                    <span
                      className={`text-xs transition-colors ${
                        charCount > MAX_COMMENT_LENGTH * 0.9
                          ? "text-red-500"
                          : "text-primary-2 opacity-60"
                      }`}
                    >
                      {charCount}/{MAX_COMMENT_LENGTH}
                    </span>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div className="border border-primary/10 p-6 text-center bg-reversed/5">
              <p className="text-sm text-primary-2 mb-3">
                Sign in with GitHub to join the discussion
              </p>
              <a
                href={`/api/auth/login?returnTo=/blog/${postSlug}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-primary bg-primary text-primary-1 hover:bg-reversed hover:text-reversed transition-all duration-200"
              >
                <FaGithub size={14} />
                Sign In
              </a>
            </div>
          )}
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-0 border-t border-primary/10">
        {loadingComments ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <ImSpinner2 className="animate-spin text-primary-2" size={24} />
            <p className="text-sm text-primary-2">Loading comments...</p>
          </div>
        ) : comments.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-sm text-primary-2 opacity-60">
              No comments yet. Start the conversation!
            </p>
          </div>
        ) : (
          comments.map((comment, index) => (
            <article
              key={comment.id}
              className="group border-b border-primary/10 last:border-b-0 py-4 hover:bg-reversed/5 transition-colors duration-150"
              style={{
                animation: `fadeIn 0.3s ease-out ${index * 0.05}s both`
              }}
            >
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <a
                    href={`https://github.com/${comment.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Image
                      src={comment.profileUrl}
                      alt={comment.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full object-cover border border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                  </a>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <a
                      href={`https://github.com/${comment.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-sm text-primary-1 hover:opacity-70 transition-opacity inline-flex items-center gap-1.5"
                    >
                      {comment.name}
                      <FaGithub size={11} className="opacity-60" />
                    </a>
                    <span className="text-xs text-primary-2 opacity-60">
                      {formatDate(comment.createdAt)}
                    </span>
                  </div>
                  <p className="text-sm text-primary-2 leading-relaxed whitespace-pre-wrap break-words">
                    {comment.content}
                  </p>
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
