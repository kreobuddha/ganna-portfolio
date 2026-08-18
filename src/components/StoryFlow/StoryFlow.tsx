import './StoryFlow.scss';
import type { ReactElement } from 'react';
import type { IStoryStep } from '@/types';

interface StoryFlowProps {
  title: string;
  intro: string;
  steps: IStoryStep[];
  notes?: string[];
}

/**
 * The written flow behind a section, folded away.
 *
 * <details> rather than a state hook on purpose: the browser handles the
 * toggle, the content stays in the document for find-in-page and for anyone
 * printing the case study, and it costs no JavaScript.
 */
const StoryFlow = ({ title, intro, steps, notes }: StoryFlowProps): ReactElement => {
  return (
    <details className="story-flow">
      <summary className="story-flow__summary">
        <span className="story-flow__title">{title}</span>
        <span className="story-flow__count">{steps.length} steps</span>
      </summary>

      <div className="story-flow__body">
        <p className="story-flow__intro">{intro}</p>

        <ol className="story-flow__steps">
          {steps.map((step) => (
            <li key={step.text} className="story-flow__step">
              {step.text}

              {step.sub ? (
                <ul className="story-flow__branches">
                  {step.sub.map((branch) => (
                    <li key={branch} className="story-flow__branch">
                      {branch}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>

        {notes ? (
          <ul className="story-flow__notes">
            {notes.map((note) => (
              <li key={note} className="story-flow__note">
                {note}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </details>
  );
};

export default StoryFlow;
