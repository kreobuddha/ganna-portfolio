import './ProjectDetail.scss';
import type { ReactElement } from 'react';
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom';
import Lightbox from '@/components/Lightbox/Lightbox';
import ShowcaseGroup from '@/components/ShowcaseGroup/ShowcaseGroup';
import SystemExplorer from '@/components/SystemExplorer/SystemExplorer';
import { getNextProject, getProject } from '@/data/projects';
import { useLightbox } from '@/hooks/useLightbox';
import { usePageMeta } from '@/hooks/usePageMeta';
import { getProjectImage } from '@/lib/projectImages';

const ProjectDetail = (): ReactElement => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const lightbox = useLightbox();
  const project = getProject(slug);

  usePageMeta(project ? project.title : 'Project', project ? project.intro : '');

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const nextProject = getNextProject(project.slug);

  // The open section lives in the URL so a section can be linked to directly
  // and the browser's back button steps out of it. An unknown value reads as
  // nothing open rather than as an error.
  const requested = searchParams.get('part');
  const openId = project.sections.some((section) => section.id === requested) ? requested : null;

  const handleToggle = (id: string): void => {
    const next = new URLSearchParams(searchParams);

    if (id === openId) {
      next.delete('part');
    } else {
      next.set('part', id);
    }

    // Without this the router jumps to the top on every toggle, throwing the
    // reader away from the cards they just clicked.
    setSearchParams(next, { preventScrollReset: true });
  };

  return (
    <article className="project-detail page shell">
      <Link className="project-detail__back" to="/projects">
        ← All projects
      </Link>

      <header className="project-detail__header">
        <h1 className="project-detail__title">{project.title}</h1>
        <p className="project-detail__intro">{project.intro}</p>

        {/* A project whose timeline is its own tag — "Product Concept" — would
            otherwise print the same pill twice. */}
        <ul className="project-detail__tags">
          {[...new Set([project.period, project.role, ...project.tags])].map((tag) => (
            <li key={tag} className="project-detail__tag">
              {tag}
            </li>
          ))}
        </ul>
      </header>

      {project.banner ? (
        <img
          className="project-detail__cover"
          src={getProjectImage(project.banner.name)}
          alt={project.banner.alt}
          width={project.banner.width}
          height={project.banner.height}
        />
      ) : null}

      <section className="project-detail__section">
        <h2 className="project-detail__section-title">
          {project.solution ? 'Problem & Solution' : 'Problem'}
        </h2>
        <p className="project-detail__lead">{project.problem}</p>

        {project.solution ? (
          <>
            <h3 className="project-detail__subtitle">Solution</h3>
            <p className="project-detail__lead">{project.solution}</p>
          </>
        ) : null}
      </section>

      <section className="project-detail__section">
        <h2 className="project-detail__section-title">Process</h2>
        <ol className="project-detail__steps">
          {project.process.map((step, index) => (
            <li key={step.title} className="project-detail__step">
              <span className="project-detail__step-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="project-detail__step-title">{step.title}</h3>
              <p className="project-detail__step-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="project-detail__section">
        <h2 className="project-detail__section-title">Outcome</h2>
        <ul className="project-detail__outcome">
          {project.outcome.map((item) => (
            <li key={item} className="project-detail__outcome-item">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {project.sections.length > 0 ? (
        <section className="project-detail__section">
          <h2 className="project-detail__section-title">Explore the system</h2>
          <p className="project-detail__lead">
            {project.title} is several products working as one. Open any part to see the screens it
            is made of.
          </p>

          <SystemExplorer
            sections={project.sections}
            openId={openId}
            onToggle={handleToggle}
            onOpenImage={lightbox.open}
          />
        </section>
      ) : null}

      {project.groups.length > 0 ? (
        <section className="project-detail__section project-detail__section--groups">
          <h2 className="project-detail__section-title">Inside the product</h2>

          {project.groups.map((group) => (
            <ShowcaseGroup key={group.id} group={group} onOpenImage={lightbox.open} />
          ))}
        </section>
      ) : null}

      <Link className="project-detail__next" to={`/projects/${nextProject.slug}`}>
        <span className="eyebrow">Next project</span>
        <span className="project-detail__next-title">{nextProject.title} →</span>
      </Link>

      <Lightbox
        images={lightbox.images}
        index={lightbox.index}
        isOpen={lightbox.isOpen}
        onClose={lightbox.close}
        onNext={lightbox.next}
        onPrevious={lightbox.previous}
      />
    </article>
  );
};

export default ProjectDetail;
