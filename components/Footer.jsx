const Footer = () => {
  return (
    <div className='mt-16 flex flex-col justify-center items-center'>
      <h3 className='text-xl'>
        <a
          href='#'
          className='cursor-pointer font-semibold hover:text-black'
        >
          Ben <span className='text-blue-600'>Weston</span>
        </a>
      </h3>
      <p className='text-sm pt-2 pb-4 text-gray-600'>
        Built with Next.js, Tailwind and MDX
      </p>
    </div>
  );
};

export default Footer;
