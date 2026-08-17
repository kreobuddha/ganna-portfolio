import './ProjectDetail.scss';
import type { ReactElement } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import clsx from 'clsx';
import { getNextProject, getProject } from '@/data/projects';
import { usePageMeta } from '@/hooks/usePageMeta';

const ProjectDetail = (): ReactElement => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProject(slug);

  usePageMeta(project ? project.title : 'Project', project ? project.intro : '');

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const nextProject = getNextProject(project.slug);

  return (
    <article className="project-detail page shell">
      <Link className="project-detail__back" to="/projects">
        ← All projects
      </Link>

      <header className="project-detail__header">
        <h1 className="project-detail__title">{project.title}</h1>
        <p className="project-detail__intro">{project.intro}</p>

        <dl className="project-detail__meta">
          <div className="project-detail__meta-item">
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div className="project-detail__meta-item">
            <dt>Timeline</dt>
            <dd>{project.period}</dd>
          </div>
          <div className="project-detail__meta-item">
            <dt>Focus</dt>
            <dd>{project.tags.join(' • ')}</dd>
          </div>
        </dl>
      </header>

      <img
        className="project-detail__cover"
        src={project.cover.src}
        alt={project.cover.alt}
        width={1280}
        height={800}
      />

      <section className="project-detail__section">
        <h2 className="project-detail__section-title">Problem</h2>
        <p className="project-detail__lead">{project.problem}</p>
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

      <section className="project-detail__gallery">
        {project.gallery.map((image) => (
          <img
            key={image.src}
            className={clsx(
              'project-detail__gallery-image',
              `project-detail__gallery-image--${image.span ?? 'wide'}`
            )}
            src={image.src}
            alt={image.alt}
            loading="lazy"
          />
        ))}
      </section>

      <Link className="project-detail__next" to={`/projects/${nextProject.slug}`}>
        <span className="eyebrow">Next project</span>
        <span className="project-detail__next-title">{nextProject.title} →</span>
      </Link>
    </article>
  );
};

export default ProjectDetail;
