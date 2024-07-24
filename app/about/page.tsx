import Image from "next/image";
import queens_icon from "@/public/assets/images/icons/queens_icon.png";
import { BiInfoSquare } from "react-icons/bi";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import { clubs } from "@/data";
import { education } from "@/data";
import ExperienceInfo from "@/components/ui/ExperienceInfo";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex justify-center pt-32 pb-16 px-4">
      <div className="bg-black w-full mx-4">
        {/* intro */}
        {/* name and basic info */}
        <div className="border border-neutral-300 p-4">
          <div className="flex items-end gap-4 pb-4">
            <div className="flex items-end gap-2">
              <BiInfoSquare size={30} />
              <p className="text-3xl">
                more about
                <Link href="/" legacyBehavior>
                  <a className="text-blue-300 hover:text-blue-500"> me</a>
                </Link>
              </p>
            </div>
          </div>
          <p className="sm:text-2xl text-xl text-justify text-gray-200">
            Some information about my formal education in computer science and
            my involvement in clubs.
          </p>
        </div>
        {/* education */}
        <p className="pt-16 pb-4 text-4xl font-bold">education</p>
        <ExperienceInfo info={education} />

        {/* clubs */}
        <p className="pb-4 text-4xl font-bold">club involvement</p>
        <ExperienceInfo info={clubs} />
        {/* bottom page nav */}
        <BackToTop />
      </div>
    </main>
  );
}
