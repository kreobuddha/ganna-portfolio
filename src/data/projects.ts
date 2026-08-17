import type { IProject } from '@/types';

export const projects: IProject[] = [
  {
    slug: 'resola',
    title: 'RESOLA',
    role: 'Lead product & UX/UI Designer',
    period: '2021—Now',
    tags: ['B2C', 'Healthcare'],
    summary:
      'Resola is a digital rehabilitation platform designed for physical and occupational therapy. The ecosystem combines a patient-facing mobile app, a web workspace for therapists, and a marketing website. The platform enables clinicians to create personalized rehabilitation programs, remotely monitor patient progress through motion tracking and biomechanical data, and adjust treatment plans based on real-time insights, helping patients recover more effectively at home.',
    intro:
      'A digital rehabilitation ecosystem for physical and occupational therapy: a patient mobile app, a therapist web workspace, and a marketing site — designed as one connected product.',
    problem:
      'Home rehabilitation breaks down where the clinic ends. Therapists lose visibility of what patients actually do between sessions, patients lose confidence in whether they are performing exercises correctly, and treatment plans get adjusted from memory rather than from data. The product had to close that loop for two very different audiences at once — clinicians working under time pressure inside a dense data workspace, and patients exercising at home, often older and unassisted.',
    process: [
      {
        title: 'Understanding two audiences',
        body: 'Mapped the full rehabilitation journey for both sides — from intake and program assignment to daily exercise sessions and progress reviews. The therapist and the patient needed opposite things from the same data: density and control on one side, reassurance and simplicity on the other.',
      },
      {
        title: 'Information architecture',
        body: 'Structured the therapist workspace around the patient list as the working surface: summary, to-do, patients, RTM, staff, support and logs. Tagging (survey idle, negative feedback, low performance, needs communication) turned a flat table into a triage tool, so a clinician can see who needs attention before opening a single record.',
      },
      {
        title: 'Motion tracking and biomechanics',
        body: 'Designed how motion-capture and biomechanical data are presented so they stay readable in the moment: live skeletal feedback and target angles for the patient during a session, aggregated trends and adherence for the therapist afterwards.',
      },
      {
        title: 'Design system',
        body: 'Built a shared component library across mobile and web so the two applications stay recognisably one product, and handed it over with specs the development team could build from directly.',
      },
    ],
    outcome: [
      'A connected ecosystem — patient app, therapist workspace and marketing site — sharing one design language.',
      'Remote monitoring that turns motion-tracking data into decisions a clinician can act on.',
      'A component library that keeps mobile and web consistent and speeds up new feature work.',
      'Lead design role held on the product since 2021, working directly with developers throughout.',
    ],
    cover: {
      src: '/images/resola-cover.svg',
      alt: 'Resola therapist workspace and patient mobile app',
    },
    gallery: [
      {
        src: '/images/resola-workspace.svg',
        alt: 'Resola therapist workspace — patient list with triage tags',
        span: 'wide',
      },
      {
        src: '/images/resola-app-session.svg',
        alt: 'Resola patient app — exercise session with motion tracking',
        span: 'half',
      },
      {
        src: '/images/resola-app-progress.svg',
        alt: 'Resola patient app — progress and adherence overview',
        span: 'half',
      },
    ],
    logo: '/images/logo-resola.svg',
  },
  {
    slug: 'uandco',
    title: 'U&CO',
    role: 'Product Creator & UX/UI Designer',
    period: 'Product Concept',
    tags: ['Product Concept', 'Music Services Marketplace'],
    summary:
      'U&CO is an original product concept I created from the ground up—from the initial idea and business logic to the user flows, platform structure, and interface design. The marketplace connects musicians and clients with trusted music professionals worldwide, offering services such as mixing and mastering, arrangement, session recording, and cover design. It supports the complete project workflow, including service selection, ordering, communication, file review, progress tracking, and project completion within a clear, secure, and multilingual platform.',
    intro:
      'An original marketplace concept connecting musicians with trusted music professionals worldwide — created end to end, from the business idea to the interface.',
    problem:
      'Musicians looking for mixing, mastering, arrangement, session recording or cover art rely on scattered recommendations and private messages. There is no shared place to compare professionals, agree on scope, exchange large audio files, review revisions and know that payment is safe. The concept had to hold an entire creative collaboration — across languages and time zones — inside a workflow both sides can trust.',
    process: [
      {
        title: 'Idea and business logic',
        body: 'Started from the market gap and defined the model myself: who the two sides are, what a service listing contains, how orders are priced and scoped, and where the platform holds responsibility between client and professional.',
      },
      {
        title: 'Platform structure',
        body: 'Designed the catalogue around service categories — mixing and mastering, arrangement, session recording, cover design — so a client can move from a vague need to a specific, comparable offer.',
      },
      {
        title: 'End-to-end project flow',
        body: 'Mapped the complete workflow: service selection, ordering, communication, file review with revision rounds, progress tracking and project completion — the stages where marketplaces usually leak trust.',
      },
      {
        title: 'Interface and multilingual design',
        body: 'Built the interface to stay clear under long, translated copy, so the platform reads as one product regardless of the language a musician works in.',
      },
    ],
    outcome: [
      'A complete product concept: business logic, user flows, platform structure and interface design.',
      'A workflow that carries a project from first enquiry to delivery without leaving the platform.',
      'A multilingual, secure-by-design structure for a worldwide professional audience.',
    ],
    cover: { src: '/images/uandco-cover.svg', alt: 'U&CO marketplace interface' },
    gallery: [
      { src: '/images/uandco-catalogue.svg', alt: 'U&CO service catalogue', span: 'wide' },
      { src: '/images/uandco-order.svg', alt: 'U&CO order and file review flow', span: 'half' },
      { src: '/images/uandco-profile.svg', alt: 'U&CO professional profile', span: 'half' },
    ],
    logo: '/images/logo-uandco.svg',
  },
];

export const getProject = (slug: string | undefined): IProject | undefined =>
  projects.find((project) => project.slug === slug);

export const getNextProject = (slug: string): IProject => {
  const index = projects.findIndex((project) => project.slug === slug);

  return projects[(index + 1) % projects.length];
};
