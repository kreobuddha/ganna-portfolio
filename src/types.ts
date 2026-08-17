export type ContactKind = 'telegram' | 'email' | 'resume';

export interface IContactLink {
  label: string;
  href: string;
  kind: ContactKind;
}

export interface IHighlight {
  strong: string;
  rest: string;
}

export interface IProfile {
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  highlights: IHighlight[];
  contacts: IContactLink[];
  /** Home hero shot — square, with its own blue ground and glow baked in. */
  heroPortrait: string;
  heroPortraitAlt: string;
  /** About page portrait — cropped to a circle by CSS. */
  portrait: string;
  portraitAlt: string;
}

export interface IProjectImage {
  src: string;
  alt: string;
  /** `wide` spans the full grid row, `half` sits two per row. */
  span?: 'wide' | 'half';
}

export interface IProcessStep {
  title: string;
  body: string;
}

export interface IProject {
  slug: string;
  title: string;
  role: string;
  period: string;
  tags: string[];
  /** Short description used on the projects index. */
  summary: string;
  /** Longer case-study intro. */
  intro: string;
  problem: string;
  process: IProcessStep[];
  outcome: string[];
  cover: IProjectImage;
  gallery: IProjectImage[];
  logo: string;
}

export interface IClient {
  name: string;
  /**
   * Artwork used as a stencil, not as a picture — only its alpha channel is
   * read, so whatever colours it carries are thrown away.
   */
  logo: string;
  /** The company's own site. Left out when there is nothing current to link to. */
  href?: string;
  /** What the work was. Shown in the panel the logo opens. */
  description?: string;
}

export interface IExperienceEntry {
  company: string;
  role: string;
  period: string;
}

export interface ILanguageEntry {
  name: string;
  level: string;
}

export interface IEducation {
  school: string;
  degree: string;
  period: string;
}

/** One line of the About bio. Only the opening line carries a bold lead-in. */
export interface IBioLine {
  strong?: string;
  rest: string;
}

export interface IAbout {
  bio: IBioLine[];
  experience: IExperienceEntry[];
  skills: string[];
  tools: string[];
  languages: ILanguageEntry[];
  education: IEducation;
}
