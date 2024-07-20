"use client";

import { useState } from "react";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

interface TabsProps {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}

export const Tabs = ({
  tabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  return (
    <div className={`w-full ${containerClassName}`}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActiveTab(tab)}
          className={`sm:text-xl text-md px-4 ${
            tab === activeTab
              ? `pb-1 border border-neutral-300 border-l-0 border-r-0 ${activeTabClassName}` // Add border styles here
              : `pb-1 border hover:text-blue-300 border-black border-l-0 border-r-0 ${tabClassName}`
          }`}
        >
          {tab.title}
          {/* add icons here */}
        </button>
      ))}
      <div className={`pt-4 ${contentClassName}`}>{activeTab.content}</div>
    </div>
  );
};
