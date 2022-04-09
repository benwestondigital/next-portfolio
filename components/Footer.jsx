import Link from 'next/link';

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900'>
      <h3 className='pt-4 text-xl'>
        <Link href='/'>
          <a className='cursor-pointer font-semibold hover:text-black'>
            Ben{' '}
            <span className='text-blue-600 hover:text-indigo-900'>Weston</span>
          </a>
        </Link>
      </h3>
      <p className='pt-2 pb-4 text-sm text-gray-600'>
        Built with Next.js, Tailwind and MDX
      </p>
      <div className='prose mt-4 mr-8 flex flex-col self-end text-sm md:hidden'>
        <p className='mb-1 text-xs uppercase tracking-wide text-gray-600'>
          Links
        </p>
        <a
          href='https://www.linkedin.com/in/ben-weston-b19420175/'
          target='_blank'
          rel='noreferrer'
          className='pb-1 font-semibold text-black no-underline hover:animate-wiggle hover:text-orange-400 active:underline'
        >
          LinkedIn
        </a>
        <a
          href='https://github.com/benwestondigital/'
          target='_blank'
          rel='noreferrer'
          className='py-1 font-semibold text-black no-underline hover:animate-wiggle hover:text-orange-400 active:underline'
        >
          GitHub
        </a>
        <a
          href='https://twitter.com/benwestononline'
          target='_blank'
          rel='noreferrer'
          className='py-1 pb-4 font-semibold text-black no-underline hover:animate-wiggle hover:text-orange-400 active:underline'
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Footer;
