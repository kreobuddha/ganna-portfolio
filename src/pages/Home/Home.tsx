import './Home.scss';
import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import CircularText from '@/components/CircularText/CircularText';
import ContactPills from '@/components/ContactPills/ContactPills';
import HandDrawnArrow from '@/components/HandDrawnArrow/HandDrawnArrow';
import type { ArrowDirection } from '@/components/HandDrawnArrow/HandDrawnArrow';
import { profile } from '@/data/profile';
import { usePageMeta } from '@/hooks/usePageMeta';

interface HomeShortcut {
  to: string;
  label: string;
  direction: ArrowDirection;
  modifier: string;
}

const SHORTCUTS: HomeShortcut[] = [
  { to: '/projects', label: 'Projects', direction: 'right-down', modifier: 'projects' },
  { to: '/clients', label: 'Clients', direction: 'right-down', modifier: 'clients' },
  { to: '/about', label: 'About Me', direction: 'left-down', modifier: 'about' },
];

const Home = (): ReactElement => {
  usePageMeta(
    'Hanna Shyliaieva — UX/UI Designer',
    'Portfolio of Hanna Shyliaieva, UX/UI designer with 10+ years of experience in web, mobile and enterprise product design.'
  );

  return (
    <div className="home">
      <section className="home__hero">
        <h1 className="home__wordmark">My Portfolio</h1>

        <div className="home__stage shell">
          <nav className="home__shortcuts" aria-label="Sections">
            {SHORTCUTS.map((shortcut) => (
              <Link
                key={shortcut.to}
                to={shortcut.to}
                className={clsx('home__shortcut', `home__shortcut--${shortcut.modifier}`)}
              >
                <HandDrawnArrow className="home__arrow" direction={shortcut.direction} />
                <span className="home__dot" aria-hidden="true" />
                <span className="home__shortcut-label">{shortcut.label}</span>
              </Link>
            ))}
          </nav>

          <div className="home__portrait">
            <CircularText
              className="home__circular"
              text={`${profile.fullName} •• ${profile.title} •• `}
            />
            <div className="home__portrait-frame">
              <img
                className="home__portrait-image"
                src={profile.heroPortrait}
                alt={profile.heroPortraitAlt}
                width={1024}
                height={1024}
              />
            </div>
          </div>

          <div className="home__intro">
            <h2 className="home__intro-title">{profile.title}</h2>
            <ul className="home__highlights">
              {profile.highlights.map((highlight) => (
                <li key={highlight.strong} className="home__highlight">
                  <strong>{highlight.strong}</strong> {highlight.rest}
                </li>
              ))}
            </ul>
            <ContactPills className="home__contacts" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
