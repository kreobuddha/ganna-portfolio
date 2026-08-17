import './PageHeading.scss';
import type { ReactElement, ReactNode } from 'react';

interface PageHeadingProps {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}

const PageHeading = ({ eyebrow, title, children }: PageHeadingProps): ReactElement => {
  return (
    <header className="page-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className="page-heading__title">{title}</h1>
      {children ? <div className="page-heading__body">{children}</div> : null}
    </header>
  );
};

export default PageHeading;
