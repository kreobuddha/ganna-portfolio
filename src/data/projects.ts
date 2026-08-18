import resolaLogo from '@/assets/logos/resola.png';
import uandcoLogo from '@/assets/logos/uandco.webp';
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
          name: 'resola/story-3-tracking',
          alt: 'The patient app during an exercise, with the tracked skeleton on screen',
          width: 1190,
          height: 2483,
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
                alt: 'Your Virtual Physical Therapy Assistant — the rehabilitation program screen',
                width: 1136,
                height: 2710,
                caption: 'Your Virtual Physical Therapy Assistant',
              },
              {
                name: 'resola/story-2-guidance',
                alt: 'Step-by-Step Guidance — an instructional video during a stretch',
                width: 1066,
                height: 2679,
                caption: 'Step-by-Step Guidance',
              },
              {
                name: 'resola/story-3-tracking',
                alt: 'High-Accuracy Motion Tracking — the tracked skeleton mirroring the patient',
                width: 1190,
                height: 2483,
                caption: 'High-Accuracy Motion Tracking',
              },
              {
                name: 'resola/story-4-ai',
                alt: 'Faster Progress With AI — a range-of-motion goal and its result',
                width: 1117,
                height: 2707,
                caption: 'Faster Progress With AI',
              },
              {
                name: 'resola/story-5-feedback',
                alt: 'Regular Feedback from Therapists — a written note from the therapist',
                width: 1065,
                height: 2706,
                caption: 'Regular Feedback from Therapists',
              },
            ],
          },
          {
            id: 'daily-plan',
            title: 'The daily plan',
            body: 'The screen a patient opens first: how much of today is done, and what is left.',
            layout: 'phones',
            images: [
              {
                name: 'resola/app-todo-mobile',
                alt: 'Rehabilitation program with daily goals and the list of trainings, on a phone',
                width: 362,
                height: 897,
                caption: 'Phone',
              },
              {
                name: 'resola/app-todo-tablet-v',
                alt: 'Rehabilitation program on a tablet held upright',
                width: 770,
                height: 1026,
                caption: 'Tablet, upright',
              },
              {
                name: 'resola/app-todo-tablet-h',
                alt: 'Rehabilitation program on a tablet held sideways',
                width: 1030,
                height: 1008,
                caption: 'Tablet, sideways',
              },
              {
                name: 'resola/app-todo-all-trainings',
                alt: 'The full list of trainings — ankle, elbow, hip, knee, shoulder, wrist, forearm',
                width: 394,
                height: 794,
                caption: 'All trainings',
              },
            ],
          },
          {
            id: 'training',
            title: 'Preparing for a training',
            body: 'Equipment, the exercises in this training, and an explanation of what a strengthening exercise is for — reachable without leaving the screen.',
            layout: 'phones',
            images: [
              {
                name: 'resola/app-training-mobile',
                alt: 'Elbow training with its equipment and exercise list, on a phone',
                width: 362,
                height: 1140,
                caption: 'Phone',
              },
              {
                name: 'resola/app-training-tablet-v',
                alt: 'Elbow training on a tablet held upright',
                width: 770,
                height: 1026,
                caption: 'Tablet, upright',
              },
              {
                name: 'resola/app-training-tablet-h',
                alt: 'Elbow training on a tablet held sideways',
                width: 1030,
                height: 769,
                caption: 'Tablet, sideways',
              },
              {
                name: 'resola/app-training-modal-mobile',
                alt: 'Explanation of strengthening exercises over the training screen, on a phone',
                width: 362,
                height: 801,
                caption: 'Explanation, phone',
              },
              {
                name: 'resola/app-training-modal-tablet-v',
                alt: 'Explanation of strengthening exercises on a tablet held upright',
                width: 770,
                height: 1026,
                caption: 'Explanation, tablet upright',
              },
              {
                name: 'resola/app-training-modal-tablet-h',
                alt: 'Explanation of strengthening exercises on a tablet held sideways',
                width: 1029,
                height: 770,
                caption: 'Explanation, tablet sideways',
              },
            ],
          },
          {
            id: 'session',
            title: 'The session itself',
            body: 'A countdown, then the tracked skeleton, the target angle and the rep count — the moment the whole product exists for.',
            layout: 'phones',
            images: [
              {
                name: 'resola/app-exercise-mobile',
                alt: 'Get ready countdown before an exercise, on a phone',
                width: 362,
                height: 801,
                caption: 'Get ready, phone',
              },
              {
                name: 'resola/app-exercise-tablet-v',
                alt: 'Get ready countdown on a tablet held upright',
                width: 770,
                height: 1026,
                caption: 'Get ready, tablet upright',
              },
              {
                name: 'resola/app-exercise-tablet-h',
                alt: 'Get ready countdown on a tablet held sideways',
                width: 1030,
                height: 771,
                caption: 'Get ready, tablet sideways',
              },
              {
                name: 'resola/app-exercise-live-mobile',
                alt: 'Exercise in progress with live motion tracking and the target angle, on a phone',
                width: 362,
                height: 801,
                caption: 'In progress, phone',
              },
              {
                name: 'resola/app-exercise-live-tablet-v',
                alt: 'Exercise in progress on a tablet held upright',
                width: 770,
                height: 1026,
                caption: 'In progress, tablet upright',
              },
              {
                name: 'resola/app-exercise-live-tablet-h',
                alt: 'Exercise in progress on a tablet held sideways',
                width: 1030,
                height: 771,
                caption: 'In progress, tablet sideways',
              },
            ],
          },
          {
            id: 'log-in',
            title: 'Signing in, error included',
            body: 'States are part of the design, not an afterthought — the failed attempt was drawn at every size alongside the successful one.',
            layout: 'phones',
            images: [
              {
                name: 'resola/app-login-mobile',
                alt: 'Log in screen on a phone',
                width: 362,
                height: 801,
                caption: 'Phone',
              },
              {
                name: 'resola/app-login-tablet-v',
                alt: 'Log in screen on a tablet held upright',
                width: 770,
                height: 1026,
                caption: 'Tablet, upright',
              },
              {
                name: 'resola/app-login-tablet-h',
                alt: 'Log in screen on a tablet held sideways',
                width: 1030,
                height: 771,
                caption: 'Tablet, sideways',
              },
              {
                name: 'resola/app-login-error-mobile',
                alt: 'Log in screen showing an invalid email or password, on a phone',
                width: 362,
                height: 801,
                caption: 'Error, phone',
              },
              {
                name: 'resola/app-login-error-tablet-v',
                alt: 'Log in error on a tablet held upright',
                width: 771,
                height: 1026,
                caption: 'Error, tablet upright',
              },
              {
                name: 'resola/app-login-error-tablet-h',
                alt: 'Log in error on a tablet held sideways',
                width: 1030,
                height: 770,
                caption: 'Error, tablet sideways',
              },
            ],
          },
          {
            id: 'breakpoints',
            title: 'One screen at three sizes',
            body: 'The working boards, as they were handed to engineering: every state of a screen laid out side by side across phone and tablet.',
            layout: 'stack',
            images: [
              {
                name: 'resola/group-todo',
                alt: 'The to-do board — the daily plan at every size, side by side',
                width: 2400,
                height: 639,
                caption: 'To-do',
              },
              {
                name: 'resola/group-training-screen',
                alt: 'The training board — the training screen at every size, side by side',
                width: 2400,
                height: 713,
                caption: 'Training',
              },
              {
                name: 'resola/group-exercise-screen',
                alt: 'The exercise board — the session at every size, side by side',
                width: 2400,
                height: 645,
                caption: 'Exercise session',
              },
              {
                name: 'resola/group-login',
                alt: 'The log-in board — default and error states at every size, side by side',
                width: 2400,
                height: 643,
                caption: 'Log in',
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
          name: 'resola/workspace-patient-list',
          alt: 'The therapist workspace showing a patient list with triage tags',
          width: 1309,
          height: 1115,
        },
        groups: [
          {
            id: 'working-surface',
            title: 'The working surface',
            body: 'Three screens carry the clinical work: who needs attention, what happened during an exercise, and how a patient is trending.',
            layout: 'grid',
            images: [
              {
                name: 'resola/workspace-patient-list',
                alt: 'Patient list with triage tags such as survey idle, negative feedback and low performance',
                width: 1309,
                height: 1115,
                caption: 'Patient list, tagged for triage',
              },
              {
                name: 'resola/workspace-exercise-details',
                alt: 'Exercise details with biomechanics video, per-set results and feedback from both sides',
                width: 1309,
                height: 1115,
                caption: 'Exercise details: video, biomechanics, feedback',
              },
              {
                name: 'resola/workspace-patient-profile',
                alt: 'Patient profile with continuous monitoring charts and per-exercise results',
                width: 1309,
                height: 1106,
                caption: 'Patient profile and continuous monitoring',
              },
            ],
          },
          {
            id: 'daily-triage',
            title: 'The daily pass',
            body: 'To-do and patients, each with the filter sheet that narrows a long list down to the people who need something today.',
            layout: 'grid',
            images: [
              {
                name: 'resola/workspace-todo-web',
                alt: 'The to-do list on the web, sorted by priority',
                width: 1286,
                height: 1090,
                caption: 'To do, web',
              },
              {
                name: 'resola/workspace-todo-mobile',
                alt: 'The to-do list on a phone',
                width: 364,
                height: 723,
                caption: 'To do, phone',
              },
              {
                name: 'resola/workspace-todo-filters',
                alt: 'Filter sheet for the to-do list on a phone',
                width: 364,
                height: 723,
                caption: 'To do, filters',
              },
              {
                name: 'resola/workspace-patients-web',
                alt: 'The patients table on the web with status, diagnosis and admission date',
                width: 1285,
                height: 721,
                caption: 'Patients, web',
              },
              {
                name: 'resola/workspace-patients-mobile',
                alt: 'The patients list on a phone',
                width: 364,
                height: 723,
                caption: 'Patients, phone',
              },
              {
                name: 'resola/workspace-patients-filters',
                alt: 'Filter sheet for the patients list on a phone',
                width: 364,
                height: 723,
                caption: 'Patients, filters',
              },
            ],
          },
          {
            id: 'onboarding',
            title: 'Bringing a patient in',
            body: 'Creating a record and handing the patient their own way in — the seam between the two applications.',
            layout: 'grid',
            images: [
              {
                name: 'resola/workspace-new-patient-web',
                alt: 'Create new patient dialog, first step, on the web',
                width: 1284,
                height: 721,
                caption: 'New patient, web',
              },
              {
                name: 'resola/workspace-new-patient-mobile',
                alt: 'New patient profile creation on a phone',
                width: 364,
                height: 723,
                caption: 'New patient, phone',
              },
              {
                name: 'resola/workspace-activation-web',
                alt: 'Workspace activation screen on the web',
                width: 1285,
                height: 721,
                caption: 'Activation, web',
              },
              {
                name: 'resola/workspace-activation-mobile',
                alt: 'Workspace activation screen on a phone',
                width: 364,
                height: 723,
                caption: 'Activation, phone',
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
          width: 1538,
          height: 1605,
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
                width: 2227,
                height: 1218,
                caption: 'Type scale, mobile and tablet',
              },
              {
                name: 'resola/ds-colors',
                alt: 'Colour palette grouped into brand, neutral and semantic families',
                width: 1538,
                height: 1605,
                caption: 'Colour palette',
              },
            ],
          },
          {
            id: 'mobile-kit-board',
            title: 'Mobile UI kit, whole',
            body: 'The board as it stands in Figma. Open it to read the individual panels, or take them one at a time below.',
            layout: 'figure',
            images: [
              {
                name: 'resola/ds-mobile-overview',
                alt: 'The complete mobile UI kit board with all component panels side by side',
                width: 2400,
                height: 1459,
              },
            ],
          },
          {
            id: 'mobile-kit',
            title: 'Mobile UI kit, panel by panel',
            layout: 'grid',
            images: [
              {
                name: 'resola/ds-mobile-navigation',
                alt: 'Mobile navigation components: headers and tab bars',
                width: 642,
                height: 1268,
                caption: 'Navigation',
              },
              {
                name: 'resola/ds-mobile-inputs',
                alt: 'Mobile input components in every state, including validation',
                width: 865,
                height: 2873,
                caption: 'Inputs',
              },
              {
                name: 'resola/ds-mobile-tabs',
                alt: 'Mobile tab components in their selected and unselected states',
                width: 610,
                height: 931,
                caption: 'Tabs',
              },
              {
                name: 'resola/ds-mobile-tags',
                alt: 'Mobile tag components',
                width: 548,
                height: 930,
                caption: 'Tags',
              },
              {
                name: 'resola/ds-mobile-buttons',
                alt: 'Mobile buttons across sizes, states and emphasis levels',
                width: 610,
                height: 2062,
                caption: 'Buttons',
              },
              {
                name: 'resola/ds-mobile-elements',
                alt: 'Assorted mobile elements: timers, progress meters, scores and alerts',
                width: 933,
                height: 2625,
                caption: 'Elements',
              },
              {
                name: 'resola/ds-mobile-components',
                alt: 'Composed mobile components: exercise cards, notifications, settings rows and help entries',
                width: 979,
                height: 4285,
                caption: 'Composed components',
              },
              {
                name: 'resola/ds-mobile-icons',
                alt: 'The exercise and interface icon library',
                width: 2400,
                height: 1477,
                caption: 'Icon library',
              },
            ],
          },
          {
            id: 'web-board',
            title: 'Web styles, whole',
            layout: 'figure',
            images: [
              {
                name: 'resola/ds-web-overview',
                alt: 'The complete web styles board with all element panels side by side',
                width: 2400,
                height: 458,
              },
            ],
          },
          {
            id: 'web-styles',
            title: 'Web styles, panel by panel',
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
          name: 'resola/site-main-desktop',
          alt: 'The Resola marketing site home page',
          width: 1468,
          height: 1108,
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
                width: 1468,
                height: 1108,
                caption: 'Desktop',
              },
              {
                name: 'resola/site-main-mobile',
                alt: 'Marketing site home page on a phone',
                width: 386,
                height: 805,
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
                width: 1468,
                height: 1108,
                caption: 'Desktop',
              },
              {
                name: 'resola/site-therapists-mobile',
                alt: 'The “For therapists” page on a phone',
                width: 386,
                height: 805,
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
                width: 1446,
                height: 1082,
                caption: 'Desktop',
              },
              {
                name: 'resola/site-patients-mobile',
                alt: 'The “For patients” page on a phone',
                width: 362,
                height: 781,
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
          name: 'resola/extra-3d-assets',
          alt: 'Three 3D renders of an arm wearing a Resola sensor',
          width: 1563,
          height: 504,
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
                width: 422,
                height: 596,
                caption: 'Page one',
              },
              {
                name: 'resola/extra-quick-start-2',
                alt: 'Quick start guide, second page — signing in and starting the first session',
                width: 422,
                height: 596,
                caption: 'Page two',
              },
            ],
          },
          {
            id: 'illustration',
            title: 'Illustration',
            body: 'Two sets used throughout the app: the direction a joint should travel, and where each sensor goes on the body.',
            layout: 'stack',
            images: [
              {
                name: 'resola/extra-exercise-art',
                alt: 'Seven exercise illustrations showing the direction of movement for different joints',
                width: 2283,
                height: 304,
                caption: 'Exercises',
              },
              {
                name: 'resola/extra-sensor-art',
                alt: 'Seven illustrations showing where sensors are placed on the body',
                width: 2283,
                height: 307,
                caption: 'Sensor placement',
              },
            ],
          },
          {
            id: 'three-d',
            title: '3D assets',
            layout: 'figure',
            images: [
              {
                name: 'resola/extra-3d-assets',
                alt: 'Three 3D renders: an arm with a sensor, a hand marking a checklist, and a wrist sensor',
                width: 1563,
                height: 504,
              },
            ],
            note: 'Art direction, creative briefs, reference selection and production supervision. 3D production by the 3D design team.',
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
    cover: {
      name: 'uandco/hero-site',
      alt: 'Two U&CO screens: the service catalogue and the introduction page',
      width: 2400,
      height: 1075,
    },
    sections: [],
    groups: [
      {
        id: 'workflow',
        title: 'The workflow behind the product',
        body: 'Before a single screen, the whole marketplace was mapped as one diagram: five roles — site guest, signed-in client, curator, support and contractor — and every path an order can take between them, including the ones that fail. The diagram is in Russian, the language the concept was written in.',
        layout: 'figure',
        images: [
          {
            name: 'uandco/workflow-diagram',
            alt: 'The complete portal workflow diagram, colour-coded by the five participating roles',
            width: 3000,
            height: 4381,
            caption: 'Open it full screen to follow a path end to end',
          },
          {
            name: 'uandco/workflow-legend',
            alt: 'Legend of the workflow diagram listing the five roles and their colours',
            width: 1159,
            height: 644,
            caption:
              'The five roles: site guest (blue), signed-in client (green), curator (pink), support (yellow), contractor (red)',
          },
        ],
      },
      {
        id: 'public-site',
        title: 'The public site',
        body: 'What a musician sees before signing up: the services, who is behind the platform, and proof that the work is real.',
        layout: 'grid',
        images: [
          {
            name: 'uandco/site-services',
            alt: 'The service catalogue: mixing and mastering, arrangement, session musicians, cover design',
            width: 1446,
            height: 1029,
            caption: 'Service catalogue',
          },
          {
            name: 'uandco/site-about',
            alt: 'The introduction page explaining why the platform exists',
            width: 1442,
            height: 1029,
            caption: 'About the platform',
          },
          {
            name: 'uandco/site-team',
            alt: 'The team page, listing professionals by speciality',
            width: 1447,
            height: 1027,
            caption: 'The team, by speciality',
          },
          {
            name: 'uandco/site-showcase',
            alt: 'The showcase page with completed work',
            width: 1446,
            height: 1029,
            caption: 'Completed work',
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
            alt: 'The mixing and mastering service page with an audio before-and-after comparison',
            width: 1449,
            height: 1177,
            caption: 'Mixing and mastering',
          },
          {
            name: 'uandco/app-service-arrangement',
            alt: 'The arrangement service page',
            width: 1445,
            height: 1300,
            caption: 'Arrangement',
          },
          {
            name: 'uandco/app-projects',
            alt: 'The client workspace listing projects grouped by stage',
            width: 1445,
            height: 2375,
            caption: 'Projects, by stage',
          },
          {
            name: 'uandco/app-curator-chat',
            alt: 'The conversation with the curator and with support, inside a project',
            width: 1445,
            height: 1539,
            caption: 'Curator and support',
          },
          {
            name: 'uandco/app-order-card',
            alt: 'An order card with the services ordered and their cost broken down',
            width: 1445,
            height: 1028,
            caption: 'Order card',
          },
        ],
      },
    ],
    logo: uandcoLogo,
  },
];

export const getProject = (slug: string | undefined): IProject | undefined =>
  projects.find((project) => project.slug === slug);

export const getNextProject = (slug: string): IProject => {
  const index = projects.findIndex((project) => project.slug === slug);

  return projects[(index + 1) % projects.length];
};
