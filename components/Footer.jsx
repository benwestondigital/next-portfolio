import Link from 'next/link';

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900'>
      <h3 className='pt-4 text-xl'>
        <Link href='/' className='cursor-pointer font-semibold hover:opacity-60' passHref>

          <span className='dark:hover:text-white'>
            Ben
          </span>{' '}
          <span className='text-blue-600 hover:text-indigo-900 dark:hover:text-indigo-500'>
            Weston
          </span>

        </Link>
      </h3>
      <p className='prose pt-2 pb-4 text-sm dark:prose-invert'>
        Built with Next.js, Tailwind and MDX
      </p>
      <div className='dark:prose-dark prose mt-4 mr-8 flex flex-col self-end text-sm md:hidden'>
        <p className='mb-1 text-xs uppercase tracking-wide text-gray-600 dark:text-gray-400'>
          Links
        </p>
        <a
          href='https://www.linkedin.com/in/ben-weston-b19420175/'
          target='_blank'
          rel='noreferrer'
          className='pb-1 font-semibold text-black no-underline hover:animate-wiggle hover:text-orange-400 active:underline dark:text-white dark:hover:text-orange-400'
        >
          LinkedIn
        </a>
        <a
          href='https://github.com/benwestondigital/'
          target='_blank'
          rel='noreferrer'
          className='py-1 font-semibold text-black no-underline hover:animate-wiggle hover:text-orange-400 active:underline dark:text-white dark:hover:text-orange-400'
        >
          GitHub
        </a>
        <a
          href='https://twitter.com/benwestononline'
          target='_blank'
          rel='noreferrer'
          className='py-1 pb-4 font-semibold text-black no-underline hover:animate-wiggle hover:text-orange-400 active:underline dark:text-white dark:hover:text-orange-400'
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Footer;
