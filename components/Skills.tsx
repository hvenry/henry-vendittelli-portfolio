import React from "react";
import { FaAws, FaPython, FaJava } from "react-icons/fa";
import {
  SiGooglecloud,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiExpo,
  SiFirebase,
  SiGraphql,
  SiLua,
  SiAuth0,
  SiGithubactions,
  SiNodedotjs,
  SiFastapi,
  SiGunicorn,
  SiPytorch,
  SiMysql,
  SiC,
  SiRust,
  SiGnubash,
  SiPostgresql,
  SiOpencv,
  SiMongodb,
  SiSqlite,
  SiRedis,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiVim,
  SiVite,
  SiPostman,
  SiTerraform
} from "react-icons/si";

type SkillType = {
  Icon: React.ElementType;
  name: string;
};

const skillCategories: { title: string; skills: SkillType[] }[] = [
  {
    title: "Programming Languages",
    skills: [
      { Icon: FaPython, name: "Python" },
      { Icon: SiGnubash, name: "Bash" },
      { Icon: SiLua, name: "Lua" },
      { Icon: FaJava, name: "Java" },
      { Icon: SiC, name: "" },
      { Icon: SiRust, name: "Rust" },
      { Icon: SiTypescript, name: "TypeScript" },
      { Icon: SiJavascript, name: "JavaScript" }
    ]
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { Icon: SiReact, name: "React" },
      { Icon: SiNextdotjs, name: "Next.js" },
      { Icon: SiExpress, name: "Express.js" },
      { Icon: SiReact, name: "React Native" },
      { Icon: SiExpo, name: "Expo" },
      { Icon: SiTailwindcss, name: "Tailwind CSS" },
      { Icon: SiFastapi, name: "FastAPI" },
      { Icon: SiGunicorn, name: "Gunicorn" },
      { Icon: SiOpencv, name: "OpenCV" },
      { Icon: SiPytorch, name: "PyTorch" }
    ]
  },
  {
    title: "Database Technologies",
    skills: [
      { Icon: SiMysql, name: "MySQL" },
      { Icon: SiRedis, name: "Redis" },
      { Icon: SiPostgresql, name: "PostgreSQL" },
      { Icon: SiMongodb, name: "MongoDB" },
      { Icon: SiSqlite, name: "SQLite" },
      { Icon: SiFirebase, name: "Firebase" }
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { Icon: SiGit, name: "Git" },
      { Icon: SiGooglecloud, name: "GCP" },
      { Icon: FaAws, name: "AWS" },
      { Icon: SiAuth0, name: "Auth0" },
      { Icon: SiVim, name: "Vim" },
      { Icon: SiVite, name: "Vite" },
      { Icon: SiNodedotjs, name: "Node.js" },
      { Icon: SiGraphql, name: "GraphQL" },
      { Icon: SiPostman, name: "Postman" },
      { Icon: SiTerraform, name: "Terraform" },
      { Icon: SiGithubactions, name: "GitHub Actions" }
    ]
  }
];

const SkillBox: React.FC<{ Icon: React.ElementType; name: string }> = ({
  Icon,
  name
}) => {
  return (
    <div className="flex flex-grow sm:p-2 p-1.5 gap-2 border border-primary justify-center max-w-[150px] sm:max-w-[200px]">
      <Icon className={"sm:w-7 w-5 sm:h-7 h-5"} />

      {name !== "" && <p className="font-bold text-sm sm:text-xl">{name}</p>}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col">
      {skillCategories.map((category) => (
        <div
          key={category.title}
          className="px-2 py-4 border transition-transform duration-300 ease-in-out border-transparent hover:border-primary basic-glow hover:scale-[1.02] "
        >
          <p className="sm:text-2xl text-xl font-bold pl-2 pb-2 text-primary-1">
            [ {category.title} ]
          </p>
          <div className="mx-2 gap-4 flex flex-wrap justify-start">
            {category.skills.map((skill) => (
              <SkillBox key={skill.name} Icon={skill.Icon} name={skill.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
