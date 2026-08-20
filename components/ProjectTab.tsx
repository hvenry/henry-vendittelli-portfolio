"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FaGithubSquare, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { slugify } from "@/lib/string";
import { getProjectImagePath } from "@/lib/images";
import { matchesTechFilter, buildTechQuery } from "@/lib/techFilter";
import TechBadge from "@/components/TechBadge";

interface Tab {
  title: string;
  bodyTitle?: string;
  githubLink?: string;
  youtubeLink?: string;
  technologies?: string[];
  description: string;
  imageName?: string;
}

interface ProjectTabProps {
  tabs: Tab[];
  activeTab: string;
  initialTechs: string[];
  initialMatchAll: boolean;
}

export const ProjectTab = ({
  tabs,
  activeTab,
  initialTechs,
  initialMatchAll
}: ProjectTabProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const initialSlug = pathname.split("/").pop() || slugify(activeTab);

  const [currentSlug, setCurrentSlug] = useState(initialSlug);
  const [selectedTechs, setSelectedTechs] = useState<string[]>(initialTechs);
  const [matchAll, setMatchAll] = useState(initialMatchAll);
  const [filtersOpen, setFiltersOpen] = useState(initialTechs.length > 0);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  const allTechs = useMemo(
    () =>
      Array.from(new Set(tabs.flatMap((tab) => tab.technologies ?? []))).sort(
        (a, b) => a.localeCompare(b)
      ),
    [tabs]
  );

  const visibleTabs = useMemo(
    () =>
      tabs.filter((tab) =>
        matchesTechFilter(tab.technologies, selectedTechs, matchAll)
      ),
    [tabs, selectedTechs, matchAll]
  );

  const query = buildTechQuery(selectedTechs, matchAll);

  // Persist horizontal tab-strip scroll across project navigations
  useEffect(() => {
    const handleScroll = () => {
      if (tabContainerRef.current) {
        localStorage.setItem(
          "tabScrollPosition",
          tabContainerRef.current.scrollLeft.toString()
        );
      }
    };

    const tabContainer = tabContainerRef.current;
    tabContainer?.addEventListener("scroll", handleScroll);
    return () => tabContainer?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedScrollPosition = localStorage.getItem("tabScrollPosition");
    if (tabContainerRef.current && savedScrollPosition) {
      tabContainerRef.current.scrollLeft = parseInt(savedScrollPosition, 10);
    }
  }, []);

  // Sync URL: push on tab change, replace on filter change
  const prevSlugRef = useRef(currentSlug);
  useEffect(() => {
    if (!currentSlug) return;
    const url = `/projects/${currentSlug}${query}`;
    if (prevSlugRef.current !== currentSlug) {
      prevSlugRef.current = currentSlug;
      router.push(url);
    } else {
      router.replace(url, { scroll: false });
    }
  }, [currentSlug, query, router]);

  useEffect(() => {
    const slugs = visibleTabs.map((tab) => slugify(tab.title));
    if (slugs.length > 0 && !slugs.includes(currentSlug)) {
      setCurrentSlug(slugs[0]);
    }
  }, [visibleTabs, currentSlug]);

  const handleTabChange = (tab: Tab) => {
    setCurrentSlug(slugify(tab.title));
  };

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech)
        ? prev.filter((item) => item !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => setSelectedTechs([]);

  const modeButton = (label: string, value: boolean) => (
    <button
      type="button"
      onClick={() => setMatchAll(value)}
      aria-pressed={matchAll === value}
      className={`px-2.5 py-1 transition-colors ${
        matchAll === value
          ? "bg-foreground text-background"
          : "text-subtle hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );

  const renderTabContent = (tab: Tab) => (
    <article
      key={`content-${slugify(tab.title)}`}
      className="flex flex-col gap-4 pt-6"
      id={`tab-content-${slugify(tab.title)}`}
    >
      <div className="flex items-end gap-3">
        <h1 className="font-display text-xl font-semibold tracking-wide text-foreground sm:text-2xl">
          {tab.bodyTitle}
        </h1>
        {tab.githubLink && (
          <a
            href={tab.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="link-quiet"
          >
            <FaGithubSquare className="size-6 sm:size-7" />
          </a>
        )}
        {tab.youtubeLink && (
          <a
            href={tab.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
            className="link-quiet"
          >
            <FaYoutube className="size-6 sm:size-7" />
          </a>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {tab.technologies?.map((tech) => (
          <TechBadge
            key={tech}
            name={tech}
            size="sm"
            selected={selectedTechs.includes(tech)}
            onClick={() => toggleTech(tech)}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted sm:text-base">
        {tab.imageName && (
          <Image
            src={getProjectImagePath(tab.imageName)}
            alt={tab.title}
            width={1000}
            height={500}
            className="h-auto w-full border border-line"
            priority
          />
        )}
        {tab.description.split("\n").map((line, index) => (
          <p key={`desc-${index}`}>{line}</p>
        ))}
      </div>
    </article>
  );

  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setFiltersOpen(!filtersOpen)}
          aria-expanded={filtersOpen}
          className="link-quiet font-display text-xs uppercase tracking-wider"
        >
          {filtersOpen ? "▾" : "▸"} Filter by technology
          {selectedTechs.length > 0 && ` (${selectedTechs.length})`}
        </button>
        {selectedTechs.length > 0 && (
          <button
            type="button"
            onClick={clearFilters}
            className="link-quiet font-display text-xs uppercase tracking-wider"
          >
            Clear
          </button>
        )}
      </div>
      {filtersOpen && (
        <div className="mb-4 border border-line p-3">
          <div className="flex flex-wrap gap-1.5">
            {allTechs.map((tech) => (
              <TechBadge
                key={tech}
                name={tech}
                size="sm"
                selected={selectedTechs.includes(tech)}
                onClick={() => toggleTech(tech)}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center gap-3 border-t border-line pt-3">
            <span className="text-[11px] uppercase tracking-[0.15em] text-subtle">
              Match
            </span>
            <div className="flex border border-line font-display text-[11px] uppercase tracking-wider">
              {modeButton("All", true)}
              {modeButton("Any", false)}
            </div>
            <span className="ml-auto text-xs tabular-nums text-subtle">
              {visibleTabs.length}/{tabs.length} projects
            </span>
          </div>
        </div>
      )}
      {visibleTabs.length === 0 ? (
        <div className="border border-line p-8 text-center">
          <p className="text-sm text-subtle">
            No projects match the selected filters.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="link mt-3 text-sm"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <div
            ref={tabContainerRef}
            className="scrollbar-hide flex w-full gap-1 overflow-x-auto border-b border-line"
          >
            {visibleTabs.map((tab) => (
              <button
                key={slugify(tab.title)}
                onClick={() => handleTabChange(tab)}
                className={`flex-shrink-0 px-3 py-2 font-display text-xs uppercase tracking-wider transition-colors sm:text-sm ${
                  slugify(tab.title) === currentSlug
                    ? "bg-foreground text-background"
                    : "text-subtle hover:text-foreground"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          {visibleTabs
            .filter((tab) => slugify(tab.title) === currentSlug)
            .map((tab) => renderTabContent(tab))}
        </>
      )}
    </>
  );
};
