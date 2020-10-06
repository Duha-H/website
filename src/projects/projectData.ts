import { ProjectItem } from "../reusable-components/types";
import { TECH, TAGS } from "../reusable-components/constants";


const data: ProjectItem[] = [
  {
    id: 0,
    title: 'Traccio',
    excerpt: 'Job-search tracking application',
    description: 'Goodbye stranger it\'s been nice, hope you find your paradise, tried to see your point of view, hope your dreams will all come true, goodbye mary, goodbye jane, feel no sorrow, feel no shame, come tomorrow, feel no pain',
    media: [require('../assets/project-media/placeholder_media.png'), require('../assets/project-media/terra_game_1.png'), require('../assets/project-media/terra_game_1.png')],
    tech: [TECH.ANGULAR, TECH.TS, TECH.FB, TECH.FB_FIRESTORE, TECH.FB_AUTH, TECH.GQL ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [TAGS.WEB, TAGS.FB, TAGS.SERVERLESS, ],
  },
  {
    id: 1,
    title: 'Interactive 3D Modeller',
    excerpt: 'Simple, interactive, 3D modelling application',
    description: 'Every time that I look in the mirror, all these lines in my face getting clearer, the past is gone, it went by like dusk to dawn, isn;t that the way, everybody\'s got their dues in life to pay',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.JS, TECH.WEBGL, TECH.GLSL, TECH.HTML, TECH.CSS ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [TAGS.GP, TAGS.WEB, ],
  },
  {
    id: 2,
    title: 'Terra Pizza (Game)',
    excerpt: 'Desktop pizza-making game',
    description: 'Half my life is in books written pages, live and learn from foosl and from sages, you know it\'s true, all the things come back to you, SING WITH ME, SING FOR THE YEAR',
    media: [require('../assets/project-media/terra_game_1.png'), require('../assets/project-media/placeholder_media.png'), require('../assets/project-media/terra_game_1.png')],
    tech: [TECH.CSHARP, TECH.UE, ],
    mode: 'solo',
    openSource: false,
    projectUrl: 'https://google.com',
    tags: [],
  },
  {
    id: 3,
    title: 'HELIOS DBMS',
    excerpt: 'Graphical interface database management system',
    description: 'Sing it with me if it\'s just for today, maybe tomorrow the good lord\'ll take you away, dun dun dun dun dun dun dundu dun dun, bum bum bum',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.JAVA, TECH.JDBC, TECH.SQL, TECH.SWING ],
    mode: 'team',
    openSource: false,
    tags: [],
  },
  {
    id: 4,
    title: 'Graphic Design Portfolio',
    excerpt: 'Web-page of a collection of logo and business card designs',
    description: 'Mom and dad went to a show, they dropped me off at grandpa joe\'s, I kicked and screamed said please something no, grandma take me home, grandma take me home, grandma take me home, grandma take me home',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.REACT, TECH.JS, TECH.CSS, ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [TAGS.REACT, TAGS.JS, TAGS.CSS, ],
  },
  {
    id: 5,
    title: 'Text-Generating RNN',
    excerpt: 'Recurrent Neural Network generating phone reviews',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.PYTHON, TECH.TFLOW, ],
    mode: 'team',
    openSource: false,
    tags: [],
  },
  {
    id: 6,
    title: 'Snake (Game)',
    excerpt: 'SNAAAKE!',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.PYTHON, TECH.TK, ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    tags: [],
  },
  {
    id: 7,
    title: 'Terra Pizza (Website)',
    excerpt: 'Website for Terra Pizza (the game)',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.ANGULAR, TECH.TS, TECH.CSS, TECH.HTML, ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [],
  },
  {
    id: 8,
    title: '3D City Modeller',
    excerpt: 'Simple building-modelling desktop application',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.C, TECH.OPENGL, ],
    mode: 'solo',
    openSource: false,
    tags: [],
  },
  {
    id: 9,
    title: '3D Shooting Drone (Game)',
    excerpt: 'Simple user-controlled drone game',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.CPP, TECH.OPENGL, TECH.GLSL, ],
    mode: 'team',
    openSource: false,
    tags: [],
  },
  {
    id: 10,
    title: 'P2P File-Sharing Application',
    excerpt: 'File-sharing application using distributed directory server pool',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.JAVA, ],
    mode: 'team',
    openSource: false,
    tags: [],
  },
  {
    id: 11,
    title: 'Dark Mode (Extension)',
    excerpt: 'Dark-mode browser extension',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.JS, TECH.HTML, TECH.CSS, ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [],
  },
  {
    id: 12,
    title: 'IR System',
    excerpt: 'Information retrieval system on benchmark dataset',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.PYTHON, ],
    mode: 'solo',
    openSource: false,
    tags: [],
  },
  {
    id: 13,
    title: 'Timeline (NPM Package)',
    excerpt: 'Frontend library for timeline visualization',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.TS, TECH.ANGULAR, TECH.REACT, ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [],
  },
  {
    id: 14,
    title: 'VSCode Extension',
    excerpt: 'bleep bloop',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.TS, TECH.VSC, ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [],
  },
]

