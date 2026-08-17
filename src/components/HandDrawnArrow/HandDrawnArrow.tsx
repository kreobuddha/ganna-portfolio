import './HandDrawnArrow.scss';
import type { ReactElement } from 'react';
import clsx from 'clsx';

/** Which way the hand-drawn stroke curves and where its head points. */
export type ArrowDirection = 'right-down' | 'left-down' | 'right-up';

interface HandDrawnArrowProps {
  direction?: ArrowDirection;
  className?: string;
}

const PATHS: Record<ArrowDirection, { curve: string; head: string }> = {
  'right-down': {
    curve: 'M4 10C34 2 76 6 96 34',
    head: 'M96 34l-14-4M96 34l2-14',
  },
  'left-down': {
    curve: 'M116 10C86 2 44 6 24 34',
    head: 'M24 34l14-4M24 34l-2-14',
  },
  'right-up': {
    curve: 'M4 40C30 44 74 38 96 10',
    head: 'M96 10l-14 2M96 10l1 14',
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
      <path className="hand-drawn-arrow__stroke" d={curve} />
      <path className="hand-drawn-arrow__stroke" d={head} />
    </svg>
  );
};

export default HandDrawnArrow;
