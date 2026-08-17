import aboutPortrait from '@/assets/portrait/about-portrait.jpeg';
import heroPortrait from '@/assets/portrait/hero-portrait.jpg';
import type { IProfile } from '@/types';

export const profile: IProfile = {
  firstName: 'Hanna',
  lastName: 'Shyliaieva',
  fullName: 'Hanna Shyliaieva',
  title: 'UX/UI Designer',
  highlights: [
    { strong: '10+ years', rest: 'in design' },
    { strong: 'Web & mobile', rest: 'product design' },
    { strong: 'Team collaboration', rest: 'and small-team leadership' },
    { strong: 'Lead designer', rest: 'experience on product projects' },
  ],
  contacts: [
    { label: 'Telegram', href: 'https://t.me/Ganna_designer', kind: 'telegram' },
    { label: 'Email', href: 'mailto:gannashilyaevacassandra@gmail.com', kind: 'email' },
    {
      label: 'CV',
      href: 'https://drive.google.com/file/d/1DjEG-0KxBrTtjdOKNgSu_C8PPdHMTnGS/view?usp=sharing',
      kind: 'resume',
    },
  ],
  heroPortrait,
  heroPortraitAlt: 'Hanna Shyliaieva, portrait',
  portrait: aboutPortrait,
  portraitAlt: 'Portrait of Hanna Shyliaieva',
};
