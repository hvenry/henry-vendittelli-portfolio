"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const RotatingRockCanvas = dynamic(() => import("@/components/RotatingRock"), {
  ssr: false
});
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import Loader from "@/components/Loader";
import { FaGithub } from "react-icons/fa";

type Comment = {
  id: string;
  name: string;
  profileUrl: string;
  content: string;
  userId: string;
  createdAt: string;
};

export default function Page() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [hasCommented, setHasCommented] = useState(false);

  const { user, isLoaded } = useUser();
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);

  useEffect(() => {
    if (isLoaded && user && comments.length > 0) {
      const userComment = comments.find((c) => c.userId === user.id);
      setHasCommented(!!userComment);
    }
  }, [user, comments, isLoaded]);

  const fetchComments = async () => {
    try {
      const response = await fetch("/api/comments");
      const data: Comment[] = await response.json();
      // A failed request returns an error object; never let it reach comments.map
      setComments(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    } finally {
      setIsCommentsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const CHAR_LIMIT = 25;

  const handleSubmit = async () => {
    if (!user || comment.length > CHAR_LIMIT) {
      return;
    }

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: comment.trim() })
      });

      if (!response.ok) {
        throw new Error("Failed to submit comment");
      }

      setComment("");
      await fetchComments();
    } catch (error) {
      console.error("Failed to submit comment:", error);
      alert("Failed to submit comment");
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex h-[calc(var(--vh)_*100-10rem)] w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <main className="flex h-[calc(var(--vh)_*100-10rem)] flex-col items-center justify-center">
      <div className="h-2/3 w-full">
        <RotatingRockCanvas />
      </div>
      <div className="h-1/3 w-full px-4 pb-4 sm:pb-8">
        <div className="glow grid h-full grid-cols-2 border border-line bg-background p-1 sm:p-4">
          <div className="overflow-y-auto mx-auto px-2">
            <div className="min-h-full flex flex-col justify-center">
              {!user && (
                <div className="pb-2 sm:pb-4 flex justify-center items-center gap-1 sm:gap-2">
                  <FaGithub className="size-5 sm:size-6" />
                  <p className="font-display text-lg font-semibold tracking-wide text-foreground sm:text-xl">
                    Sign my site!
                  </p>
                </div>
              )}
              {isCommentsLoading ? (
                <div className="flex justify-center items-center h-12">
                  <Loader />
                </div>
              ) : !user ? (
                <SignInButton mode="modal">
                  <button className="flex h-8 w-full items-center justify-center gap-1 bg-foreground text-background transition-opacity duration-200 hover:opacity-80 sm:h-12 sm:gap-2">
                    <FaGithub className="size-3 sm:size-5" />
                    <p className="text-sm font-medium sm:text-base">
                      Authenticate
                    </p>
                  </button>
                </SignInButton>
              ) : (
                <>
                  {hasCommented ? (
                    <>
                      <p className="mb-4 mt-4 flex h-8 items-center justify-center border border-line p-2 text-sm text-muted sm:h-12 sm:p-4 sm:text-base">
                        Thank you for signing!
                      </p>
                      <SignOutButton>
                        <button className="flex h-6 w-full items-center justify-center gap-2 bg-foreground text-background transition-opacity duration-200 hover:opacity-80 sm:h-12">
                          <p className="text-sm font-medium sm:text-base">
                            Logout
                          </p>
                        </button>
                      </SignOutButton>
                    </>
                  ) : (
                    <div className="mt-4">
                      <div className="flex justify-between">
                        <p className="text-sm text-muted sm:text-base">
                          Comment (optional):
                        </p>
                        <span
                          className={`text-sm tabular-nums text-subtle sm:text-base ${
                            comment.length > CHAR_LIMIT ? "text-red-500" : ""
                          }`}
                        >
                          {CHAR_LIMIT - comment.length}/{CHAR_LIMIT}
                        </span>
                      </div>
                      <input
                        className={`h-max w-full border border-line bg-background p-1 text-xs text-foreground focus:border-foreground/60 sm:p-2 sm:text-base ${
                          comment.length > CHAR_LIMIT ? "border-red-500" : ""
                        }`}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        maxLength={CHAR_LIMIT}
                      />
                      <button
                        className="mt-2 h-6 w-full border border-line bg-background text-sm transition-colors duration-200 hover:bg-foreground hover:text-background sm:h-12 sm:text-base"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="overflow-y-auto overflow-x-hidden border-l border-line">
            {isCommentsLoading ? (
              <div className="flex justify-center items-center h-full">
                <Loader />
              </div>
            ) : (
              <ul className="flex flex-col gap-1 sm:gap-4 ml-4">
                {comments.map((comment) => (
                  <li key={comment.id} className="border-b border-line">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Image
                        src={comment.profileUrl}
                        alt={`${comment.name}'s profile picture`}
                        width={64}
                        height={64}
                        className="rounded-full size-5 sm:size-8"
                      />
                      <a
                        href={`https://github.com/${comment.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-hover text-sm sm:text-lg"
                      >
                        {comment.name}
                      </a>
                    </div>
                    <p className="pb-2 text-xs text-subtle sm:text-base">
                      {comment.content}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
