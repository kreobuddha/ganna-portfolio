import './Projects.scss';
import type { ReactElement } from 'react';
import PageHeading from '@/components/PageHeading/PageHeading';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { projects } from '@/data/projects';
import { usePageMeta } from '@/hooks/usePageMeta';

const Projects = (): ReactElement => {
  usePageMeta(
    'Projects',
    'Selected UX/UI case studies by Hanna Shyliaieva — Resola rehabilitation platform and the U&CO music services marketplace.'
  );

  return (
    <div className="projects page shell">
      <PageHeading eyebrow="Selected work" title="Latest Projects">
        <p>
          Product work across healthcare and marketplace platforms — from information architecture
          and user flows to design systems handed over to engineering.
        </p>
      </PageHeading>

      <div className="projects__list">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
