"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import RotatingRockCanvas from "@/components/RotatingRock";
import { SiAuth0 } from "react-icons/si";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ImSpinner2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import AuthModal from "@/components/AuthModal";

type Comment = {
  id: string;
  name: string;
  profileUrl: string;
  content: string;
  userId: string;
  createdAt: string;
};

export default function Page() {
  // Comment states
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [hasCommented, setHasCommented] = useState(false);

  // Loading states
  const { user, error, isLoading: isAuthLoading } = useUser();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthLoading && user && comments.length > 0) {
      const userComment = comments.find((c) => c.userId === user.sub);
      setHasCommented(!!userComment);
    }
  }, [user, comments, isAuthLoading]);

  const fetchComments = async () => {
    try {
      const response = await fetch("/api/comments");
      const data: Comment[] = await response.json();
      setComments(data);
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
    if (!user?.nickname) {
      setShowAuthModal(true);
      return;
    }

    if (comment.length > CHAR_LIMIT) {
      return;
    }

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.sub,
          name: user.nickname,
          profileUrl: user.picture,
          content: comment.trim()
        })
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

  const handleLogin = () => {
    window.location.href = "/api/auth/login?returnTo=/rock";
  };

  const handleLogout = () => {
    window.location.href = "/api/auth/logout";
  };

  // Early return for loading and error states
  if (isAuthLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <ImSpinner2 className="animate-spin" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Main render
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <div className="h-2/3 w-full">
        <RotatingRockCanvas />
      </div>
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
      <div className="h-1/3 w-full px-4 pb-4 sm:pb-8">
        <div className="h-full border transition-transform duration-300 ease-in-out border-primary rounded-xl basic-glow hover:scale-105 p-1 sm:p-4 grid grid-cols-2 ">
          {/* Left Side - Auth & Comment Section */}
          <div className="overflow-y-auto mx-auto px-2">
            <div className="min-h-full flex flex-col justify-center">
              {!user && (
                <div className="pb-2 sm:pb-4 flex justify-center items-center gap-1 sm:gap-2">
                  <FaGithub className="size-5 sm:size-6" />
                  <p className="text-xl sm:text-2xl font-bold">Sign my site!</p>
                </div>
              )}
              {/* comments */}
              {isCommentsLoading ? (
                <div className="flex justify-center items-center h-12">
                  <ImSpinner2 className="animate-spin size-3 sm:size-5" />
                </div>
              ) : !user ? (
                <button
                  className="flex justify-center items-center gap-1 sm:gap-2 w-full bg-reversed text-reversed rounded-xl h-8 sm:h-12 transition-transform ease-in-out duration-300 hover:scale-105"
                  onClick={handleLogin}
                >
                  <SiAuth0 className="size-3 sm:size-5" />
                  <p className="text-sm sm:text-xl">Authenticate</p>
                </button>
              ) : (
                <>
                  {hasCommented ? (
                    <>
                      <p className="h-8 sm:h-12 flex justify-center items-center text-sm sm:text-xl p-2 sm:p-4 mt-4 border border-primary mb-4">
                        Thank you for signing!
                      </p>
                      <button
                        className="flex justify-center items-center gap-2 w-full bg-reversed text-reversed rounded-xl h-6 sm:h-12 transition-transform ease-in-out duration-300 hover:scale-105"
                        onClick={handleLogout}
                      >
                        <p className="text-sm sm:text-xl">Logout</p>
                      </button>
                    </>
                  ) : (
                    <div className="mt-4">
                      <div className="flex justify-between">
                        <p className="text-sm sm:text-xl">
                          Comment (optional):
                        </p>
                        <span
                          className={`text-sm sm:text-xl ${
                            comment.length > CHAR_LIMIT ? "text-red-500" : ""
                          }`}
                        >
                          {CHAR_LIMIT - comment.length}/{CHAR_LIMIT}
                        </span>
                      </div>
                      <input
                        className={`w-full h-max border p-1 sm:p-2 text-xs sm:text-lg font-mono ${
                          comment.length > CHAR_LIMIT ? "border-red-500" : ""
                        }`}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        maxLength={CHAR_LIMIT}
                      />
                      <button
                        className="mt-2 w-full border border-primary h-6 sm:h-12 text-sm sm:text-lg bg-primary hover:invert"
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

          {/* Right Side - Comments List */}
          <div className="overflow-y-auto overflow-x-hidden border border-primary border-r-0 border-t-0 border-b-0">
            {isCommentsLoading ? (
              <div className="flex justify-center items-center h-full">
                <ImSpinner2 className="animate-spin size-5 sm:size-6" />
              </div>
            ) : (
              <ul className="flex flex-col gap-1 sm:gap-4 ml-4">
                {comments.map((comment) => (
                  <li
                    key={comment.id}
                    className="border border-gray-500 border-t-0 border-x-0"
                  >
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
                        className="text-md sm:text-2xl hover:text-blue-600"
                      >
                        {comment.name}
                      </a>
                    </div>
                    <p className="font-mono text-xs sm:text-lg pb-2">
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
