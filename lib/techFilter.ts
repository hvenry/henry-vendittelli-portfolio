export function parseTechFilter(params: {
  get: (key: string) => string | null;
}): string | null {
  // Older links may carry a comma-separated list; take the first entry
  const tech = params.get("tech")?.split(",").filter(Boolean)[0];
  return tech ?? null;
}

export function matchesTechFilter(
  projectTechs: string[] | undefined,
  tech: string | null
): boolean {
  if (!tech) return true;
  return (projectTechs ?? []).includes(tech);
}

export function buildTechQuery(tech: string | null): string {
  if (!tech) return "";
  return `?${new URLSearchParams({ tech }).toString()}`;
}
