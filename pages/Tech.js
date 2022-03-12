import { Element } from 'react-scroll';
import {
  DiCss3,
  DiJsBadge,
  DiPostgresql,
  DiReact,
  DiGithubBadge,
  DiGoogleAnalytics,
  DiHeroku,
  DiMongodb,
} from 'react-icons/di';
import {
  SiTypescript,
  SiSvelte,
  SiExpress,
  SiNodedotjs,
  SiJest,
  SiGoogletagmanager,
} from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaGit } from 'react-icons/fa';
import { DiLinux } from 'react-icons/di';

// TODO:fix colours and icons for this section
const Tech = () => {
  return (
    <Element id='tech' name='tech'>
      <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
        <h1 className='text-indigo-900 text-6xl font-bold text-center'>
          Technology
        </h1>
        {/* First Section */}
        <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-xl text-indigo-600 font-semibold'>Front-End</h2>
            <div className='flex justify-center items-center cursor-pointer'>
              <div className='flex flex-col justify-center items-center mx-2'>
                <DiJsBadge className='w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                  JavaScript
                </p>
              </div>
              <div className='flex flex-col justify-center items-center mx-2'>
                <SiTypescript className='w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                  TypeScript
                </p>
              </div>
              <div className='flex flex-col justify-center items-center mx-2'>
                <DiReact className='w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                  React
                </p>
              </div>
              <div className='flex flex-col justify-center items-center mx-2'>
                <SiSvelte className='w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                  Svelte
                </p>
              </div>
              <div className='flex flex-col justify-center items-center mx-2'>
                <AiFillHtml5 className='w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                  HTML
                </p>
              </div>
              <div className='flex flex-col justify-center items-center mx-2'>
                <DiCss3 className='w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                  CSS
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Second Section */}
        <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-xl text-indigo-600 font-semibold'>Back-End</h2>
            <div className='flex justify-center items-center cursor-pointer'>
              <DiPostgresql className='w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
              <SiExpress className='w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
              <SiNodedotjs className='w-10 h-10 bg-green-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
              <DiMongodb className='w-10 h-10 bg-green-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
            </div>
          </div>
        </div>
        {/* Third Section */}
        <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-xl text-indigo-600 font-semibold'>Other</h2>
            <div className='flex justify-center items-center cursor-pointer'>
              <SiJest className='w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
              <DiGithubBadge className='w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
              <FaGit className='w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
              <DiGoogleAnalytics className='w-10 h-10 bg-green-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
              <SiGoogletagmanager className='w-10 h-10 bg-green-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
              <DiHeroku className='w-10 h-10 bg-green-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
              <DiLinux className='w-10 h-10 bg-green-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Tech;
