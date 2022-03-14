import {
  DiCss3,
  DiJsBadge,
  DiPostgresql,
  DiReact,
  DiGithubBadge,
  DiGoogleAnalytics,
  DiHeroku,
  DiMongodb,
} from 'react-icons/di';
import {
  SiTypescript,
  SiSvelte,
  SiExpress,
  SiNodedotjs,
  SiJest,
  SiGoogletagmanager,
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaGit } from 'react-icons/fa';
import { DiLinux } from 'react-icons/di';

export const tech = [
  {
    techName: 'JavaScript',
    type: 'Front End',
    icon: DiJsBadge,
    colour: 'yellow',
  },
  {
    techName: 'TypeScript',
    type: 'Front End',
    icon: SiTypescript,
    colour: 'blue',
  },
  { techName: 'React', type: 'Front End', icon: DiReact, colour: 'blue' },
  { techName: 'Svelte', type: 'Front End', icon: SiSvelte, colour: 'red' },
  {
    techName: 'Tailwind CSS',
    type: 'Front End',
    icon: SiTailwindcss,
    colour: 'blue',
  },
  { techName: 'HTML', type: 'Front End', icon: AiFillHtml5, colour: 'green' },
  { techName: 'CSS', type: 'Front End', icon: DiCss3, colour: 'blue' },
  {
    techName: 'PostgreSQL',
    type: 'Back End',
    icon: DiPostgresql,
    colour: 'green',
  },
  { techName: 'Express', type: 'Back End', icon: SiExpress, colour: 'green' },
  { techName: 'Node.js', type: 'Back End', icon: SiNodedotjs, colour: 'green' },
  { techName: 'SvelteKit', type: 'Back End', icon: SiSvelte, colour: 'green' },
  { techName: 'Next.js', type: 'Back End', icon: SiNextdotjs, colour: 'green' },
  { techName: 'Jest', type: 'Other', icon: SiJest, colour: 'green' },
  { techName: 'GitHub', type: 'Other', icon: DiGithubBadge, colour: 'green' },
  { techName: 'Git', type: 'Other', icon: FaGit, colour: 'green' },
  {
    techName: 'Google Analytics',
    type: 'Other',
    icon: DiGoogleAnalytics,
    colour: 'green',
  },
  {
    techName: 'Google Tag Manager',
    type: 'Other',
    icon: SiGoogletagmanager,
    colour: 'green',
  },
  { techName: 'Heroku', type: 'Other', icon: DiHeroku, colour: 'green' },
  { techName: 'Linux', type: 'Other', icon: DiLinux, colour: 'green' },
];
