import { ProjectTab } from "@/components/ProjectTab";
import { projects } from "@/data";
import { slugify } from "@/lib/string";
import { parseTechFilter } from "@/lib/techFilter";

type Params = Promise<{
  slug: string;
}>;

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const currentTab = projects.find(
    (project) => slugify(project.title) === slug
  );

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

export default async function ProjectsPage({
  params,
  searchParams
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { slug } = await params;
  const tabs = projects;
  const initialTab = slug || slugify(projects[0].title);

  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(await searchParams)) {
    if (typeof value === "string") query.set(key, value);
  }
  const initialFilter = parseTechFilter(query);

  return (
    <main className="pt-8 pb-16 sm:pb-24 px-2">
      <ProjectTab
        tabs={tabs}
        activeTab={initialTab}
        initialTechs={initialFilter.techs}
        initialMatchAll={initialFilter.matchAll}
      />
    </main>
  );
}
