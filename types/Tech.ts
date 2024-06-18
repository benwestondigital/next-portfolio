import { IconType } from 'react-icons';

type TechDomain = 'Front-End' | 'Back-End' | 'Other';

export type TechIconsAndNames = { techName: string; icon: IconType };

export type TechCategory = {
  domain: TechDomain;
  technologies: TechIconsAndNames[];
};

export type NavLinks = { name: string; urlPath: string }[];
