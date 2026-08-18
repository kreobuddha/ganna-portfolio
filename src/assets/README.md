# Assets

Everything in this folder is **imported** by the code, so Vite processes it: hashed filenames,
cache-busting on change, and a build error if a path is wrong. Real artwork belongs here.

`public/images/` is the other option — files there are served as-is by URL string with no
build-time check. Only the social-preview image still lives there, and
[`docs/public-images.md`](../../docs/public-images.md) explains why.

## Where to put what

| Folder | Contents |
| --- | --- |
| `logos/` | Company and project logos, square (1:1), ≥240×240, transparent background |
| `projects/<slug>/` | Case-study screens, one screen per file |
| `portrait/` | Photos of Hanna |

Name files in kebab-case. Project screens are named for what they show, not for where they
appear: `app-todo-mobile`, `workspace-patients-web`, `ds-typography`.

## Adding a project screen

Screens are cut from Hanna's Figma boards, one screen per file, exported as WebP at up to
1600px on the long edge (2400 for wide boards, 3000 for the workflow diagram). Nothing is
generated at build time — the files are committed as they are.

1. Drop the file into `src/assets/projects/<slug>/`.
2. Add an entry to the right group in `src/data/projects.ts`:

```ts
{
  name: 'resola/app-todo-mobile',   // path inside src/assets/projects, no extension
  alt: 'Rehabilitation program with daily goals, on a phone',
  width: 362,                        // the file's own pixels
  height: 897,
  caption: 'Phone',                  // optional, shown under the screen
}
```

There is no `import` to write: [`src/lib/projectImages.ts`](../lib/projectImages.ts) globs the
folder and resolves `name` to the hashed URL. A name with no matching file throws, naming every
name it does know — so a typo surfaces immediately rather than as a broken image.

`width` and `height` must match the file. They reserve the box before the image loads, which is
what stops a page of eighty-odd screens from lurching as it fills in.

## Logos and portraits

These are plain imports — see `src/data/clients.ts` for the pattern:

```ts
import uandcoLogo from '@/assets/logos/uandco.webp';
```

The portrait is rendered grayscale by CSS — supply the original colour photo. Portraits are 3:4,
around 960×1280.

## Formats

- **Photos** — `.jpg` or `.webp`. WebP is roughly 30% smaller at the same quality.
- **Screens and UI shots** — `.webp`.
- **Logos and flat illustrations** — `.svg` where a vector exists, otherwise `.webp`.

Avoid committing multi-megabyte exports: they stay in git history permanently. The whole
`projects/` folder is currently 3.6 MB across 88 screens — keep it in that range.
