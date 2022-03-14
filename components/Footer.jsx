const Footer = () => {
  return (
    <div className='w-full h-16 bg-gray-50 flex justify-center items-center'>
      <h3 className='text-xl text-blue-900 mr-2'>Made by</h3>
      <h3 className='text-xl -ml-0.5 text-blue-900'>
        <a
          href='#'
          className='cursor-pointer font-semibold text-indigo-900 hover:text-black'
        >
          Ben Weston
        </a>
      </h3>
    </div>
  );
};

export default Footer;
