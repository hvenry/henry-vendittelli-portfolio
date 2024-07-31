import { EvervaultCard } from "@/components/ui/evervault-card";
import { IoHammerSharp } from "react-icons/io5";
import { Tabs } from "@/components/ui/tabs";

export default function Page() {
  const tabStyle =
    "w-full h-full p-4 text-xl overflow-auto md:text-3xl font-bold border border-primary";

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
      title: "Rental DB",
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
      title: "C# Game",
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
    <main className="gap-8 w-full h-full flex flex-col items-center justify-center px-4">
      {/* title */}
      <div className="w-full lg:w-3/4 h-1/4">
        <EvervaultCard className="border border-primary">
          <div className="text-3xl text-white flex justify-center p-2 gap-2 items-center backdrop-blur-sm">
            <IoHammerSharp size={30} />
            <span>My Projects</span>
          </div>
        </EvervaultCard>
      </div>
      {/* projects */}
      <div className="w-full lg:w-3/4 h-1/2 ">
        <Tabs
          tabs={tabs}
          tabClassName="border hover:text-blue-300 border-transparent border-l-0 border-r-0"
          activeTabClassName="border border-primary border-l-0 border-r-0"
        />
      </div>
    </main>
  );
}
