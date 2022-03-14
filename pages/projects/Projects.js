import { Element } from 'react-scroll';
import SingleProject from '../../components/SingleProject';
import whereto from '../../public/images/whereto.png'
import redditfront from '../../public/images/redditfront.png'
import redditback from '../../public/images/redditback.png'
import Image from 'next/image';


const Projects = () => {
  const projects = [
    { projName: 'WhereTo - Climate Travel App', image: whereto },
    { projName: 'Front-End Reddit', image: redditfront },
    { projName: 'Back-End Reddit', image: redditback },
  ];

  return (
    <Element id='projects' name='projects'>
      <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
        <p className='text-sm uppercase text-gray-400'>Portfolio</p>
        <h2 className='text-indigo-900 text-6xl font-bold text-center'>
          Web Development Projects
        </h2>
        <div className='md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10'>
          {projects.map(project => {
            return <SingleProject key={project.projName} project={project} />;
          })}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
