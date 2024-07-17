import React from "react";
import { FaAws, FaPython, FaJava } from "react-icons/fa";
import {
  SiGooglecloud,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiFirebase,
  SiGraphql,
  SiJirasoftware,
  SiLua,
  SiAuth0,
  SiGithubactions,
  SiNodedotjs,
} from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";

type SkillType = {
  Icon: React.ElementType;
  name: string;
};

const skills: SkillType[] = [
  { Icon: FaAws, name: "Amazon Web Services" },
  { Icon: SiGooglecloud, name: "Google Cloud Platform" },
  { Icon: FaPython, name: "Python" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiReact, name: "React" },
  { Icon: RiNextjsLine, name: "Next.js" },
  { Icon: RiTailwindCssFill, name: "Tailwind CSS" },
  { Icon: DiMysql, name: "MySQL" },
  { Icon: SiGraphql, name: "GraphQL" },
  { Icon: SiJirasoftware, name: "JQL" },
  { Icon: SiFirebase, name: "Firebase" },
  { Icon: FaJava, name: "Java" },
  { Icon: SiLua, name: "Lua" },
  { Icon: SiAuth0, name: "Auth0" },
  { Icon: SiGithubactions, name: "GitHub Actions" },
  { Icon: SiNodedotjs, name: "Node.js" },
];

const SkillBox: React.FC<{ Icon: React.ElementType; name: string }> = ({
  Icon,
  name,
}) => {
  return (
    <div className="p-2 hover:border-blue-300 transition duration-300 ease-in-out inline-flex justify-center items-center gap-2 border border-neutral-300 m-2 whitespace-nowrap">
      <Icon className={"fill-white"} size={28} />
      <p className="font-bold text-md sm:text-xl">{name}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      {skills.map((skill) => (
        <SkillBox key={skill.name} Icon={skill.Icon} name={skill.name} />
      ))}
    </div>
  );
};

export default Skills;