export const soloProjects: ProjectItem[] = [
  {
    id: 0,
    title: 'Traccio',
    excerpt: 'Job-search tracking application',
    description: 'Goodbye stranger it\'s been nice, hope you find your paradise, tried to see your point of view, hope your dreams will all come true, goodbye mary, goodbye jane, feel no sorrow, feel no shame, come tomorrow, feel no pain',
    media: [require('../assets/project-media/placeholder_media.png'), require('../assets/project-media/terra_game_1.png'), require('../assets/project-media/terra_game_1.png')],
    tech: [TECH.ANGULAR, TECH.TS, TECH.FB, TECH.FB_FIRESTORE, TECH.FB_AUTH, TECH.GQL ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [TAGS.WEB, TAGS.FB, TAGS.SERVERLESS, ],
  },
  {
    id: 1,
    title: 'Interactive 3D Modeller',
    excerpt: 'Simple, interactive, 3D modelling application',
    description: 'Every time that I look in the mirror, all these lines in my face getting clearer, the past is gone, it went by like dusk to dawn, isn;t that the way, everybody\'s got their dues in life to pay',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.JS, TECH.WEBGL, TECH.GLSL, TECH.HTML, TECH.CSS ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [TAGS.GP, TAGS.WEB, ],
  },
  {
    id: 2,
    title: 'Terra Pizza (Game)',
    excerpt: 'Desktop pizza-making game',
    description: 'Half my life is in books written pages, live and learn from foosl and from sages, you know it\'s true, all the things come back to you, SING WITH ME, SING FOR THE YEAR',
    media: [require('../assets/project-media/terra_game_1.png'), require('../assets/project-media/placeholder_media.png'), require('../assets/project-media/terra_game_1.png')],
    tech: [TECH.CSHARP, TECH.UE, ],
    mode: 'solo',
    openSource: false,
    projectUrl: 'https://google.com',
    tags: [],
  },
  {
    id: 4,
    title: 'Graphic Design Portfolio',
    excerpt: 'Web-page of a collection of logo and business card designs',
    description: 'Mom and dad went to a show, they dropped me off at grandpa joe\'s, I kicked and screamed said please something no, grandma take me home, grandma take me home, grandma take me home, grandma take me home',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.REACT, TECH.JS, TECH.CSS, ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [TAGS.REACT, TAGS.JS, TAGS.CSS, ],
  },
  {
    id: 6,
    title: 'Snake (Game)',
    excerpt: 'SNAAAKE!',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.PYTHON, TECH.TK, ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    tags: [],
  },
  {
    id: 7,
    title: 'Terra Pizza (Website)',
    excerpt: 'Website for Terra Pizza (the game)',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.ANGULAR, TECH.TS, TECH.CSS, TECH.HTML, ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [],
  },
  {
    id: 8,
    title: '3D City Modeller',
    excerpt: 'Simple building-modelling desktop application',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.C, TECH.OPENGL, ],
    mode: 'solo',
    openSource: false,
    tags: [],
  },
  {
    id: 11,
    title: 'Dark Mode (Extension)',
    excerpt: 'Dark-mode browser extension',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.JS, TECH.HTML, TECH.CSS, ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [],
  },
  {
    id: 12,
    title: 'IR System',
    excerpt: 'Information retrieval system on benchmark dataset',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.PYTHON, ],
    mode: 'solo',
    openSource: false,
    tags: [],
  },
  {
    id: 13,
    title: 'Timeline (NPM Package)',
    excerpt: 'Frontend library for timeline visualization',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.TS, TECH.ANGULAR, TECH.REACT, ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [],
  },
  {
    id: 14,
    title: 'VSCode Extension',
    excerpt: 'bleep bloop',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.TS, TECH.VSC, ],
    mode: 'solo',
    openSource: true,
    sourceUrl: 'https://google.com',
    projectUrl: 'https://google.com',
    tags: [],
  },
];

export const teamProjects: ProjectItem[] = [
  {
    id: 3,
    title: 'HELIOS DBMS',
    excerpt: 'Graphical interface database management system',
    description: 'Sing it with me if it\'s just for today, maybe tomorrow the good lord\'ll take you away, dun dun dun dun dun dun dundu dun dun, bum bum bum',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.JAVA, TECH.JDBC, TECH.SQL, TECH.SWING ],
    mode: 'team',
    openSource: false,
    tags: [],
  },
  {
    id: 5,
    title: 'Text-Generating RNN',
    excerpt: 'Recurrent Neural Network generating phone reviews',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.PYTHON, TECH.TFLOW, ],
    mode: 'team',
    openSource: false,
    tags: [],
  },
  {
    id: 9,
    title: '3D Shooting Drone (Game)',
    excerpt: 'Simple user-controlled drone game',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.CPP, TECH.OPENGL, TECH.GLSL, ],
    mode: 'team',
    openSource: false,
    tags: [],
  },
  {
    id: 10,
    title: 'P2P File-Sharing Application',
    excerpt: 'File-sharing application using distributed directory server pool',
    description: '',
    media: [require('../assets/project-media/placeholder_media.png')],
    tech: [TECH.JAVA, ],
    mode: 'team',
    openSource: false,
    tags: [],
  },

]


export default data;