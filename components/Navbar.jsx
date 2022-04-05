import { useState } from 'react';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';
import { useRouter } from 'next/router';
import NavLinks from './NavLinks';
import HamBurger from './HamBurger';
import MobileLinks from './MobileLinks';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const path = router.pathname;
  return (
    <nav className='container px-8 fixed z-20 bg-white'>
      <div className='flex items-center justify-between h-20'>
        <div className='flex justify-start items-center flex-shrink-0 gap-6'>
          <Link href='/' passHref>
            <h1 className='font-bold text-4xl sm:text-3xl cursor-pointer'>
              Ben <span className='text-blue-600'>Weston</span>
            </h1>
          </Link>
          <div className='hidden md:flex'>
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
        <NavLinks path={path} />
        <HamBurger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <MobileLinks path={path} isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
