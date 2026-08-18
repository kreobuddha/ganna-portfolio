import './ScreenFigure.scss';
import type { MouseEvent, ReactElement } from 'react';
import { getProjectImage } from '@/lib/projectImages';
import type { IProjectImage } from '@/types';

interface ScreenFigureProps {
  image: IProjectImage;
  onOpen: (trigger: HTMLElement) => void;
}

const ScreenFigure = ({ image, onOpen }: ScreenFigureProps): ReactElement => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    onOpen(event.currentTarget);
  };

  return (
    <figure className="screen-figure">
      <button
        className="screen-figure__button"
        type="button"
        onClick={handleClick}
        aria-label={`Open full size: ${image.alt}`}
      >
        <img
          className="screen-figure__image"
          src={getProjectImage(image.name)}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
        />
      </button>

      {image.caption || image.body ? (
        <figcaption className="screen-figure__caption">
          {image.caption ? (
            <span className="screen-figure__caption-title">{image.caption}</span>
          ) : null}
          {image.body ? <span className="screen-figure__caption-body">{image.body}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
};

export default ScreenFigure;
