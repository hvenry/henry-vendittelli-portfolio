import React from "react";
import Image from "next/image";
import Panel from "@/components/Panel";
import { getIconPath } from "@/lib/images";

interface Experience {
  name: string;
  position: string;
  desc: string;
  link: string;
  time: string;
  image: string;
}

interface ExperienceProps {
  info: Experience[];
}

function groupByName(info: Experience[]) {
  const groups: { name: string; entries: Experience[] }[] = [];
  for (const entry of info) {
    const existing = groups.find((group) => group.name === entry.name);
    if (existing) {
      existing.entries.push(entry);
    } else {
      groups.push({ name: entry.name, entries: [entry] });
    }
  }
  return groups;
}

export default function ExperienceCard({ info }: ExperienceProps) {
  return (
    <div className="mx-2 flex flex-col gap-5">
      {groupByName(info).map(({ name, entries }) => (
        <Panel key={name} interactive>
          <header className="flex items-center gap-3 border-b border-line px-4 py-3 sm:px-5">
            <Image
              src={getIconPath(entries[0].image)}
              alt={name}
              width={128}
              height={128}
              className={`size-8 ${
                entries[0].image === "partisans_icon" ? "icon-invert" : ""
              }`}
              priority
            />
            <a
              href={entries[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-title text-lg sm:text-xl"
            >
              {name}
            </a>
            {entries.length > 1 && (
              <span className="ml-auto text-[10px] uppercase tracking-[0.2em] text-subtle">
                {entries.length} roles
              </span>
            )}
          </header>
          <ol className="px-4 py-2 sm:px-5">
            {entries.map((role, idx) => {
              const isFirst = idx === 0;
              const isLast = idx === entries.length - 1;
              return (
                <li
                  key={`${role.position}-${role.time}`}
                  className="relative pl-6"
                >
                  {/* Timeline rail; the node at top-[26px] aligns with the title line */}
                  {!isFirst && (
                    <span
                      aria-hidden
                      className="absolute left-[3px] top-0 h-[26px] w-px bg-foreground/25"
                    />
                  )}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-[3px] top-[33px] w-px bg-foreground/25"
                    />
                  )}
                  <span
                    aria-hidden
                    className="absolute left-0 top-[26px] size-[7px] border border-foreground/50 bg-background"
                  />
                  <div className="py-4">
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                      <h3 className="font-display text-base font-medium tracking-wide text-foreground sm:text-lg">
                        {role.position}
                      </h3>
                      <p className="whitespace-nowrap text-xs tabular-nums tracking-wide text-subtle">
                        {role.time}
                      </p>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-subtle">
                      {role.desc}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Panel>
      ))}
    </div>
  );
}
