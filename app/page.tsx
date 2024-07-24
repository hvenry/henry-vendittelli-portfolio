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
    <>
      <main className="min-h-screen w-full flex justify-center pt-32 pb-16 px-4">
        <div className="bg-black w-full mx-4">
          {/* intro */}
          <div className="border border-neutral-300 p-4">
            <div className="flex flex-col items-start sm:flex-row sm:items-end sm:gap-4 pb-4">
              <div className="flex items-end gap-2">
                <Image
                  src={rock_icon}
                  width={28}
                  height={28}
                  alt="Henry Vendittelli"
                />
                <p className="sm:text-4xl text-3xl">Henry Vendittelli</p>
              </div>
              <p className="text-xl opacity-50">21 (he/him)</p>
            </div>
            <p className="sm:text-3xl text-xl text-justify pb-8">
              Hi! My name is Henry, and I am a software developer based out of
              Toronto Canada.
            </p>
            {/* intro */}
            <p className="sm:text-2xl text-lg text-justify text-gray-300">
              Welcome to my portfolio website / blog! Before anything, I would
              like to say that I am highly appreciative of anyone that takes the
              time to come look at my work. Programming, amongst other things,
              is my one of my passions, and I always am looking to improve my
              skills and share my interest with others who are interested.
              Please enjoy your stay and feel free to {""}
              <LinkPreview
                url="https://www.henryvendittelli.com/contact"
                className="font-bold text-blue-300 hover:text-blue-500"
              >
                reach out
              </LinkPreview>
              {""} to me if you have any questions, comments, or just want to
              grab a cup of coffee.
            </p>
          </div>
          {/* socials */}
          <div className="pt-4 w-full flex items-center justify-end gap-2">
            <Socials />
          </div>
          {/* work experience */}
          <p className="pt-12 pb-4 sm:text-4xl text-3xl font-bold">
            work experience
          </p>
          <ExperienceInfo info={work} />
          {/* skills */}
          <p className="pb-4 sm:text-4xl text-3xl font-bold">
            technologies I work with
          </p>
          <div className="4">
            <Skills />
          </div>
          {/* project demos */}
          <p className="sm:text-4xl text-3xl font-bold pt-16 pb-8">
            some {""}
            <Link href="/projects" legacyBehavior>
              <a className="text-blue-300 hover:text-blue-500">project</a>
            </Link>
            {""} demos
          </p>
          <div className="flex flex-col items-center md:mx-16 gap-12 pb-16">
            <YtPreview />
          </div>
          {/* bottom page nav */}
          <BackToTop />
        </div>
      </main>
    </>
  );
}
