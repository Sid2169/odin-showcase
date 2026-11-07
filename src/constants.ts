const base = import.meta.env.BASE_URL;

export const ASSETS = {
  LOGO: `${base}assets/logo.png`,
  PROFILE: `${base}assets/profile.jpg`,
  PROFILE_ALT: `${base}assets/profile-alt.jpg`,
  PROJECTS: `${base}assets/projects`,
  ICONS: `${base}assets/icons`,
} as const;

export const SITE = {
  TITLE: 'Odin Showcase',
  DESCRIPTION: 'A showcase of projects built while following The Odin Project curriculum',
  AUTHOR: 'Siddhartha',
  ROLE: 'Full Stack Web Engineer',
  GITHUB_URL: 'https://github.com/Sid2169',
  ODIN_URL: 'https://www.theodinproject.com',
  ODIN_PATHS: {
    FOUNDATIONS: 'https://www.theodinproject.com/paths/foundations/courses/foundations',
    FULL_STACK: 'https://www.theodinproject.com/paths/full-stack-javascript',
    GETTING_HIRED:
      'https://www.theodinproject.com/paths/full-stack-javascript/courses/getting-hired',
  },
} as const;

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  tags: string[];
  odinModule: string;
  publishedDate: string;
}

export interface ModuleTrack {
  id: string;
  label: string;
  description: string;
  matches: readonly string[];
}

export const MODULE_TRACKS: readonly ModuleTrack[] = [
  {
    id: 'foundations',
    label: 'Foundations',
    description: 'HTML, CSS and the box model — where every first page begins.',
    matches: ['foundations', 'fundamental'],
  },
  {
    id: 'javascript',
    label: 'Full Stack JavaScript',
    description: 'DOM, async, OOP, bundlers, APIs and browser games.',
    matches: ['javascript'],
  },
  {
    id: 'learning-platform',
    label: 'Learning Platform',
    description: 'A self-study Python and applied-AI course, built beyond the curriculum.',
    matches: ['learning platform'],
  },
  {
    id: 'getting-hired',
    label: 'Getting Hired',
    description: 'Portfolio, presentation and the final career push.',
    matches: ['getting hired'],
  },
];

export function getTrack(moduleName: string): ModuleTrack | undefined {
  const normalized = moduleName.trim().toLowerCase();
  return MODULE_TRACKS.find((track) =>
    track.matches.some((match) => normalized === match || normalized.startsWith(match)),
  );
}

export function getProjectYear(project: Project): number {
  const match = project.publishedDate.match(/\d{4}/);
  return match ? Number(match[0]) : new Date(project.publishedDate).getFullYear();
}

