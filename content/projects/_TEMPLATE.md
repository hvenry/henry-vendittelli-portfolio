---
# ── Required ────────────────────────────────────────────────────────────────
# Short name shown on cards and in the filter. 1–2 words if possible.
title: "Project Name"
# Full/real name shown as the page heading. Can match title.
bodyTitle: "The Full Project Name"
# One sentence, ~15–25 words. Shown on the card. No trailing period needed.
summary: "What it does and what it is built with, in one line."
# Names in components/TechBadge.tsx `techIcons` get their logo; others get a generic code glyph.
technologies:
  - "TypeScript"
  - "Next.js"
# Sort position on the projects index (lower = earlier).
order: 99

# ── Optional ────────────────────────────────────────────────────────────────
# github: "https://github.com/hvenry/repo"
# live: "https://example.com"
# youtube: "https://youtu.be/..."          # any demo video (Loom works too)
# image: "project_name.png"                # public/assets/images/projects/, 1200x630 (OG size)
# imageLight: "project_name_light.png"     # optional light-mode variant, swaps with the theme
# year: "2026"                             # or "2024 – 2025"
# role: "Solo project"                     # or "Team of 5, backend + ML"
# featured: 1                              # 1–3 = position on the home page grid
# draft: true                              # hidden in production, visible in dev
---

Open on the interesting _problem_, not a feature list: the difficulty that
made this worth building. The card summary already did the pitch; someone who
clicked in wants the mechanism.

Then explain how it was solved, in prose. Write until the interesting part is
actually explained (usually 400–1200 words for real engineering), then stop.
Bullets are for genuinely enumerable things; paragraphs carry explanation.
Join clauses with a period, comma, colon, or parentheses, never an em dash.

Name sections after what the project contains: `## Architecture`,
`## The loop`, `## Game modes`, whatever fits. See `globe-expert.md` and
`simple-shell.md` for the standard.

## The full toolkit

Mermaid diagrams render from a fenced block tagged `mermaid` (any type: `flowchart`,
`sequenceDiagram`, `stateDiagram-v2`, `erDiagram`), themed to the site and
re-rendered on theme toggle. Quote node labels so punctuation is safe.

LaTeX renders inline with `$...$` and as display math with `$$...$$`. Tables,
syntax-highlighted code blocks, blockquotes, and links all work.

## Where it stops

What it does not do, and what the next version would need. Optional, but
honesty about the edges reads as competence.

## Background

Where it came from, what it was built on, credit to sources.
