const Footer = () => {
  return (
    <div className='h-16 bg-gray-50 flex flex-col justify-center items-center'>
      <h3 className='text-xl text-blue-900 mr-2'>
        Made by{' '}
        <a
          href='#'
          className='cursor-pointer font-semibold text-indigo-900 hover:text-black'
        >
          Ben Weston
        </a>
      </h3>
      <p className="text-sm text-gray-600">Built with Next.js, Tailwind and MDX</p>
    </div>
  );
};

export default Footer;
