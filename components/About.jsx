import Image from 'next/image';
import heroImage from '../public/images/heroimage.jpeg';
import { Element, Link } from 'react-scroll';

const About = () => {
  return (
    <Element id='About' name='About'>
      <div>
        <div className='flex justify-between text-center md:mx-20 md:pt-32 pt-28'>
          <div className='w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block'>
            <Image
              src={heroImage}
              alt='hero'
              layout='fill'
              objectFit='cover'
              className='rounded-full cursor-pointer hidden md:block'
            />
          </div>
          <div className='flex flex-col md:ml-20 mx-10 mt-10'>
            <h1 className='font-bold text-7xl text-left mb-5'>
              Hi, I&apos;m <span className='text-indigo-900'>Ben!</span>
            </h1>
            <p className='text-left font-normal font mb-5 flex-wrap'>
              I am a front-end developer that has recently finished the <a href="https://northcoders.com/" target="_blank" rel="noreferrer" className='font-semibold'>Northcoders</a> software development bootcamp. I am looking for a great Front End Developer role based in London to continue learning and building cool things.
            </p>

            <Link
              activeClass='projects'
              to='projects'
              smooth={true}
              offset={50}
              duration={500}
              className='font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black'
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
