/**
 * Resolves a screen's logical name — `resola/app-todo-mobile` — to the hashed
 * URL Vite emits for it.
 *
 * The alternative would be ~88 `import` lines in `data/projects.ts`, which is
 * why the glob is here instead: it keeps the build-time guarantee the manual
 * imports gave (a wrong path fails the build rather than 404ing in the
 * browser) without burying the data file under import statements.
 */
const files = import.meta.glob('@/assets/projects/**/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const byName = new Map<string, string>(
  Object.entries(files).map(([path, url]) => [
    path.replace(/^.*\/assets\/projects\//, '').replace(/\.webp$/, ''),
    url,
  ])
);

export const getProjectImage = (name: string): string => {
  const url = byName.get(name);

  if (!url) {
    throw new Error(
      `No screen named "${name}" in src/assets/projects. Known names: ${[...byName.keys()]
        .sort()
        .join(', ')}`
    );
  }

  return url;
};
