"use client";

import { useState } from "react";
// import { IoHammerSharp } from "react-icons/io5";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

interface TabsProps {
  tabs: Tab[];
  activeTabClassName?: string;
  tabClassName?: string;
}

export const Tabs = ({
  tabs,
  activeTabClassName,
  tabClassName,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  return (
    <>
      {/* nav items */}
      <div className="w-full flex flex-wrap justify-center gap-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab)}
            className={`flex flex-col items-center sm:text-xl text-md px-1 pb-[2px] ${
              tab === activeTab ? `${activeTabClassName}` : `${tabClassName}`
            }`}
          >
            {/* Title */}
            {tab.title}
            {/* Icons */}
            <div className="flex justify-center gap-2">
              {/* <IoHammerSharp className="size-4" /> */}
              {/* <IoHammerSharp className="size-4" /> */}
              {/* <IoHammerSharp className="size-4" /> */}
            </div>
          </button>
        ))}
      </div>
      {/* tabs */}
      {activeTab.content}
    </>
  );
};
