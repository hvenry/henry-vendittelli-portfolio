import Image from "next/image";
import rock_icon from "@/public/assets/images/icons/rock_icon.png";
import empire_icon from "@/public/assets/images/icons/empire_icon.png";
import insights_icon from "@/public/assets/images/icons/360insights_icon.png";
import partisans_icon from "@/public/assets/images/icons/partisans_icon.png";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="min-h-screen w-full flex justify-center pt-40 pb-16 px-4">
        <div className="bg-black w-full mx-4">
          {/* intro */}
          {/* name and basic info */}
          <div className="border border-neutral-300 p-4">
            <div className="flex items-end gap-4 pb-4">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={rock_icon}
                  width={28}
                  height={28}
                  alt="Henry Vendittelli"
                />
                <p className="sm:text-4xl text-2xl">Henry Vendittelli</p>
              </div>
              <p className="text-xl opacity-50">21 (he/him)</p>
            </div>
            <p className="sm:text-3xl text-xl text-justify pb-8">
              Hi! My name is Henry, and I am software engineer based out of
              Toronto Canada.
            </p>
            {/* intro */}
            <p className="sm:text-2xl text-lg text-justify text-gray-300">
              Welcome to my portfolio website / blog! Before anything, I would
              like to say that I am highly appreciative of anyone that takes the
              time to come look at my work. Programming, among other things, is
              my one of my passions and I always am looking to improve my skills
              and share my passion with others who are interested. Please enjoy
              your stay and feel free to
              <Link href="/contact" legacyBehavior>
                <a className="text-blue-300 hover:text-blue-500"> reach out </a>
              </Link>
              to me if you have any questions or comments.
            </p>
          </div>

          {/* work experience */}
          <p className="pt-24 pb-4 text-4xl font-bold">work experience</p>
          {/* empire */}
          <div className="pb-16">
            <div className="flex items-end gap-3 pb-2">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={empire_icon}
                  width={24}
                  height={24}
                  alt="Henry Vendittelli"
                />
                <a
                  href="https://www.empire.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:text-3xl text-2xl hover:text-blue-300"
                >
                  Empire Life
                </a>
              </div>
              <p className="sm:text-xl text-md opacity-50">
                Student Software Developer
              </p>
            </div>
            <p className="sm:text-xl text-lg text-justify text-gray-300">
              At Empire Life, I worked on an internal technology management and
              adoption tool. I was responsible for developing new features from
              start to finish from feedback of other developers using the tool,
              maintaining a healthy database, designing new API endpoints, and
              managing deployments. Doing this required collaboration with other
              developers, and leveraging a variety of DevOps tools for CI/CD.
            </p>
          </div>
          {/* 360 */}
          <div className="pb-16">
            <div className="flex items-end gap-3 pb-2">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={insights_icon}
                  width={24}
                  height={24}
                  alt="Henry Vendittelli"
                />
                <a
                  href="https://www.360insights.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:text-3xl text-2xl hover:text-blue-300"
                >
                  360insights
                </a>
              </div>
              <p className="sm:text-xl text-md opacity-50">
                Junior Data Scientist
              </p>
            </div>
            <p className="sm:text-xl text-lg text-justify text-gray-300">
              As a data scientist at 360insights, I worked on a variety of
              projects in a fail fast environment. I was responsible for
              researching new time series forecasting models, testing there
              implementations, and deploying them to production to predict
              consumer rebates. I also worked on a NLP project using K-Means
              clustering and their call center transcript database to identify
              common complaints and consumer feedback.
            </p>
          </div>
          {/* partisans */}
          <div>
            <div className="flex items-end gap-3 pb-2">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={partisans_icon}
                  width={24}
                  height={24}
                  alt="Henry Vendittelli"
                />
                <a
                  href="https://partisans.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:text-3xl text-2xl hover:text-blue-300"
                >
                  Partisans
                </a>
              </div>
              <p className="sm:text-xl text-md opacity-50">Student Intern</p>
            </div>
            <p className="sm:text-xl text-lg text-justify text-gray-300">
              Before I wanted to become a computer scientist, I wanted to be an
              architect. This is what lead me to a student position at Partisans
              for a few summers, but after getting introduced to computer
              programming in highschool a new passion formed, and I pivoted to
              pursue computer science.
            </p>
          </div>
          {/* projects */}
          <p className="text-4xl font-bold pt-24 pb-8">
            some
            <Link href="/projects" legacyBehavior>
              <a className="text-blue-300 hover:text-blue-500"> project </a>
            </Link>
            demos
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
                a game where you toss escaped animals into pens.
              </p>
              <iframe
                className="w-full h-96"
                src="https://www.youtube.com/embed/YPBpoDEXPhQ?si=W0iLnaHJXuqsS2p-&amp;start=2;controls=0"
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
