import { Element } from 'react-scroll';
import SingleProject from './SingleProject';
import whereto from '../public/images/whereto.png'
import redditfront from '../public/images/redditfront.png'
import redditback from '../public/images/redditback.png'


const Projects = () => {
  const projects = [
    { slug: 'whereto-climate-app', projName: 'WhereTo - Climate Travel App', image: whereto, description: 'Love the weather in Sydney? Let WhereTo help you decide your next holiday spot.' },
    { slug: 'reddit-front-end', projName: 'Front-End Reddit', image: redditfront, description: 'Developed a Reddit clone front-end with React.' },
    { slug: 'reddit-back-end', projName: 'Back-End Reddit', image: redditback, description: 'The back-end functionality for my Reddit clone built using Express / PostgreSQL.' },
  ];

  return (
    <Element id='projects' name='projects'>
      <div className='w-full my-20 h-auto flex flex-col justify-center items-start'>
        <h2 className='text-indigo-900 text-6xl font-bold text-left'>
          Projects
        </h2>
        <p className='text-left font-normal font m-5 flex-wrap'>Here are some of the projects I&apos;ve been working on lately:</p>
        <div className='md:flex sm:flex-col md:flex-row justify-center items-center gap-10 md:gap-10 sm:pb-10 mt-10'>
          {projects.map(project => {
            return <SingleProject key={project.projName} project={project} />;
          })}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
