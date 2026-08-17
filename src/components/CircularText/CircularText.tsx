import './CircularText.scss';
import type { ReactElement } from 'react';
import clsx from 'clsx';

interface CircularTextProps {
  text: string;
  className?: string;
}

const CircularText = ({ text, className }: CircularTextProps): ReactElement => {
  return (
    <svg
      className={clsx('circular-text', className)}
      viewBox="0 0 320 320"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path
          id="circular-text-path"
          d="M160,160 m-132,0 a132,132 0 1,1 264,0 a132,132 0 1,1 -264,0"
        />
      </defs>
      <text className="circular-text__label">
        <textPath href="#circular-text-path" startOffset="0">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default CircularText;
