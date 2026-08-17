import './Header.scss';
import { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { profile } from '@/data/profile';

interface NavItem {
  to: string;
  label: string;
  end: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/clients', label: 'Clients', end: false },
  { to: '/about', label: 'About Me', end: false },
];

const Header = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleBurgerClick = (): void => {
    setIsMenuOpen((open) => !open);
  };

  return (
    <header className="header">
      <div className="header__bar shell">
        <NavLink to="/" className="header__brand">
          {profile.fullName}
        </NavLink>

        <nav className="header__nav" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => clsx('header__link', isActive && 'header__link--active')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="header__burger"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={handleBurgerClick}
        >
          <span className={clsx('header__bun', isMenuOpen && 'header__bun--open')} />
          <span className={clsx('header__bun', isMenuOpen && 'header__bun--open')} />
        </button>
      </div>

      <div id="mobile-nav" className="header__sheet" hidden={!isMenuOpen}>
        <nav className="header__sheet-nav" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                clsx('header__sheet-link', isActive && 'header__sheet-link--active')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
