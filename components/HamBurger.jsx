const HamBurger = ({ isOpen, setIsOpen }) => {
  return (
    <div className='flex justify-end md:hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type='button'
        className='items-center justify-center rounded-md bg-blue-600 p-2 text-white hover:bg-black focus:outline-none focus:ring-white'
        aria-controls='mobile-menu'
        aria-expanded='false'
      >
        <span className='sr-only'>Open main menu</span>
        {/* Menu functionality */}
        {!isOpen ? (
          <svg
            className='block h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6H16M4 12h16M4 18h16'
            />
          </svg>
        ) : (
          <svg
            className='block h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default HamBurger;