export const PROJECTS: Project[] = [
  {
    id: 'ml-python',
    title: 'MLPy— Python for Applied AI and Backend Engineering',
    description: 'A self-study course for experienced TypeScript/Node.js developers who want practical Python fluency for building AI services, data pipelines, ML experiments, and production backend integrations.',
    image: `${ASSETS.PROJECTS}/mlPy.png`,
    liveUrl: 'https://ml-py.vercel.app',
    repoUrl: 'https://github.com/Sid2169/MLPy',
    tags: ['React','TypeScript','Next', 'Tailwind', ],
    odinModule: 'Learning Platform',
    publishedDate: 'November 2026',
  },
  {
    id: 'battle-ship',
    title: 'Battle Ship',
    description: 'A classic Battleship duel against a smart computer opponent, built as a fast, dependency-light browser game with custom ship sprites, sound effects, and background music.',
    image: `${ASSETS.PROJECTS}/battleship.png`,
    liveUrl: 'https://sid2169.github.io/battleship/',
    repoUrl: 'https://github.com/Sid2169/battleship',
    tags: ['HTML', 'CSS', 'JavaScript', 'webpack'],
    odinModule: 'Javascript',
    publishedDate: '10 May 2026',
  },
  {
    id: 'calculator',
    title: 'Gnome - Calculator - Clone',
    description: 'A feature rich clone of Gnome advanced scientific calculator - mathematical expression evaluator',
    image: `${ASSETS.PROJECTS}/calculator.png`,
    liveUrl: 'https://sid2169.github.io/Calc/',
    repoUrl: 'https://github.com/Sid2169/Calc',
    tags: ['HTML', 'CSS','JavaScript'],
    odinModule: 'JavaScript',
    publishedDate: '31 January 2025',
  },
  {
    id: 'sketch',
    title: 'Etch-A-Sketch',
    description: 'A sleek, browser-based pixel art creator with multiple drawing modes, customizable grid sizes, and image export functionality. Built with vanilla JavaScript for a smooth, responsive drawing experience.',
    image: `${ASSETS.PROJECTS}/sketch.png`,
    liveUrl: 'https://sid2169.github.io/sketch/',
    repoUrl: 'https://github.com/Sid2169/sketch',
    tags: ['HTML', 'CSS', 'JavaScript'],
    odinModule: 'Javascript',
    publishedDate: '24 January 2025',
  },
  {
    id: 'todo',
    title: 'Capiche - Task Management',
    description: 'A feature-rich todo list app with projects, due dates, and priority levels.',
    image: `${ASSETS.PROJECTS}/todo.png`,
    liveUrl: 'https://sid2169.github.io/Capiche/',
    repoUrl: 'https://github.com/Sid2169/Capiche',
    tags: ['JavaScript', 'Webpack'],
    odinModule: 'JavaScript',
    publishedDate: '29 November 2025',
  },
  {
    id: 'aero',
    title: 'Aero Weather',
    description: 'A glassmorphism dark-themed weather dashboard that delivers real-time conditions, hourly forecasts, air quality data, and 7-day outlooks — with dynamic backgrounds and smooth unit toggling.',
    image: `${ASSETS.PROJECTS}/aero.png`,
    liveUrl: 'https://sid2169.github.io/aero/',
    repoUrl: 'https://github.com/Sid2169/aero/',
    tags: ['JavaScript', 'Webpack', 'Tailwind CSS'],
    odinModule: 'JavaScript',
    publishedDate: '10 December 2025',
  },
  {
    id: 'tic-tac',
    title: 'Tic Tac Toe',
    description: 'A modern, feature-rich Tic-Tac-Toe game built with vanilla JavaScript, featuring AI opponents with multiple difficulty levels, two-player mode, and an elegant dark/light theme interface.',
    image: `${ASSETS.PROJECTS}/tictac.png`,
    liveUrl: 'https://sid2169.github.io/TicTac/',
    repoUrl: 'https://github.com/Sid2169/TicTac',
    tags: ['HTML', 'CSS', 'JavaScript'],
    odinModule: 'Javascript',
    publishedDate: '15 March 2025',
  },
  {
    id: 'trade',
    title: 'Capital Growth',
    description: 'A dark-themed, terminal-aesthetic trading strategy simulator that projects capital growth, P&L, and outcome probability across configurable trade sequences — with both deterministic and Monte Carlo analysis modes.',
    image: `${ASSETS.PROJECTS}/trade.png`,
    liveUrl: 'https://trade-analyze-o4xb.vercel.app/',
    repoUrl: 'https://github.com/Sid2169/trade-analyze',
    tags: ['TypeScript', 'React', 'Vite'],
    odinModule: 'Javascript',
    publishedDate: '23 March 2026',
  },
  {
    id: 'threeway',
    title: 'Three Way Dead Lock',
    description: 'This is an interactive web-based game inspired by the "Threeway Deadlock from the popular anime series Naruto',
    image: `${ASSETS.PROJECTS}/threeway.png`,
    liveUrl: 'https://sid2169.github.io/threeWay/',
    repoUrl: 'https://github.com/Sid2169/threeWay',
    tags: ['HTML', 'CSS', 'JavaScript'],
    odinModule: 'Foundations',
    publishedDate: '1 December 2024',
  },
  {
    id: 'landing',
    title: 'My first landing Page',
    description: 'A simple landing page, the very first landing page and the first website I built, I am kind of emotional about it',
    image: `${ASSETS.PROJECTS}/landing.png`,
    liveUrl: 'https://sid2169.github.io/Landing/',
    repoUrl: 'https://github.com/Sid2169/Landing',
    tags: ['HTML', 'CSS'],
    odinModule: 'Fundamental',
    publishedDate: '9 October 2024',
  },
  {
    id: 'library',
    title: 'My Books - Book Tracker',
    description: 'A simple web application for managing a personal library of books. Users can add new books, toggle their read status, and delete them from the library.',
    image: `${ASSETS.PROJECTS}/library.png`,
    liveUrl: 'https://sid2169.github.io/BookLib/',
    repoUrl: 'https://github.com/Sid2169/BookLib',
    tags: ['HTML', 'CSS','JavaScript'],
    odinModule: 'JavaScript',
    publishedDate: '11 March 2025',
  },
  {
    id: 'recipe',
    title: 'My Recipes',
    description: 'A simple showcase of my favourite recipes',
    image: `${ASSETS.PROJECTS}/recipe.png`,
    liveUrl: 'https://sid2169.github.io/odin_recepies/',
    repoUrl: 'https://github.com/Sid2169/odin_recepies',
    tags: ['HTML', 'CSS'],
    odinModule: 'JavaScript',
    publishedDate: '21 September 2023',
  },
  {
    id: 'resturant',
    title: 'Babus - A resturant page',
    description: 'A simple first attempt at a Single Page Application',
    image: `${ASSETS.PROJECTS}/resturant.png`,
    liveUrl: 'https://sid2169.github.io/Restaurant/',
    repoUrl: 'https://github.com/Sid2169/Restaurant',
    tags: ['HTML', 'CSS','JavaScript'],
    odinModule: 'JavaScript',
    publishedDate: '18 August 2025',
  },
   {
    id: 'portfolio',
    title: '3-D Portfolio',
    description: 'My Personal dev portfolio website/ resume',
    image: `${ASSETS.PROJECTS}/portfolio.png`,
    liveUrl: 'https://sidsingh.vercel.app/',
    repoUrl: 'https://github.com/Sid2169/portfolio',
    tags: ['React', 'Tailwind', 'Three.Js', 'Gsap'],
    odinModule: 'Getting Hired',
    publishedDate: '24 December 2025',
  },
];
