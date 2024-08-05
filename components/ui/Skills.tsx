import React from "react";
import { FaAws, FaPython, FaJava } from "react-icons/fa";
import {
  SiGooglecloud,
  SiGit,
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
  SiFastapi,
  SiGunicorn,
  SiTensorflow,
  SiPytorch,
  SiMysql,
} from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";

type SkillType = {
  Icon: React.ElementType;
  name: string;
};

const skills: SkillType[] = [
  { Icon: SiGooglecloud, name: "GCP" },
  { Icon: FaAws, name: "AWS" },
  { Icon: SiGit, name: "Git" },
  { Icon: FaPython, name: "Python" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiReact, name: "React" },
  { Icon: RiNextjsLine, name: "Next.js" },
  { Icon: RiTailwindCssFill, name: "Tailwind CSS" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: SiGraphql, name: "GraphQL" },
  { Icon: SiJirasoftware, name: "JQL" },
  { Icon: SiFirebase, name: "Firebase" },
  { Icon: FaJava, name: "Java" },
  { Icon: SiLua, name: "Lua" },
  { Icon: SiAuth0, name: "Auth0" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiFastapi, name: "FastAPI" },
  { Icon: SiGunicorn, name: "Gunicorn" },
  { Icon: SiTensorflow, name: "TensorFlow" },
  { Icon: SiPytorch, name: "PyTorch" },
  { Icon: SiGithubactions, name: "GitHub Actions" },
];

const SkillBox: React.FC<{ Icon: React.ElementType; name: string }> = ({
  Icon,
  name,
}) => {
  return (
    <div className="flex flex-grow sm:p-2 p-1 gap-2 border border-primary justify-center">
      <Icon className={"sm:w-7 w-5 sm:h-7 h-5"} />
      <p className="font-bold text-sm sm:text-xl">{name}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="mx-2 gap-4 flex flex-wrap justify-between">
      {skills.map((skill) => (
        <SkillBox key={skill.name} Icon={skill.Icon} name={skill.name} />
      ))}
    </div>
  );
};

export default Skills;
