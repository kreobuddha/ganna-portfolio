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

// Hanna's own order, kept from the logo wall she built on Framer.
//
// `href` is missing on three of them: Leroy Merlin's Russian site is gone
// after the Lemana PRO rebrand, and Resola and Service Telecom have no address
// confirmed yet. Those three render as plain tiles until one is filled in.
export const clients: IClient[] = [
  { name: 'GMCS', logo: gmcs, href: 'https://www.gmcs.ru', ink: 'dark' },
  { name: 'Resola', logo: resola, ink: 'light' },
  { name: 'SprintSoft', logo: sprintsoft, href: 'https://sprintsoft.ru', ink: 'light' },
  { name: 'Leroy Merlin', logo: leroyMerlin, ink: 'dark' },
  { name: 'KFC', logo: kfc, href: 'https://www.kfc.ru', ink: 'dark' },
  { name: 'SOCAR', logo: socar, href: 'https://www.socar.az', ink: 'dark' },
  { name: 'Decathlon', logo: decathlon, href: 'https://www.decathlon.com', ink: 'dark' },
  { name: 'Transneft', logo: transneft, href: 'https://www.transneft.ru', ink: 'dark' },
  { name: 'Prisma', logo: prisma, href: 'https://www.prisma.fi', ink: 'dark' },
  { name: 'Service Telecom', logo: serviceTelecom, ink: 'dark' },
  { name: 'Russian Football Union', logo: rfu, href: 'https://www.rfs.ru', ink: 'dark' },
  { name: 'Skolkovo', logo: skolkovo, href: 'https://sk.ru', ink: 'light' },
];
