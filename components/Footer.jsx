import Link from 'next/link';

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center justify-center'>
      <h3 className='text-xl'>
        <Link href='/'>
          <a className='cursor-pointer font-semibold hover:text-black'>
            Ben <span className='text-blue-600 hover:text-indigo-900'>Weston</span>
          </a>
        </Link>
      </h3>
      <p className='pt-2 pb-4 text-sm text-gray-600'>
        Built with Next.js, Tailwind and MDX
      </p>
    </div>
  );
};

export default Footer;
