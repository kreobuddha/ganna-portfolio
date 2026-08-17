import './NotFound.scss';
import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '@/hooks/usePageMeta';

const NotFound = (): ReactElement => {
  usePageMeta('Page not found', 'This page does not exist.');

  return (
    <div className="not-found page shell">
      <p className="eyebrow">Error 404</p>
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__body">
        The page you are looking for has moved or never existed. Try the projects instead.
      </p>
      <Link className="not-found__link" to="/">
        ← Back home
      </Link>
    </div>
  );
};

export default NotFound;
