import React from "react";
import TechBadge from "@/components/TechBadge";

const skillCategories: { title: string; skills: string[] }[] = [
  {
    title: "Programming Languages",
    skills: [
      "Python",
      "Bash",
      "Lua",
      "Java",
      "C",
      "Rust",
      "TypeScript",
      "JavaScript"
    ]
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      "React",
      "Next.js",
      "Express.js",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "FastAPI",
      "Gunicorn",
      "OpenCV",
      "PyTorch"
    ]
  },
  {
    title: "Database Technologies",
    skills: ["MySQL", "Redis", "PostgreSQL", "MongoDB", "SQLite", "Firebase"]
  },
  {
    title: "Developer Tools",
    skills: [
      "Git",
      "GCP",
      "AWS",
      "Auth0",
      "Vim",
      "Vite",
      "Node.js",
      "GraphQL",
      "Postman",
      "Terraform",
      "GitHub Actions"
    ]
  }
];

const Skills = () => {
  return (
    <div className="mx-2 flex flex-col gap-6">
      {skillCategories.map((category) => (
        <div key={category.title}>
          <p className="pb-3 font-display text-sm font-medium uppercase tracking-[0.15em] text-subtle">
            {category.title}
          </p>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <TechBadge
                key={skill}
                name={skill}
                href={`/projects?tech=${encodeURIComponent(skill)}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
