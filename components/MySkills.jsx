import { Element } from 'react-scroll';
import TechSection from './TechSection';
import { tech } from '../utils';

const Tech = () => {
  return (
    <Element id='tech' name='tech'>
      <div className='flex flex-col items-center justify-center w-full h-auto my-32'>
        <h1 className='text-6xl font-bold text-indigo-900'>My Skills</h1>
        <p className='flex-wrap w-1/2 my-5 text-center font-normal'>
          I am always looking to learn new technology, so in addition to my
          bootcamp I have completed a number of courses from providers like
          Codecademy, such as{' '}
          <a
            className='font-semibold'
            href='https://www.codecademy.com/learn/learn-html'
            target='_blank'
            rel='noreferrer'
          >
            Learn HTML
          </a>
          ,{' '}
          <a
            className='font-semibold'
            href='https://www.codecademy.com/learn/introduction-to-javascript'
            target='_blank'
            rel='noreferrer'
          >
            Learn JavaScript
          </a>{' '}
          and{' '}
          <a
            className='font-semibold'
            href='https://www.codecademy.com/learn/learn-typescript'
            target='_blank'
            rel='noreferrer'
          >
            Learn TypeScript
          </a>
          .
        </p>

        {tech.map((type) => {
          const [techType] = Object.keys(type);
          return (
            <TechSection
              key={techType}
              type={type}
              techType={techType}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default Tech;
