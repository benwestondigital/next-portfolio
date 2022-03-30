import { Transition } from '@headlessui/react';
import { Link } from 'react-scroll';
import { navLinks } from '../utils';

const MobileLinks = ({isOpen}) => {
  return (
    <Transition
    show={isOpen}
    enter='transition ease-out duration-100 transform'
    enterFrom='opacity-0 scale-95'
    enterTo='opacity-100 scale-100'
    leave='transition ease-in duration-75 transform'
    leaveFrom='opacity-100 scale-100'
    leaveTo='opacity-0 scale-95'
  >
    <div className='md:hidden' id='mobile-menu'>
      <div className='bg-white mx-4 mr-20 pt-4 pb-4 space-y-1'>
        {navLinks.map(link => {
          return (
            <Link
              key={link.path}
              href={`/${link.path}`}
              activeClass={link.path}
              to={link.path}
              smooth={true}
              offset={50}
              duration={500}
              className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  </Transition>
  )
}

export default MobileLinks