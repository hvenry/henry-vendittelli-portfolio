import { redirect } from "next/navigation";
import { projects } from "@/data";
import { slugify } from "@/lib/string";
import { parseTechFilter, matchesTechFilter } from "@/lib/techFilter";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ProjectsPage({
  searchParams
}: {
  searchParams: SearchParams;
}) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(await searchParams)) {
    if (typeof value === "string") params.set(key, value);
  }

  const { techs, matchAll } = parseTechFilter(params);
  const target =
    projects.find((project) =>
      matchesTechFilter(project.technologies, techs, matchAll)
    ) ?? projects[0];

  const query = params.toString();
  redirect(`/projects/${slugify(target.title)}${query ? `?${query}` : ""}`);
}
