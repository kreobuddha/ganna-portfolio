import aboutPortrait from '@/assets/portrait/about-portrait.jpg';
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
    // Served from this site rather than from Drive, so the file the button
    // hands over is the one built from cv/cv.html and nothing else.
    { label: 'CV', href: 'documents/Hanna_Shyliaieva_Senior_UX_UI_Designer.pdf', kind: 'resume' },
  ],
  heroPortrait,
  heroPortraitAlt: 'Hanna Shyliaieva, portrait',
  portrait: aboutPortrait,
  portraitAlt: 'Portrait of Hanna Shyliaieva',
};
