import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { navLinks } from '../utils';
import { RenderThemeChanger } from './RenderThemeChanger';
import { Dispatch, SetStateAction } from 'react';

type IProps = {
  path: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileLinks = ({ path, isOpen, setIsOpen }: IProps) => (
  <Transition
    show={isOpen}
    enter="transition ease-out duration-700 transform"
    enterFrom="opacity-0 -translate-x-full scale-95"
    enterTo="opacity-100 scale-100 translate-x-0"
    leave="transition ease-in duration-500 transform"
    leaveFrom="opacity-100 translate-x-0 scale-100"
    leaveTo="opacity-0 scale-95 -translate-x-full"
  >
    <nav className="md:hidden" id="mobile-menu">
      <div className="w-full space-y-1 bg-white py-4 dark:bg-gray-900">
        {navLinks.map(({name, urlPath}) => {
          return (
            <div key={urlPath}>
              {path === '/' ? (
                <ScrollLink
                  href={`/${urlPath}`}
                  activeClass={urlPath}
                  to={urlPath}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block cursor-pointer rounded-md px-3 py-2 font-semibold text-black hover:bg-blue-600 hover:text-white dark:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </ScrollLink>
              ) : (
                <Link
                  href={`/#${urlPath}`}
                  onClick={() => setIsOpen(false)}
                  className="block cursor-pointer rounded-md px-3 py-2 font-semibold text-black hover:bg-blue-600 hover:text-white dark:text-white"
                >
                  {name}
                </Link>
              )}
            </div>
          );
        })}
        <div className="pl-3 pt-8">
          <RenderThemeChanger />
        </div>
      </div>
    </nav>
  </Transition>
);
