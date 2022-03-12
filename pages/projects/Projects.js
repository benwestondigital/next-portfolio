import { Element } from 'react-scroll';
import SingleProject from '../../components/SingleProject';
import { projects } from '../../utils';

const Projects = () => {
  return (
    <Element id='projects' name='projects'>
      <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
        <p className='text-sm uppercase text-gray-400'>Portfolio</p>
        <h2 className='text-indigo-900 text-6xl font-bold text-center'>
          Web Development Projects
        </h2>
        <div className='md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10'>
          {projects.map((item) => {
          return (
          <SingleProject key={item.projName} projName={item.projName} />
          )
          })}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
