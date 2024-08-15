"use client";

import { useState } from "react";
import { AiOutlineUpSquare, AiOutlineDownSquare } from "react-icons/ai";
import React from "react";

interface CollapsibleTabProps {
  title: string;
  children: React.ReactNode;
}

export const CollapsibleTab = ({ title, children }: CollapsibleTabProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapsibleTab = () => setIsOpen(!isOpen);

  return (
    <div className="border border-primary">
      <div className="flex items-center justify-between border-b border-primary p-2">
        <p className="text-2xl">{title}</p>
        {isOpen ? (
          <AiOutlineUpSquare
            onClick={toggleCollapsibleTab}
            className="cursor-pointer text-2xl"
          />
        ) : (
          <AiOutlineDownSquare
            onClick={toggleCollapsibleTab}
            className="cursor-pointer text-2xl"
          />
        )}
      </div>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};
