import './Clients.scss';
import { useEffect, useState } from 'react';
import type { CSSProperties, ReactElement } from 'react';
import clsx from 'clsx';
import { clients } from '@/data/clients';
import { useMediaQuery } from '@/hooks/useMediaQuery';
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
  const [openName, setOpenName] = useState<string | null>(clients[0].name);

  // On a phone the panel is tall and sits between the logos, so a tap on the
  // open client folds it away again to get back to the wall. On a wide screen
  // it sits beside the wall and costs nothing, and closing it would only leave
  // a hole — so there the tiles stay a single-choice control.
  const isNarrow = useMediaQuery('(max-width: 599px)');

  useEffect(() => {
    if (!isNarrow && openName === null) {
      setOpenName(clients[0].name);
    }
  }, [isNarrow, openName]);

  const openIndex = openName === null ? -1 : clients.findIndex((c) => c.name === openName);
  const openClient = openIndex === -1 ? null : clients[openIndex];

  return (
    <div className="clients page shell">
      {/* The page shows no title of its own, but it still needs one to name
          itself to a screen reader and to search. */}
      <h1 className="visually-hidden">Selected clients</h1>

      {/* The panel is the last cell of the grid, so on a wide screen it lands
          under the whole wall the way it always has. On a phone the wall is one
          logo per row, and the panel would sit a dozen screens below whatever
          was just tapped — so there it is ordered to follow the open tile. */}
      <ul className="clients__grid">
        {clients.map((client, index) => (
          <li
            key={client.name}
            className="clients__cell"
            style={{ '--order': openIndex === -1 || index <= openIndex ? 0 : 2 } as CSSProperties}
          >
            <button
              type="button"
              className={clsx('clients__tile', client.name === openName && 'clients__tile--open')}
              aria-expanded={client.name === openName}
              aria-controls={PANEL_ID}
              onClick={(): void =>
                setOpenName((current) => (isNarrow && current === client.name ? null : client.name))
              }
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

        {openClient ? (
          <li className="clients__cell clients__cell--panel">
            <div className="clients__panel" id={PANEL_ID} aria-live="polite">
              <h2 className="clients__panel-name">{openClient.name}</h2>

              {openClient.projects.map((project) => (
                <div key={project.title ?? openClient.name} className="clients__project">
                  {project.title ? (
                    <h3 className="clients__project-title">{project.title}</h3>
                  ) : null}

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
                    <dd className="clients__fact-value clients__fact-value--role">
                      {project.role}
                    </dd>
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
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Clients;
