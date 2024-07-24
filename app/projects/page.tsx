import { EvervaultCard } from "@/components/ui/evervault-card";
import { IoHammerSharp } from "react-icons/io5";
import { Tabs } from "@/components/ui/tabs";

export default function Page() {
  // TODO make these into components
  const tabs = [
    {
      title: "sentiment nlp",
      value: "sentimentnlp",
      content: (
        <div className="p-4 w-full h-96 overflow-hidden relative text-xl md:text-4xl font-bold text-white border border-neutral-300">
          <p>Sentiment Analysis NLP for QMIND</p>
        </div>
      ),
    },
    {
      title: "rental db",
      value: "rentaldb",
      content: (
        <div className="p-4 w-full h-96 overflow-hidden relative text-xl md:text-4xl font-bold text-white border border-neutral-300">
          <p>Kingston Rental Property Database</p>
        </div>
      ),
    },
    {
      title: "portfolio",
      value: "portfolio",
      content: (
        <div className="p-4 w-full h-96 overflow-hidden relative text-xl md:text-4xl font-bold text-white border border-neutral-300">
          <p>My portfolio website</p>
        </div>
      ),
    },
    {
      title: "game",
      value: "game",
      content: (
        <div className="p-4 w-full h-96 overflow-hidden relative text-xl md:text-4xl font-bold text-white border border-neutral-300">
          <p>Bear The Animal Tosser</p>
        </div>
      ),
    },
    {
      title: "parking app",
      value: "parkqu",
      content: (
        <div className="p-4 w-full h-96 overflow-hidden relative text-xl md:text-4xl font-bold text-white border border-neutral-300">
          <p>parkQu</p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen w-full flex justify-center pt-32 pb-16 px-4">
      {/* page content */}
      <div className="bg-black w-full mx-4">
        {/* title */}
        <div className="border border-neutral-300 flex justify-center">
          <EvervaultCard className="w-full h-40 sm:h-80">
            <div className="text-4xl flex justify-center border-4 p-2 gap-2 items-center border-black backdrop-blur-sm">
              <IoHammerSharp size={30} />
              <span>my projects</span>
            </div>
          </EvervaultCard>
        </div>
        {/* view projects */}
        <p className="sm:text-2xl text-xl text-justify text-neutral-200 pt-2 pb-16">
          Here you can see some of the projects that I have worked on.
        </p>
        <Tabs tabs={tabs} />
      </div>
    </main>
  );
}
