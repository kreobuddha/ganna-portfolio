import './HandDrawnArrow.scss';
import type { ReactElement } from 'react';
import clsx from 'clsx';

/** Which way the hand-drawn stroke curves and where its head points. */
export type ArrowDirection = 'right-down' | 'left-down' | 'right-up';

interface HandDrawnArrowProps {
  direction?: ArrowDirection;
  className?: string;
}

// The curve ends where the head begins, so the tip stays put at the same
// point whatever the barbs measure — the home page positions its arrows
// against that tip.
const PATHS: Record<ArrowDirection, { curve: string; head: string }> = {
  'right-down': {
    curve: 'M4 10C34 2 76 6 96 34',
    head: 'M96 34l-21-6M96 34l3-21',
  },
  'left-down': {
    curve: 'M116 10C86 2 44 6 24 34',
    head: 'M24 34l21-6M24 34l-3-21',
  },
  'right-up': {
    curve: 'M4 40C30 44 74 38 96 10',
    head: 'M96 10l-21 3M96 10l1.5 21',
  },
};

const HandDrawnArrow = ({
  direction = 'right-down',
  className,
}: HandDrawnArrowProps): ReactElement => {
  const { curve, head } = PATHS[direction];

  return (
    <svg
      className={clsx('hand-drawn-arrow', className)}
      viewBox="0 0 120 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* An invisible fill over the whole viewBox. Without it only the 2.8px
          stroke answers the pointer — `visiblePainted` hit-testing ignores
          everything the paint does not cover — so the arrow drew as part of
          the link it sits in but did not behave as part of it. */}
      <rect className="hand-drawn-arrow__hit" width="120" height="48" />
      <path className="hand-drawn-arrow__stroke" d={curve} />
      <path className="hand-drawn-arrow__stroke" d={head} />
    </svg>
  );
};

export default HandDrawnArrow;
