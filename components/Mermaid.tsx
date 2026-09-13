"use client";

import { useEffect, useId, useState } from "react";
import { useTheme } from "next-themes";

/**
 * Renders a mermaid diagram from a ```mermaid fenced code block.
 *
 * Mermaid is browser-only and heavy (~3MB), so it is dynamically imported
 * inside the effect — it never lands in the server bundle or the initial
 * client chunk. Diagrams re-render when the theme flips so they stay legible
 * in both light and dark.
 */
export default function Mermaid({ chart }: { chart: string }) {
  const { resolvedTheme } = useTheme();
  const [svg, setSvg] = useState<string>("");
  const [failed, setFailed] = useState(false);

  // useId() emits characters that are illegal in a DOM id / CSS selector
  // (React 18 uses ":r0:", React 19 uses "«r0»"), and mermaid selects the
  // node it renders into by id — so strip everything non-alphanumeric.
  const rawId = useId();
  const id = `mermaid-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;

  useEffect(() => {
    let cancelled = false;

    // resolvedTheme is undefined until next-themes hydrates; waiting avoids
    // rendering the diagram once in the wrong palette and then again.
    if (!resolvedTheme) return;

    const isDark = resolvedTheme === "dark";

    // Mirrors the --foreground / --background / --line tokens in globals.css
    // so diagrams read as part of the page rather than as default mermaid.
    const themeVariables = isDark
      ? {
          background: "#0a0a0a",
          primaryColor: "#18181b",
          primaryTextColor: "#f4f4f5",
          primaryBorderColor: "rgba(255, 255, 255, 0.35)",
          secondaryColor: "#27272a",
          tertiaryColor: "#0a0a0a",
          lineColor: "rgba(255, 255, 255, 0.45)",
          textColor: "#e4e4e7",
          nodeBorder: "rgba(255, 255, 255, 0.35)",
          clusterBkg: "#0a0a0a",
          clusterBorder: "rgba(255, 255, 255, 0.2)",
          edgeLabelBackground: "#0a0a0a",
          actorBkg: "#18181b",
          actorBorder: "rgba(255, 255, 255, 0.35)",
          actorTextColor: "#f4f4f5",
          signalColor: "rgba(255, 255, 255, 0.45)",
          signalTextColor: "#e4e4e7",
          labelBoxBkgColor: "#18181b",
          labelBoxBorderColor: "rgba(255, 255, 255, 0.35)",
          labelTextColor: "#f4f4f5",
          loopTextColor: "#e4e4e7",
          noteBkgColor: "#27272a",
          noteBorderColor: "rgba(255, 255, 255, 0.25)",
          noteTextColor: "#e4e4e7",
          sequenceNumberColor: "#0a0a0a"
        }
      : {
          background: "#ffffff",
          primaryColor: "#f4f4f5",
          primaryTextColor: "#09090b",
          primaryBorderColor: "rgba(9, 9, 11, 0.35)",
          secondaryColor: "#e4e4e7",
          tertiaryColor: "#ffffff",
          lineColor: "rgba(9, 9, 11, 0.5)",
          textColor: "#121215",
          nodeBorder: "rgba(9, 9, 11, 0.35)",
          clusterBkg: "#fafafa",
          clusterBorder: "rgba(9, 9, 11, 0.2)",
          edgeLabelBackground: "#ffffff",
          actorBkg: "#f4f4f5",
          actorBorder: "rgba(9, 9, 11, 0.35)",
          actorTextColor: "#09090b",
          signalColor: "rgba(9, 9, 11, 0.5)",
          signalTextColor: "#121215",
          labelBoxBkgColor: "#f4f4f5",
          labelBoxBorderColor: "rgba(9, 9, 11, 0.35)",
          labelTextColor: "#09090b",
          loopTextColor: "#121215",
          noteBkgColor: "#e4e4e7",
          noteBorderColor: "rgba(9, 9, 11, 0.25)",
          noteTextColor: "#121215",
          sequenceNumberColor: "#ffffff"
        };

    (async () => {
      try {
        const mermaid = (await import("mermaid")).default;

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "base",
          fontFamily:
            "var(--font-sans), Inter, ui-sans-serif, system-ui, sans-serif",
          themeVariables
        });

        const { svg: rendered } = await mermaid.render(id, chart.trim());
        if (!cancelled) {
          setSvg(rendered);
          setFailed(false);
        }
      } catch {
        if (!cancelled) setFailed(true);
      } finally {
        // mermaid leaves its scratch element behind when rendering throws
        document.getElementById(`d${id}`)?.remove();
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, id, resolvedTheme]);

  // Invalid diagram source — show it rather than swallowing it silently.
  if (failed) {
    return (
      <pre className="my-6 overflow-x-auto border border-line p-4 text-sm text-subtle">
        {chart.trim()}
      </pre>
    );
  }

  return (
    <div
      className="mermaid-diagram my-8 flex justify-center overflow-x-auto"
      // Mermaid returns a sanitized SVG string (securityLevel: "strict"),
      // and the source is our own markdown, not user input.
      dangerouslySetInnerHTML={{ __html: svg }}
      // Reserve height while the dynamic import resolves so the page
      // does not jump once the diagram appears.
      style={{ minHeight: svg ? undefined : "6rem" }}
    />
  );
}
