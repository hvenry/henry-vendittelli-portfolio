import Image from "next/image";
import rock_icon from "../public/assets/images/icons/rock_icon.png";
import empire_icon from "../public/assets/images/icons/empire_icon.png";
import insights_icon from "../public/assets/images/icons/360insights_icon.png";
import partisans_icon from "../public/assets/images/icons/partisans_icon.png";

export default function Page() {
  return (
    <>
      <main className="min-h-screen w-full flex justify-center pt-24 pb-4 px-4">
        <div className="bg-black w-full">
          {/* intro */}
          <div className="px-4 pt-8">
            {/* name and basic info */}
            <div className="flex items-end gap-4 pb-4">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={rock_icon}
                  width={24}
                  height={24}
                  alt="Henry Vendittelli"
                />
                <p className="sm:text-3xl text-2xl">Henry Vendittelli</p>
              </div>
              <p className="text-xl opacity-50">21 (he/him)</p>
            </div>
            <p className="sm:text-2xl text-xl text-justify pb-4">
              Hi! My name is Henry, and I am software engineer based out of
              Toronto Canada.
            </p>
            {/* intro */}
            <p className="sm:text-xl text-lg text-justify">
              Welcome to my portfolio website / blog! Before anything, I would
              like to say that I am highly appreciative of anyone that takes the
              time to come look at my work. Programming, among other things, is
              my one of my passions and I always am looking to improve my skills
              and share my passion with others who are interested. Please enjoy
              your stay and feel free to reach out to me if you have any
              questions or comments.
            </p>
          </div>
          {/* work experience */}
          <div className="px-4 pt-16">
            <div className="pb-4">
              <p className="text-3xl font-bold">work experience</p>
            </div>
            {/* empire */}
            <div className="pb-8">
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
                <p className="sm:text-xl text-md opacity-50">Student Software Developer</p>
              </div>
              <p className="sm:text-xl text-lg text-justify">
                At Empire Life, I worked on an internal technology management
                and adoption tool. I was responsible for developing new features
                from start to finish from feedback of other developers using the
                tool, maintaining a healthy database, designing new API
                endpoints, and managing deployments. Doing this required
                collaboration with other developers, and leveraging a variety of
                DevOps tools for CI/CD.
              </p>
            </div>
            {/* 360 */}
            <div className="pb-8">
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
                <p className="sm:text-xl text-md opacity-50">Junior Data Scientist</p>
              </div>
              <p className="sm:text-xl text-lg text-justify">
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
            <div className="pb-4">
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
              <p className="sm:text-xl text-lg text-justify">
                Before I wanted to become a computer scientist, I wanted to be
                an architect. This is what lead me to a student position at
                Partisans for a few summers, but after getting introduced to
                computer programming in highschool a new passion formed, and I
                pivoted to pursue computer science.
              </p>
            </div>
          </div>
          {/* clubs */}
          <div className="px-4 pt-12">
            <div className="pb-4">
              <p className="text-3xl font-bold">club involvement</p>
            </div>
            <p className="text-2xl">QUANTT</p>
            <p className="text-2xl">QDAA</p>
            <p className="text-2xl">COMPSA</p>
            <p className="text-2xl">Project Red</p>
            <p className="text-2xl">QMIND</p>
            <p className="text-2xl">QFSF</p>
          </div>
          {/* projects */}
          <div className="px-4 pt-16">
            <div className="pb-4">
              <p className="text-3xl font-bold">some projects</p>
            </div>
            <div className="mb-4 h-32 w-full bg-white"></div>
            <div className="mb-4 h-32 w-full bg-white"></div>
            <div className="h-32 w-full bg-white"></div>
          </div>
          {/* more about me */}
          <div className="px-4 pt-16">
            <div className="pb-4">
              <p className="text-3xl font-bold">more about me:</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
