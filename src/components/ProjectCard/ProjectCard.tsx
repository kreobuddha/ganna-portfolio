import './ProjectCard.scss';
import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { getProjectImage } from '@/lib/projectImages';
import type { IProject } from '@/types';

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: ProjectCardProps): ReactElement => {
  return (
    <article className="project-card">
      <Link className="project-card__media" to={`/projects/${project.slug}`} tabIndex={-1}>
        <img
          className="project-card__image"
          src={getProjectImage(project.cover.name)}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          loading="lazy"
        />
      </Link>

      <div className="project-card__body">
        <div className="project-card__heading">
          {project.logo ? (
            <img className="project-card__logo" src={project.logo} alt="" loading="lazy" />
          ) : null}
          <div>
            <h2 className="project-card__title">
              <Link className="project-card__link" to={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h2>
            <p className="project-card__role">
              {project.role} • {project.period}
            </p>
          </div>
        </div>

        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag} className="project-card__tag">
              {tag}
            </li>
          ))}
        </ul>

        <p className="project-card__summary">
          <strong className="project-card__summary-strong">{project.summary.strong}</strong>{' '}
          {project.summary.rest}
        </p>

        <span className="project-card__cta" aria-hidden="true">
          See details →
        </span>
      </div>
    </article>
  );
};

export default ProjectCard;
