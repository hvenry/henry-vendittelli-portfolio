import { FancyCard } from "@/components/ui/FancyCard";
import { IoHammerSharp } from "react-icons/io5";
import { ProjectTabs } from "@/components/projects/ProjectTabs";
import { projects } from "@/data";
import { slugify } from "@/utils/string";

type Params = {
  slug: string;
};

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = params;
  const currentTab = projects.find((project) => slugify(project.title) === slug);

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
  const initialTab = params.slug || slugify(projects[0].title);

  return (
    <main className="px-2 gap-4 sm:gap-8 w-full h-full flex flex-col items-center justify-center">
      <div className="w-full sm:w-4/5 h-1/5 sm:h-1/4">
        <FancyCard className="border border-primary">
          <div className="text-3xl text-white flex justify-center p-2 gap-2 items-center backdrop-blur-sm">
            <IoHammerSharp size={30} />
            <span>My Projects</span>
          </div>
        </FancyCard>
      </div>
      <div className="w-full sm:w-4/5 mb-4">
        <ProjectTabs
          tabs={tabs}
          activeTab={initialTab}
          tabClassName="border hover:text-blue-300 border-transparent border-l-0 border-r-0"
          activeTabClassName="border border-primary border-l-0 border-r-0"
        />
      </div>
    </main>
  );
}