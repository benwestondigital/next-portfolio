import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { navLinks } from '../utils';

const NavLinks = ({ path }) => {
  return (
    <div className='hidden md:block'>
      <div className='flex flex-1 items-center gap-4 font-semibold lg:gap-6'>
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
      </div>
    </div>
  );
};

export default NavLinks;
