import Image from 'next/image';

const SingleProject = ({ project }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='rounded w-80 h-80 shadow-xl relative'>
        <Image
          src={project.image}
          alt='project'
          layout='fill'
          objectFit='cover'
          className='p-2 rounded cursor-pointer'
          objectPosition='top'
        />
      </div>
      <h2 className='text-xl text-indigo-600 font-semibold'>
        {project.projName}
      </h2>
    </div>
  );
};

export default SingleProject;
