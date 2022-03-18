import Image from 'next/image';
import Link from 'next/link';

const SingleProject = ({ project }) => {
  return (
    <div className='flex flex-col w-96 items-center justify-start'>
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
      <h2 className='text-xl m-2 mt-5 text-indigo-600 font-semibold'>
        {project.projName}
      </h2>
      <p className='text-center font-normal mx-2 mb-5 flex-wrap'>
        {project.description}
      </p>
      <Link
        href={`/projects/${project.slug}`}
      >
        <a className='uppercase text-center font-normal font mb-5 flex-wrap'>See Project Details &gt;</a>
      </Link>
    </div>
  );
};

export default SingleProject;
