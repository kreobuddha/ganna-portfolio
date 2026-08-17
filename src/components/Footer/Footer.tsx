import './Footer.scss';
import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import ContactPills from '@/components/ContactPills/ContactPills';
import { profile } from '@/data/profile';

const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="footer__inner shell">
        <div className="footer__lead">
          <p className="eyebrow">Open to new opportunities</p>
          <h2 className="footer__title">Let’s work together</h2>
          <ContactPills />
        </div>

        <nav className="footer__links" aria-label="Footer">
          <Link to="/projects">Projects</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/about">About Me</Link>
        </nav>
      </div>

      <div className="footer__legal shell">
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <span>{profile.title}</span>
      </div>
    </footer>
  );
};

export default Footer;
