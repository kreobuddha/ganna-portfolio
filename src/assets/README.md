# Assets

Drop logos and images here. Everything in this folder is **imported** by the code, so Vite
processes it: hashed filenames, cache-busting on change, and a build error if a path is wrong.

`public/images/` is the other option — files there are served as-is by URL string, with no
build-time check. Placeholders currently live there; real artwork belongs here.

## Where to put what

| Folder | Contents |
| --- | --- |
| `logos/` | Company and project logos, square (1:1), ≥240×240, transparent background |
| `projects/` | Case-study covers and gallery shots |
| `portrait/` | Photos of Hanna |

Name files in kebab-case: `resola-cover.png`, `logo-gmcs.svg`, `portrait.jpg`.

## Sizes

Same as the placeholders they replace — see [`../../public/images/README.md`](../../public/images/README.md).

| Kind | Ratio | Suggested size |
| --- | --- | --- |
| Portrait | 3:4 | 960×1280 |
| Project cover | 16:10 | 2560×1600 |
| Gallery, full width | 16:9 | 2560×1440 |
| Gallery, half width | 4:3 | 2048×1536 |
| Logo | 1:1 | ≥240×240 |

The portrait is rendered grayscale by CSS — supply the original colour photo.

## Wiring a file up

Import it in the data file and use the imported value instead of the placeholder string.
Import paths are relative to `src/`, via the `@/` alias.

In `src/data/projects.ts`:

```ts
import resolaCover from '@/assets/projects/resola-cover.png';
import logoResola from '@/assets/logos/logo-resola.svg';
```

then swap the string for the import:

```ts
cover: { src: resolaCover, alt: 'Resola therapist workspace and patient mobile app' },
logo: logoResola,
```

Same pattern in `src/data/clients.ts` (`logo`) and `src/data/profile.ts` (`portrait`).

Nothing else changes — `src` is typed as `string`, and an import resolves to one.

## Formats

- **Photos** — `.jpg` or `.webp`. WebP is roughly 30% smaller at the same quality.
- **Logos, diagrams, flat illustrations** — `.svg`. Scales cleanly, tiny.
- **Screens and UI mockups with gradients** — `.png` if crispness matters, `.webp` otherwise.

Avoid uploading multi-megabyte exports: these are committed to git, so they stay in history
permanently. Resize to the suggested dimensions before dropping them in.
