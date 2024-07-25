import { EvervaultCard } from "@/components/ui/evervault-card";
import { IoHammerSharp } from "react-icons/io5";
import { Tabs } from "@/components/ui/tabs";

export default function Page() {
  // TODO make these into components
  // add title
  // add description
  // add image
  // add socials per project (youtube, github)
  // add tech stack

  const tabStyle =
    "p-4 w-full h-96 overflow-hidden relative text-xl md:text-3xl font-bold text-white border border-neutral-300";

  const tabs = [
    {
      title: "Sentiment NLP",
      value: "1",
      content: (
        <div className={tabStyle}>
          <p>Sentiment Analysis NLP for QMIND</p>
        </div>
      ),
    },
    {
      title: "Rental Webapp",
      value: "2",
      content: (
        <div className={tabStyle}>
          <p>Kingston Rental Property Database</p>
        </div>
      ),
    },
    {
      title: "Portfolio",
      value: "3",
      content: (
        <div className={tabStyle}>
          <p>My portfolio website</p>
        </div>
      ),
    },
    {
      title: "Bear The Animal Tosser",
      value: "4",
      content: (
        <div className={tabStyle}>
          <p>Bear The Animal Tosser</p>
        </div>
      ),
    },
    {
      title: "Student Parking App",
      value: "5",
      content: (
        <div className={tabStyle}>
          <p>ParkQu</p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen w-full flex justify-center pt-32 pb-16 px-4">
      {/* page content */}
      <div className="bg-black w-full mx-4">
        {/* title */}
        <div className="border border-neutral-300 flex flex-col justify-center mb-12">
          <EvervaultCard className="w-full h-48 sm:h-80">
            <div className="text-3xl flex justify-center border-4 p-2 gap-2 items-center border-black backdrop-blur-sm">
              <IoHammerSharp size={30} />
              <span>My Projects</span>
            </div>
          </EvervaultCard>
          {/* view projects */}
        </div>
        <Tabs tabs={tabs} />
      </div>
    </main>
  );
}
