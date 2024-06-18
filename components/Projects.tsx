import { Element } from 'react-scroll';
import { SingleProject } from './SingleProject';
import { Project } from '@/types/Project';

type IProps = {
  projects: Project[];
};

export const Projects = ({ projects }: IProps) => (
  <Element id="projects" name="projects" className="scroll-mt-24">
    <section className="my-32 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-indigo-900 dark:text-indigo-500 sm:text-6xl">
        Projects
      </h2>
      <p className="prose my-5 text-center dark:prose-invert lg:prose-xl">
        Here are some of the projects I&apos;ve been working on lately:
      </p>
      <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-6 md:flex-row md:gap-10">
        {projects.map((project) => {
          return <SingleProject key={project.slug} project={project} />;
        })}
      </div>
    </section>
  </Element>
);
