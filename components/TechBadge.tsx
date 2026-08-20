import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaAws, FaPython, FaJava } from "react-icons/fa";
import {
  SiApache,
  SiAuth0,
  SiC,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiGnu,
  SiGnubash,
  SiGooglecloud,
  SiGraphql,
  SiGunicorn,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiLinux,
  SiLua,
  SiMeta,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiOpencv,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPytorch,
  SiReact,
  SiRedis,
  SiRust,
  SiSharp,
  SiSpacy,
  SiSqlite,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiUnity,
  SiVercel,
  SiVim,
  SiVite
} from "react-icons/si";

/** Technology icon registry shared by Skills and project pages */
const techIcons: Record<string, IconType> = {
  Python: FaPython,
  Bash: SiGnubash,
  Lua: SiLua,
  Java: FaJava,
  C: SiC,
  "C#": SiSharp,
  Rust: SiRust,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  React: SiReact,
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  "Express.js": SiExpress,
  Expo: SiExpo,
  "Tailwind CSS": SiTailwindcss,
  FastAPI: SiFastapi,
  Gunicorn: SiGunicorn,
  OpenCV: SiOpencv,
  PyTorch: SiPytorch,
  MySQL: SiMysql,
  Redis: SiRedis,
  PostgreSQL: SiPostgresql,
  "Neon PostgreSQL": SiPostgresql,
  MongoDB: SiMongodb,
  SQLite: SiSqlite,
  Firebase: SiFirebase,
  Git: SiGit,
  GCP: SiGooglecloud,
  AWS: FaAws,
  Auth0: SiAuth0,
  Vim: SiVim,
  Vite: SiVite,
  "Node.js": SiNodedotjs,
  GraphQL: SiGraphql,
  Postman: SiPostman,
  Terraform: SiTerraform,
  "GitHub Actions": SiGithubactions,
  Langchain: SiLangchain,
  Ollama: SiOllama,
  "Lama3.2": SiMeta,
  FAISS: SiMeta,
  spaCy: SiSpacy,
  Pandas: SiPandas,
  PHP: SiPhp,
  HTML: SiHtml5,
  CSS: SiCss3,
  Apache: SiApache,
  Unix: SiLinux,
  Makefile: SiGnu,
  Unity: SiUnity,
  Figma: SiFigma,
  Prisma: SiPrisma,
  Vercel: SiVercel
};

type TechBadgeProps = {
  name: string;
  size?: "sm" | "md";
  /** Render as a link (e.g. to the filtered projects page) */
  href?: string;
  /** Render as a toggle button (filter chip) */
  onClick?: () => void;
  selected?: boolean;
};

export default function TechBadge({
  name,
  size = "md",
  href,
  onClick,
  selected = false
}: TechBadgeProps) {
  const Icon = techIcons[name];
  const isSm = size === "sm";

  const className = `inline-flex items-center border transition-colors duration-200 ${
    isSm ? "gap-1.5 px-2 py-1" : "gap-2 px-2.5 py-1.5"
  } ${
    selected
      ? "border-foreground bg-foreground text-background"
      : "border-line text-muted hover:border-foreground/50 hover:text-foreground"
  }`;

  const content = (
    <>
      {Icon && <Icon className={isSm ? "size-3.5" : "size-4"} />}
      <span
        className={`font-medium ${
          isSm ? "text-[11px] sm:text-xs" : "text-xs sm:text-sm"
        }`}
      >
        {name}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={selected}
        className={`cursor-pointer ${className}`}
      >
        {content}
      </button>
    );
  }
  return <span className={className}>{content}</span>;
}
