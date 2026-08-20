import './SystemExplorer.scss';
import { useEffect, useRef } from 'react';
import type { ReactElement } from 'react';
import clsx from 'clsx';
import ShowcaseGroup from '@/components/ShowcaseGroup/ShowcaseGroup';
import StoryFlow from '@/components/StoryFlow/StoryFlow';
import { useMediaQuery } from '@/hooks/useMediaQuery';
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

const Chevron = (): ReactElement => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="m7 10 5 5 5-5" />
  </svg>
);

const SystemExplorer = ({
  sections,
  openId,
  onToggle,
  onOpenImage,
}: SystemExplorerProps): ReactElement => {
  const open = sections.find((section) => section.id === openId) ?? null;
  const panelRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Below this the cards are a single column of tall posters, and the panel
  // they open lands a screen or two under whichever one was tapped. Here each
  // section becomes a row that opens in place instead — thumbnail, name, how
  // many screens, and the arrow that opens it.
  const isRows = useMediaQuery('(max-width: 899px)');

  // Bring the panel into view whenever a section opens. The cards are tall
  // enough that the panel starts below the fold, so without this a click looks
  // like it did nothing at all.
  //
  // Skipped on first paint only: arriving on ?part=workspace from a shared
  // link should land at the top of the case study, not halfway down it. The
  // earlier version compared against the previous id, which also skipped the
  // very first click of a visit — the one that most needed the scroll.
  //
  // Skipped entirely in the row layout: there the panel already opens directly
  // under the row that was tapped, and scrolling it to the top of the window
  // would push that row out of sight.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!openId || isRows) {
      return;
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    panelRef.current?.scrollIntoView({ block: 'start', behavior: reduced ? 'auto' : 'smooth' });
  }, [openId, isRows]);

  // Only the open section is mounted. With ~75 screens across five sections,
  // rendering them all would pull several megabytes on a page where most
  // readers open one section, or none.
  const renderPanelBody = (section: IProjectSection): ReactElement => (
    <>
      {section.groups.map((group) => (
        <ShowcaseGroup key={group.id} group={group} onOpenImage={onOpenImage} />
      ))}

      {section.story ? (
        <StoryFlow
          title={section.story.title}
          intro={section.story.intro}
          steps={section.story.steps}
          notes={section.story.notes}
        />
      ) : null}
    </>
  );

  return (
    <div className={clsx('system-explorer', isRows && 'system-explorer--rows')}>
      <ul className="system-explorer__cards">
        {sections.map((section) => {
          const isOpen = section.id === openId;
          const screens = countScreens(section);
          const panelId = `system-explorer-panel-${section.id}`;

          return (
            <li key={section.id} className="system-explorer__item">
              <button
                className={clsx('system-explorer__card', isOpen && 'system-explorer__card--open')}
                type="button"
                onClick={() => onToggle(section.id)}
                aria-expanded={isOpen}
                aria-controls={isRows ? panelId : 'system-explorer-panel'}
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
                    {screens} {screens === 1 ? 'screen' : 'screens'}
                  </span>
                  <span className="system-explorer__title">{section.title}</span>
                  <span className="system-explorer__blurb">{section.blurb}</span>
                  <span className="system-explorer__cta">
                    {isOpen ? 'Hide details' : 'View details'}
                  </span>
                </span>

                {/* Only drawn in the row layout, where the arrow is the whole
                    affordance — the wide cards say "View details" in words. */}
                <span className="system-explorer__chevron" aria-hidden="true">
                  <Chevron />
                </span>
              </button>

              {isRows && isOpen ? (
                <div className="system-explorer__inline-panel" id={panelId}>
                  {renderPanelBody(section)}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="system-explorer__panel" id="system-explorer-panel" ref={panelRef}>
        {!isRows && open ? (
          <>
            <h3 className="system-explorer__panel-title">{open.title}</h3>
            {renderPanelBody(open)}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default SystemExplorer;
