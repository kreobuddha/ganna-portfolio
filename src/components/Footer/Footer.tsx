import './Footer.scss';
import type { ReactElement } from 'react';
import ContactPills from '@/components/ContactPills/ContactPills';
import { profile } from '@/data/profile';

// No nav here: the header is sticky, so its links are never out of reach and
// repeating them only made the footer taller.
const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="footer__inner shell">
        <p className="eyebrow">Let’s work together</p>
        <ContactPills />
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
