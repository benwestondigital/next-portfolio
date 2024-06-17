import { IconType } from "react-icons";

type TechDomain = 'frontend' | 'backend' | 'other';

type TechIconsAndNames = { techName: string; icon: IconType };

export type TechCategory = {
  domain: TechDomain;
  technologies: TechIconsAndNames[];
};