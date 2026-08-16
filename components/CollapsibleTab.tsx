"use client";

import React, { useState, useEffect, useRef } from "react";
import { AiOutlineUpSquare, AiOutlineDownSquare } from "react-icons/ai";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useZIndex } from "./ZIndexContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface CollapsibleTabProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  initialPosition: { x: number; y: number };
}

export const CollapsibleTab = ({
  title,
  children,
  initialPosition
}: CollapsibleTabProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [position, setPosition] = useState<{ x: number; y: number }>(
    initialPosition
  );

  const { zIndexMap, bringToFront, highestZIndex } = useZIndex();
  const isSmallScreen = useMediaQuery("(max-width: 639px)");
  const nodeRef = useRef<HTMLDivElement>(null);

  // Generate stable ID on mount only
  const tabIdRef = useRef<string>("");
  useEffect(() => {
    tabIdRef.current = `tab-${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  const toggleCollapsibleTab = () => setIsOpen(!isOpen);

  // Drag tab
  const handleDrag = (_e: DraggableEvent, data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
  };

  // Move the tab to front
  const handleMouseDown = () => {
    if (tabIdRef.current) bringToFront(tabIdRef.current);
  };

  // Tab positioning
  const currentZIndex = zIndexMap[tabIdRef.current] || 1;
  const isSelected = currentZIndex === highestZIndex;

  // Restrict dragging above page title
  const bounds = { top: 0 };

  const collapseButton = isOpen ? (
    <AiOutlineUpSquare
      onClick={toggleCollapsibleTab}
      className="cursor-pointer text-2xl text-red-500"
    />
  ) : (
    <AiOutlineDownSquare
      onClick={toggleCollapsibleTab}
      className="cursor-pointer text-2xl"
    />
  );

  if (isSmallScreen) {
    return (
      <div
        ref={nodeRef}
        id={tabIdRef.current}
        className="border border-foreground bg-background"
        style={{ zIndex: currentZIndex }}
      >
        <div className="flex items-center justify-between border-b border-foreground p-2">
          <p className="text-4xl mr-8">{title}</p>
          {collapseButton}
        </div>
        {isOpen && <div className="p-4">{children}</div>}
      </div>
    );
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      position={position}
      onDrag={handleDrag}
      disabled={isSmallScreen}
      bounds={bounds}
    >
      <div
        ref={nodeRef}
        id={tabIdRef.current}
        className={`border border-foreground bg-background basic-glow ${
          isSelected ? "shadow-lg shadow-foreground/50" : ""
        } absolute`}
        style={{
          zIndex: currentZIndex
        }}
        onMouseDown={handleMouseDown}
      >
        <div
          className="flex items-center justify-between border-b border-foreground p-2 cursor-move drag-handle"
          onMouseDown={handleMouseDown}
        >
          <p className="text-4xl mr-8">{title}</p>
          {collapseButton}
        </div>
        {isOpen && <div className="p-4">{children}</div>}
      </div>
    </Draggable>
  );
};
