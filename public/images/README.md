# Images

Everything here is a **placeholder**. Replace each file with the real artwork, keeping the
filename and the aspect ratio — nothing in the code needs to change.

If you swap `.svg` for `.png` / `.jpg` / `.webp`, update the matching `src` in
`src/data/projects.ts`, `src/data/clients.ts` or `src/data/profile.ts`.

## Portrait

| File | Ratio | Suggested size | Used on |
| --- | --- | --- | --- |
| `hero-portrait.svg` | 1:1 | 1024×1024 | Home hero |
| `portrait.svg` | 3:4 | 960×1280 | About page |

`hero-portrait` is the treated shot — blue ground, radial glow and grayscale toning are baked
into the file, and the layout adds no mask or filter on top. Export it square, with the subject
centred.

`portrait` on the About page is cropped to a circle and rendered grayscale by CSS, so supply the
original colour photo there.

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
| `logo-freelance.svg` | Freelance |
| `logo-gmcs.svg` | GMCS Verex LLC |
| `logo-sprintsoft.svg` | SprintSoft LLC |
| `logo-rsoft.svg` | R-Soft LLC |
| `logo-lab24.svg` | Laboratory 24 LLC |

## Social preview

| File | Ratio | Suggested size | Used on |
| --- | --- | --- | --- |
| `og-cover.svg` | 1.91:1 | 1200×630 | Link previews (Open Graph / Twitter) |

Social platforms do not reliably render SVG — replace this one with a **PNG or JPG** and update
the `og:image` / `twitter:image` paths in `index.html`.
