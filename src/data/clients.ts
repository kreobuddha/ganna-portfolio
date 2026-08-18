import decathlon from '@/assets/logos/decathlon.png';
import gmcs from '@/assets/logos/gmcs.png';
import kfc from '@/assets/logos/kfc.png';
import leroyMerlin from '@/assets/logos/leroy-merlin.webp';
import prisma from '@/assets/logos/prisma.png';
import resola from '@/assets/logos/resola.png';
import rfu from '@/assets/logos/rfu.png';
import serviceTelecom from '@/assets/logos/service-telecom.png';
import skolkovo from '@/assets/logos/skolkovo.png';
import socar from '@/assets/logos/socar.png';
import sprintsoft from '@/assets/logos/sprintsoft.png';
import transneft from '@/assets/logos/transneft.png';
import type { IClient } from '@/types';

// Hanna's own order, kept from the logo wall she built on Framer, and her own
// wording for every field.
export const clients: IClient[] = [
  {
    name: 'GMCS',
    logo: gmcs,
    letter: 'documents/letter-gmcs.pdf',
    projects: [
      {
        industry: 'Enterprise IT Consulting & Digital Transformation',
        products: [
          'Enterprise web applications',
          'Mobile applications',
          'Internal business systems',
          'Custom enterprise software',
        ],
        role: 'Senior UX/UI Designer',
      },
    ],
  },
  {
    name: 'Resola',
    logo: resola,
    letter: 'documents/letter-resola.pdf',
    projects: [
      {
        industry: 'Healthcare',
        products: [
          'Mobile App',
          'Therapist Workspace (Web App)',
          'Marketing Website',
          'Brand Identity',
        ],
        role: 'Lead UX/UI Designer',
      },
    ],
  },
  {
    name: 'SprintSoft',
    logo: sprintsoft,
    letter: 'documents/letter-sprintsoft.pdf',
    projects: [
      {
        industry: 'Information Technology & Digital Solutions',
        products: [
          'Enterprise web applications',
          'Mobile applications',
          'Internal tools',
          'Custom enterprise software',
        ],
        role: 'In-house UX/UI Designer',
      },
    ],
  },
  {
    name: 'Leroy Merlin',
    logo: leroyMerlin,
    projects: [
      {
        industry: 'Retail',
        products: ['Price Monitoring', 'Inventory Accuracy', 'Department Management', 'HR Maps'],
        platform: 'Responsive web applications',
        role: 'UX/UI Design',
      },
    ],
  },
  {
    name: 'KFC',
    logo: kfc,
    projects: [
      {
        industry: 'Quick Service Restaurant (QSR)',
        products: ['Employee Time & Attendance Management System'],
        platform: 'Responsive web application',
        role: 'UX/UI Design',
      },
    ],
  },
  {
    name: 'SOCAR Energy Resources',
    logo: socar,
    projects: [
      {
        title: 'Business Intelligence Dashboard',
        industry: 'Oil & Gas',
        products: ['Enterprise Business Intelligence Dashboard'],
        platform: 'Power BI web application',
        role: 'UX/UI Design',
      },
      {
        title: 'Enterprise Management System',
        industry: 'Oil & Gas',
        products: ['Enterprise Management System'],
        platform: 'Responsive web application',
        role: 'UX/UI Design • Junior Front-end Layout (Angular)',
      },
    ],
  },
  {
    name: 'Decathlon',
    logo: decathlon,
    projects: [
      {
        industry: 'Retail',
        products: ['Team Scheduling & Workforce Management System'],
        platform: 'Responsive web application',
        role: 'UX/UI Design',
      },
    ],
  },
  {
    name: 'Transneft',
    logo: transneft,
    projects: [
      {
        industry: 'Oil & Gas Transportation',
        products: ['Equipment Maintenance Planning & Tracking System'],
        platform: 'Enterprise web application',
        role: 'UX/UI Design • Organizational Structure Design',
      },
    ],
  },
  {
    name: 'Prisma',
    logo: prisma,
    projects: [
      {
        industry: 'Retail',
        products: ['Internal Retail Management System'],
        platform: 'Enterprise web application',
        role: 'Lead UX/UI Designer',
      },
    ],
  },
  {
    name: 'Service-Telecom Group',
    logo: serviceTelecom,
    projects: [
      {
        industry: 'Telecommunications Infrastructure',
        products: ['Digital Tower Single Window Platform'],
        platform: 'Enterprise web application',
        role: 'Lead UX/UI Designer',
      },
    ],
  },
  {
    name: 'Russian Football Union',
    logo: rfu,
    projects: [
      {
        industry: 'Sports',
        products: [
          'Integrated Events Calendar',
          'Competition Management Module',
          'Referee Management Module',
          'Report Builder',
          'Competition Module Administration Service',
        ],
        platform: 'Enterprise web applications (including responsive web applications)',
        role: 'UX/UI Design',
      },
    ],
  },
  {
    name: 'Skolkovo Innovation Center',
    logo: skolkovo,
    projects: [
      {
        industry: 'Innovation & Technology',
        products: ['Sk RnD Market'],
        platform: 'Responsive enterprise web application',
        role: 'UX/UI Design',
      },
    ],
  },
];
