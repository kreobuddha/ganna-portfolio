import { useCallback, useEffect, useRef, useState } from 'react';
import type { IProjectImage } from '@/types';

export interface UseLightboxResult {
  /** The set currently being browsed, and where in it we are. */
  images: IProjectImage[];
  index: number;
  isOpen: boolean;
  open: (images: IProjectImage[], index: number, trigger: HTMLElement) => void;
  close: () => void;
  next: () => void;
  previous: () => void;
}

/**
 * Which screen the lightbox is showing, and which button opened it.
 *
 * The trigger is kept so focus can go back where it came from on close —
 * without it, dismissing the dialog drops the caret at the top of the document
 * and a keyboard user loses their place in a page of eighty-odd screens.
 */
export const useLightbox = (): UseLightboxResult => {
  const [images, setImages] = useState<IProjectImage[]>([]);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = useCallback((next: IProjectImage[], at: number, trigger: HTMLElement): void => {
    triggerRef.current = trigger;
    setImages(next);
    setIndex(at);
    setIsOpen(true);
  }, []);

  const close = useCallback((): void => {
    setIsOpen(false);
  }, []);

  // Focus goes back only once the dialog has actually closed. Calling focus()
  // inside `close` looks right but does nothing: a modal <dialog> is still in
  // the top layer at that point and keeps focus inside itself.
  useEffect(() => {
    if (isOpen || !triggerRef.current) {
      return;
    }

    triggerRef.current.focus();
    triggerRef.current = null;
  }, [isOpen]);

  const step = useCallback(
    (delta: number): void => {
      setIndex((current) => (current + delta + images.length) % images.length);
    },
    [images.length]
  );

  const next = useCallback((): void => step(1), [step]);
  const previous = useCallback((): void => step(-1), [step]);

  return { images, index, isOpen, open, close, next, previous };
};
