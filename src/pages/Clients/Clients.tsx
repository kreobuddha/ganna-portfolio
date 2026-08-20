import './Clients.scss';
import { useState } from 'react';
import type { CSSProperties, ReactElement } from 'react';
import clsx from 'clsx';
import { clients } from '@/data/clients';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { usePageMeta } from '@/hooks/usePageMeta';
import type { IClient } from '@/types';

const PANEL_ID = 'clients-panel';

const DownloadIcon = (): ReactElement => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3.5v11" />
    <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
    <path d="M4.5 18.5h15" />
  </svg>
);

const Chevron = (): ReactElement => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="m7 10 5 5 5-5" />
  </svg>
);

const Clients = (): ReactElement => {
  usePageMeta(
    'Clients',
    'Brands and teams Hanna Shyliaieva has designed for over 10+ years — from enterprise software to retail and sport.'
  );

  // What the reader has actually picked. Null until they pick something, which
  // is not the same as "nothing is open" — see `openName` below.
  const [picked, setPicked] = useState<string | null>(null);

  // On a narrow screen the wall is a column of a dozen logos, and the panel one
  // opens lands a screen or two below whichever was tapped. There the wall
  // becomes a list of closed rows instead — logo, name, how many projects —
  // each opening in place under itself. Same shape and same 900px as RESOLA's
  // sections take on a project page, so a tablet reads one way across the site
  // rather than rows on one page and a wall on the next.
  const isNarrow = useMediaQuery('(max-width: 899px)');

  // Wide, the panel sits under the whole wall and is never empty: the first
  // client stands in until one is picked, so the panel's purpose is obvious on
  // arrival. Narrow, everything starts closed and the page arrives as a
  // readable list — there is nothing to explain, and twelve rows fit a screen
  // where one open panel does not.
  const openName = picked ?? (isNarrow ? null : clients[0].name);
  const openIndex = openName === null ? -1 : clients.findIndex((c) => c.name === openName);
  const openClient = openIndex === -1 ? null : clients[openIndex];

  // One client's facts, wherever they are shown from: under the wall on a wide
  // screen, inside the row that opened them on a phone.
  const renderPanelBody = (client: IClient): ReactElement => (
    <>
      <h2 className="clients__panel-name">{client.name}</h2>

      {client.projects.map((project) => (
        <div key={project.title ?? client.name} className="clients__project">
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

      {client.letter ? (
        <a
          className="clients__letter"
          href={`${import.meta.env.BASE_URL}${client.letter}`}
          download={`Letter of recommendation — ${client.name}.pdf`}
        >
          <span className="clients__letter-icon">
            <DownloadIcon />
          </span>
          Download recommendation
        </a>
      ) : null}
    </>
  );

  return (
    <div className={clsx('clients page shell', isNarrow && 'clients--rows')}>
      {/* The page shows no title of its own, but it still needs one to name
          itself to a screen reader and to search. */}
      <h1 className="visually-hidden">Selected clients</h1>

      <ul className="clients__grid">
        {clients.map((client, index) => {
          const isOpen = client.name === openName;
          const count = client.projects.length;
          const rowPanelId = `clients-panel-${index}`;

          return (
            <li key={client.name} className="clients__cell">
              <button
                type="button"
                className={clsx('clients__tile', isOpen && 'clients__tile--open')}
                aria-expanded={isOpen}
                aria-controls={isNarrow ? rowPanelId : PANEL_ID}
                onClick={(): void =>
                  setPicked((current) => (isNarrow && current === client.name ? null : client.name))
                }
                style={
                  {
                    '--logo': `url("${client.logo}")`,
                    '--hint-order': index,
                  } as CSSProperties
                }
              >
                <span className="clients__logo" />
                {/* The name is the button's accessible name at every width. It
                    is only clipped on the wall, where the logo says it. */}
                <span className="clients__name">{client.name}</span>
                {/* Drawn in the row layout only — on the wall the logo is the
                    whole tile. */}
                <span className="clients__count">
                  {count} {count === 1 ? 'project' : 'projects'}
                </span>
                <span className="clients__chevron" aria-hidden="true">
                  <Chevron />
                </span>
              </button>

              {isNarrow && isOpen ? (
                <div className="clients__panel clients__panel--inline" id={rowPanelId}>
                  {renderPanelBody(client)}
                </div>
              ) : null}
            </li>
          );
        })}

        {/* Under the whole wall on a wide screen. On a phone each row carries
            its own, so this one is not rendered at all. */}
        {!isNarrow && openClient ? (
          <li className="clients__cell clients__cell--panel">
            <div className="clients__panel" id={PANEL_ID} aria-live="polite">
              {renderPanelBody(openClient)}
            </div>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Clients;
