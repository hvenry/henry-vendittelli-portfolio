# henryvendittelli.com

![CI](https://github.com/hvenry/henry-vendittelli-portfolio/actions/workflows/ci.yml/badge.svg)
![Smoke](https://github.com/hvenry/henry-vendittelli-portfolio/actions/workflows/smoke.yml/badge.svg)

Personal portfolio and blog, designed and built from scratch — live at [henryvendittelli.com](https://henryvendittelli.com).

## Tech Stack

| Layer          | Technology                                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org) (App Router, React Server Components), React 19, TypeScript                |
| Styling        | Tailwind CSS, CSS custom-property design tokens, `next-themes` (light/dark), Oswald + Inter via `next/font` |
| Content        | Markdown blog — `gray-matter` frontmatter, `react-markdown` + `remark-gfm`, `react-syntax-highlighter`      |
| Database       | PostgreSQL on [Neon](https://neon.tech) via Prisma (guestbook)                                              |
| Authentication | [Clerk](https://clerk.com) — GitHub sign-in                                                                 |
| 3D             | Three.js via `@react-three/fiber` and `@react-three/drei`                                                   |
| Icons          | `react-icons` — Phosphor (UI), Simple Icons (technology logos), Font Awesome (social)                       |
| Testing        | Playwright end-to-end smoke suite                                                                           |
| Tooling        | pnpm, ESLint, Prettier                                                                                      |
| Hosting        | [Vercel](https://vercel.com), with the Neon × Vercel integration for per-preview database branches          |

## Development

```bash
pnpm install        # install dependencies (runs prisma generate)
pnpm dev            # development server at http://localhost:3000
```

| Command             | Purpose                                                       |
| ------------------- | ------------------------------------------------------------- |
| `pnpm lint`         | ESLint                                                        |
| `pnpm format:check` | Prettier (`pnpm format` to write)                             |
| `pnpm type-check`   | Route typegen + `tsc --noEmit`                                |
| `pnpm build`        | Production build                                              |
| `pnpm test:e2e`     | Playwright suite (expects a server on `:3000`, or `BASE_URL`) |

## Pipeline

Trunk-based development with a protected `main` branch — every change ships through a pull request.

1. **PR opened** → GitHub Actions runs lint, type-check, format check, and a production build; Vercel deploys an isolated preview with its own Neon database branch (copy-on-write, via the Neon × Vercel integration).
2. **Preview ready** → the Playwright smoke suite runs against the live preview URL.
3. **All checks green** → the PR can merge; merging to `main` deploys to production, running `prisma migrate deploy` before the build.

Auth uses Clerk's development instance in previews, so preview deployments can never mint production sessions.

## Pages

- [/](https://henryvendittelli.com/) — introduction, work experience, skills, and featured projects
- [/about](https://henryvendittelli.com/about) — education and club involvement
- [/projects](https://henryvendittelli.com/projects) — project deep-dives with technology filtering
- [/blog](https://henryvendittelli.com/blog) — writing, rendered from markdown
- [/random](https://henryvendittelli.com/random) — setup, software, and other miscellany
- [/reach-out](https://henryvendittelli.com/reach-out) — contact information

## Contact

hvendittelli@gmail.com
