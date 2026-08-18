import './SystemExplorer.scss';
import { useEffect, useRef } from 'react';
import type { ReactElement } from 'react';
import clsx from 'clsx';
import ShowcaseGroup from '@/components/ShowcaseGroup/ShowcaseGroup';
import StoryFlow from '@/components/StoryFlow/StoryFlow';
import { getProjectImage } from '@/lib/projectImages';
import type { IProjectImage, IProjectSection } from '@/types';

interface SystemExplorerProps {
  sections: IProjectSection[];
  /** `null` while the overview is showing and nothing is opened yet. */
  openId: string | null;
  onToggle: (id: string) => void;
  onOpenImage: (images: IProjectImage[], index: number, trigger: HTMLElement) => void;
}

const countScreens = (section: IProjectSection): number =>
  section.groups.reduce((total, group) => total + group.images.length, 0);

const SystemExplorer = ({
  sections,
  openId,
  onToggle,
  onOpenImage,
}: SystemExplorerProps): ReactElement => {
  const open = sections.find((section) => section.id === openId) ?? null;
  const panelRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Bring the panel into view whenever a section opens. The cards are tall
  // enough that the panel starts below the fold, so without this a click looks
  // like it did nothing at all.
  //
  // Skipped on first paint only: arriving on ?part=workspace from a shared
  // link should land at the top of the case study, not halfway down it. The
  // earlier version compared against the previous id, which also skipped the
  // very first click of a visit — the one that most needed the scroll.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!openId) {
      return;
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    panelRef.current?.scrollIntoView({ block: 'start', behavior: reduced ? 'auto' : 'smooth' });
  }, [openId]);

  return (
    <div className="system-explorer">
      <ul className="system-explorer__cards">
        {sections.map((section) => {
          const isOpen = section.id === openId;

          return (
            <li key={section.id} className="system-explorer__item">
              <button
                className={clsx('system-explorer__card', isOpen && 'system-explorer__card--open')}
                type="button"
                onClick={() => onToggle(section.id)}
                aria-expanded={isOpen}
                aria-controls="system-explorer-panel"
              >
                <img
                  className="system-explorer__thumb"
                  src={getProjectImage(section.cover.name)}
                  alt=""
                  width={section.cover.width}
                  height={section.cover.height}
                  loading="lazy"
                  decoding="async"
                />

                <span className="system-explorer__body">
                  <span className="system-explorer__count">
                    {countScreens(section)} {countScreens(section) === 1 ? 'screen' : 'screens'}
                  </span>
                  <span className="system-explorer__title">{section.title}</span>
                  <span className="system-explorer__blurb">{section.blurb}</span>
                  <span className="system-explorer__cta">
                    {isOpen ? 'Hide details' : 'View details'}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Only the open section is mounted. With ~75 screens across five
          sections, rendering them all would pull several megabytes on a page
          where most readers open one section, or none. */}
      <div className="system-explorer__panel" id="system-explorer-panel" ref={panelRef}>
        {open ? (
          <>
            <h3 className="system-explorer__panel-title">{open.title}</h3>
            {open.groups.map((group) => (
              <ShowcaseGroup key={group.id} group={group} onOpenImage={onOpenImage} />
            ))}

            {open.story ? (
              <StoryFlow
                title={open.story.title}
                intro={open.story.intro}
                steps={open.story.steps}
                notes={open.story.notes}
              />
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default SystemExplorer;
