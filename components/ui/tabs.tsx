"use client";

import { useEffect, useState, useRef } from "react";
import { FaGithubSquare, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";

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
}

export const Tabs = ({
  tabs,
  activeTabClassName,
  tabClassName,
  activeTab
}: TabsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const initialTab = pathname.split("/").pop() || activeTab;
  const [currentTab, setCurrentTab] = useState(initialTab);

  // Reference for the scrollable container
  const tabContainerRef = useRef<HTMLDivElement>(null);

  // Save scroll position on tab container scroll
  useEffect(() => {
    const handleScroll = () => {
      if (tabContainerRef.current) {
        localStorage.setItem("tabScrollPosition", tabContainerRef.current.scrollLeft.toString());
      }
    };

    const tabContainer = tabContainerRef.current;
    tabContainer?.addEventListener("scroll", handleScroll);

    return () => {
      tabContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Restore scroll position on component mount
  useEffect(() => {
    const savedScrollPosition = localStorage.getItem("tabScrollPosition");
    if (tabContainerRef.current && savedScrollPosition) {
      tabContainerRef.current.scrollLeft = parseInt(savedScrollPosition, 10);
    }
  }, []);

  // Update URL and scroll to top
  useEffect(() => {
    if (currentTab) {
      router.push(`/projects/${currentTab}`);
      const activeContentElement = document.getElementById(
        `tab-content-${currentTab}`
      );
      if (activeContentElement) {
        activeContentElement.scrollTop = 0;
      }
    }
  }, [currentTab, router]);

  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
  };

  const renderTabContent = (tab: Tab) => (
    <div
      key={`content-${tab.id}`} // Ensure unique key for content
      className="flex flex-col gap-4 h-[calc(60vh-128px)] sm:h-[calc(50vh-128px)] p-4 overflow-auto border border-primary"
      id={`tab-content-${tab.id}`}
    >
      {/* Title + Links */}
      <div className="flex items-end gap-2">
        <p className="text-xl sm:text-3xl">{tab.bodyTitle}</p>
        {tab.githubLink && (
          <a
            href={tab.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithubSquare className="size-6 sm:size-8 hover:fill-blue-300" />
          </a>
        )}
        {tab.youtubeLink && (
          <a
            href={tab.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
          >
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
      {/* Info */}
      <div className="text-sm sm:text-lg font-mono text-primary-2 text-justify flex flex-col gap-4">
        {tab.imageName && (
          <div className="flex justify-center">
            <Image
              src={`/assets/images/projects/${tab.imageName}`}
              alt={tab.title}
              width={1000}
              height={500}
              className="bg-reversed w-full sm:w-3/4 mb-2 border border-primary h-auto rounded-sm"
              priority
              placeholder="blur"
              blurDataURL={`/assets/images/projects/placeholder-${tab.imageName}`}
            />
          </div>
        )}
        {tab.description.split("\n").map((line, index) => (
          <p key={`desc-${index}`}>{line}</p>
        ))}
      </div>
    </div>
  );

  // Scroll functionality for holding down the arrow buttons
  const scrollInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const startScrolling = (direction: "left" | "right") => {
    // Scroll 8px per interval
    const scrollAmount = direction === "left" ? -8 : 8;
    scrollInterval.current = setInterval(() => {
      if (tabContainerRef.current) {
        tabContainerRef.current.scrollLeft += scrollAmount;
      }
    }, 16); // About 60fps
  };

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
    }
  };
  return (
    <>
      {/* Scroll prompt and arrows */}
      <div className="flex mb-4">
        <MdArrowLeft
          className="cursor-pointer size-10"
          onMouseDown={() => startScrolling("left")}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
        />
        <div
          ref={tabContainerRef}
          className="border border-primary border-t-0 border-b-0 border-l-1 border-r-1 w-full flex overflow-x-auto scrollbar-hide"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex-shrink-0 sm:text-xl text-md px-2 mx-2 ${tab.id === currentTab ? activeTabClassName : tabClassName
                }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <MdArrowRight
          className="cursor-pointer size-10"
          onMouseDown={() => startScrolling("right")}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
        />
      </div>
      {/* Tab content */}
      {tabs
        .filter((tab) => tab.id === currentTab)
        .map((tab) => renderTabContent(tab))}
    </>
  );
};
