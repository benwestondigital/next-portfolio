import { Element } from 'react-scroll';
import TechSection from './TechSection';
import { tech } from '../utils';

const Tech = () => {
  return (
    <Element id='tech' name='tech'>
      <section className='my-32 flex h-auto flex-col items-center justify-center px-2'>
        <h1 className='text-5xl font-bold text-indigo-900 dark:text-indigo-500 sm:text-6xl'>
          My Skills
        </h1>
        <p className='prose my-5 flex-wrap text-center dark:prose-invert md:w-2/3 lg:prose-xl lg:w-1/2'>
          I am always looking to learn new technology, so in addition to my
          bootcamp I have completed a number of online courses such as{' '}
          <a
            className='font-semibold no-underline hover:text-indigo-300'
            href='https://www.codecademy.com/learn/learn-html'
            target='_blank'
            rel='noreferrer'
          >
            Learn HTML
          </a>
          ,{' '}
          <a
            className='font-semibold no-underline hover:text-indigo-300'
            href='https://www.codecademy.com/learn/introduction-to-javascript'
            target='_blank'
            rel='noreferrer'
          >
            Learn JavaScript
          </a>{' '}
          and{' '}
          <a
            className='font-semibold no-underline hover:text-indigo-300'
            href='https://www.codecademy.com/learn/learn-typescript'
            target='_blank'
            rel='noreferrer'
          >
            Learn TypeScript
          </a>{' '}
          from Codecademy.
        </p>

        {tech.map(type => {
          const [techType] = Object.keys(type);
          return <TechSection key={techType} type={type} techType={techType} />;
        })}
      </section>
    </Element>
  );
};

export default Tech;
