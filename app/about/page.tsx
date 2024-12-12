import { BiInfoSquare } from "react-icons/bi";
import Link from "next/link";
import { clubs } from "@/data";
import { education } from "@/data";
import ExperienceCard from "@/components/ui/ExperienceCard";

export const metadata = {
  title: "About Me - henryvendittelli.com",
  description: "More about Henry, including education and involvement in clubs."
};

export default function Page() {
  return (
    <main className="pt-8 pb-16 sm:pb-24">
      {/* intro */}
      <div className="border border-primary mx-2 p-4">
        <div className="flex items-end gap-4 pb-4">
          <div className="flex items-center gap-2">
            <BiInfoSquare size={30} />
            <p className="text-3xl">
              More About {""}
              <Link href="/" className="text-blue-600 hover:text-blue-300">
                Me
              </Link>
            </p>
          </div>
        </div>
        <p className="sm:text-2xl text-xl text-justify text-primary-1">
          Some information about my formal education in computer science and my
          involvement in clubs.
        </p>
      </div>
      {/* education */}
      <p className="mt-16 mb-4 text-4xl font-bold">Education</p>
      <ExperienceCard info={education} />
      {/* clubs */}
      <p className="mt-8 mb-4 text-4xl font-bold">Club Involvement</p>
      <ExperienceCard info={clubs} />
    </main>
  );
}
