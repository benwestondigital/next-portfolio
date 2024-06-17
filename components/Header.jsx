import { useState } from 'react';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';
import { useRouter } from 'next/router';
import NavLinks from './NavLinks';
import HamBurger from './HamBurger';
import MobileLinks from './MobileLinks';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const path = router.pathname;

  return (
    <header className='container fixed z-20 bg-white px-4 dark:bg-gray-900 md:px-8'>
      <div className='flex h-20 items-center justify-between'>
        <div className='flex flex-1 items-center justify-start gap-2 lg:gap-6'>
          <Link href='/' passHref legacyBehavior>
            <h1 className='animate-slideIn cursor-pointer text-2xl font-bold md:text-2xl'>
              Ben <span className='text-blue-600'>Weston</span>
            </h1>
          </Link>

          <div className='hidden md:flex'>
            <a
              href='https://www.linkedin.com/in/ben-weston-b19420175/'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillLinkedin className='m-1 h-10 w-10 p-1 text-[#0072b1] hover:animate-wiggle hover:text-gray-600' />
            </a>
            <a
              href='https://github.com/benwestondigital/'
              target='_blank'
              rel='noreferrer'
            >
              <DiGithubBadge className='m-1 h-10 w-10 p-1 text-black hover:animate-wiggle hover:text-gray-600 dark:text-white dark:hover:text-gray-600' />
            </a>
            <a
              href='https://twitter.com/benwestononline'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineTwitter className='m-1 h-10 w-10 p-1 text-[#00acee] hover:animate-wiggle hover:text-gray-600' />
            </a>
          </div>
        </div>
        <NavLinks path={path} />
        <HamBurger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <MobileLinks path={path} isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
