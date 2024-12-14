"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data";
import { slugify } from "@/utils/string";
import { ImSpinner2 } from "react-icons/im";

export default function ProjectsPage() {
  const router = useRouter();

  useEffect(() => {
    const defaultProjectSlug = slugify(projects[0].title);
    router.replace(`/projects/${defaultProjectSlug}`);
  }, [router]);

  return (
    <div className="flex h-full animate-spin items-center justify-center">
      <ImSpinner2 />
    </div>
  );
}
