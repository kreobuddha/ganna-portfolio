import './About.scss';
import type { ReactElement } from 'react';
import CircularText from '@/components/CircularText/CircularText';
import ContactPills from '@/components/ContactPills/ContactPills';
import { about } from '@/data/about';
import { profile } from '@/data/profile';
import { usePageMeta } from '@/hooks/usePageMeta';

const About = (): ReactElement => {
  usePageMeta(
    'About Me',
    'UX/UI designer with 10+ years of experience in information architecture, design systems, branding and cross-functional collaboration.'
  );

  // The same loop the home page spins around the portrait.
  const ringText = `${profile.fullName} •• ${profile.title} •• `;

  return (
    <div className="about page">
      <section className="about__hero">
        <div className="about__rings">
          <CircularText className="about__ring about__ring--left" text={ringText} />
          <CircularText className="about__ring about__ring--right" text={ringText} />
        </div>

        <div className="about__lead shell">
          <h1 className="about__title">{profile.title}</h1>

          <div className="about__portrait">
            <img
              className="about__portrait-image"
              src={profile.portrait}
              alt={profile.portraitAlt}
              width={1920}
              height={1923}
            />
          </div>

          <div className="about__bio">
            {about.bio.map((line) => (
              <p key={line.rest} className="about__bio-line">
                {line.strong ? <strong className="about__bio-strong">{line.strong} </strong> : null}
                {line.rest}
              </p>
            ))}
          </div>

          <ContactPills className="about__contacts" />
        </div>
      </section>

      <div className="about__body shell">
        <section className="about__section">
          <h2 className="about__section-title">Experience</h2>
          <ol className="about__timeline">
            {about.experience.map((entry) => (
              <li key={`${entry.company}-${entry.period}`} className="about__entry">
                <p className="about__entry-period">{entry.period}</p>
                <h3 className="about__entry-role">{entry.role}</h3>
                <p className="about__entry-company">{entry.company}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="about__columns">
          <section className="about__section">
            <h2 className="about__section-title">Skills</h2>
            <ul className="about__chips">
              {about.skills.map((skill) => (
                <li key={skill} className="about__chip about__chip--skill">
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section className="about__section">
            <h2 className="about__section-title">Tools</h2>
            <ul className="about__chips">
              {about.tools.map((tool) => (
                <li key={tool} className="about__chip">
                  {tool}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="about__columns">
          <section className="about__section">
            <h2 className="about__section-title">Languages</h2>
            <ul className="about__languages">
              {about.languages.map((language) => (
                <li key={language.name} className="about__language">
                  <span className="about__language-name">{language.name}</span>
                  <span className="about__language-level">{language.level}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="about__section">
            <h2 className="about__section-title">Education</h2>
            <div className="about__entry">
              <p className="about__entry-period">{about.education.period}</p>
              <h3 className="about__entry-role">{about.education.school}</h3>
              <p className="about__entry-company">{about.education.degree}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
