import { Element } from 'react-scroll';
import { TechSection } from './TechSection';
import { techCategories } from '../utils';

export const MySkills = () => (
  <Element id="tech" name="tech" className="scroll-mt-24">
    <section className="my-32 flex h-auto flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-indigo-900 dark:text-indigo-500 sm:text-6xl">
        My Skills
      </h1>
      <p className="prose my-5 flex-wrap text-center dark:prose-invert md:w-2/3 lg:prose-xl lg:w-1/2">
        I am a strong learner and always want to hone my skills. I&apos;ve been
        lucky enough to work in QA which gave me a lot of experience creating
        automated tests using Playwright. My current focus is on developing my
        knowledge of React and Typescript. In the near future I want to pick up
        Go and learn to build more performant backend servers.
      </p>

      {techCategories.map((tech) => (
        <TechSection key={tech.domain} tech={tech} />
      ))}
    </section>
  </Element>
);
