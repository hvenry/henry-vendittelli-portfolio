export function parseTechFilter(params: {
  get: (key: string) => string | null;
}) {
  return {
    techs: params.get("tech")?.split(",").filter(Boolean) ?? [],
    matchAll: params.get("mode") !== "any"
  };
}

export function matchesTechFilter(
  projectTechs: string[] | undefined,
  selected: string[],
  matchAll: boolean
): boolean {
  if (selected.length === 0) return true;
  const techs = projectTechs ?? [];
  return matchAll
    ? selected.every((tech) => techs.includes(tech))
    : selected.some((tech) => techs.includes(tech));
}

export function buildTechQuery(selected: string[], matchAll: boolean): string {
  if (selected.length === 0) return "";
  const params = new URLSearchParams({ tech: selected.join(",") });
  if (!matchAll) params.set("mode", "any");
  return `?${params.toString()}`;
}
