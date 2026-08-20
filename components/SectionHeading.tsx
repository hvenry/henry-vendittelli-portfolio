import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className = ""
}: SectionHeadingProps) {
  return (
    <div className={`flex items-center gap-4 px-2 ${className}`}>
      <h2 className="whitespace-nowrap font-display text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
        {children}
      </h2>
      <div aria-hidden className="rule-dashed h-px flex-1" />
    </div>
  );
}
