import { getAllProjects } from "@/lib/projects";
import { parseTechFilter } from "@/lib/techFilter";
import ProjectsIndex from "@/components/ProjectsIndex";

export const metadata = {
  title: "Projects - henryvendittelli.com",
  description: "Explore various projects by Henry Vendittelli."
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ProjectsPage({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const { tech } = await searchParams;
  const initialTech = parseTechFilter(tech);

  // Only the card fields cross the server/client boundary; `content` holds the
  // full markdown body of every project and would bloat the payload
  const projects = getAllProjects().map(
    ({
      slug,
      title,
      bodyTitle,
      summary,
      technologies,
      youtube,
      image,
      imageLight
    }) => ({
      slug,
      title,
      bodyTitle,
      summary,
      technologies,
      youtube,
      image,
      imageLight
    })
  );

  return (
    <main className="pt-8 pb-16 sm:pb-24 px-2">
      <ProjectsIndex projects={projects} initialTech={initialTech} />
    </main>
  );
}
