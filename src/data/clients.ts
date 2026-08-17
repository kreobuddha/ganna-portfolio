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
// `description` is what the opened panel says about the work. None of them are
// written yet — the published Framer draft carries the logos but no copy — so
// until Hanna supplies them the panel shows the name and the link alone.
//
// `href` is missing on three: Leroy Merlin's Russian site went away with the
// Lemana PRO rebrand, and Resola and Service Telecom have no confirmed address.
export const clients: IClient[] = [
  { name: 'GMCS', logo: gmcs, href: 'https://www.gmcs.ru' },
  { name: 'Resola', logo: resola },
  { name: 'SprintSoft', logo: sprintsoft, href: 'https://sprintsoft.ru' },
  { name: 'Leroy Merlin', logo: leroyMerlin },
  { name: 'KFC', logo: kfc, href: 'https://www.kfc.ru' },
  { name: 'SOCAR', logo: socar, href: 'https://www.socar.az' },
  { name: 'Decathlon', logo: decathlon, href: 'https://www.decathlon.com' },
  { name: 'Transneft', logo: transneft, href: 'https://www.transneft.ru' },
  { name: 'Prisma', logo: prisma, href: 'https://www.prisma.fi' },
  { name: 'Service Telecom', logo: serviceTelecom },
  { name: 'Russian Football Union', logo: rfu, href: 'https://www.rfs.ru' },
  { name: 'Skolkovo', logo: skolkovo, href: 'https://sk.ru' },
];
