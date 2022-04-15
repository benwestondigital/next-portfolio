import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { navLinks } from '../utils';
import RenderThemeChanger from './RenderThemeChanger';

const NavLinks = ({ path }) => {
  return (
    <nav className='hidden md:block'>
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
        <div className='pl-3'>{<RenderThemeChanger />}</div>
      </div>
    </nav>
  );
};

export default NavLinks;
