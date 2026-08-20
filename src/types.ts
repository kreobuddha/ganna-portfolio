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
  /** Path inside `src/assets/projects`, without the extension. */
  name: string;
  alt: string;
  /** Natural size of the file, so the browser reserves the box before it loads. */
  width: number;
  height: number;
  /** Shown under the screen. Left out where the screen explains itself. */
  caption?: string;
  /**
   * A sentence under the caption, where the screen is making a promise rather
   * than showing a state and the claim needs spelling out.
   */
  body?: string;
}

export type GroupLayout = 'feature' | 'phones' | 'grid' | 'stack' | 'figure';

/** One set of screens inside a section: "Log in", "Mobile UI kit". */
export interface IShowcaseGroup {
  id: string;
  /**
   * Left out where the group is the whole of what the page is showing and the
   * heading above it already names it — a set of covers, a series of drawings.
   * A product's case study has several groups and needs every one named.
   */
  title?: string;
  body?: string;
  layout: GroupLayout;
  images: IProjectImage[];
  /** A credit or a note on the role — what was directed rather than made. */
  note?: string;
}

/**
 * One numbered step of a written flow, with the branches that hang off it.
 * Kept as data rather than prose because the value of this document is that it
 * is exhaustive — it is the thinking on show, not the wording.
 */
export interface IStoryStep {
  text: string;
  sub?: string[];
}

/** A major part of the product — one card under "Explore the system". */
export interface IProjectSection {
  /** Also the `?part=` value that opens this section. */
  id: string;
  title: string;
  blurb: string;
  cover: IProjectImage;
  groups: IShowcaseGroup[];
  /**
   * The flow written out step by step, shown folded away under the screens.
   * Long enough that it would bury the section if it were open by default.
   */
  story?: {
    title: string;
    intro: string;
    steps: IStoryStep[];
    /** Trailing notes that are not steps — pricing rules and the like. */
    notes?: string[];
  };
}

export interface IProcessStep {
  title: string;
  body: string;
}

export interface IProject {
  slug: string;
  title: string;
  /**
   * What Hanna was on the project — the hats, not the job title. Several,
   * because on most of these she held more than one: founder and lead
   * designer, art direction and illustration.
   */
  roles: string[];
  period: string;
  /**
   * What the work is: the kind of company, the market, the product. Printed
   * beside the period as the card's subtitle, so it reads as one line about
   * the project before anything about her. Empty where the work is not a
   * product and there is nothing to classify — a set of covers, a series.
   */
  tags: string[];
  /** Short description used on the projects index, opening with the product's name. */
  summary: IHighlight;
  /** Longer case-study intro. */
  intro: string;
  problem: string;
  /** What the product does about the problem. Left out where the case has none written yet. */
  solution?: string;
  process: IProcessStep[];
  outcome: string[];
  /** The picture on the projects index. */
  cover: IProjectImage;
  /**
   * The wide shot opening the case study. Left out where the screens further
   * down make a better first impression than a composite would.
   */
  banner?: IProjectImage;
  /**
   * Major parts of the product, each opened from its own card. Exactly one of
   * `sections` and `groups` is filled: a project big enough to need dividing
   * gets sections, a smaller one puts its groups straight on the page.
   */
  sections: IProjectSection[];
  groups: IShowcaseGroup[];
  /**
   * Heading over the groups. Left out on the products, where the default
   * reads right; set on the work that is not a product — a set of covers,
   * a series of drawings — where "the product" would be the wrong word.
   */
  groupsHeading?: string;
  /** Left out where the work has no mark of its own — a series, a set of covers. */
  logo?: string;
  /**
   * Where the work actually lives — the product's own site, its store listing,
   * the account it is published to. Left out where there is nothing public to
   * point at: an internal tool, a series that exists only here.
   */
  link?: {
    label: string;
    href: string;
  };
}

/** One piece of work for a client. Most have exactly one. */
export interface IClientProject {
  /** Named only where a client has more than one, to tell them apart. */
  title?: string;
  industry: string;
  products: string[];
  /** Left out where the products speak for themselves. */
  platform?: string;
  role: string;
}

export interface IClient {
  name: string;
  /**
   * Artwork used as a stencil, not as a picture — only its alpha channel is
   * read, so whatever colours it carries are thrown away.
   */
  logo: string;
  projects: IClientProject[];
  /**
   * Reference letter, as a path inside `public/documents`. Kept out of the
   * bundle on purpose: these are documents to hand over, not build inputs.
   */
  letter?: string;
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
