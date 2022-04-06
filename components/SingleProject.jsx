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
        <h2 className='text-xl m-2 mt-5 text-indigo-600 font-semibold'>
          {frontmatter.title}
        </h2>
        <h3 className='mx-2 mb-2'>Project Type: {frontmatter.type}</h3>
        <p className='text-center font-normal mx-2 mb-5 flex-wrap'>
          {frontmatter.description}
        </p>

        <p className='uppercase text-center font-normal font mb-5 flex-wrap'>
          See Project Details &gt;
        </p>
      </a>
    </Link>
  );
};

export default SingleProject;
