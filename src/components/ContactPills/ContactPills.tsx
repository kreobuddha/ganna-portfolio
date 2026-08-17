import './ContactPills.scss';
import type { ReactElement } from 'react';
import clsx from 'clsx';
import { profile } from '@/data/profile';
import type { ContactKind } from '@/types';

interface ContactPillsProps {
  /** `solid` renders white pills, `outline` renders bordered ones. */
  variant?: 'solid' | 'outline';
  className?: string;
}

const ICONS: Record<ContactKind, ReactElement> = {
  telegram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M21.9 4.3 18.8 19c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-.9.5l.3-4.7 8.5-7.7c.4-.3-.1-.5-.6-.2L6.9 13 2.3 11.5c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.6.2 1.4 1.2Z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  ),
  resume: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3.5v11" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4.5 18.5h15" />
    </svg>
  ),
};

const ContactPills = ({ variant = 'solid', className }: ContactPillsProps): ReactElement => {
  return (
    <ul className={clsx('contact-pills', className)}>
      {profile.contacts.map((contact) => (
        <li key={contact.kind}>
          <a
            className={clsx('contact-pills__pill', `contact-pills__pill--${variant}`)}
            href={contact.href}
            target={contact.kind === 'email' ? undefined : '_blank'}
            rel={contact.kind === 'email' ? undefined : 'noreferrer'}
          >
            <span className="contact-pills__icon">{ICONS[contact.kind]}</span>
            {contact.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactPills;
