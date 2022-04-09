import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { navLinks } from '../utils';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const NavLinks = ({ path }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className='h-7 w-7 hover:text-orange-300'
          role='button'
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className='h-7 w-7 hover:text-gray-400'
          role='button'
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <div className='hidden md:block'>
      <div className='flex flex-1 items-center gap-2 font-semibold lg:gap-6'>
        {navLinks.map(link => {
          return (
            <div key={link.path}>
              {path === '/' ? (
                <ScrollLink
                  key={link.path}
                  activeClass={link.path}
                  to={link.path}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className='text-md cursor-pointer px-3 py-2 hover:text-blue-600'
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <Link key={link.path} href={`/#${link.path}`}>
                  <a className='text-md cursor-pointer px-3 py-2 hover:text-blue-600'>
                    {' '}
                    {link.name}
                  </a>
                </Link>
              )}
            </div>
          );
        })}
        {renderThemeChanger()}
      </div>
    </div>
  );
};

export default NavLinks;
