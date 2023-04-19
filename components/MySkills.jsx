import { Element } from 'react-scroll';
import TechSection from './TechSection';
import { tech } from '../utils';

const Tech = () => {
  return (
    <Element id='tech' name='tech' className='scroll-mt-24'>
      <section className='my-32 flex h-auto flex-col items-center justify-center px-2'>
        <h1 className='text-5xl font-bold text-indigo-900 dark:text-indigo-500 sm:text-6xl'>
          My Skills
        </h1>
        <p className='prose my-5 flex-wrap text-center dark:prose-invert md:w-2/3 lg:prose-xl lg:w-1/2'>
          Through my employer I have had access to Udemy and Frontend Masters, so I have continued to study a number of courses on things such as Dev Ops pipelines, Postman, TypeScript, automated testing and more. Here are some of the courses I have completed:
          <br/>
          <a
            className='font-semibold no-underline hover:text-indigo-300 hover:underline'
            href='https://frontendmasters.com/courses/testing-practices-principles/'
            target='_blank'
            rel='noreferrer'
          >
            JavaScript Testing Practices and Principles by Kent C. Dodds
          </a>
          {' '}from Frontend Masters, and{' '}
          <a
            className='font-semibold no-underline hover:text-indigo-300 hover:underline'
            href='https://www.codecademy.com/learn/introduction-to-javascript'
            target='_blank'
            rel='noreferrer'
          >
            Learn JavaScript
          </a>{' '}
          &{' '}
          <a
            className='font-semibold no-underline hover:text-indigo-300 hover:underline'
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
