import { Link } from 'react-scroll';
import { navLinks } from '../utils';

const NavLinks = () => {
  return (
    <div className='hidden md:block'>
      <div className='ml-10 flex items-baseline space-x-4'>
        {navLinks.map(link => {
          return (
            <Link
              key={link.path}
              activeClass={link.path}
              to={link.path}
              smooth={true}
              offset={50}
              duration={500}
              className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavLinks;
