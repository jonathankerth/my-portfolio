# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server (default http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (`next/core-web-vitals` via `.eslintrc.json`; `eslint.config.js` defines a stricter airbnb-based config but is not what `next lint` runs)

There are no tests in this repo. Don't claim test coverage; if a change needs verification, run `npm run dev` and exercise the affected section in a browser.

## Architecture

Single-page Next.js **Pages Router** site. The entire site lives in `src/pages/index.jsx` (~26 KB) — Hero, About, Resume, Projects, Tech Stack are all anchor-linked `<Section id="...">` blocks inside one component. Navigation is in-page scroll, not Next routing. The `projects`, `techStackSections`, and social link arrays are inlined in this file; that is the source of truth for portfolio content. Edit content there, not by creating new pages or data files.

`src/pages/_document.js` contains an **inline pre-paint script** that reads `localStorage.theme` and sets `html.dark` before React hydrates — this prevents a light/dark flicker. The same logic is mirrored at runtime by `src/components/useTheme.js`. If you change the storage key or class strategy, update both places or you will reintroduce the flicker.

`src/components/SPALayout.jsx` is the canonical layout wrapper. `Layout.jsx` is an older glass-card wrapper that is **not used** by `index.jsx`; do not assume it is the active layout. SPALayout gates heavy visual enhancements (`ParticleBackground` — three.js shader, `CustomCursor`, `IntroAnimation` — gsap) behind a `useEffect` that disables them when `prefers-reduced-motion`, `navigator.connection.saveData`, or `effectiveType` indicates a slow connection. All three are loaded via `next/dynamic` with `ssr: false`. Preserve this gating when adding new heavy visuals — don't import three.js or gsap statically at the top of a component.

Styling is **Tailwind with `darkMode: 'class'`**. Custom palette and animations live in `tailwind.config.js`; global rules (CSS variables `--bg-base`, `--fg-base`, `--rail-fade`, the horizontal projects rail, scrollbar theming, animated gradient background) live in `globals.css` at the repo root (not in `src/`). The projects rail uses `contain: layout paint` on cards and `will-change: scroll-position` on the container for smooth horizontal scroll on trackpads — these are intentional perf hints, not cruft.

`next.config.js` allow-lists four remote image hostnames (`api.checklyhq.com`, three S3 buckets) and sets immutable cache headers for static assets plus a strict set of security headers. Adding images from a new host requires adding that host to `remotePatterns`.

This is a JS project with `jsconfig.json` (`allowJs`, `checkJs: false`) — there is no TypeScript checking. Components use `.jsx` for React files and `.js` for non-JSX modules; follow that split.

## Conventions worth knowing

- The pre-paint theme script in `_document.js` and `useTheme.js` are paired — change them together.
- `src/components/Layout.jsx` is dead-ish; the live layout is `SPALayout.jsx`. Don't restore `Layout` without a reason.
- New visually-heavy components should be `dynamic(..., { ssr: false })` and gated through SPALayout's `enableEnhancements` flag, not unconditionally rendered.
- Adding a section: add a new `<Section id="...">` block in `index.jsx` and add `{ href: '#id', label: '...' }` to `navLinks` in `Navbar.jsx`. The Navbar's scroll-spy reads section IDs directly.
- Deploys to Vercel; `@vercel/analytics` only mounts when `NEXT_PUBLIC_VERCEL_URL` is set (i.e. on Vercel, not locally).
