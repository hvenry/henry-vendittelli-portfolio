import React from "react";

type PanelProps = {
  children: React.ReactNode;
  className?: string;
  /** Crop-mark corner ticks over the border */
  ticks?: boolean;
  /** Brighten the border on hover */
  interactive?: boolean;
};

export default function Panel({
  children,
  className = "",
  ticks = false,
  interactive = false
}: PanelProps) {
  return (
    <div
      className={`glow relative border border-line bg-background ${
        ticks ? "panel-ticks" : ""
      } ${
        interactive
          ? "transition-colors duration-300 hover:border-foreground/40"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
