import Image from "next/image";
import ExperienceCard from "@/components/ExperienceCard";
import { work } from "@/data";
import { intro } from "@/data";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Link from "next/link";
import ProjectsGrid from "@/components/ProjectGrid";
import headshot from "@/public/assets/images/headshot.jpeg";
import RockLink from "@/components/RockLink";

export const metadata = {
  title: "Hello! 👋 - henryvendittelli.com",
  description:
    "Welcome to my portfolio! Explore my experience, projects, and hobbies. Let's connect and build something!"
};

function formatBodyWithLink(
  body: string,
  linkText: string,
  url: string
): JSX.Element {
  const parts = body.split(linkText);

  return (
    <>
      {parts[0]}
      <a href={url} className="text-blue-600 hover:text-blue-300">
        {linkText}
      </a>
      {parts[1]}
    </>
  );
}

export default function Page() {
  return (
    <main className="pt-8 pb-16 sm:pb-24">
      {/* intro */}
      <div className="border border-primary mx-2 p-4">
        <div className="flex flex-row items-center gap-4">
          <Image
            src={headshot}
            alt="Henry Vendittelli"
            className="border border-primary size-28 mb-4 p-1"
          />
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:gap-4 sm:pb-4">
              <div className="flex items-end gap-2">
                <RockLink />
                <p className="sm:text-3xl text-lg">Henry Vendittelli</p>
              </div>
              <p className="sm:text-xl text-md text-gray-500">22 (he/him)</p>
            </div>
            <p className="sm:w-3/4 text-primary-1 sm:text-xl md:text-2xl text-md text-justify pb-4">
              {intro.intro}
            </p>
          </div>
        </div>
        <p className="sm:text-lg text-sm font-mono text-justify primary-2">
          {intro.description}{" "}
          {formatBodyWithLink(intro.body, "reach out", "/reach-out")}
        </p>
      </div>
      {/* socials */}
      <div className="pt-4 w-full flex items-center justify-end gap-2">
        <Socials />
      </div>
      {/* work experience */}
      <p className="mt-12 mb-4 sm:text-4xl text-3xl font-bold">
        Work Experience
      </p>
      <ExperienceCard info={work} />
      {/* skills */}
      <p className="mt-12 mb-4 sm:text-4xl text-3xl font-bold">
        Technologies I Build With
      </p>
      <Skills />
      {/* project demos */}
      <p className="mt-16 mb-6 sm:text-4xl text-3xl font-bold">
        Some {""}
        <Link href="/projects" className="text-blue-600 hover:text-blue-300">
          Project
        </Link>
        {""} Demos
      </p>
      <ProjectsGrid projectSlugs={["parking-app", "rag-system", "c-game"]} />
    </main>
  );
}
