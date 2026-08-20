import React from "react";

/** Three blinking pixel squares, matching the site's square-node motif */
export default function Loader({ className = "" }: { className?: string }) {
  return (
    <span
      role="status"
      aria-label="loading"
      className={`inline-flex items-center gap-1.5 ${className}`}
    >
      <span className="loader-dot" />
      <span className="loader-dot [animation-delay:0.15s]" />
      <span className="loader-dot [animation-delay:0.3s]" />
    </span>
  );
}
