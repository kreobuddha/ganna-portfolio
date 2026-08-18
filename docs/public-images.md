# public/images

Almost nothing lives here any more. Project screens, project logos and portraits are all real
artwork now, imported from [`src/assets/`](../src/assets/README.md) so Vite hashes them and the
build fails on a wrong path.

This folder is only for files that have to be reachable by a plain URL, which today means one:

| File | Ratio | Size | Used by |
| --- | --- | --- | --- |
| `og-cover.jpg` | 1.91:1 | 1200×628 | `og:image` / `twitter:image` in `index.html` |

It has to sit here rather than in `src/assets/`: link-preview crawlers fetch the URL written in
the meta tag without running the app, so the path must be stable and unhashed. Social platforms
also do not reliably render SVG — keep it a JPG or PNG.

To replace it, overwrite the file. `index.html` needs no change.

## Where everything else went

| What | Where | Wired up in |
| --- | --- | --- |
| Project screens | `src/assets/projects/<slug>/` | `src/data/projects.ts`, resolved by `src/lib/projectImages.ts` |
| Project and client logos | `src/assets/logos/` | `src/data/projects.ts`, `src/data/clients.ts` |
| Portraits | `src/assets/portrait/` | `src/data/profile.ts` |
| Reference letters | `public/documents/` | `src/data/clients.ts` |
