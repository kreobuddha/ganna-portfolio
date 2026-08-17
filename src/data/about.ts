import type { IAbout } from '@/types';

export const about: IAbout = {
  bio: [
    {
      strong: 'UX/UI Designer with 10+ years of experience',
      rest: 'designing web and mobile applications, enterprise software, and digital products.',
    },
    {
      rest: 'Experienced in information architecture, design systems, branding, and cross-functional collaboration.',
    },
    { rest: 'Passionate about creating intuitive, scalable, and user-centered experiences.' },
  ],
  // Oldest first, so the timeline reads left to right the way it is written.
  experience: [
    {
      company: 'Laboratory 24 LLC',
      role: '2D Designer → Head of 2D Design Department',
      period: 'October 2015 — February 2016',
    },
    { company: 'R-Soft LLC', role: 'Designer', period: 'October 2016 — February 2017' },
    { company: 'SprintSoft LLC', role: 'UI/UX Designer', period: 'October 2016 — February 2017' },
    {
      company: 'GMCS Verex LLC',
      role: 'Lead UI/UX Designer',
      period: 'February 2017 — February 2021',
    },
    { company: 'Freelance', role: 'UX/UI Designer', period: 'February 2021 — Present' },
  ],
  skills: [
    'Complex enterprise product design',
    'Information architecture',
    'Design systems',
    'Leading UI/UX projects',
    'Working directly with developers',
    'Branding and visual design',
    '10+ years of commercial experience',
  ],
  tools: [
    'Figma',
    'FigJam',
    'Photoshop',
    'Illustrator',
    'Miro',
    'Zeplin',
    'Slack',
    'MS Teams',
    'Tumult Hype',
    'ChatGPT',
    'Claude',
    'Framer',
  ],
  languages: [
    { name: 'English', level: 'B2' },
    { name: 'Ukrainian', level: 'Native' },
    { name: 'Russian', level: 'Native' },
  ],
  education: {
    school: 'Tula State University',
    degree: 'Degree: Design',
    period: 'September 2011 — June 2015',
  },
};
