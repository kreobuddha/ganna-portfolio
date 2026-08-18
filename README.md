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

The beta is live at **https://kreobuddha.github.io/ganna-portfolio**.

Every push to `master` builds and publishes it through
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml); nothing is
deployed by hand. The workflow can also be started manually from the Actions
tab.

Two values are set in the workflow rather than read from `.env`, so the
deployed site does not depend on which env file is committed:

- `BASE_PATH=/ganna-portfolio/` — a project site is served from `/<repo>/`,
  not the domain root. Get this wrong and the page loads blank, because every
  asset URL misses by one path segment.
- `VITE_SITE_URL=https://kreobuddha.github.io/ganna-portfolio` — the site's own
  address, origin plus subdirectory, no trailing slash. It is what makes the
  link-preview tags in `index.html` absolute, which Open Graph requires.

Deep links such as `/projects/resola` work because `postbuild` copies the app
shell to `dist/404.html`: GitHub Pages has no server-side rewrite, so it serves
that file and the client router takes over.

To build the same thing locally:

```bash
BASE_PATH=/ganna-portfolio/ VITE_SITE_URL=https://kreobuddha.github.io/ganna-portfolio npm run build
```

### Before the real launch

The beta is shared by link and kept out of search results. Two things come off
when the site goes live: `public/robots.txt`, and the `<meta name="robots">`
line in `index.html`.

Moving to a custom domain means changing both values above — `BASE_PATH=/` and
`VITE_SITE_URL` to the new address — and adding a `CNAME` file to `public/`.
