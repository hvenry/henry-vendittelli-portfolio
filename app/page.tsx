import Image from "next/image";
import rock_icon from "@/public/assets/images/icons/rock_icon.png";
import BackToTop from "@/components/BackToTop";
import ExperienceInfo from "@/components/ui/ExperienceInfo";
import { work } from "@/data";
import { LinkPreview } from "@/components/ui/link-preview";
import Skills from "@/components/ui/Skills";
import Socials from "@/components/ui/Socials";
import Link from "next/link";
import YtPreview from "@/components/ui/YtPreview";

export default function Page() {
  return (
    <main className="w-full pb-16 px-4">
      {/* intro */}
      <div className="border border-primary p-4">
        <div className="flex flex-col items-start sm:flex-row sm:items-end sm:gap-4 pb-4">
          <div className="flex items-end gap-2">
            <Image
              src={rock_icon}
              width={28}
              height={28}
              alt="Henry Vendittelli"
            />
            <p className="sm:text-3xl text-3xl">Henry Vendittelli</p>
          </div>
          <p className="text-xl text-gray-500">21 (he/him)</p>
        </div>
        <p className="text-primary-1 sm:text-2xl text-lg text-justify pb-4">
          Hi! My name is Henry, and I am a software developer based out of
          Toronto Canada.
        </p>
        {/* intro */}
        <p className="sm:text-lg text-sm font-mono text-justify primary-2">
          Welcome to my portfolio website / blog! Before anything, I would like
          to say that I am highly appreciative of anyone that takes the time to
          come look at my work. Programming, amongst other things, is my one of
          my passions, and I always am looking to improve my skills and share my
          interest with others who are interested. Please enjoy your stay and
          feel free to {""}
          <LinkPreview
            url="https://www.henryvendittelli.com/reach-out"
            className="text-blue-600 hover:text-blue-300"
          >
            reach out
          </LinkPreview>
          {""} to me if you have any questions, comments, or just want to grab a
          cup of coffee.
        </p>
      </div>
      {/* socials */}
      <div className="pt-4 w-full flex items-center justify-end gap-2">
        <Socials />
      </div>
      {/* work experience */}
      <p className="pt-12 pb-4 sm:text-4xl text-3xl font-bold">
        Work Experience
      </p>
      <ExperienceInfo info={work} />
      {/* skills */}
      <p className="pt-4 pb-4 sm:text-4xl text-3xl font-bold">
        Technologies I Work With
      </p>
      <div className="4">
        <Skills />
      </div>
      {/* project demos */}
      <p className="sm:text-4xl text-3xl font-bold pt-16 pb-8">
        Some {""}
        <Link href="/projects" legacyBehavior>
          <a className="text-blue-600 hover:text-blue-300">Project</a>
        </Link>
        {""} Demos
      </p>
      <div className="flex flex-col items-center gap-12 pb-16">
        <YtPreview />
      </div>
      {/* bottom page nav */}
      <BackToTop />
    </main>
  );
}
