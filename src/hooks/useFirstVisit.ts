import { useEffect, useState } from 'react';

const read = (key: string): boolean => {
  try {
    return sessionStorage.getItem(key) === null;
  } catch {
    // Storage can be unavailable in private modes; treat that as a first visit.
    return true;
  }
};

const mark = (key: string): void => {
  try {
    sessionStorage.setItem(key, '1');
  } catch {
    // Nothing to do — the intro simply plays again next time.
  }
};

/**
 * True the first time this key is seen in the session, false on every later
 * mount. Used to play an intro once rather than on every return to a page.
 */
export const useFirstVisit = (key: string): boolean => {
  // Read during init so the first paint already knows, and record it in an
  // effect — writing during init would make StrictMode's double render report
  // the very first visit as a repeat.
  const [isFirstVisit] = useState(() => read(key));

  useEffect(() => {
    mark(key);
  }, [key]);

  return isFirstVisit;
};
