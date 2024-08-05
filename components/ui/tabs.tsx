"use client";

import { useEffect } from "react";
import { FaGithubSquare, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Tab = {
  title: string;
  id: string;
  bodyTitle?: string;
  githubLink?: string;
  youtubeLink?: string;
  technologies?: string[];
  description: string;
  imageName?: string;
};

interface TabsProps {
  tabs: Tab[];
  activeTabClassName?: string;
  tabClassName?: string;
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const Tabs = ({
  tabs,
  activeTabClassName,
  tabClassName,
  activeTab,
  onTabChange,
}: TabsProps) => {
  const router = useRouter();
  // Update URL on tab change
  useEffect(() => {
    if (activeTab) {
      router.push(`${activeTab}`);
    }
  }, [activeTab, router]);

  useEffect(() => {
    const activeContentElement = document.getElementById(
      `tab-content-${activeTab}`
    );
    if (activeContentElement) {
      activeContentElement.scrollTop = 0;
    }
  }, [activeTab]);

  const renderTabContent = (tab: Tab) => (
    <div
      className="flex flex-col gap-4 h-[calc(60vh-128px)] sm:h-[calc(50vh-128px)] p-4 overflow-auto border border-primary"
      id={`tab-content-${tab.id}`}
    >
      {/* Title + Links */}
      <div className="flex items-end gap-2">
        <p className="text-xl sm:text-3xl">{tab.bodyTitle}</p>
        {tab.githubLink && (
          <a href={tab.githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className="size-6 sm:size-8 hover:fill-blue-300" />
          </a>
        )}
        {tab.youtubeLink && (
          <a href={tab.youtubeLink} target="_blank" rel="noopener noreferrer">
            <FaYoutube className="size-6 sm:size-8 fill-red-600 hover:fill-blue-300" />
          </a>
        )}
      </div>
      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {tab.technologies?.map((tech) => (
          <span
            key={tech}
            className="bg-reversed rounded-full px-4 text-reversed text-sm sm:text-xl"
          >
            {tech}
          </span>
        ))}
      </div>
      {/* body */}
      <div className="text-sm sm:text-lg font-mono text-primary-2 text-justify flex flex-col gap-4">
        {tab.description.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      {tab.imageName && (
        <Image
          src={`/assets/images/projects/${tab.imageName}`}
          alt={tab.title}
          width={1}
          height={1}
          className="bg-reversed mb-2 sm:my-4 border border-primary w-full h-auto rounded-xl"
          layout="responsive" // Use layout options for responsive images
        />
      )}
    </div>
  );

  return (
    <>
      {/* Tab */}
      <div className="w-full flex flex-wrap justify-center gap-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center sm:text-xl text-md px-1 pb-[2px] ${
              tab.id === activeTab ? `${activeTabClassName}` : `${tabClassName}`
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {/* Tab content */}
      {tabs
        .filter((tab) => tab.id === activeTab)
        .map((tab) => renderTabContent(tab))}
    </>
  );
};
