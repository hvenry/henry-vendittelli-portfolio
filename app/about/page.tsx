import { BiInfoSquare } from "react-icons/bi";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import { clubs } from "@/data";
import { education } from "@/data";
import ExperienceInfo from "@/components/ui/ExperienceInfo";

export default function Page() {
  return (
    <main className="w-full pb-16">
      {/* intro */}
      <div className="border border-primary p-4">
        <div className="flex items-end gap-4 pb-4">
          <div className="flex items-center gap-2">
            <BiInfoSquare size={30} />
            <p className="text-3xl">
              More About {""}
              <Link href="/" legacyBehavior>
                <a className="text-blue-600 hover:text-blue-300">Me</a>
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
      <ExperienceInfo info={education} />

      {/* clubs */}
      <p className="mt-8 mb-4 text-4xl font-bold">Club Involvement</p>
      <ExperienceInfo info={clubs} />
      {/* bottom page nav */}
      <BackToTop />
    </main>
  );
}
