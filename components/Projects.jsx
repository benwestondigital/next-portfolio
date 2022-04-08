import { Element } from 'react-scroll';
import SingleProject from './SingleProject';

const Projects = ({projects}) => {
  return (
    <Element id='projects' name='projects'>
      <section className='flex flex-col items-center justify-center w-full h-auto my-32'>
        <h2 className='text-5xl sm:text-6xl font-bold text-indigo-900'>Projects</h2>
        <p className='my-5 text-center prose lg:prose-xl'>
          Here are some of the projects I&apos;ve been working on lately:
        </p>
        <div className='items-center justify-center gap-6 md:gap-10 px-2 mt-10 flex flex-wrap flex-col md:flex-row'>
          {projects.map(project => {
            return <SingleProject key={project.slug} project={project} />;
          })}
        </div>
      </section>
    </Element>
  );
};

export default Projects;
