export const ASSETS = {
  LOGO: '/assets/logo.png',
  PROFILE: '/assets/profile.jpg',
  PROJECTS: '/assets/projects',
  ICONS: '/assets/icons',
} as const;

export const SITE = {
  TITLE: 'Odin Showcase',
  DESCRIPTION: 'A showcase of projects built while following The Odin Project curriculum',
  AUTHOR: 'Siddhartha',
  GITHUB_URL: 'https://github.com/Sid2169',
  ODIN_URL: 'https://www.theodinproject.com',
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
}

export const PROJECTS: Project[] = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    description: 'A responsive landing page built with HTML and CSS, practicing flexbox layout and semantic HTML.',
    image: `${ASSETS.PROJECTS}/landing-page.png`,
    liveUrl: 'https://Sid2169.github.io/landing-page',
    repoUrl: 'https://github.com/Sid2169/landing-page',
    tags: ['HTML', 'CSS'],
    odinModule: 'Foundations',
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    description: 'A browser-based Rock Paper Scissors game with score tracking and visual feedback.',
    image: `${ASSETS.PROJECTS}/rock-paper-scissors.png`,
    liveUrl: 'https://Sid2169.github.io/rock-paper-scissors',
    repoUrl: 'https://github.com/Sid2169/rock-paper-scissors',
    tags: ['HTML', 'CSS', 'JavaScript'],
    odinModule: 'Foundations',
  },
  {
    id: 'etch-a-sketch',
    title: 'Etch-a-Sketch',
    description: 'A customizable grid drawing app with color picker and grid size options.',
    image: `${ASSETS.PROJECTS}/etch-a-sketch.png`,
    liveUrl: 'https://Sid2169.github.io/etch-a-sketch',
    repoUrl: 'https://github.com/Sid2169/etch-a-sketch',
    tags: ['HTML', 'CSS', 'JavaScript'],
    odinModule: 'Foundations',
  },
  {
    id: 'calculator',
    title: 'Calculator',
    description: 'A fully functional calculator with keyboard support and modern UI design.',
    image: `${ASSETS.PROJECTS}/calculator.png`,
    liveUrl: 'https://Sid2169.github.io/calculator',
    repoUrl: 'https://github.com/Sid2169/calculator',
    tags: ['HTML', 'CSS', 'JavaScript'],
    odinModule: 'Foundations',
  },
  {
    id: 'library',
    title: 'Library App',
    description: 'A book library management app with local storage persistence and CRUD operations.',
    image: `${ASSETS.PROJECTS}/library.png`,
    liveUrl: 'https://Sid2169.github.io/library',
    repoUrl: 'https://github.com/Sid2169/library',
    tags: ['HTML', 'CSS', 'JavaScript'],
    odinModule: 'Foundations',
  },
  {
    id: 'todo-list',
    title: 'Todo List',
    description: 'A feature-rich todo list app with projects, due dates, and priority levels.',
    image: `${ASSETS.PROJECTS}/todo-list.png`,
    liveUrl: 'https://Sid2169.github.io/todo-list',
    repoUrl: 'https://github.com/Sid2169/todo-list',
    tags: ['JavaScript', 'Webpack'],
    odinModule: 'JavaScript',
  },
];
