import Image from 'next/image';
import Link from 'next/link';

const SingleProject = ({ project: { slug, frontmatter } }) => {
  return (
    <Link href={`/projects/${slug}`}>
      <a className='flex flex-col w-80 sm:w-96 items-center justify-start hover:bg-gray-50 hover:shadow-xl rounded p-2'>
        <div className='rounded w-72 h-72 sm:w-80 sm:h-80 shadow-xl relative'>
          <Image
            src={`/${frontmatter.image}`}
            alt={frontmatter.title}
            layout='fill'
            objectFit='cover'
            className='p-2 rounded cursor-pointer'
            objectPosition='top'
          />
        </div>
        <h3 className='mx-2 mt-6 text-xs uppercase font-semibold text-gray-600 tracking-wide'>
          {frontmatter.type}
        </h3>
        <h2 className='text-xl my-2 text-indigo-600 font-semibold'>
          {frontmatter.title}
        </h2>
        <p className='text-base text-center mx-2 mb-5 flex-wrap text-gray-700'>
          {frontmatter.description}
        </p>
        <div className='flex items-center'>
          <p className='uppercase text-center text-sm font-semibold tracking-wide text-gray-900 hover:text-blue-600'>
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
