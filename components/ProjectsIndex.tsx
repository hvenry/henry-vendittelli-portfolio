"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaYoutube } from "react-icons/fa";
import { PiMagnifyingGlass, PiX } from "react-icons/pi";
import { matchesTechFilter, buildTechQuery } from "@/lib/techFilter";
import TechBadge, { getTechIcon } from "@/components/TechBadge";
import Panel from "@/components/Panel";
import ProjectImage from "@/components/ProjectImage";

export interface ProjectCard {
  slug: string;
  title: string;
  bodyTitle: string;
  summary: string;
  technologies: string[];
  youtube?: string;
  image?: string;
  imageLight?: string;
}

interface ProjectsIndexProps {
  projects: ProjectCard[];
  initialTech: string | null;
}

export default function ProjectsIndex({
  projects,
  initialTech
}: ProjectsIndexProps) {
  const router = useRouter();
  const [selectedTech, setSelectedTech] = useState<string | null>(initialTech);
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  const techCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const project of projects) {
      for (const tech of project.technologies) {
        counts.set(tech, (counts.get(tech) ?? 0) + 1);
      }
    }
    return counts;
  }, [projects]);

  const allTechs = useMemo(
    () => Array.from(techCounts.keys()).sort((a, b) => a.localeCompare(b)),
    [techCounts]
  );

  const searchedTechs = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return allTechs;
    return allTechs.filter((tech) => tech.toLowerCase().includes(query));
  }, [allTechs, search]);

  const visibleProjects = useMemo(
    () =>
      projects.filter((project) =>
        matchesTechFilter(project.technologies, selectedTech)
      ),
    [projects, selectedTech]
  );

  // Keep the filter shareable via the URL
  const query = buildTechQuery(selectedTech);
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    router.replace(`/projects${query}`, { scroll: false });
  }, [query, router]);

  // Close the dropdown on outside click
  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (!searchBoxRef.current?.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  const selectTech = (tech: string) => {
    setSelectedTech(tech);
    setSearch("");
    setDropdownOpen(false);
  };

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) => (prev === tech ? null : tech));
  };

  const SelectedIcon = selectedTech ? getTechIcon(selectedTech) : null;

  return (
    <>
      {/* Technology search */}
      <div ref={searchBoxRef} className="relative">
        <div className="flex items-center border border-line bg-background focus-within:border-foreground/60">
          <PiMagnifyingGlass className="ml-4 size-5 shrink-0 text-subtle" />
          <input
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setDropdownOpen(true);
            }}
            onFocus={() => setDropdownOpen(true)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setDropdownOpen(false);
              if (event.key === "Enter" && searchedTechs.length > 0) {
                selectTech(searchedTechs[0]);
              }
            }}
            placeholder="Search technologies to filter projects…"
            aria-label="Search technologies"
            className="w-full bg-transparent px-3 py-3.5 text-base text-foreground placeholder:text-subtle focus:outline-none"
          />
        </div>
        {dropdownOpen && (
          <div className="absolute inset-x-0 top-full z-20 max-h-80 overflow-y-auto border border-t-0 border-line bg-background shadow-[0_16px_48px_0_rgb(0_0_0/0.5)]">
            {searchedTechs.length === 0 ? (
              <p className="px-4 py-3 text-sm text-subtle">
                No technologies match “{search.trim()}”.
              </p>
            ) : (
              searchedTechs.map((tech) => {
                const Icon = getTechIcon(tech);
                return (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => selectTech(tech)}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-foreground/10 ${
                      selectedTech === tech
                        ? "bg-foreground text-background hover:bg-foreground"
                        : "text-muted"
                    }`}
                  >
                    <Icon className="size-4 shrink-0" />
                    <span className="font-medium">{tech}</span>
                    <span
                      className={`ml-auto text-xs tabular-nums ${
                        selectedTech === tech
                          ? "text-background/70"
                          : "text-subtle"
                      }`}
                    >
                      {techCounts.get(tech)}{" "}
                      {techCounts.get(tech) === 1 ? "project" : "projects"}
                    </span>
                  </button>
                );
              })
            )}
          </div>
        )}
      </div>
      {/* Active filter */}
      <div className="mb-5 mt-3 flex min-h-8 items-center gap-2">
        {selectedTech ? (
          <>
            <span className="text-xs uppercase tracking-[0.15em] text-subtle">
              Filtering by
            </span>
            <span className="inline-flex items-center gap-2 border border-foreground bg-foreground px-2.5 py-1 text-background">
              {SelectedIcon && <SelectedIcon className="size-4" />}
              <span className="text-xs font-medium sm:text-sm">
                {selectedTech}
              </span>
              <button
                type="button"
                aria-label={`Remove ${selectedTech} filter`}
                onClick={() => setSelectedTech(null)}
                className="cursor-pointer transition-opacity hover:opacity-60"
              >
                <PiX className="size-4" />
              </button>
            </span>
          </>
        ) : (
          <span className="text-xs uppercase tracking-[0.15em] text-subtle">
            All projects
          </span>
        )}
        <span className="ml-auto text-xs tabular-nums text-subtle">
          {visibleProjects.length}/{projects.length} projects
        </span>
      </div>
      {visibleProjects.length === 0 ? (
        <div className="border border-line p-8 text-center">
          <p className="text-sm text-subtle">
            No projects match the selected filter.
          </p>
          <button
            type="button"
            onClick={() => setSelectedTech(null)}
            className="link mt-3 text-sm"
          >
            Clear filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {visibleProjects.map((project) => (
            <Panel
              key={project.slug}
              interactive
              className="panel-ticks-hover flex flex-col"
            >
              {/* Whole-card click target; interactive children sit above it at z-10 */}
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`${project.title} writeup`}
                className="absolute inset-0"
              />
              <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-2.5">
                <span className="font-display text-lg font-medium tracking-wide text-foreground sm:text-xl">
                  {project.title}
                </span>
                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="link-quiet relative z-10"
                  >
                    <FaYoutube className="size-5" />
                  </a>
                )}
              </div>
              {project.image && (
                <ProjectImage
                  image={project.image}
                  imageLight={project.imageLight}
                  alt={project.title}
                  className="aspect-[1200/630] w-full border-b border-line bg-background object-contain"
                />
              )}
              <div className="flex flex-1 flex-col px-4 py-3">
                <p className="text-sm font-medium text-foreground">
                  {project.bodyTitle}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-subtle">
                  {project.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <TechBadge
                      key={tech}
                      name={tech}
                      size="sm"
                      selected={selectedTech === tech}
                      onClick={() => toggleTech(tech)}
                      className="relative z-10"
                    />
                  ))}
                </div>
              </div>
            </Panel>
          ))}
        </div>
      )}
    </>
  );
}
