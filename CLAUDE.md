# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing/course-listing site for First Presbyterian Midland ("Powered by Fuller Equip"). Single-page Next.js 16 app (App Router, React 19, TypeScript, Tailwind CSS v4) that lists training courses linking out to SCORM content hosted at `modules.fuller.edu`.

## Commands

Bun is the package manager (`bun.lock`).

```bash
bun install        # install dependencies
bun run dev        # dev server at http://localhost:3000
bun run build      # static export — outputs to out/
bun run lint       # eslint (flat config, eslint-config-next)
```

There are no tests.

## Architecture

- `next.config.ts` sets `output: "export"` with `images.unoptimized: true` — the site builds to static HTML in `out/`. Avoid server-only features (API routes, server actions, dynamic rendering); everything must work as a static export.
- **All content lives in `app/page.tsx`.** Course data is hardcoded inline as two structures:
  - `courses`: flat list rendered as `CourseCollapsibleCard` rows (title, description, image, `courseUrl` pointing to the SCORM module, optional `modules` list).
  - `childrensMinistryGroup`: a `CourseGroup` rendered by `CourseGroupCard` — a parent card that expands to reveal its sub-courses (lessons) as inline rows.
  - Adding/editing a course means editing these data structures. Commented-out blocks in this file are intentionally kept as templates/reference.
- `components/CourseCollapsibleCard.tsx` and `components/CourseGroupCard.tsx` are the two card variants; both are client components built on the shadcn/ui `Collapsible` primitive in `components/ui/`. `CourseGroupCard` deliberately mirrors `CourseCollapsibleCard`'s header layout.
- shadcn/ui is configured via `components.json` (new-york style, `@/` aliases to repo root, lucide icons). Utility `cn()` in `lib/utils.ts`.
- Typography: two local "Reckless" font variants plus Inter are loaded in `app/layout.tsx` and exposed as CSS variables (`--font-reckless`, `--font-reckless-medium`, `--font-inter`); used via `font-reckless` / `font-reckless-medium` classes.
- Brand accent color is the gold `#cab777`, used for eyebrow/label text. Images live in `public/midland/`.
