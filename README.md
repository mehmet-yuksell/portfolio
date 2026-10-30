# mehmetyuksel.online

The personal portfolio of Mehmet Yüksel, built with Next.js (App Router), React, TypeScript, Tailwind CSS and Motion.

## Requirements

- Node.js 20.9 or newer (CI uses Node 24)
- npm

## Setup

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>. It redirects to `/en`, and `/tr` serves the Turkish version.

## Scripts

| Script                 | What it does                     |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the development server     |
| `npm run build`        | Create a production build        |
| `npm start`            | Serve the production build       |
| `npm run lint`         | Run ESLint                       |
| `npm run typecheck`    | Type-check with `tsc --noEmit`   |
| `npm run format`       | Format every file with Prettier  |
| `npm run format:check` | Check formatting without writing |

## Editing content

All content lives in typed files under `src/data`. You don't need to touch any components:

| File                         | Content                                            |
| ---------------------------- | -------------------------------------------------- |
| `src/data/site.ts`           | Name, email, social links, location, hero stats    |
| `src/data/projects.ts`       | Project cards (images go in `public/images`)       |
| `src/data/skills.ts`         | Skill cards, proficiency levels, toolbox chips     |
| `src/data/dictionaries/*.ts` | UI text in English (`en.ts`) and Turkish (`tr.ts`) |

`tr.ts` is typed against `en.ts`, so a missing translation is a type error.

## Project structure

```
src/
  app/          routes, metadata files (sitemap, robots, icons, OG image)
  components/
    layout/     navbar, footer, theme and language switchers
    sections/   hero, projects, skills, about, contact
    ui/         small reusable building blocks
  data/         editable content
  lib/          i18n, fonts, helpers
  proxy.ts      per-request CSP nonce + locale redirects
```

See [SECURITY.md](SECURITY.md) for the security setup and the manual hardening checklist.
