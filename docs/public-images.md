# public/images

Everything here is a **placeholder**. Replace each file with the real artwork, keeping the
filename and the aspect ratio — nothing in the code needs to change.

If you swap `.svg` for `.png` / `.jpg` / `.webp`, update the matching `src` in
`src/data/projects.ts`, `src/data/clients.ts` or `src/data/profile.ts`.

## Portraits

Already done — both live in [`src/assets/portrait/`](../../src/assets/portrait) and are imported
by `src/data/profile.ts`, so there is nothing to replace here.

## RESOLA

| File | Ratio | Suggested size | Used on |
| --- | --- | --- | --- |
| `resola-cover.svg` | 16:10 | 2560×1600 | Projects list, case-study hero |
| `resola-workspace.svg` | 16:9 | 2560×1440 | Case-study gallery (full width) |
| `resola-app-session.svg` | 4:3 | 2048×1536 | Case-study gallery (half width) |
| `resola-app-progress.svg` | 4:3 | 2048×1536 | Case-study gallery (half width) |

## U&CO

| File | Ratio | Suggested size | Used on |
| --- | --- | --- | --- |
| `uandco-cover.svg` | 16:10 | 2560×1600 | Projects list, case-study hero |
| `uandco-catalogue.svg` | 16:9 | 2560×1440 | Case-study gallery (full width) |
| `uandco-order.svg` | 4:3 | 2048×1536 | Case-study gallery (half width) |
| `uandco-profile.svg` | 4:3 | 2048×1536 | Case-study gallery (half width) |

## Logos

Square, 1:1, at least 240×240, transparent background preferred.

| File | Company |
| --- | --- |
| `logo-resola.svg` | Resola |
| `logo-uandco.svg` | U&CO |

The client wall on `/clients` does not use this folder — those logos are real
artwork, imported from `src/assets/logos/` through `src/data/clients.ts`.

## Social preview

| File | Ratio | Suggested size | Used on |
| --- | --- | --- | --- |
| `og-cover.svg` | 1.91:1 | 1200×630 | Link previews (Open Graph / Twitter) |

Social platforms do not reliably render SVG — replace this one with a **PNG or JPG** and update
the `og:image` / `twitter:image` paths in `index.html`.
