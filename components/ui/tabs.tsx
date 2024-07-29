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
    <>
      <div className={`${containerClassName}`}>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab)}
            className={`flex flex-col items-center sm:text-xl text-md px-2 pb-[2px] m-2 ${
              tab === activeTab
                ? `border border-primary border-l-0 border-r-0 ${activeTabClassName}` // Add border styles here
                : `border hover:text-blue-300 border-transparent border-l-0 border-r-0 ${tabClassName}`
            }`}
          >
            {/* Title */}
            <span>{tab.title}</span>
            {/* Icons */}
            <div className="flex justify-center gap-2">
              {/* <IoHammerSharp className="size-4" /> */}
              {/* <IoHammerSharp className="size-4" /> */}
              {/* <IoHammerSharp className="size-4" /> */}
            </div>
          </button>
        ))}
      </div>
      <div className={`pt-4 ${contentClassName}`}>{activeTab.content}</div>
    </>
  );
};
