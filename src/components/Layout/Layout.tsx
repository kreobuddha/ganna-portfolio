import './Layout.scss';
import { useEffect } from 'react';
import type { ReactElement } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const Layout = (): ReactElement => {
  const { pathname } = useLocation();
  // Home is a single full-screen composition and carries its own contact
  // links and section links, so the footer would only add a scrollbar to it
  // and the header bar has nothing of its own to offer — see Header.scss.
  const isHome = pathname === '/';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="layout">
      <a className="layout__skip" href="#main">
        Skip to content
      </a>
      <Header isHome={isHome} />
      <main id="main" className="layout__main">
        <Outlet />
      </main>
      {isHome ? null : <Footer />}
    </div>
  );
};

export default Layout;
