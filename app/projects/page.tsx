"use client";

import { EvervaultCard } from "@/components/ui/evervault-card";
import { IoHammerSharp } from "react-icons/io5";
import { Tabs } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { projects } from "@/data";

export default function Page() {
  const tabs = projects;

  const [activeTab, setActiveTab] = useState("1");

  useEffect(() => {
    const activeContentElement = document.getElementById(
      `tab-content-${activeTab}`
    );
    if (activeContentElement) {
      activeContentElement.scrollTop = 0;
    }
  }, [activeTab]);

  return (
    <main className="gap-4 sm:gap-8 w-full h-full flex flex-col items-center justify-center">
      {/* title */}
      <div className="w-full sm:w-4/5 h-1/4">
        <EvervaultCard className="border border-primary">
          <div className="text-3xl text-white flex justify-center p-2 gap-2 items-center backdrop-blur-sm">
            <IoHammerSharp size={30} />
            <span>My Projects</span>
          </div>
        </EvervaultCard>
      </div>
      {/* projects */}
      <div className="w-full sm:w-4/5 mb-4">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabClassName="border hover:text-blue-300 border-transparent border-l-0 border-r-0"
          activeTabClassName="border border-primary border-l-0 border-r-0"
        />
      </div>
    </main>
  );
}
