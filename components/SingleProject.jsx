import Image from 'next/image';
import Link from 'next/link';

const SingleProject = ({ project: { slug, frontmatter } }) => {
  return (
    <Link href={`/projects/${slug}`}>
      <a className='flex w-80 flex-col items-center justify-start rounded p-2 hover:bg-gray-50 hover:drop-shadow-lg sm:w-96  md:hover:scale-105 transition ease-in-out delay-150'>
        <div className='relative h-72 w-72 rounded drop-shadow-md sm:h-80 sm:w-80'>
          <Image
            src={`/${frontmatter.image}`}
            alt={frontmatter.title}
            layout='fill'
            objectFit='cover'
            className='cursor-pointer rounded p-2'
            objectPosition='top'
          />
        </div>
        <h3 className='mx-2 mt-6 text-xs font-semibold uppercase tracking-wide text-gray-600'>
          {frontmatter.type}
        </h3>
        <h2 className='my-2 text-xl font-semibold text-indigo-600'>
          {frontmatter.title}
        </h2>
        <p className='mx-2 mb-5 flex-wrap text-center text-base text-gray-700'>
          {frontmatter.description}
        </p>
        <div className='flex items-center'>
          <p className='text-center text-sm font-semibold uppercase tracking-wide text-gray-900 hover:text-blue-600 hover:underline'>
            See Project Details
          </p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-blue-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m13 7 5 5m0 0-5 5m5-5H6'
            />
          </svg>
        </div>
      </a>
    </Link>
  );
};

export default SingleProject;
