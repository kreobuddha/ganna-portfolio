import loveberryLogo from '@/assets/logos/loveberry.webp';
import resolaLogo from '@/assets/logos/resola-mark.webp';
import uandcoLogo from '@/assets/logos/uandco.webp';
import viewProjectLogo from '@/assets/logos/view-project.svg';
import type { IProject } from '@/types';

// Screens come from Hanna's Figma boards, sliced one screen per file. `name`
// is the path inside src/assets/projects; `width`/`height` are the file's own
// pixels, so the layout reserves the right box before anything loads.
export const projects: IProject[] = [
  {
    slug: 'resola',
    title: 'RESOLA',
    role: 'Lead product & UX/UI Designer',
    period: '2021—Now',
    tags: ['B2C', 'Healthcare'],
    link: { label: 'Visit resola.care', href: 'https://www.resola.care/index.html' },
    summary: {
      strong: 'Resola',
      rest: 'is a digital rehabilitation platform designed for physical and occupational therapy. The ecosystem combines a patient-facing mobile app, a web workspace for therapists, and a marketing website. The platform enables clinicians to create personalized rehabilitation programs, remotely monitor patient progress through motion tracking and biomechanical data, and adjust treatment plans based on real-time insights, helping patients recover more effectively at home.',
    },
    intro:
      'A digital rehabilitation ecosystem for physical and occupational therapy: a patient mobile app, a therapist web workspace, and a marketing site — designed as one connected product.',
    problem:
      'Recovering from a stroke takes months of daily rehabilitation, and a hospital bed is the most expensive place to do it — for the clinic and for the patient alike.',
    solution:
      'Patients rehabilitate at home while sensors track every session. The readings land in their therapist’s workspace, so one clinician can watch a whole caseload remotely and adjust each program from what the data actually shows.',
    process: [
      {
        title: 'Understanding the problem',
        body: 'Talked to clinicians and patients, and went through the rehabilitation products already on the market to find what none of them covered.',
      },
      {
        title: 'MVP prototype',
        body: 'Prototyped the MVP as a patient mobile app — enough of a working product to show the idea end to end rather than describe it.',
      },
      {
        title: 'Funding and the first clinic',
        body: 'The prototype was what raised the funding and brought the first clinic on board as a partner, which turned the concept into a product with a real customer.',
      },
      {
        title: 'From MVP to product',
        body: 'Built the product the clinic needed: brand identity, corporate site, the therapist’s workspace, the mobile app, 3D models and branded print — designing most of it, directing the designers who produced the rest.',
      },
    ],
    outcome: [
      'One ecosystem in use: patient app, therapist workspace and marketing site.',
      'A design system that holds mobile and web together as a single product.',
      'Lead designer on the product since 2021, working alongside the developers.',
    ],
    cover: {
      name: 'resola/hero-workspace-and-app',
      alt: 'The Resola therapist workspace with the patient app beside it',
      width: 1532,
      height: 740,
    },
    sections: [
      {
        id: 'mobile-app',
        title: 'Mobile Application',
        blurb:
          'What a patient sees at home: the daily plan, a guided session with live motion tracking, and the therapist’s reply. Every screen drawn for phone and for tablet in both orientations.',
        cover: {
          name: 'resola/cover-mobile-app',
          alt: 'Five phones showing the app: the daily plan, a guided exercise, live tracking, the score and the therapist’s note',
          width: 1152,
          height: 603,
        },
        groups: [
          {
            id: 'promise',
            title: 'What the app promises',
            body: 'The five ideas the product leads with, in the patient’s language rather than the clinic’s.',
            layout: 'feature',
            images: [
              {
                name: 'resola/story-1-assistant',
                alt: 'The rehabilitation program screen with daily goals and the list of trainings',
                width: 1062,
                height: 2233,
                caption: 'Your Virtual Physical Therapy Assistant',
                body: 'Personalized rehab plans, precise motion tracking, and expert therapist support.',
              },
              {
                name: 'resola/story-2-guidance',
                alt: 'An instructional video playing during a stretch, with the set counter beneath it',
                width: 1062,
                height: 2233,
                caption: 'Step-by-Step Guidance',
                body: 'Clear instructions help you perform exercises correctly and with confidence.',
              },
              {
                name: 'resola/story-3-tracking',
                alt: 'The tracked skeleton mirroring the patient, with the target angle below',
                width: 1062,
                height: 2233,
                caption: 'High-Accuracy Motion Tracking',
                body: 'Exercise in any position with the appropriate level of difficulty tailored to your needs.',
              },
              {
                name: 'resola/story-4-ai',
                alt: 'A shoulder abduction result: the goal reached, and the rep scored good',
                width: 1062,
                height: 2233,
                caption: 'Faster Progress With AI',
                body: 'AI-powered recommendations adapt exercises to match your abilities, optimizing rehabilitation process.',
              },
              {
                name: 'resola/story-5-feedback',
                alt: 'A written note from the therapist about elbow stretches',
                width: 1062,
                height: 2233,
                caption: 'Regular Feedback from Therapists',
                body: 'Timely guidance, significantly enhancing rehabilitation effectiveness.',
              },
            ],
          },

          {
            id: 'daily-plan',
            title: 'To Do',
            body: 'The screen a patient opens first: how much of today is done, and what is left.',
            layout: 'grid',
            images: [
              {
                name: 'resola/app-todo-mobile',
                alt: 'Rehabilitation program with daily goals and the list of trainings, on a phone',
                width: 360,
                height: 896,
                caption: 'To do mobile',
              },
              {
                name: 'resola/app-todo-tablet-v',
                alt: 'Rehabilitation program on a tablet held upright',
                width: 768,
                height: 1024,
                caption: 'To do tablet — vertical',
              },
              {
                name: 'resola/app-todo-tablet-h',
                alt: 'Rehabilitation program on a tablet held sideways',
                width: 1024,
                height: 1005,
                caption: 'To do tablet — horizontal',
              },
              {
                name: 'resola/app-todo-all-trainings',
                alt: 'The full list of trainings — ankle, elbow, hip, knee, shoulder, wrist, forearm',
                width: 472,
                height: 912,
                caption: 'All trainings',
              },
            ],
          },
          {
            id: 'training',
            title: 'Training Screen',
            body: 'Equipment, the exercises in this training, and an explanation of what a strengthening exercise is for — reachable without leaving the screen.',
            layout: 'grid',
            images: [
              {
                name: 'resola/app-training-mobile',
                alt: 'Elbow training with its equipment and exercise list, on a phone',
                width: 360,
                height: 1139,
                caption: 'Start mobile',
              },
              {
                name: 'resola/app-training-tablet-v',
                alt: 'Elbow training on a tablet held upright',
                width: 768,
                height: 1024,
                caption: 'Start tablet — vertical',
              },
              {
                name: 'resola/app-training-tablet-h',
                alt: 'Elbow training on a tablet held sideways',
                width: 1024,
                height: 768,
                caption: 'Start tablet — horizontal',
              },
              {
                name: 'resola/app-training-modal-mobile',
                alt: 'Explanation of strengthening exercises over the training screen, on a phone',
                width: 360,
                height: 800,
                caption: 'Strengthening Exercises mobile',
              },
              {
                name: 'resola/app-training-modal-tablet-v',
                alt: 'Explanation of strengthening exercises on a tablet held upright',
                width: 768,
                height: 1024,
                caption: 'Strengthening Exercises tablet — vertical',
              },
              {
                name: 'resola/app-training-modal-tablet-h',
                alt: 'Explanation of strengthening exercises on a tablet held sideways',
                width: 1024,
                height: 768,
                caption: 'Strengthening Exercises tablet — horizontal',
              },
            ],
          },
          {
            id: 'session',
            title: 'Exercise Screen',
            body: 'A countdown, then the tracked skeleton, the target angle and the rep count — the moment the whole product exists for.',
            layout: 'grid',
            images: [
              {
                name: 'resola/app-exercise-mobile',
                alt: 'Get ready countdown before an exercise, on a phone',
                width: 360,
                height: 800,
                caption: 'Get ready mobile',
              },
              {
                name: 'resola/app-exercise-tablet-v',
                alt: 'Get ready countdown on a tablet held upright',
                width: 768,
                height: 1024,
                caption: 'Get ready tablet — vertical',
              },
              {
                name: 'resola/app-exercise-tablet-h',
                alt: 'Get ready countdown on a tablet held sideways',
                width: 1024,
                height: 768,
                caption: 'Get ready tablet — horizontal',
              },
              {
                name: 'resola/app-exercise-live-mobile',
                alt: 'Exercise in progress with live motion tracking and the target angle, on a phone',
                width: 360,
                height: 800,
                caption: 'In progress mobile',
              },
              {
                name: 'resola/app-exercise-live-tablet-v',
                alt: 'Exercise in progress on a tablet held upright',
                width: 768,
                height: 1024,
                caption: 'In progress tablet — vertical',
              },
              {
                name: 'resola/app-exercise-live-tablet-h',
                alt: 'Exercise in progress on a tablet held sideways',
                width: 1024,
                height: 768,
                caption: 'In progress tablet — horizontal',
              },
            ],
          },
          {
            id: 'log-in',
            title: 'Log In',
            body: 'States are part of the design, not an afterthought — the failed attempt was drawn at every size alongside the successful one.',
            layout: 'grid',
            images: [
              {
                name: 'resola/app-login-mobile',
                alt: 'Log in screen on a phone',
                width: 360,
                height: 800,
                caption: 'Default mobile',
              },
              {
                name: 'resola/app-login-tablet-v',
                alt: 'Log in screen on a tablet held upright',
                width: 768,
                height: 1024,
                caption: 'Default tablet — vertical',
              },
              {
                name: 'resola/app-login-tablet-h',
                alt: 'Log in screen on a tablet held sideways',
                width: 1024,
                height: 768,
                caption: 'Default tablet — horizontal',
              },
              {
                name: 'resola/app-login-error-mobile',
                alt: 'Log in screen showing an invalid email or password, on a phone',
                width: 360,
                height: 800,
                caption: 'Error mobile',
              },
              {
                name: 'resola/app-login-error-tablet-v',
                alt: 'Log in error on a tablet held upright',
                width: 768,
                height: 1024,
                caption: 'Error tablet — vertical',
              },
              {
                name: 'resola/app-login-error-tablet-h',
                alt: 'Log in error on a tablet held sideways',
                width: 1024,
                height: 768,
                caption: 'Error tablet — horizontal',
              },
            ],
          },
        ],
      },
      {
        id: 'workspace',
        title: 'Therapist’s Workspace',
        blurb:
          'The clinical side: a dense data interface where a therapist triages a caseload, reads biomechanical results and adjusts a program — with the same tasks reachable on a phone.',
        cover: {
          name: 'resola/cover-workspace',
          alt: 'The therapist’s workspace on a laptop with the same to-do list on a phone beside it',
          width: 1152,
          height: 603,
        },
        groups: [
          {
            id: 'working-surface',
            title: 'The working surface',
            body: 'Where a therapist actually spends the appointment: the exercise programme they assign, and the profile they read progress from between sessions.',
            layout: 'grid',
            images: [
              {
                name: 'resola/workspace-exercise-details',
                alt: 'The exercise programme with video, biomechanics and feedback',
                width: 2608,
                height: 2220,
                caption: 'Exercise program',
              },
              {
                name: 'resola/workspace-patient-profile',
                alt: 'A patient profile showing continuous monitoring of one exercise',
                width: 2608,
                height: 2208,
                caption: 'Patient’s Profile: CONTINUOUS MONITORING - Exercise',
              },
            ],
          },
          {
            id: 'to-do',
            title: 'To do',
            body: 'The queue a therapist opens on: who needs attention today, sorted and filtered — the same list on a phone between appointments.',
            layout: 'grid',
            images: [
              {
                name: 'resola/workspace-todo-web',
                alt: 'The to-do list on the web, with triage tags against each patient',
                width: 2560,
                height: 2172,
                caption: 'To do (web)',
              },
              {
                name: 'resola/workspace-todo-mobile',
                alt: 'The to-do list on a phone',
                width: 732,
                height: 1452,
                caption: 'To do (mobile)',
              },
              {
                name: 'resola/workspace-todo-filters',
                alt: 'The filter sheet over the to-do list on a phone',
                width: 732,
                height: 1452,
                caption: 'To do filters (mobile)',
              },
            ],
          },
          {
            id: 'patients',
            title: 'Patients',
            body: 'The full caseload as a working table: diagnosis, assigned therapist and progress, narrowed down by the same filters on either device.',
            layout: 'grid',
            images: [
              {
                name: 'resola/workspace-patients-web',
                alt: 'The patient list on the web, seen by an administrator',
                width: 2560,
                height: 1440,
                caption: 'Patients (web)',
              },
              {
                name: 'resola/workspace-patients-mobile',
                alt: 'The patient list on a phone',
                width: 732,
                height: 1452,
                caption: 'Patients (mobile)',
              },
              {
                name: 'resola/workspace-patients-filters',
                alt: 'The filter sheet over the patient list on a phone',
                width: 732,
                height: 1452,
                caption: 'Patients filters (mobile)',
              },
            ],
          },
          {
            id: 'new-patient',
            title: 'New patient creation',
            body: 'The first step of intake, drawn for both devices so a therapist can start a record from wherever they are.',
            layout: 'grid',
            images: [
              {
                name: 'resola/workspace-new-patient-web',
                alt: 'The first step of creating a patient record, on the web',
                width: 2560,
                height: 1440,
                caption: 'New patient creation, 1 step (web)',
              },
              {
                name: 'resola/workspace-new-patient-mobile',
                alt: 'The first step of creating a patient record, on a phone',
                width: 732,
                height: 1452,
                caption: 'New patient creation, 1 step (mobile)',
              },
            ],
          },
          {
            id: 'activation',
            title: 'User activation',
            body: 'The empty state a new account lands on — the screen that has to explain itself before there is any data to show.',
            layout: 'grid',
            images: [
              {
                name: 'resola/workspace-activation-web',
                alt: 'The empty activation screen on the web',
                width: 2560,
                height: 1440,
                caption: 'User activation, empty (web)',
              },
              {
                name: 'resola/workspace-activation-mobile',
                alt: 'The empty activation screen on a phone',
                width: 732,
                height: 1452,
                caption: 'User activation, empty (mobile)',
              },
            ],
          },
        ],
      },
      {
        id: 'design-system',
        title: 'Design System',
        blurb:
          'What keeps two applications looking like one product: a type scale, a palette, and component libraries for mobile and for web, handed to engineering as the source of truth.',
        cover: {
          name: 'resola/ds-colors',
          alt: 'The Resola colour palette, named and grouped',
          width: 1532,
          height: 1604,
        },
        groups: [
          {
            id: 'foundations',
            title: 'Foundations',
            body: 'The decisions everything else inherits — type sizes specified per breakpoint, and a palette with every colour named.',
            layout: 'grid',
            images: [
              {
                name: 'resola/ds-typography',
                alt: 'Type scale tables for mobile and tablet, with sizes, weights and line heights',
                width: 2218,
                height: 1212,
                caption: 'Typography',
              },
              {
                name: 'resola/ds-colors',
                alt: 'Colour palette grouped into brand, neutral and semantic families',
                width: 1532,
                height: 1604,
                caption: 'Colors',
              },
            ],
          },
          {
            id: 'mobile-kit',
            title: 'Mobile UI kit',
            layout: 'grid',
            images: [
              {
                name: 'resola/ds-mobile-navigation',
                alt: 'Mobile navigation components: headers and tab bars',
                width: 720,
                height: 1347,
                caption: 'Navigation',
              },
              {
                name: 'resola/ds-mobile-inputs',
                alt: 'Mobile input components in every state, including validation',
                width: 940,
                height: 2952,
                caption: 'Inputs',
              },
              {
                name: 'resola/ds-mobile-tabs',
                alt: 'Mobile tab components in their selected and unselected states',
                width: 688,
                height: 1010,
                caption: 'Tabs',
              },
              {
                name: 'resola/ds-mobile-tags',
                alt: 'Mobile tag components',
                width: 626,
                height: 1009,
                caption: 'Tags',
              },
              {
                name: 'resola/ds-mobile-buttons',
                alt: 'Mobile buttons across sizes, states and emphasis levels',
                width: 688,
                height: 2141,
                caption: 'Button',
              },
              {
                name: 'resola/ds-mobile-elements',
                alt: 'Assorted mobile elements: timers, progress meters, scores and alerts',
                width: 1007,
                height: 2703,
                caption: 'Elements',
              },
              {
                name: 'resola/ds-mobile-components',
                alt: 'Composed mobile components: exercise cards, notifications, settings rows and help entries',
                width: 1056,
                height: 4362,
                caption: 'Components',
              },
              {
                name: 'resola/ds-mobile-icons',
                alt: 'The exercise and interface icon library',
                width: 2712,
                height: 1701,
                caption: 'Icons',
              },
            ],
          },
          {
            id: 'web-styles',
            title: 'Web styles',
            layout: 'grid',
            images: [
              {
                name: 'resola/ds-web-inputs',
                alt: 'Web input components in every state',
                width: 356,
                height: 1358,
                caption: 'Inputs',
              },
              {
                name: 'resola/ds-web-buttons',
                alt: 'Web buttons across emphasis levels and states',
                width: 1060,
                height: 294,
                caption: 'Buttons',
              },
              {
                name: 'resola/ds-web-tags',
                alt: 'The triage tag set, each tag named and coloured by meaning',
                width: 1600,
                height: 1304,
                caption: 'Triage tags',
              },
              {
                name: 'resola/ds-web-icons',
                alt: 'The web interface icon set',
                width: 591,
                height: 1047,
                caption: 'Icons',
              },
              {
                name: 'resola/ds-web-table',
                alt: 'Table components: headers, rows and tagged cells',
                width: 711,
                height: 1344,
                caption: 'Table',
              },
              {
                name: 'resola/ds-web-header',
                alt: 'The workspace header with navigation and account menu',
                width: 1565,
                height: 902,
                caption: 'Header',
              },
              {
                name: 'resola/ds-web-card-todo',
                alt: 'A to-do card with its tag row',
                width: 518,
                height: 431,
                caption: 'To-do card',
              },
              {
                name: 'resola/ds-web-card-patient',
                alt: 'A patient card showing the assigned therapist',
                width: 463,
                height: 431,
                caption: 'Patient card',
              },
            ],
          },
        ],
      },
      {
        id: 'website',
        title: 'Product Website',
        blurb:
          'The public face, written for three different readers: a clinic deciding whether to buy, a therapist deciding whether to use it, and a patient about to be handed it.',
        cover: {
          name: 'resola/cover-website',
          alt: 'The Resola marketing site on a laptop and on a phone',
          width: 1152,
          height: 603,
        },
        groups: [
          {
            id: 'site-main',
            title: 'Main page',
            body: 'Aimed at the clinic: the offer first, then the evidence it produces.',
            layout: 'stack',
            images: [
              {
                name: 'resola/site-main-desktop',
                alt: 'Marketing site home page on a desktop, headlined “Elevate your clinic with virtual MSK rehabilitation care”',
                width: 1464,
                height: 1104,
                caption: 'Desktop',
              },
              {
                name: 'resola/site-main-mobile',
                alt: 'Marketing site home page on a phone',
                width: 384,
                height: 804,
                caption: 'Phone',
              },
            ],
          },
          {
            id: 'site-therapists',
            title: 'For therapists',
            body: 'Aimed at the clinician: control over recovery, and the data that backs a decision.',
            layout: 'stack',
            images: [
              {
                name: 'resola/site-therapists-desktop',
                alt: 'The “For therapists” page on a desktop',
                width: 1464,
                height: 1104,
                caption: 'Desktop',
              },
              {
                name: 'resola/site-therapists-mobile',
                alt: 'The “For therapists” page on a phone',
                width: 384,
                height: 804,
                caption: 'Phone',
              },
            ],
          },
          {
            id: 'site-patients',
            title: 'For patients',
            body: 'Aimed at the person who will actually exercise: what the app does, in four plain lines.',
            layout: 'stack',
            images: [
              {
                name: 'resola/site-patients-desktop',
                alt: 'The “For patients” page on a desktop',
                width: 1440,
                height: 880,
                caption: 'Desktop',
              },
              {
                name: 'resola/site-patients-mobile',
                alt: 'The “For patients” page on a phone',
                width: 360,
                height: 780,
                caption: 'Phone',
              },
            ],
          },
        ],
      },
      {
        id: 'materials',
        title: 'Additional Materials',
        blurb:
          'The parts of the product that are not screens: what ships in the box, and the illustration that explains a movement faster than a paragraph can.',
        cover: {
          name: 'resola/cover-materials',
          alt: 'The printed quick start guide beside the illustrations of sensor placement',
          width: 1152,
          height: 603,
        },
        groups: [
          {
            id: 'quick-start',
            title: 'Quick start guide',
            body: 'The printed sheet in the box: unpack, charge, install, sign in, begin.',
            layout: 'grid',
            images: [
              {
                name: 'resola/extra-quick-start-1',
                alt: 'Quick start guide, first page — unpacking and charging the sensors',
                width: 420,
                height: 595,
                caption: 'Page one',
              },
              {
                name: 'resola/extra-quick-start-2',
                alt: 'Quick start guide, second page — signing in and starting the first session',
                width: 420,
                height: 595,
                caption: 'Page two',
              },
            ],
          },
          {
            id: 'sensor-placement',
            title: 'Sensor placement',
            body: 'Where each sensor goes on the body, drawn once per joint so a patient can check themselves without reading a paragraph.',
            layout: 'grid',
            images: [
              {
                name: 'resola/extra-sensor-ankle-1',
                alt: 'Where the sensors go for ankle exercises',
                width: 300,
                height: 300,
                caption: 'Ankle 1',
              },
              {
                name: 'resola/extra-sensor-ankle-2',
                alt: 'Where the sensors go for ankle exercises',
                width: 300,
                height: 300,
                caption: 'Ankle 2',
              },
              {
                name: 'resola/extra-sensor-elbow',
                alt: 'Where the sensors go for elbow exercises',
                width: 300,
                height: 300,
                caption: 'Elbow 1',
              },
              {
                name: 'resola/extra-sensor-hip',
                alt: 'Where the sensors go for hip exercises',
                width: 300,
                height: 300,
                caption: 'Hip 2',
              },
              {
                name: 'resola/extra-sensor-knee',
                alt: 'Where the sensors go for knee exercises',
                width: 300,
                height: 300,
                caption: 'Knee 1',
              },
              {
                name: 'resola/extra-sensor-neck',
                alt: 'Where the sensors go for neck exercises',
                width: 300,
                height: 300,
                caption: 'Neck 1',
              },
              {
                name: 'resola/extra-sensor-wrist',
                alt: 'Where the sensors go for wrist exercises',
                width: 300,
                height: 300,
                caption: 'Wrist 2',
              },
            ],
          },
          {
            id: 'illustration',
            title: 'Exercise illustration',
            body: 'The direction a movement should travel, used throughout the app where a still frame would not read.',
            layout: 'grid',
            images: [
              {
                name: 'resola/extra-exercise-1',
                alt: 'The direction a joint travels during one of the exercises',
                width: 300,
                height: 300,
              },
              {
                name: 'resola/extra-exercise-2',
                alt: 'The direction a joint travels during one of the exercises',
                width: 300,
                height: 300,
              },
              {
                name: 'resola/extra-exercise-3',
                alt: 'The direction a joint travels during one of the exercises',
                width: 300,
                height: 300,
              },
              {
                name: 'resola/extra-exercise-4',
                alt: 'The direction a joint travels during one of the exercises',
                width: 300,
                height: 300,
              },
              {
                name: 'resola/extra-exercise-5',
                alt: 'The direction a joint travels during one of the exercises',
                width: 300,
                height: 300,
              },
              {
                name: 'resola/extra-exercise-6',
                alt: 'The direction a joint travels during one of the exercises',
                width: 300,
                height: 300,
              },
              {
                name: 'resola/extra-exercise-7',
                alt: 'The direction a joint travels during one of the exercises',
                width: 300,
                height: 300,
              },
            ],
          },
        ],
      },
    ],
    groups: [],
    logo: resolaLogo,
  },
  {
    slug: 'uandco',
    title: 'U&CO',
    role: 'Product Creator & UX/UI Designer',
    period: 'Startup concept',
    tags: ['Startup', 'Music Services Marketplace'],
    summary: {
      strong: 'U&CO',
      rest: 'is a startup I built from the idea outward: a marketplace where musicians find the people missing from a record — mixing, mastering, session players, cover art — and where the platform vouches for them. My work here was the business logic and the architecture of the process, then the prototype that made it concrete.',
    },
    intro:
      'A startup concept for a music services marketplace — the business model, the process architecture and the prototype, made end to end.',
    problem:
      'A track is rarely finished by one person. Finding the missing collaborator — a mixing engineer, a session player, a cover artist — runs on private recommendations, and neither side can tell in advance whether the other is any good or will deliver at all.',
    solution:
      'A marketplace that does the vouching. Every professional is vetted before they can take work, a curator sits between client and contractor to hold the brief and the deadline, and the money is released only once the client has signed off the final files.',
    process: [
      {
        title: 'Idea',
        body: 'Defined the market gap and the model: who the two sides are, what a service listing contains, and where the platform takes responsibility rather than leaving two strangers to trust each other.',
      },
      {
        title: 'Process architecture',
        body: 'Wrote the whole marketplace out as a flow before designing anything — five roles and every path an order can take between them, including the ones that fail: a contractor who goes quiet, a client who disappears, a dispute that has to be settled.',
      },
      {
        title: 'Mockups',
        body: 'Turned the architecture into a working prototype: the public site that has to sell the idea, and the signed-in side where a brief becomes a priced order with a conversation attached.',
      },
      {
        title: 'On hold',
        body: 'The concept is frozen while funding is found. Everything up to that point — model, architecture, prototype — is finished and is what is shown here.',
      },
    ],
    outcome: [
      'A marketplace modelled end to end before a single screen was drawn.',
      'An order flow that holds up where marketplaces usually leak trust: vetting, escrow and disputes.',
      'A prototype covering both the public site and the working side of the platform.',
    ],
    cover: {
      name: 'uandco/hero-site',
      alt: 'Two U&CO screens: the service catalogue and the introduction page',
      width: 2400,
      height: 1075,
    },
    sections: [
      {
        id: 'architecture',
        title: 'Idea and architecture',
        blurb:
          'The marketplace as a system: five roles, every path an order can take between them, and the written flow the diagram was drawn from.',
        cover: {
          name: 'uandco/cover-architecture',
          alt: 'A section of the flow diagram: contract signed, payment taken, work begins',
          width: 1600,
          height: 838,
        },
        groups: [
          {
            id: 'workflow',
            title: 'The workflow behind the product',
            body: 'Before a single screen, the whole marketplace was mapped as one diagram: five roles — site guest, signed-in client, curator, support and contractor, each with its own colour — and every path an order can take between them, including the ones that fail. The diagram is in Russian, the language the concept was written in.',
            layout: 'figure',
            images: [
              {
                name: 'uandco/workflow-diagram',
                alt: 'The full flow diagram of the marketplace, colour-coded by role',
                width: 5152,
                height: 7275,
                caption: 'Open it full screen to follow a path end to end',
              },
            ],
          },
        ],
        story: {
          title: 'The order flow, written out',
          intro:
            'The document the diagram came from: one order for a mix, followed from the first enquiry to the money changing hands — and then followed again down every branch where it goes wrong. Written in Russian originally; translated here.',
          steps: [
            {
              text: 'The client comes to the site and fills in a preliminary request.',
              sub: [
                'Language they want to work in',
                'Type of work',
                'Price bracket',
                'The brief itself',
                'Deadline',
                'References — links or files, with comments',
                'A demo upload',
                'Reading and accepting the platform’s terms',
              ],
            },
            { text: 'The client sends the request to the curators.' },
            {
              text: 'It reaches the curators of the chosen price bracket and language group. Curators sign a non-disclosure and no-subcontracting agreement when they register.',
            },
            { text: 'The client is told the request has been accepted into work.' },
            { text: 'A curator willing to take it claims it — first to respond.' },
            {
              text: 'The curator posts the job to the contractors’ group, with the deadline and the brief.',
            },
            { text: 'An available contractor responds — again, first to respond.' },
            {
              text: 'The curator shares the full brief and asks whether they will take it. Contractors sign the same non-disclosure and no-subcontracting agreement at registration.',
            },
            { text: 'If the contractor declines, the job goes back to the contractors’ chat.' },
            {
              text: 'If the curator finds nobody, the job returns to the general curators’ chat and another curator can take it.',
            },
            {
              text: 'If no curator will take it at all, the curators are polled for why. If the reasons can be fixed, the client is contacted to discuss them; if they cannot, the client is declined with an explanation.',
            },
            {
              text: 'If the contractor needs the brief extended, the curator asks the client to fill in more of the form.',
            },
            {
              text: 'Once a contractor takes the job, the client is sent a notification with links to sign the contract and to pay.',
            },
            {
              text: 'Once the client has signed and paid, the contractor is sent their contract to sign.',
            },
            {
              text: 'If the client does not sign and pay, the order stays active for a set window — say two days, stated in the email — then drops out of active orders into the client’s drafts, where it can be started again.',
            },
            { text: 'The curator is notified when both parties have signed.' },
            {
              text: 'The project chats are created.',
              sub: [
                'On the client’s side: client and curator',
                'On the contractor’s side: contractor and curator',
                'On the curator’s side: two chats, one with each',
              ],
            },
            {
              text: 'Everything about the project is discussed in chat; additions to the brief are uploaded to the project as files.',
            },
            {
              text: 'A project is split into three blocks: brief, chat, and files from the contractor.',
            },
            {
              text: 'If it goes well and lands on time, the curator agrees the final version with the client in chat beforehand.',
            },
            { text: 'The contractor uploads the final version.' },
            {
              text: 'The client is asked to formally confirm they accept it, with the final version attached.',
            },
            { text: 'The client confirms.' },
            { text: 'The final files become available to download.' },
            { text: 'Contractor and curator are notified that the client has signed off.' },
            { text: 'The money goes to the curator and the contractor.' },
            {
              text: 'The project closes, with a window of three days — possibly a week — to open a dispute.',
            },
            { text: 'The project closes for good.' },
            {
              text: 'If it goes badly and the deadline slips, the curator has to judge whose fault it is.',
            },
            {
              text: 'If the curator is the problem, client or contractor can go to support, which can decline the complaint with a reason, fine the curator or lower their rating, or take them off the project — keeping the contractor, or replacing the whole team.',
            },
            {
              text: 'If the client is the problem, the curator contacts them.',
              sub: [
                'If their demands have grown past the original brief, an increase in the fee is discussed',
                'If they answer late and push the deadline, they are warned the price may rise — or offered a freeze',
                'If they vanish, the project freezes and only restarts on a fresh request. Not available to clients on the blacklist',
                'If they behave badly, they are warned the order may be closed with the payment refunded only in part, or not at all',
              ],
            },
            {
              text: 'If the contractor is the problem — silence, work that ignores the brief or falls short on quality, or bad behaviour — they are warned the project may be handed to someone else and the fee paid only in part, or not at all. It counts against their rating.',
            },
            {
              text: 'To open a dispute, the client fills in a form: the grounds, a description, and a preferred remedy from a list. Support takes it up with the curator and the contractor, then answers.',
              sub: [
                'Partial refund',
                'Full refund',
                'More work on the project, free',
                'More work on special terms',
                'More work on standard terms',
              ],
            },
          ],
          notes: [
            'Pricing is derived from the average wage in the country of the language spoken, and the average price of that service there.',
            'A contractor can flag an order they wanted but lost, so it comes back to them if it is returned.',
          ],
        },
      },
      {
        id: 'prototype',
        title: 'Prototype',
        blurb:
          'The architecture turned into screens: the public site that sells the idea, and the signed-in side where a brief becomes a priced order.',
        cover: {
          name: 'uandco/cover-prototype',
          alt: 'The U&CO home page listing the four services',
          width: 1440,
          height: 1024,
        },
        groups: [
          {
            id: 'public-site',
            title: 'The public site',
            body: 'What a musician sees before signing up: the services, who is behind the platform, and proof that the work is real.',
            layout: 'grid',
            images: [
              {
                name: 'uandco/site-services',
                alt: 'The home page, listing the four services',
                width: 1440,
                height: 1024,
                caption: 'Home page',
              },
              {
                name: 'uandco/site-about',
                alt: 'The “let’s get acquainted” page explaining how the platform works',
                width: 1440,
                height: 1024,
                caption: 'About us',
              },
              {
                name: 'uandco/site-team',
                alt: 'The team page, professionals grouped by speciality',
                width: 1440,
                height: 1024,
                caption: 'Our team',
              },
              {
                name: 'uandco/site-showcase',
                alt: '“Our pride” — released tracks with the work done on each',
                width: 1440,
                height: 1024,
                caption: 'Our work',
              },
            ],
          },
          {
            id: 'order-flow',
            title: 'Ordering and working together',
            body: 'The signed-in side, where a brief turns into a priced order and the conversation that carries it: a service page, the client’s projects by stage, the curator and support threads, and the order card itself.',
            layout: 'grid',
            images: [
              {
                name: 'uandco/app-service-mastering',
                alt: 'The mixing and mastering service page',
                width: 1440,
                height: 1175,
                caption: 'Mixing / mastering',
              },
              {
                name: 'uandco/app-service-arrangement',
                alt: 'The arrangement service page',
                width: 1440,
                height: 1295,
                caption: 'Arrangement',
              },
              {
                name: 'uandco/app-projects',
                alt: 'The client’s account: projects grouped by stage — awaiting reply, active, under review, disputed, drafts, frozen, finished',
                width: 1440,
                height: 2371,
                caption: 'User account',
              },
              {
                name: 'uandco/app-curator-chat',
                alt: 'One group of projects opened out, each with the curator and support messages waiting on it',
                width: 1440,
                height: 1534,
                caption: 'Projects awaiting a reply',
              },
              {
                name: 'uandco/app-order-card',
                alt: 'The order itself: services ordered, the chat, and the files delivered',
                width: 1440,
                height: 1024,
                caption: 'Project card',
              },
            ],
          },
        ],
      },
    ],
    groups: [],
    logo: uandcoLogo,
  },
  {
    slug: 'view-project',
    title: 'VIEW Project',
    role: 'Co-founder & Design Lead',
    period: '2025—Now',
    tags: ['Media', 'Events', 'Brand identity'],
    // The handle only — the ?igsh= on the shared link is a tracking token for
    // the session it was copied from, and it does not belong in the source.
    link: { label: 'Follow on Instagram', href: 'https://www.instagram.com/view_project_media' },
    summary: {
      strong: 'VIEW Project',
      rest: 'is an independent audio-visual media co-founded with Nikusha Ten and based in Tbilisi: club nights filmed and streamed, full sets published afterwards, and artists introduced properly. I run the design side of it — the identity, the landing page, everything published on Instagram, YouTube and SoundCloud, the print for the nights themselves — and direct the designers brought in around it.',
    },
    intro:
      'An independent audio-visual media co-founded in Tbilisi: nights that are filmed, streamed and published. I run the design — identity, site, social, print — and direct the designers working around it.',
    problem:
      'A club night lasts one evening and is gone. The people who were not in the room never see it, the artists who played have nothing to show for it, and a scene that produces a great deal ends up leaving almost no trace.',
    solution:
      'Every night is filmed and streamed, the full sets are published afterwards, and each artist is introduced with a card written about their work rather than a line-up listing. One visual system — red, black and a heavy display face — carries the whole thing across the site, the posters and every platform, so a poster, a video and a post all read as the same thing.',
    process: [
      {
        title: 'Founding it',
        body: 'Co-founded VIEW Project with Nikusha Ten and set out what it is: not a promoter, but a media — the night is the material, and what is published from it is the product.',
      },
      {
        title: 'Identity',
        body: 'Built the brand: the eclipse mark and the VIEW wordmark, a palette of one red on black, and a display face heavy enough to hold a poster on its own. Everything else is drawn from that set.',
      },
      {
        title: 'The channels',
        body: 'Designed how the media shows up wherever it is read — the Instagram grid and its highlight covers, YouTube thumbnails and set titles, SoundCloud, and the print for the nights: line-up posters and artist cards.',
      },
      {
        title: 'The site',
        body: 'Designed the landing page as the place the whole thing resolves: the next night with its running order, upcoming sessions, the full sets on YouTube, and a registration form — every night is capacity-limited, so the door list is the product, not a formality.',
      },
      {
        title: 'Directing the work',
        body: 'Curate the designers brought in for individual nights and the offline side — events and concerts — so what other people make still lands inside the same system.',
      },
    ],
    outcome: [
      'An independent media running as one visual system across site, print, Instagram, YouTube and SoundCloud.',
      'A season of nights filmed, streamed and published as full sets rather than lost the morning after.',
      'Artists introduced with written cards, which is what makes it a media instead of a poster feed.',
    ],
    cover: {
      name: 'view-project/hero-site',
      alt: 'The VIEW Project landing page: “A new perspective on events” over a red-lit crowd, with the next night’s running order beside it',
      width: 1944,
      height: 1104,
    },
    sections: [],
    groups: [
      {
        id: 'site',
        title: 'The landing page',
        body: 'One page carrying the whole media: the next night with its running order, the sessions coming up, the full sets already published, and the registration that gets a name on the door list. Registration is the point of the page — every night is capacity-limited, and the address goes out by Telegram 24 hours before.',
        layout: 'figure',
        images: [
          {
            name: 'view-project/site-full',
            alt: 'The full landing page: hero, upcoming events, YouTube sets, photo strip, registration form and footer',
            width: 1920,
            height: 4199,
            caption: 'Open it full screen to read the page end to end',
          },
        ],
      },
      {
        id: 'instagram',
        title: 'Instagram',
        body: 'Where most of the audience meets the media, so it is designed as one surface rather than as a run of separate posts: the profile with its highlight covers, and a grid where red blocks, portraits and session announcements alternate deliberately.',
        layout: 'grid',
        images: [
          {
            name: 'view-project/instagram-profile',
            alt: 'The VIEW Project Instagram profile: the eclipse avatar, the bio, and highlight covers for SoundCloud, YouTube and each season',
            width: 739,
            height: 1600,
            caption: 'Profile',
            body: 'The highlight covers carry the same mark as everything else — each season and each platform gets its own, so the row under the bio reads as a contents page.',
          },
          {
            name: 'view-project/instagram-grid',
            alt: 'The VIEW Project Instagram grid: red covers, session announcements and artist portraits',
            width: 739,
            height: 1600,
            caption: 'Feed',
            body: 'Laid out as a grid rather than post by post, so the account holds together when it is scrolled past at speed.',
          },
        ],
      },
      {
        id: 'channels',
        title: 'Video and print',
        body: 'The same system on the surfaces around the feed: a video thumbnail, a poster on a wall and a card introducing an artist.',
        layout: 'grid',
        images: [
          {
            name: 'view-project/youtube-thumbnail',
            alt: 'A YouTube thumbnail: a DJ under red light, with the artist and the visual artist named over it',
            width: 2400,
            height: 1350,
            caption: 'YouTube',
            body: 'Every set is credited to both the artist and the visual artist — the audio and the visual are the same product here.',
          },
          {
            name: 'view-project/poster-october',
            alt: 'A line-up poster: the date in heavy display type, the venue, the stream and afterparty times, and the artists by hour',
            width: 1277,
            height: 1600,
            caption: 'Line-up poster',
            body: 'Date, venue and running order on flat red — legible as a phone-sized square and as a print.',
          },
          {
            name: 'view-project/artist-card',
            alt: 'An artist card: a black-and-white portrait of Kasutamu over a short written introduction to their work',
            width: 1277,
            height: 1600,
            caption: 'Artist card',
            body: 'Each artist gets a portrait and a paragraph about what they actually do, which is what separates a media from a line-up listing.',
          },
        ],
      },
    ],
    logo: viewProjectLogo,
  },
  {
    slug: 'loveberry',
    title: 'LoveBerry',
    role: 'UX/UI Designer',
    period: '2021',
    tags: ['Freelance', 'B2C', 'Dating', 'iOS & Android'],
    summary: {
      strong: 'LoveBerry',
      rest: 'is a dating app built around what is happening tonight rather than around a deck of cards. People nearby appear on a map with what they are up to written next to them — a film, a party, an evening with nothing planned — so a conversation starts from a plan both sides already have. Designed end to end for iOS and Android as a freelance commission.',
    },
    intro:
      'A dating app where people are found by what they are doing tonight: a live map of events nearby, profiles, chat and gifts — designed end to end for iOS and Android as a freelance commission.',
    problem:
      'Dating apps sort people into a deck of faces and leave the rest to the two strangers who matched. Most conversations open with nothing to talk about, and the ones that go anywhere still have to invent a reason to meet.',
    solution:
      'Every user carries what they are doing right now, and it is that — not the photo — that fills the map and the list of people nearby. “Watching a film at the cinema” is an invitation you can answer, so the first message already has somewhere to go, and coins, VIP status and gifts give the app a way to earn from people who want to be seen sooner.',
    process: [
      {
        title: 'Framing the product',
        body: 'Took the client’s brief and settled what the app is actually organised around: not a swipe deck, but what people nearby are doing tonight — which decides the map, the tabs and everything on a profile.',
      },
      {
        title: 'Structure',
        body: 'Laid the app out as four tabs — Events, People, Talk, Profile — with the events shown either on the map or as a list, so the same set of people can be read by distance or by what they are up to.',
      },
      {
        title: 'Interface',
        body: 'Designed the screens for both platforms: profile, map, people, chat and the gift store, on one coral-and-white system where coral means an action and green means someone is live right now.',
      },
      {
        title: 'Monetisation',
        body: 'Worked the paid parts into the flow rather than bolting them on: coins, VIP status, a place in the list that can be raised, and gifts priced in three tiers.',
      },
    ],
    outcome: [
      'A dating app designed around live activity instead of a swipe deck.',
      'All six core screens drawn for iOS and Android as one visual system.',
      'Coins, VIP status and gifts built into the product rather than added over it.',
    ],
    cover: {
      name: 'loveberry/hero-phones',
      alt: 'Three LoveBerry screens: the map of people nearby, a profile and a chat',
      width: 2400,
      height: 1906,
    },
    sections: [],
    groups: [
      {
        id: 'screens',
        title: 'The app, screen by screen',
        body: 'Six screens carry the product: who you are, what is happening around you, who is up for it, and the two ways of saying so — a message and a gift.',
        layout: 'grid',
        images: [
          {
            name: 'loveberry/app-profile',
            alt: 'A profile: cover photo, coin balance, place in the list of users, general information and interests',
            width: 799,
            height: 1600,
            caption: 'Your personal profile',
            body: 'Coins, VIP status and a place in the list of users that can be raised — the paid parts of the app live on the profile itself.',
          },
          {
            name: 'loveberry/app-events-map',
            alt: 'A map with people nearby, one card open showing distance, address and what the person is doing',
            width: 799,
            height: 1600,
            caption: 'Find parties nearby',
            body: 'A card gives the distance, the walk in minutes and the plan in the person’s own words, with the chat one tap away.',
          },
          {
            name: 'loveberry/app-people',
            alt: 'The People tab: a grid of round portraits, the ones online ringed in green',
            width: 799,
            height: 1600,
            caption: 'Find new friends to hang out together',
            body: 'Portraits laid out as a loose grid rather than a table, with a green ring marking whoever is out right now.',
          },
          {
            name: 'loveberry/app-events-list',
            alt: 'The same events as a list: portrait, name, address, distance and the plan written underneath',
            width: 799,
            height: 1600,
            caption: 'Find new friends around you',
            body: 'The same people as the map, read by distance instead of by place — one toggle switches between the two.',
          },
          {
            name: 'loveberry/app-chat',
            alt: 'A conversation with photos and messages, coral for your own',
            width: 799,
            height: 1600,
            caption: 'Talk to your friends and make dates',
            body: 'A plain conversation, photos included: the plan was already on the map, so the first message has somewhere to start.',
          },
          {
            name: 'loveberry/app-gifts',
            alt: 'The gift store: simple, medium and premium rows priced at 20, 40 and 100 coins',
            width: 799,
            height: 1600,
            caption: 'Give presents',
            body: 'Three tiers at 20, 40 and 100 coins — a way to be noticed without writing, and the app’s clearest reason to buy coins.',
          },
        ],
      },
    ],
    logo: loveberryLogo,
  },
  {
    slug: 'music-covers',
    title: 'Music Covers',
    role: 'Cover Artist & Designer',
    period: '2017—2025',
    tags: ['Music', 'Illustration', 'Art direction'],
    summary: {
      strong: 'Music covers',
      rest: 'made over eight years for EPs and albums — among them a release for a Berlin techno label and a run of independent artists. Every one is drawn or art-directed to the record it belongs to rather than to a house style: hand illustration, flat vector, acrylic on canvas and photography all appear, because what the music needs decides the medium.',
    },
    intro:
      'Eight years of cover artwork for EPs and albums — a Berlin techno label and a run of independent artists — where each record picks its own medium.',
    problem:
      'A cover is the only picture most listeners will ever see of a record, and it has to work at every size it is met at: a wall-sized poster, a sleeve in a shop, and a thumbnail on a phone the size of a fingernail.',
    solution:
      'Each cover starts from the record rather than from a signature style, so the series holds illustration, flat vector, acrylic painting and photography side by side. What they share is a structure that survives being shrunk: one subject, one idea, and type that reads at thumbnail size.',
    process: [
      {
        title: 'Listening first',
        body: 'Start from the record and the artist rather than from a look — the medium is chosen after, which is why a techno EP and a bedroom-pop album from the same year look nothing alike.',
      },
      {
        title: 'Drawing it',
        body: 'Work in whatever the cover asks for: illustration on tablet, flat vector, acrylic paint photographed and treated, or a photograph art-directed and finished.',
      },
      {
        title: 'Making it survive the thumbnail',
        body: 'Test every cover at the size it is actually met at. Detail that dies at 100 pixels either gets simplified or is worth keeping only for the vinyl.',
      },
    ],
    outcome: [
      'Covers released for EPs and albums between 2017 and 2025.',
      'A release for a Berlin techno label alongside a run of independent artists.',
      'Illustration, vector, painting and photography — each picked by what the record needed.',
    ],
    cover: {
      name: 'music-covers/hero-covers',
      alt: 'Six music covers laid out in a grid: illustration, painting, flat vector and photography',
      width: 2000,
      height: 1324,
    },
    sections: [],
    groupsHeading: 'Selected work',
    groups: [
      {
        id: 'covers',
        title: 'Six releases',
        body: 'Six releases, and six different answers to the same brief.',
        layout: 'grid',
        images: [
          {
            name: 'music-covers/boon-and-sin',
            alt: 'BOON & SIN: two illustrated faces split down the middle of the sleeve, one in warm ochre, one in green with a snake',
            width: 1600,
            height: 1600,
            caption: 'BOON & SIN',
            body: 'Two halves of one portrait, torn down the middle — the split is the record’s title doing the work rather than a line of type explaining it.',
          },
          {
            name: 'music-covers/all-dogs-go-to-heaven',
            alt: 'All Dogs Go to Heaven: a painted night sky in black and red with a pink road running through it',
            width: 1600,
            height: 1600,
            caption: 'All Dogs Go to Heaven',
            body: 'Painted in acrylic, then photographed and finished — the brush marks are the point, so nothing was smoothed out afterwards.',
          },
          {
            name: 'music-covers/double-bubble',
            alt: 'Double Bubble by Cassandra Clark: a flat vector portrait blowing a bubble, pink on pink',
            width: 1600,
            height: 1600,
            caption: 'Double Bubble — Cassandra Clark',
            body: 'Flat vector and two colours. The title is set as a puzzle of stacked letters, which is the only detail on the sleeve that rewards looking twice.',
          },
          {
            name: 'music-covers/ragantras-grasp',
            alt: 'Ragantras — Grasp: black marbled ink across a grey woven texture, with the label mark and catalogue number FS07',
            width: 1200,
            height: 1200,
            caption: 'Ragantras — Grasp',
            body: 'The release for a Berlin techno label: marbled ink on a woven ground, the label’s mark and the catalogue number FS07 left as the only type.',
          },
          {
            name: 'music-covers/london-roads',
            alt: 'London Roads: a photographic portrait finished in black with gold jewellery, and the title set in gold',
            width: 1600,
            height: 1600,
            caption: 'London Roads — Cassandra Clark',
            body: 'A cover version of a Lil Wayne track, so the artwork is a cover of a photograph: everything pulled to black except the gold.',
          },
          {
            name: 'music-covers/dreamland',
            alt: 'Dreamland: an illustrated attic bedroom at night, a girl asleep with her phone, a black cat on the printer',
            width: 1600,
            height: 1600,
            caption: 'Dreamland — Arsia Line',
            body: 'A whole room drawn as one scene. It is the cover in the set that is meant to be looked at rather than read at a glance.',
          },
        ],
      },
    ],
  },
  {
    slug: 'holistic',
    title: 'Holistic',
    role: 'Author & Illustrator',
    period: '2022',
    tags: ['Personal work', 'Digital illustration', 'Series'],
    summary: {
      strong: 'Holistic',
      rest: 'is a series of digital illustrations of my own, made in 2022. Six works, all of the same body, each one a fragment of it — a face, hands, legs, a torso, two people lying together — drawn on one grey ground in outlines that never quite register, so the whole thing reads as one body seen in pieces rather than as six separate drawings.',
    },
    intro:
      'A personal series of digital illustrations from 2022: one body in six fragments, drawn on a single grey ground in outlines that refuse to line up.',
    problem:
      'A body is looked at in parts — a face, a pair of hands, a back — and rarely as one thing. The series is about what happens when those parts are separated out and hung together anyway.',
    process: [
      {
        title: 'One palette',
        body: 'Fixed the palette before drawing anything: greys for the volumes, one red and one cyan for the outlines. Nothing in the series is allowed a seventh colour.',
      },
      {
        title: 'Fragments',
        body: 'Drew the body in pieces rather than as figures — hands, legs, a face, a torso, a pair lying down — each cropped so that what is left out is as deliberate as what is shown.',
      },
      {
        title: 'The offset',
        body: 'Every outline is doubled and pushed out of register, the way a misprinted colour separation slips. It is what gives the flat drawings their movement, and what makes six pictures read as one series.',
      },
    ],
    outcome: [
      'Six finished works, released as one series in 2022.',
      'A single palette and one drawing rule holding the set together.',
      'Drawn at gallery proportions and mocked up hung, which is how the series is meant to be met.',
    ],
    cover: {
      name: 'holistic/hero-gallery',
      alt: 'The Holistic series hung on a dark gallery wall: six grey line-drawn works of a body in fragments',
      width: 1532,
      height: 1123,
    },
    sections: [],
    groupsHeading: 'Selected work',
    groups: [
      {
        id: 'works',
        title: 'The series',
        body: 'Six works, one body. Greys for the volumes, a red and a cyan outline that never quite lands on the edge it belongs to.',
        layout: 'grid',
        images: [
          {
            name: 'holistic/face',
            alt: 'A face drawn front on in flat greys, the outlines doubled in red and cyan',
            width: 1600,
            height: 1600,
            caption: 'Face',
          },
          {
            name: 'holistic/hands',
            alt: 'Two hands reaching down onto a surface, fingers spread, drawn in grey with red outlines',
            width: 1600,
            height: 1600,
            caption: 'Hands',
          },
          {
            name: 'holistic/body',
            alt: 'A torso turning away, drawn in flat greys with red contour lines',
            width: 1600,
            height: 1600,
            caption: 'Body',
          },
          {
            name: 'holistic/legs',
            alt: 'Crossed legs and bare feet raised, drawn in overlapping greys',
            width: 1600,
            height: 1600,
            caption: 'Legs',
          },
          {
            name: 'holistic/torso',
            alt: 'The same back mirrored on both sides of the frame, arms raised, leaving an empty centre',
            width: 1600,
            height: 1600,
            caption: 'Mirror',
          },
          {
            name: 'holistic/us',
            alt: 'Two people lying together seen from above, drawn almost entirely in outline',
            width: 1600,
            height: 1600,
            caption: 'Us',
          },
        ],
      },
    ],
  },
];

export const getProject = (slug: string | undefined): IProject | undefined =>
  projects.find((project) => project.slug === slug);

export const getNextProject = (slug: string): IProject => {
  const index = projects.findIndex((project) => project.slug === slug);

  return projects[(index + 1) % projects.length];
};
