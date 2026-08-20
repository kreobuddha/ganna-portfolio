import './ShowcaseGroup.scss';
import type { ReactElement } from 'react';
import clsx from 'clsx';
import ScreenFigure from '@/components/ScreenFigure/ScreenFigure';
import type { IProjectImage, IShowcaseGroup } from '@/types';

interface ShowcaseGroupProps {
  group: IShowcaseGroup;
  onOpenImage: (images: IProjectImage[], index: number, trigger: HTMLElement) => void;
}

const ShowcaseGroup = ({ group, onOpenImage }: ShowcaseGroupProps): ReactElement => {
  return (
    <section className="showcase-group" id={group.id}>
      {group.title || group.body ? (
        <header className="showcase-group__header">
          {group.title ? <h4 className="showcase-group__title">{group.title}</h4> : null}
          {group.body ? <p className="showcase-group__body">{group.body}</p> : null}
        </header>
      ) : null}

      <div className={clsx('showcase-group__grid', `showcase-group__grid--${group.layout}`)}>
        {group.images.map((image, index) => (
          <ScreenFigure
            key={image.name}
            image={image}
            onOpen={(trigger) => onOpenImage(group.images, index, trigger)}
          />
        ))}
      </div>

      {group.note ? <p className="showcase-group__note">{group.note}</p> : null}
    </section>
  );
};

export default ShowcaseGroup;
