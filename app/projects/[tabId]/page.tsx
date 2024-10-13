import { EvervaultCard } from "@/components/ui/evervault-card";
import { IoHammerSharp } from "react-icons/io5";
import { Tabs } from "@/components/ui/tabs";
import { projects } from "@/data";

interface Params {
  tabId: string;
}

// Dynamically generate metadata for the page
export async function generateMetadata({ params }: { params: Params }) {
  const { tabId } = params;
  const currentTab = projects.find((tab) => tab.id === tabId);

  const title = currentTab
    ? `${currentTab.title} Project - henryvendittelli.com`
    : "Projects - henryvendittelli.com";

  const description = currentTab
    ? `Information about the ${currentTab.title} project by Henry Vendittelli.`
    : "Explore various projects by Henry Vendittelli.";

  return {
    title,
    description
  };
}

export default function ProjectsPage({ params }: { params: Params }) {
  const tabs = projects;
  // Default to first project tab if no tab is specified
  const initialTab = params.tabId || "1";

  return (
    <main className="px-2 gap-4 sm:gap-8 w-full h-full flex flex-col items-center justify-center">
      {/* title */}
      <div className="w-full sm:w-4/5 h-1/5 sm:h-1/4">
        <EvervaultCard className="border border-primary">
          <div className="text-3xl text-white flex justify-center p-2 gap-2 items-center backdrop-blur-sm">
            <IoHammerSharp size={30} />
            <span>My Projects</span>
          </div>
        </EvervaultCard>
      </div>
      {/* projects */}
      <div className="w-full sm:w-4/5 mb-4">
        <Tabs
          tabs={tabs}
          activeTab={initialTab}
          tabClassName="border hover:text-blue-300 border-transparent border-l-0 border-r-0"
          activeTabClassName="border border-primary border-l-0 border-r-0"
        />
      </div>
    </main>
  );
}
