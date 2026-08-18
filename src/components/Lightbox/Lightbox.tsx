import './Lightbox.scss';
import { useEffect, useRef } from 'react';
import type { KeyboardEvent, MouseEvent, ReactElement } from 'react';
import { getProjectImage } from '@/lib/projectImages';
import type { IProjectImage } from '@/types';

interface LightboxProps {
  images: IProjectImage[];
  index: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Lightbox = ({
  images,
  index,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: LightboxProps): ReactElement | null => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const image = images[index];

  // showModal() has to be called imperatively — the `open` attribute alone
  // renders the dialog without the top layer, the backdrop or the focus trap,
  // which is most of the reason for using <dialog> in the first place.
  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    // The page behind the dialog still scrolls under a trackpad, which makes
    // the position the caller returns to unpredictable.
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  if (!image) {
    return null;
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>): void => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      onNext();
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      onPrevious();
    }
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>): void => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog
      className="lightbox"
      ref={dialogRef}
      onCancel={onClose}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={handleBackdropClick}
      aria-label="Screen viewer"
    >
      <div className="lightbox__frame">
        <div className="lightbox__stage">
          <img
            className="lightbox__image"
            src={getProjectImage(image.name)}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>

        <div className="lightbox__bar">
          <p className="lightbox__caption">{image.caption ?? image.alt}</p>

          <div className="lightbox__controls">
            {images.length > 1 ? (
              <>
                <button
                  className="lightbox__control"
                  type="button"
                  onClick={onPrevious}
                  aria-label="Previous screen"
                >
                  ←
                </button>
                <span className="lightbox__counter">
                  {index + 1} / {images.length}
                </span>
                <button
                  className="lightbox__control"
                  type="button"
                  onClick={onNext}
                  aria-label="Next screen"
                >
                  →
                </button>
              </>
            ) : null}

            <button
              className="lightbox__control lightbox__control--close"
              type="button"
              onClick={onClose}
              aria-label="Close viewer"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Lightbox;
