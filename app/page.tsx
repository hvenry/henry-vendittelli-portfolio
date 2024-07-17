import Image from "next/image";
import rock_icon from "@/public/assets/images/icons/rock_icon.png";
import BackToTop from "@/components/BackToTop";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineSpotify } from "react-icons/ai";
import ExperienceInfo from "@/components/ui/ExperienceInfo";
import { work } from "@/data"; // Make sure this path is correct
import { LinkPreview } from "@/components/ui/link-preview";

export default function Page() {
  return (
    <>
      <main className="min-h-screen w-full flex justify-center pt-40 pb-16 px-4">
        <div className="bg-black w-full mx-4">
          {/* intro */}
          {/* name and basic info */}
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
              time to come look at my work. Programming, among other things, is
              my one of my passions, and I always am looking to improve my
              skills and share my interest with others who are interested.
              Please enjoy your stay and feel free to {""}
              <LinkPreview
                url="https://www.henryvendittelli.com/contact"
                className="font-bold text-blue-300 hover:text-blue-500"
              >
                reach out
              </LinkPreview>
              {""} to me if you have any questions, comments, or just want to
              get a cup of coffee.
            </p>
          </div>
          {/* socials TODO - turn into component */}
          <div className="pt-4 w-full flex items-center justify-end gap-2">
            <a
              href="https://www.linkedin.com/in/henryvendittelli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={"hover:fill-blue-300"} size={32} />
            </a>
            <a
              href="https://github.com/hvenry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className={"hover:fill-blue-300"} size={32} />
            </a>
            <a
              href="https://www.facebook.com/hvenry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className={"hover:fill-blue-300"} size={32} />
            </a>
            <a
              href="https://leetcode.com/u/hvenry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode className={"hover:fill-blue-300"} size={32} />
            </a>
            <a
              href="https://open.spotify.com/user/ogprinsta?si=b4845668d4f04833"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineSpotify className={"hover:fill-blue-300"} size={32} />
            </a>
          </div>
          {/* work experience TODO - turn into component */}

          <p className="pt-16 pb-4 text-4xl font-bold">work experience</p>
          <ExperienceInfo info={work} />

          {/* projects */}
          <p className="text-4xl font-bold pt-8 pb-8">
            some {""}
            <LinkPreview
              url="https://www.henryvendittelli.com/projects"
              className="font-bold text-blue-300 hover:text-blue-500"
            >
              project
            </LinkPreview>
            {""} demos
          </p>
          <div className="flex flex-col items-center mx-8 gap-12">
            {/* video 1 */}
            <div className="w-full md:w-3/4 lg:w-2/3 border border-neutral-200 flex flex-col items-center">
              <p className="p-4 sm:text-2xl text-xl">
                a parking app for university students.
              </p>
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/3u5slpDZprw?si=3_ISxIoAD-RcIFKV&amp;controls=0"
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            {/* video 2 */}
            <div className="w-full md:w-3/4 lg:w-2/3 border border-neutral-200 flex flex-col items-center">
              <p className="p-4 sm:text-2xl text-xl">
                a kingston property rental database webapp.
              </p>
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/bHJxmLcjUco?si=E5Hti0SjpxpX1BF8&amp;start=1;controls=0"
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            {/* video 3 */}
            <div className="w-full md:w-3/4 lg:w-2/3 border border-neutral flex flex-col items-center">
              <p className="p-4 sm:text-2xl text-xl">
                a game where you toss animals into pens.
              </p>
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/YPBpoDEXPhQ?si=W0iLnaHJXuqsS2p-&amp;start=2;controls=0"
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <BackToTop />
          </div>
        </div>
      </main>
    </>
  );
}
