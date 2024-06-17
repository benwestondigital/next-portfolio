import {
  DiCss3,
  DiJsBadge,
  DiPostgresql,
  DiReact,
  DiGithubBadge,
  DiGoogleAnalytics,
  DiHeroku,
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
import { IconType } from 'react-icons';

type TechDomain = 'frontend' | 'backend' | 'other';

type TechCategory = {
  domain: TechDomain;
  technologies: TechIconsAndNames[];
};
export type TechIconsAndNames = { techName: string; icon: IconType };

const frontEnd: TechCategory = {
  domain: 'frontend',
  technologies: [
    {
      techName: 'JavaScript',
      icon: DiJsBadge,
    },
    {
      techName: 'TypeScript',
      icon: SiTypescript,
    },
    { techName: 'React', icon: DiReact },
    { techName: 'Svelte', icon: SiSvelte },
    {
      techName: 'Tailwind CSS',
      icon: SiTailwindcss,
    },
    {
      techName: 'HTML',
      icon: AiFillHtml5,
    },
    { techName: 'CSS', icon: DiCss3 },
  ],
};

const backEnd: TechCategory = {
  domain: 'backend',
  technologies: [
    {
      techName: 'PostgreSQL',
      icon: DiPostgresql,
    },
    {
      techName: 'Express',
      icon: SiExpress,
    },
    {
      techName: 'Node.js',
      icon: SiNodedotjs,
    },
    {
      techName: 'SvelteKit',
      icon: SiSvelte,
    },
    {
      techName: 'Next.js',
      icon: SiNextdotjs,
    },
  ],
};
const other: TechCategory = {
  domain: 'other',
  technologies: [
    { techName: 'Jest', icon: SiJest },
    {
      techName: 'GitHub',
      icon: DiGithubBadge,
    },
    { techName: 'Git', icon: FaGit },
    {
      techName: 'Google Analytics',
      icon: DiGoogleAnalytics,
    },
    {
      techName: 'Google Tag Manager',
      icon: SiGoogletagmanager,
    },
    { techName: 'Heroku', icon: DiHeroku },
    { techName: 'Linux', icon: DiLinux },
  ],
};

export const technologyNamesAndIcons = [frontEnd, backEnd, other];

export const navLinks = [
  {
    name: 'About',
    path: 'about',
  },
  { name: 'Projects', path: 'projects' },
  {
    name: 'Skills',
    path: 'tech',
  },
  { name: 'Contact', path: 'contact' },
];
