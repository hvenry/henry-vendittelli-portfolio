"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data";

// Utility function for generating slugs
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
};

export default function ProjectsPage() {
  const router = useRouter();

  useEffect(() => {
    const defaultProjectSlug = slugify(projects[0].title);
    router.replace(`/projects/${defaultProjectSlug}`);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-pulse">Loading Projects...</div>
    </div>
  );
}