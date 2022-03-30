import { useState } from 'react';
import { Link } from 'react-scroll';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';
import { useRouter } from 'next/router';
import NavLinks from './NavLinks';
import HamBurger from './HamBurger';
import MobileLinks from './MobileLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <nav className='fixed z-20 bg-white w-full'>
        <div className='w-full'>
          <div className='flex items-center h-20 w-full'>
            <div className='flex items-center sm:mx-10 md:mx-20 justify-between w-full'>
              {/* Logo Section */}
              <div className='flex justify-center items-center flex-shrink-0 ml-10'>
                <Link
                  activeClass='about'
                  to='about'
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <h1 className='font-bold text-4xl sm:text-3xl cursor-pointer'>
                    Ben <span className='text-blue-600'>Weston</span>
                  </h1>
                </Link>
                <div className='hidden md:ml-5 md:flex'>
                  <a
                    href='https://www.linkedin.com/in/ben-weston-b19420175/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiFillLinkedin className='w-10 h-10 m-1 p-1 text-blue-600 hover:text-gray-600' />
                  </a>
                  <a
                    href='https://github.com/benwestondigital/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <DiGithubBadge className='w-10 h-10 m-1 p-1 text-black hover:text-gray-600' />
                  </a>
                  <a
                    href='https://twitter.com/benwestononline'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiOutlineTwitter className='w-10 h-10 m-1 p-1 text-blue-400 hover:text-gray-600' />
                  </a>
                </div>
              </div>
              <NavLinks />
            </div>
            <HamBurger isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
        <MobileLinks isOpen={isOpen} />
      </nav>
    </div>
  );
};

export default Navbar;
