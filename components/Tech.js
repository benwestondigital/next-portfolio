import { Element } from 'react-scroll';
import TechSection from '../components/TechSection';
import { tech } from '../utils';

const Tech = () => {
  const frontEnd = tech.filter(tech => tech.type === 'Front End');
  const backEnd = tech.filter(tech => tech.type === 'Back End');
  const other = tech.filter(tech => tech.type === 'Other');
  return (
    <Element id='tech' name='tech'>
      <div className='flex flex-col items-center justify-center w-full h-auto my-40'>
        <h1 className='text-6xl font-bold text-indigo-900'>
          My Skills
        </h1>
        <p className='flex-wrap w-1/2 my-5 font-normal'>
          I love to learn new skills, so in addition to my bootcamp I have
          completed a number of courses from providers like Codecademy,
          such as{' '}
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

        <TechSection techType={frontEnd} />
        <TechSection techType={backEnd} />
        <TechSection techType={other} />
      </div>
    </Element>
  );
};

export default Tech;
