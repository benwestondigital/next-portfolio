import { Element } from 'react-scroll';
import Image from 'next/image';
import heroImage from '../public/images/heroimage.jpeg';

const Projects = () => {
  return (
    <Element id='projects' name='projects'>
      <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
        <p className='text-sm uppercase text-gray-400'>Portfolio</p>
        <h2 className='text-indigo-900 text-6xl font-bold text-center'>
          Web Development Projects
        </h2>
        <div className='md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10'>
          <div className='rounded w-80 h-60 shadow-xl relative'>
            <Image
              src={heroImage}
              alt='project'
              layout='fill'
              objectFit='cover'
              className='p-2 rounded cursor-pointer'
            />
          </div>
          <div className='rounded w-80 h-60 shadow-xl relative'>
            <Image
              src={heroImage}
              alt='project'
              layout='fill'
              objectFit='cover'
              className='p-2 rounded cursor-pointer'
            />
          </div>
          <div className='rounded w-80 h-60 shadow-xl relative'>
            <Image
              src={heroImage}
              alt='project'
              layout='fill'
              objectFit='cover'
              className='p-2 rounded cursor-pointer'
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
