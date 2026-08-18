# Reference letters

Scanned letters of recommendation, offered as a download from the panel a
client logo opens on `/clients`.

They live here rather than in `src/assets` because they are documents to hand
over, not build inputs: the filename stays readable and the file is copied to
the site as-is instead of being hashed into the bundle.

| File | Client | Linked from |
| --- | --- | --- |
| `letter-gmcs.pdf` | GMCS | `clients.ts` → `letter` |
| `letter-sprintsoft.pdf` | SprintSoft | `clients.ts` → `letter` |
| `letter-resola.pdf` | Resola | `clients.ts` → `letter` |

To add one for another client, drop the PDF here and set `letter` on that
entry in `src/data/clients.ts` to `documents/<file>.pdf`. The path is relative
on purpose — the page prefixes it with the site's base URL, so it survives
being served from a subdirectory on GitHub Pages.
