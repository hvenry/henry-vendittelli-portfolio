import React from "react";
import Image from "next/image";
import ExperienceCard from "@/components/ExperienceCard";
import { work } from "@/data";
import { intro } from "@/data";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Link from "next/link";
import ProjectsGrid from "@/components/ProjectGrid";
import SectionHeading from "@/components/SectionHeading";
import Panel from "@/components/Panel";
import headshot from "@/public/assets/images/headshot.jpeg";
import RockLink from "@/components/RockLink";

export const metadata = {
  title: "Hello! 👋 - henryvendittelli.com",
  description:
    "Welcome to my portfolio! Explore my experience, projects, and hobbies. Let's connect and build something!"
};

function getAge(): number {
  const birthDate = new Date(2003, 2, 5); // March 5, 2003
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function formatBodyWithLink(
  body: string,
  linkText: string,
  url: string
): React.JSX.Element {
  const parts = body.split(linkText);

  return (
    <>
      {parts[0]}
      <a href={url} className="link">
        {linkText}
      </a>
      {parts[1]}
    </>
  );
}

export default function Page() {
  return (
    <main className="pt-8 pb-16 sm:pb-24">
      <div className="reveal mx-2">
        <Panel ticks>
          <div className="p-5 sm:p-6">
            <div className="flex flex-row items-start gap-4 sm:gap-5">
              <Image
                src={headshot}
                alt="Henry Vendittelli"
                className="size-24 border border-line p-1 sm:size-28"
              />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end sm:gap-3">
                  <div className="flex items-end gap-2">
                    <RockLink />
                    <h1 className="font-display text-xl font-semibold tracking-wide text-foreground sm:text-2xl">
                      Henry Vendittelli
                    </h1>
                  </div>
                  <p className="text-sm text-subtle sm:text-base">
                    {getAge()} (he/him)
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {intro.intro}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-subtle">
              {intro.description}{" "}
              {formatBodyWithLink(intro.body, "reach out", "/reach-out")}
            </p>
          </div>
        </Panel>
      </div>
      <div className="reveal reveal-1 flex w-full items-center justify-end gap-2 px-2 pt-4">
        <Socials />
      </div>
      <div className="reveal reveal-2">
        <SectionHeading className="mt-8 mb-4">Work Experience</SectionHeading>
        <ExperienceCard info={work} />
      </div>
      <div className="reveal reveal-3">
        <SectionHeading className="mt-12 mb-4">
          Technologies I Build With
        </SectionHeading>
        <Skills />
      </div>
      <div className="reveal reveal-4">
        <SectionHeading className="mt-12 mb-6">
          <Link
            href="/projects"
            className="transition-colors hover:text-subtle"
          >
            Project
          </Link>{" "}
          Demos
        </SectionHeading>
        <ProjectsGrid projectSlugs={["parking-app", "rag-system", "c-game"]} />
      </div>
    </main>
  );
}
