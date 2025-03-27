"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { AiOutlineUpSquare, AiOutlineDownSquare } from "react-icons/ai";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useZIndex } from "./ZIndexContext";

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
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth < 640);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleCollapsibleTab = () => setIsOpen(!isOpen);

  // Drag tab
  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
  };

  // Move the tab to front
  const handleMouseDown = () => {
    if (tabRef.current) bringToFront(tabRef.current.id);
  };

  // Tab positioning
  const tabIdRef = useRef(`tab-${Math.random().toString(36).substr(2, 9)}`);
  const currentZIndex = zIndexMap[tabIdRef.current] || 1;
  const isSelected = currentZIndex === highestZIndex;

  // Restrict dragging above page title
  const bounds = { top: 0 };

  if (isSmallScreen) {
    return (
      <div
        ref={tabRef}
        id={tabIdRef.current}
        className="border border-primary bg-primary"
        style={{ zIndex: currentZIndex }}
      >
        <div className="flex items-center justify-between border-b border-primary p-2">
          <p className="text-4xl mr-8">{title}</p>
          {isOpen ? (
            <AiOutlineUpSquare
              onClick={toggleCollapsibleTab}
              className="cursor-pointer text-2xl text-red-500"
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
  }

  return (
    <Draggable
      position={position}
      onDrag={handleDrag}
      disabled={isSmallScreen}
      bounds={bounds}
    >
      <div
        ref={tabRef}
        id={tabIdRef.current}
        className={`border border-primary bg-primary basic-glow ${
          isSelected ? "shadow-lg shadow-primary/50" : ""
        } absolute`}
        style={{
          zIndex: currentZIndex
        }}
        onMouseDown={handleMouseDown}
      >
        <div
          className="flex items-center justify-between border-b border-primary p-2 cursor-move drag-handle"
          onMouseDown={handleMouseDown}
        >
          <p className="text-4xl mr-8">{title}</p>
          {isOpen ? (
            <AiOutlineUpSquare
              onClick={toggleCollapsibleTab}
              className="cursor-pointer text-2xl text-red-500"
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
    </Draggable>
  );
};
