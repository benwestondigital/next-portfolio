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
          Technology
        </h1>
        
        <TechSection techType={frontEnd} tech={tech}/>
        <TechSection techType={backEnd} tech={tech}/>
        <TechSection techType={other} tech={tech}/>
       
      </div>
    </Element>
  );
};

export default Tech;
