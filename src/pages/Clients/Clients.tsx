import './Clients.scss';
import { useState } from 'react';
import type { CSSProperties, ReactElement } from 'react';
import clsx from 'clsx';
import PageHeading from '@/components/PageHeading/PageHeading';
import { clients } from '@/data/clients';
import { usePageMeta } from '@/hooks/usePageMeta';

const PANEL_ID = 'clients-panel';

const Clients = (): ReactElement => {
  usePageMeta(
    'Clients',
    'Brands and teams Hanna Shyliaieva has designed for over 10+ years — from enterprise software to retail and sport.'
  );

  // The wall opens one client at a time, so the panel below it never has to
  // decide which of several to show.
  const [openName, setOpenName] = useState<string | null>(null);
  const openClient = clients.find((client) => client.name === openName);

  const handleToggle = (name: string): void => {
    setOpenName((current) => (current === name ? null : name));
  };

  return (
    <div className="clients page shell">
      <PageHeading eyebrow="Where I have worked" title="Selected Clients">
        <p>
          Ten years of product and interface design across enterprise software, agencies and
          in-house product teams.
        </p>
      </PageHeading>

      <ul className="clients__grid">
        {clients.map((client) => (
          <li key={client.name}>
            <button
              type="button"
              className={clsx('clients__tile', client.name === openName && 'clients__tile--open')}
              aria-expanded={client.name === openName}
              aria-controls={PANEL_ID}
              onClick={(): void => handleToggle(client.name)}
            >
              <span
                className="clients__logo"
                style={{ '--logo': `url("${client.logo}")` } as CSSProperties}
              />
              <span className="visually-hidden">{client.name}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="clients__panel" id={PANEL_ID} aria-live="polite">
        {openClient ? (
          <>
            <h2 className="clients__panel-name">{openClient.name}</h2>
            {openClient.description ? (
              <p className="clients__panel-text">{openClient.description}</p>
            ) : null}
            {openClient.href ? (
              <a
                className="clients__panel-link"
                href={openClient.href}
                target="_blank"
                rel="noreferrer"
              >
                Visit site
              </a>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Clients;
