# CI/CD Pipeline + Clerk Migration — Design

**Date:** 2026-08-16
**Status:** Approved

## Goal

Replace "push to main and hope" with a gated, professional pipeline, and consolidate
auth by migrating from Auth0 to Clerk. Delete the unused feature-flagged blog comment
system. Keep the data layer minimal: Neon Postgres holds exactly one table (guestbook
`Comment`); all portfolio text stays in code (`data/index.ts`, `content/blog/`).

## Decisions made

| Decision | Choice |
|---|---|
| Branching model | Trunk-based: protected `main`, short-lived PR branches. No `dev` branch or dev subdomain. |
| Deploys | Vercel git integration (Approach A). PR → preview deployment; merge to `main` → production. GitHub Actions is a quality gate only. |
| CI checks | Static checks + Playwright smoke tests against preview URLs. |
| Auth | New Clerk application (free tier), GitHub as the only sign-in method. Auth0 removed entirely. |
| Blog comments | Deleted outright (code, API route, Prisma model, feature flags). |
| Database | Keep Neon. Neon × Vercel integration gives each preview an isolated copy-on-write DB branch. Switch from `prisma db push` to Prisma migrations. |
| Site content | Stays in code. Editing flow is PR + preview deployment. No admin UI, no CMS. |

## 1. Branching & deploys

- Single protected `main`; all changes via PR.
- Branch protection on `main` requires: all CI checks green, branch up to date with `main`.
- Vercel: preview deployment per PR (unique URL), production deploy on merge to `main`
  (henryvendittelli.com). Rollback via Vercel deployment history.

## 2. CI workflows (GitHub Actions)

### `.github/workflows/ci.yml` — on `pull_request`

Parallel jobs, pnpm store cached:

- **lint** — `pnpm lint` and `pnpm format:check`
- **type-check** — `pnpm type-check`
- **build** — `pnpm build` (after §3, this is `prisma generate && next build` and touches
  no database; schema migration happens only in Vercel's build command)

### `.github/workflows/smoke.yml` — on `deployment_status` (success, preview)

Playwright suite (~6–8 tests) run against the live Vercel preview URL:

- Every page renders: `/`, `/about`, `/projects`, one project detail, `/blog`, one blog
  post, `/random`, `/reach-out`, `/rock`
- Navbar navigation works
- Theme toggle works
- Guestbook shows the signed-out state for anonymous visitors

No authenticated-flow automation (Clerk sign-in in CI is brittle; assert signed-out UI).

Both workflows are required checks on `main`. README gains a CI badge and a "Pipeline"
section describing this architecture.

## 3. Database strategy

- Install the Neon × Vercel integration: each preview deployment receives an isolated
  copy-on-write branch of the prod database via an injected `DATABASE_URL`.
- Switch schema management from `db push` to Prisma migrations:
  - `pnpm build` becomes `prisma generate && next build`.
  - Vercel build command runs `prisma migrate deploy` before build — against the branch
    DB on previews, against prod DB on production builds.
  - Existing `Comment` table is baselined as the initial migration; no data loss.
- `BlogComment` model is dropped (see §4).

## 4. Auth migration & deletions

**Auth0 → Clerk:**

- New Clerk application, GitHub OAuth as the only sign-in method (preserves
  username + avatar behavior).
- `app/layout.tsx`: `UserProvider` → `ClerkProvider`.
- Delete `app/api/auth/[auth0]/`.
- `app/api/comments/route.ts`: read the Clerk session (`auth()`) instead of Auth0.
- Guestbook UI (`AuthModal`, rock page): Clerk components / `useUser()`.
- Remove `@auth0/nextjs-auth0` dependency and all Auth0 env vars.
- Env separation: Clerk **dev instance** keys in Vercel preview env, **prod instance**
  keys in production env — previews cannot mint real prod sessions.

**Deleted outright:**

- `components/CommentSection.tsx`
- `app/api/blog-comments/`
- `BlogComment` Prisma model
- `lib/features.ts` and all feature-flag plumbing
- CLAUDE.md sections describing blog comments and feature flags

## 5. Error handling & rollout order

Each step independently shippable, in order:

1. CI workflows + branch protection (purely additive).
2. Neon integration + migration baseline.
3. Playwright smoke tests.
4. Clerk migration + Auth0/blog-comment deletion as its own PR — validated end-to-end
   by the pipeline from steps 1–3. If Clerk misbehaves in preview, prod is untouched.

Env var changes documented in the README setup section.

## Out of scope (considered and rejected)

- `dev`/`prod` branches with dev.henryvendittelli.com — redundant with PR previews for
  a solo trunk-based project.
- Storing guestbook signatures in Clerk user metadata — abuses an auth provider as a
  database (user-list pagination, no sorting/querying, rate limits).
- Moving portfolio text into the DB with an admin UI — content-as-code is the best
  practice here; the PR + preview flow is the editing tool.
- GitHub Actions owning deploys via Vercel CLI — re-implements what Vercel's git
  integration provides for free.
