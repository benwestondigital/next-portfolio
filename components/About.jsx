import Image from 'next/image';
import avatar from '../public/images/avatar.png';
import { Element, Link } from 'react-scroll';

const About = () => {
  return (
    <Element id='about' name='about'>
      <div>
        <div className='flex justify-around text-center md:mx-20 md:pt-32 pt-28 '>
          <div className='relative hidden w-1/3 px-10 rounded-full shadow-xl h-auto md:block'>
            <Image
              src={avatar}
              alt='hero'
              layout='fill'
              objectFit='contain'
              className='hidden rounded-full cursor-pointer md:block'
            />
          </div>
          <div className='flex flex-col mx-10 mt-10 md:w-1/2 md:ml-20'>
            <h1 className='mb-5 font-bold text-left text-7xl'>
              Hi, I&apos;m <span className='text-indigo-900'>Ben!</span>
            </h1>
            <p className='flex-wrap mb-5 md:w-2/3 font-normal text-left'>
              I am a front-end developer that has recently finished the <a href="https://northcoders.com/" target="_blank" rel="noreferrer" className='font-semibold'>Northcoders</a> software development bootcamp. I am looking for a great role based in London to continue learning and building cool things.
            </p>

            <Link
              activeClass='projects'
              to='projects'
              smooth={true}
              offset={50}
              duration={500}
              className='h-16 pt-5 mt-5 text-lg font-semibold text-white bg-indigo-900 rounded-md md:mt-10 w-60 hover:bg-black'
            >
              See My Portfolio
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
