import './Clients.scss';
import type { ReactElement } from 'react';
import PageHeading from '@/components/PageHeading/PageHeading';
import { clients } from '@/data/clients';
import { usePageMeta } from '@/hooks/usePageMeta';

const Clients = (): ReactElement => {
  usePageMeta(
    'Clients',
    'Companies and teams Hanna Shyliaieva has designed for over 10+ years — from enterprise software to product startups.'
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
        {clients.map((client) => (
          <li key={client.name} className="clients__card">
            <img className="clients__logo" src={client.logo} alt="" loading="lazy" />
            <h2 className="clients__name">{client.name}</h2>
            <p className="clients__role">{client.role}</p>
            <p className="clients__period">{client.period}</p>
            <p className="clients__note">{client.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
