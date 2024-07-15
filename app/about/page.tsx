import Image from "next/image";
import queens_icon from "@/public/assets/images/icons/queens_icon.png";
import { BiInfoSquare } from "react-icons/bi";
import ClubInvolvement from "@/components/ui/ClubInvolvement";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex justify-center pt-40 pb-16 px-4">
      <div className="bg-black w-full mx-4">
        {/* intro */}
        {/* name and basic info */}
        <div className="border border-neutral-300 p-4">
          <div className="flex items-end gap-4 pb-4">
            <div className="flex items-end gap-2">
              <BiInfoSquare size={30} />
              <p className="text-4xl">
                More about
                <Link href="/" legacyBehavior>
                  <a className="text-blue-300 hover:text-blue-500"> me</a>
                </Link>
              </p>
            </div>
          </div>
          <p className="sm:text-2xl text-xl text-justify text-neutral-200">
            Some more information about my formal education in computer science
            and my involvement in clubs.
          </p>
        </div>
        {/* education */}
        <p className="pt-24 pb-4 text-4xl font-bold">education</p>
        <div className="flex flex-col items-start lg:flex-row lg:items-end gap-3 pb-2">
          <div className="flex items-center gap-2">
            <Image
              src={queens_icon}
              width={24}
              height={24}
              alt="Queen's University"
            />
            <a
              href="https://www.cs.queensu.ca/undergraduate/programs/specializations/cognitive-science.php"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:text-3xl text-2xl hover:text-blue-300"
            >
              Queen&apos;s University
            </a>
          </div>
          <p className="sm:text-xl text-md opacity-50">
            Bachelor of Computing (Honours) – Specialization in Cognitive
            Science
          </p>
        </div>
        <p className="sm:text-xl text-lg text-justify pb-2 text-gray-300">
          As of the summer of 2024, I will be going into my fourth and final
          year of my undergraduate degree at Queen&apos;s University and will be
          graduating by May 2025. I am specializing in Cognitive Science, which
          is very unique learning experience that combines all of the
          fundamentals of computer science with linguistics, and philosophy.
        </p>
        <p className="sm:text-lg text-gray-300">
          Awards: Excellence Scholarship
        </p>

        {/* clubs */}
        <p className="pt-24 pb-4 text-4xl font-bold">club involvement</p>
        <ClubInvolvement />
        <BackToTop />
      </div>
    </main>
  );
}
