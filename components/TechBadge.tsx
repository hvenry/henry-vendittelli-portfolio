import Link from "next/link";
import { IconType } from "react-icons";
import { FaAws, FaPython, FaJava } from "react-icons/fa";
import { PiCodeSimple, PiMaskHappy } from "react-icons/pi";
import {
  SiApache,
  SiArchlinux,
  SiAuth0,
  SiClerk,
  SiHomebrew,
  SiNeovim,
  SiRaycast,
  SiTmux,
  SiZsh,
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
  SiPnpm,
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
  SiThreedotjs,
  SiTypescript,
  SiUnity,
  SiVercel,
  SiVim,
  SiVite
} from "react-icons/si";

/** Technology icon registry shared by Skills and project pages */
export const techIcons: Record<string, IconType> = {
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
  "Three.js": SiThreedotjs,
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
  Clerk: SiClerk,
  Git: SiGit,
  Neovim: SiNeovim,
  tmux: SiTmux,
  Zsh: SiZsh,
  Homebrew: SiHomebrew,
  Raycast: SiRaycast,
  GCP: SiGooglecloud,
  AWS: FaAws,
  Auth0: SiAuth0,
  Vim: SiVim,
  Vite: SiVite,
  pnpm: SiPnpm,
  // Playwright has no brand icon in react-icons; its logo is a theatre mask
  Playwright: PiMaskHappy,
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
  "Arch Linux": SiArchlinux,
  Makefile: SiGnu,
  "GNU Stow": SiGnu,
  Unity: SiUnity,
  Figma: SiFigma,
  Prisma: SiPrisma,
  Vercel: SiVercel
};

/** Icon for a technology name; unknown names get a generic code glyph */
export const getTechIcon = (name: string): IconType =>
  techIcons[name] ?? PiCodeSimple;

type TechBadgeProps = {
  name: string;
  size?: "sm" | "md";
  /** Render as a link (e.g. to the filtered projects page) */
  href?: string;
  /** Render as a toggle button (filter chip) */
  onClick?: () => void;
  selected?: boolean;
  className?: string;
};

export default function TechBadge({
  name,
  size = "md",
  href,
  onClick,
  selected = false,
  className: extraClassName = ""
}: TechBadgeProps) {
  const Icon = getTechIcon(name);
  const isSm = size === "sm";

  const sizeClassName = isSm ? "gap-1.5 px-2 py-1" : "gap-2 px-2.5 py-1.5";
  const stateClassName = selected
    ? "border-foreground bg-foreground text-background"
    : "border-line text-muted hover:border-foreground/50 hover:text-foreground";
  const className = `${extraClassName} inline-flex items-center border transition-colors duration-200 ${sizeClassName} ${stateClassName}`;

  const content = (
    <>
      <Icon className={isSm ? "size-3.5" : "size-4"} />
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
