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
    <nav className='container fixed z-20 bg-white px-4 md:px-8'>
      <div className='flex h-20 items-center justify-between'>
        <div className='flex flex-shrink-0 items-center justify-start gap-6'>
          <Link href='/' passHref>
            <h1 className='cursor-pointer text-2xl font-bold md:text-2xl animate-slideIn'>
              Ben <span className='text-blue-600'>Weston</span>
            </h1>
          </Link>
          
          <div className='hidden md:flex'>
            <a
              href='https://www.linkedin.com/in/ben-weston-b19420175/'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillLinkedin className='m-1 h-10 w-10 p-1 text-blue-600 hover:text-gray-600 hover:animate-wiggle' />
            </a>
            <a
              href='https://github.com/benwestondigital/'
              target='_blank'
              rel='noreferrer'
            >
              <DiGithubBadge className='m-1 h-10 w-10 p-1 text-black hover:text-gray-600 hover:animate-wiggle' />
            </a>
            <a
              href='https://twitter.com/benwestononline'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineTwitter className='m-1 h-10 w-10 p-1 text-blue-400 hover:text-gray-600 hover:animate-wiggle' />
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
