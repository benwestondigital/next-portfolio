import { Element } from 'react-scroll';
import SingleProject from './SingleProject';
import whereto from '../public/images/whereto.png'
import redditfront from '../public/images/redditfront.png'
import redditback from '../public/images/redditback.png'


const Projects = () => {
  const projects = [
    { slug: 'whereto-climate-app', projName: 'WhereTo - Climate Travel App', image: whereto, description: 'Miss the weather in your favourite holiday destination? Let WhereTo help you decide on your next vacation spot. Uses Svelte / Svelte Kit.' },
    { slug: 'reddit-front-end', projName: 'Front-End Reddit', image: redditfront, description: 'Developed a Reddit clone front-end with React.' },
    { slug: 'reddit-back-end', projName: 'Back-End Reddit', image: redditback, description: 'The back-end functionality for my Reddit clone built using Express / PostgreSQL.' },
  ];

  return (
    <Element id='projects' name='projects'>
      <div className='flex flex-col items-center justify-center w-full h-auto my-32'>
        <h2 className='text-6xl font-bold text-indigo-900'>
          Projects
        </h2>
        <p className='mt-5 mb-5 font-normal text-center'>Here are some of the projects I&apos;ve been working on lately:</p>
        <div className='items-center justify-center gap-10 mt-10 md:flex flex-wrap sm:flex-col md:flex-row md:items-start md:gap-10 sm:pb-10'>
          {projects.map(project => {
            return <SingleProject key={project.projName} project={project} />;
          })}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
