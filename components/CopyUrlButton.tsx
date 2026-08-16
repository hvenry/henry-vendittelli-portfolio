"use client";

import { useState } from "react";

export default function CopyUrlButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="text-sm text-subtle hover:text-muted transition-colors underline hover:no-underline"
    >
      {copied ? "Copied!" : "Copy URL"}
    </button>
  );
}
