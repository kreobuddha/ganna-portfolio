# Hanna Shyliaieva — portfolio

Multi-page portfolio site for Hanna Shyliaieva, UX/UI designer. Rebuilt in code from the earlier
Framer draft, keeping its visual language: electric blue, acid yellow accents, oversized Satoshi
type, hand-drawn arrows and a rotating circular wordmark.

## Stack

- Vite + React + TypeScript
- react-router-dom (multi-page routing)
- SCSS with BEM, one folder per component/page
- Satoshi, self-hosted from [Fontshare](https://www.fontshare.com/fonts/satoshi) (ITF Free Font
  License — free for commercial use)

## Getting started

```bash
npm install
```

```bash
npm run dev
```

The dev server runs on <http://localhost:5181>.

| Script               | What it does                                   |
| -------------------- | ---------------------------------------------- |
| `npm run dev`        | Dev server with HMR                            |
| `npm run build`      | Type-check, production build, SPA 404 fallback |
| `npm run preview`    | Serve the production build locally             |
| `npm run type-check` | TypeScript only                                |
| `npm run lint`       | Oxlint                                         |
| `npm run format`     | Prettier over `src/` and root config files     |

## Pages

| Route             | Page                                                          |
| ----------------- | ------------------------------------------------------------- |
| `/`               | Home — hero, section shortcuts, portrait, highlights          |
| `/projects`       | Projects index                                                |
| `/projects/:slug` | Case study — problem, process, screens, outcome               |
| `/clients`        | Companies and teams                                           |
| `/about`          | Bio, experience timeline, skills, tools, languages, education |

## Editing the content

All copy lives in `src/data/` — no need to touch components:

| File                   | Holds                                                   |
| ---------------------- | ------------------------------------------------------- |
| `src/data/profile.ts`  | Name, title, hero highlights, contact links, resume URL |
| `src/data/projects.ts` | Case studies (`slug` drives the URL)                    |
| `src/data/clients.ts`  | Client / employer cards                                 |
| `src/data/about.ts`    | Bio, experience, skills, tools, languages, education    |

Types for all of it are in `src/types.ts`.

Adding a project means appending one object to `projects` — the index page, the case-study route
and the "next project" link all pick it up automatically.

A case study shows its screens one of two ways, decided by the data alone. Fill `sections` and
the page grows an "Explore the system" card grid, each card opening one part of the product;
only the open part is mounted, so the other cards cost nothing. Fill `groups` instead and the
screens run straight down the page. RESOLA uses the first, U&CO the second.

## Images

All artwork lives in [`src/assets/`](src/assets/README.md) (`logos/`, `projects/`, `portrait/`),
so Vite hashes the filenames and the build fails on a wrong path. Logos and portraits are plain
`import`s.

Case-study screens live in `src/assets/projects/<slug>/`, one screen per file, and are referenced
from `src/data/projects.ts` by name rather than by import — `src/lib/projectImages.ts` globs the
folder and resolves the name, so a typo fails the build instead of 404ing.

`public/images/` now holds only `og-cover.jpg`, which has to be reachable at a fixed URL for
link-preview crawlers. See [`docs/public-images.md`](docs/public-images.md).

## Design tokens

Defined once as CSS custom properties in `src/index.scss`:

| Token          | Value     | Role                             |
| -------------- | --------- | -------------------------------- |
| `--blue`       | `#1C4AED` | Page background                  |
| `--blue-dark`  | `#153ABF` | Footer, mobile menu, image wells |
| `--blue-light` | `#577BFF` | Glows and gradients              |
| `--lime`       | `#E0FF54` | Accents, arrows, active states   |

## Code conventions

See [`docs/code-rules.md`](docs/code-rules.md).

## Deploying to GitHub Pages

Not set up yet. When the content is final:

1. GitHub Pages does not serve **private** repositories on the free plan — either make the repo
   public or use a host that deploys private repos for free (Vercel, Netlify, Cloudflare Pages).
2. Build with the repository name as the base path:

```bash
BASE_PATH=/ganna-portfolio/ npm run build
```

`VITE_SITE_URL` in `.env` has to name the same place. It is the site's own
address — origin plus any subdirectory, no trailing slash — and it is what
makes the link-preview tags in `index.html` absolute, which Open Graph
requires. Edit `.env`, or override it for one build:

```bash
VITE_SITE_URL=https://hanna.design BASE_PATH=/ npm run build
```

3. Publish `dist/`. The build already emits `dist/404.html` so deep links like
   `/projects/resola` resolve through the client router.
