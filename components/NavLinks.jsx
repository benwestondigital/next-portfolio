import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { navLinks } from '../utils';

const NavLinks = ({ path }) => {
  return (
    <div className='hidden md:block'>
      <div className='ml-10 flex items-baseline space-x-4'>
      {path !== '/' && <Link href='/' className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>Home</Link>}
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
                  className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <Link
                  key={link.path}
                  href={`/#${link.path}`}
                  className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'
                >
                  {link.name}
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
