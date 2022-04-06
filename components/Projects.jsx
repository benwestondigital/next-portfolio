import { Element } from 'react-scroll';
import SingleProject from './SingleProject';

const Projects = ({projects}) => {
  return (
    <Element id='projects' name='projects'>
      <section className='flex flex-col items-center justify-center w-full h-auto my-32'>
        <h2 className='text-6xl font-bold text-indigo-900'>Projects</h2>
        <p className='mt-5 mb-5 font-normal text-center'>
          Here are some of the projects I&apos;ve been working on lately:
        </p>
        <div className='items-center justify-center gap-10 mt-10 md:flex flex-wrap sm:flex-col md:flex-row md:items-start md:gap-10 sm:pb-10'>
          {projects.map(project => {
            return <SingleProject key={project.slug} project={project} />;
          })}
        </div>
      </section>
    </Element>
  );
};

export default Projects;
