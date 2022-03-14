import { Element } from 'react-scroll';
import TechSection from '../components/TechSection';
import { tech } from '../utils';

// TODO:fix colours and icons for this section
const Tech = () => {
  const frontEnd = tech.filter(tech => tech.type === 'Front End');
  const backEnd = tech.filter(tech => tech.type === 'Back End');
  const other = tech.filter(tech => tech.type === 'Other');
  return (
    <Element id='tech' name='tech'>
      <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
        <h1 className='text-indigo-900 text-6xl font-bold text-center'>
          My Skills
        </h1>
        <p className='text-left font-normal font m-5 flex-wrap'>
          I love to learn new skills, so in addition to my bootcamp I have
          completed a number of online courses from providers like Codecademy,
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
        </p>

        <TechSection techType={frontEnd} />
        <TechSection techType={backEnd} />
        <TechSection techType={other} />
      </div>
    </Element>
  );
};

export default Tech;
