import './Clients.scss';
import { useState } from 'react';
import type { CSSProperties, ReactElement } from 'react';
import clsx from 'clsx';
import { clients } from '@/data/clients';
import { usePageMeta } from '@/hooks/usePageMeta';

const PANEL_ID = 'clients-panel';

const DownloadIcon = (): ReactElement => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3.5v11" />
    <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
    <path d="M4.5 18.5h15" />
  </svg>
);

const Clients = (): ReactElement => {
  usePageMeta(
    'Clients',
    'Brands and teams Hanna Shyliaieva has designed for over 10+ years — from enterprise software to retail and sport.'
  );

  // The wall opens one client at a time, so the panel below it never has to
  // decide which of several to show. It starts on the first, so the page never
  // shows an empty panel and the panel's purpose is obvious on arrival.
  const [openName, setOpenName] = useState<string>(clients[0].name);
  const openClient = clients.find((client) => client.name === openName) ?? clients[0];

  return (
    <div className="clients page shell">
      {/* The page shows no title of its own, but it still needs one to name
          itself to a screen reader and to search. */}
      <h1 className="visually-hidden">Selected clients</h1>

      <ul className="clients__grid">
        {clients.map((client, index) => (
          <li key={client.name}>
            <button
              type="button"
              className={clsx('clients__tile', client.name === openName && 'clients__tile--open')}
              aria-expanded={client.name === openName}
              aria-controls={PANEL_ID}
              onClick={(): void => setOpenName(client.name)}
              style={
                {
                  '--logo': `url("${client.logo}")`,
                  '--hint-order': index,
                } as CSSProperties
              }
            >
              <span className="clients__logo" />
              <span className="visually-hidden">{client.name}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="clients__panel" id={PANEL_ID} aria-live="polite">
        <h2 className="clients__panel-name">{openClient.name}</h2>

        {openClient.projects.map((project) => (
          <div key={project.title ?? openClient.name} className="clients__project">
            {project.title ? <h3 className="clients__project-title">{project.title}</h3> : null}

            <dl className="clients__facts">
              <dt className="clients__fact-label">Industry</dt>
              <dd className="clients__fact-value">{project.industry}</dd>

              <dt className="clients__fact-label">
                {project.products.length > 1 ? 'Products' : 'Product'}
              </dt>
              <dd className="clients__fact-value">
                <ul className="clients__products">
                  {project.products.map((product) => (
                    <li key={product} className="clients__product">
                      {product}
                    </li>
                  ))}
                </ul>
              </dd>

              {project.platform ? (
                <>
                  <dt className="clients__fact-label">Platform</dt>
                  <dd className="clients__fact-value">{project.platform}</dd>
                </>
              ) : null}

              <dt className="clients__fact-label">Role</dt>
              <dd className="clients__fact-value clients__fact-value--role">{project.role}</dd>
            </dl>
          </div>
        ))}

        {openClient.letter ? (
          <a
            className="clients__letter"
            href={`${import.meta.env.BASE_URL}${openClient.letter}`}
            download={`Letter of recommendation — ${openClient.name}.pdf`}
          >
            <span className="clients__letter-icon">
              <DownloadIcon />
            </span>
            Download recommendation
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Clients;
