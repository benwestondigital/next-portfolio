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
import { NavLinks, TechCategory } from '@/types/Tech';

const frontEnd: TechCategory = {
  domain: 'Front-End',
  technologies: [
    {
      techName: 'TypeScript',
      icon: SiTypescript,
    },
    { techName: 'React', icon: DiReact },
    {
      techName: 'Next.js',
      icon: SiNextdotjs,
    },
  ],
};

const backEnd: TechCategory = {
  domain: 'Back-End',
  technologies: [
    {
      techName: 'Express',
      icon: SiExpress,
    },
    {
      techName: 'Node.js',
      icon: SiNodedotjs,
    },
  ],
};
const other: TechCategory = {
  domain: 'Misc',
  technologies: [
    { techName: 'Jest', icon: SiJest },
    { techName: 'Git', icon: FaGit },
    {
      techName: 'Google Analytics',
      icon: DiGoogleAnalytics,
    },
    {
      techName: 'Google Tag Manager',
      icon: SiGoogletagmanager,
    },
  ],
};

export const techCategories = [frontEnd, backEnd, other];

export const navLinks: NavLinks = [
  {
    name: 'About',
    urlPath: 'about',
  },
  { name: 'Projects', urlPath: 'projects' },
  {
    name: 'Skills',
    urlPath: 'tech',
  },
  { name: 'Contact', urlPath: 'contact' },
];
