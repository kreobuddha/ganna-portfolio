import { useSyncExternalStore } from 'react';

/**
 * Tracks a CSS media query from JavaScript, for the cases where a behaviour —
 * not just a style — differs between layouts. Kept in sync with the real
 * `matchMedia` list, so it follows a resize or a device rotation.
 *
 * Server-side and pre-hydration it reports false, which is why callers should
 * treat false as "the wide layout": that is the layout the markup describes.
 */
export const useMediaQuery = (query: string): boolean => {
  return useSyncExternalStore(
    (notify) => {
      const list = window.matchMedia(query);
      list.addEventListener('change', notify);
      return () => list.removeEventListener('change', notify);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
};
