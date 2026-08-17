import './Clients.scss';
import type { ReactElement } from 'react';
import clsx from 'clsx';
import PageHeading from '@/components/PageHeading/PageHeading';
import { clients } from '@/data/clients';
import { usePageMeta } from '@/hooks/usePageMeta';

const Clients = (): ReactElement => {
  usePageMeta(
    'Clients',
    'Brands and teams Hanna Shyliaieva has designed for over 10+ years — from enterprise software to retail and sport.'
  );

  return (
    <div className="clients page shell">
      <PageHeading eyebrow="Where I have worked" title="Selected Clients">
        <p>
          Ten years of product and interface design across enterprise software, agencies and
          in-house product teams.
        </p>
      </PageHeading>

      <ul className="clients__grid">
        {clients.map((client) => {
          // The tile is the same whether or not the company has a site — only
          // the element around it changes, so one without a link still reads
          // as part of the wall rather than as a gap in it.
          const tile = (
            <>
              <span className={clsx('clients__tile', `clients__tile--${client.ink}`)}>
                <img className="clients__logo" src={client.logo} alt="" loading="lazy" />
              </span>
              <span className="clients__name">{client.name}</span>
            </>
          );

          return (
            <li key={client.name}>
              {client.href ? (
                <a
                  className="clients__card clients__card--link"
                  href={client.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {tile}
                </a>
              ) : (
                <div className="clients__card">{tile}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Clients;
