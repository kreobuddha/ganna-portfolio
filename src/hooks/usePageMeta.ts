import { useEffect } from 'react';

const BASE_TITLE = 'Hanna Shyliaieva — UX/UI Designer';

const setMetaContent = (selector: string, content: string): void => {
  const tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (tag) {
    tag.content = content;
  }
};

/** Keeps the document title and description in sync with the current route. */
export const usePageMeta = (title: string, description: string): void => {
  useEffect(() => {
    document.title = title === BASE_TITLE ? title : `${title} — ${BASE_TITLE}`;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
  }, [title, description]);
};
