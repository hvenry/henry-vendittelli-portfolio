import Image from "next/image";
import rock_icon from "@/public/assets/images/icons/rock_icon.png";
import ExperienceInfo from "@/components/ui/ExperienceInfo";
import { work } from "@/data";
import { LinkPreview } from "@/components/ui/link-preview";
import Skills from "@/components/ui/Skills";
import Socials from "@/components/ui/Socials";
import Link from "next/link";
import YtPreview from "@/components/ui/YtPreview";
import ProjectsGrid from "@/components/ProjectsGrid";
import headshot from "@/public/assets/images/headshot.jpeg";

export const metadata = {
  title: "Hello! 👋 - henryvendittelli.com",
  description:
    "Henry's portfolio introduction, work experience, and some project demos.",
};

export default function Page() {
  return (
    <main className="pt-8 pb-16 sm:pb-24">
      {/* intro */}
      <div className="border border-primary p-4">
        <div className="flex flex-row items-center gap-4">
          <Image
            src={headshot}
            alt="Henry Vendittelli"
            className="border border-primary size-28 mb-4 p-1"
          />
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:gap-4 sm:pb-4">
              <div className="flex items-end gap-2">
                <Image
                  src={rock_icon}
                  alt="Henry Vendittelli"
                  className="size-5 sm:size-8"
                />
                <p className="sm:text-3xl text-lg">Henry Vendittelli</p>
              </div>
              <p className="sm:text-xl text-md text-gray-500">21 (he/him)</p>
            </div>
            <p className="sm:w-3/4 text-primary-1 sm:text-xl md:text-2xl text-md text-justify pb-4">
              Hi! My name is Henry, and I am a software developer based out of
              Toronto, Canada.
            </p>
          </div>
        </div>
        <p className="sm:text-lg text-sm font-mono text-justify primary-2">
          Welcome to my portfolio website! I really appreciate you taking the
          time to view my work. Programming is one of my greatest passions, and
          I am always looking to improve my skills and share my work with others
          who are interested. I hope you enjoy your time here, and feel free to{" "}
          <LinkPreview
            url="https://www.henryvendittelli.com/reach-out"
            className="text-blue-600 hover:text-blue-300"
          >
            reach out
          </LinkPreview>{" "}
          to me if you have any questions, feedback, or just want to grab a cup
          of coffee (I am a big-time Java enjoyer).
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
      <ExperienceInfo info={work} />
      {/* skills */}
      <p className="mt-12 mb-6 sm:text-4xl text-3xl font-bold">
        Technologies I Work With
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
      {/* <YtPreview /> */}
      <ProjectsGrid projectIds={["5", "3", "4"]} />
    </main>
  );
}
