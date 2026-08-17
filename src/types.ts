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
  role: string;
  period: string;
  /** Short note on what the collaboration covered. */
  note: string;
  logo: string;
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

export interface IAbout {
  bio: string[];
  experience: IExperienceEntry[];
  skills: string[];
  tools: string[];
  languages: ILanguageEntry[];
  education: IEducation;
}
