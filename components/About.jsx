import Image from 'next/image';
import avatar from '../public/images/avatar.png';
import { Element, Link } from 'react-scroll';

const About = () => {
  return (
    <Element id='about' name='about'>
      <div className='flex justify-center md:mx-20 md:pt-32 pt-28 '>
        <div className='relative hidden w-1/3 px-10 rounded-full shadow-xl h-96 md:block'>
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
            Hi! I&apos;m <span className='text-indigo-900'>Ben!</span> I love to
            create interesting projects with code.
          </h1>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mx-2 mt-10 md:w-4/5 md:ml-20'>
        <p className='flex-wrap mb-5 md:w-2/3 font-normal text-left'>
          <br />
          I first became interested in coding through playing online games when
          I was a teenager. I saw people creating programs to automate their
          character&apos;s progress and the possibilities of doing this blew me
          away. I tried my hand at learning and thought I was a wizard changing
          the colour of pages with CSS, but I didn&apos;t get any further than
          that.
          <br />
          While having an amazing time on a working holiday in Australia, I got
          sick of working dead-end jobs. I always interested in tech, the future
          of work and how A.I. & machine learning would impact our world. I read
          &apos;Homo Deus&apos; by Yuval Noah Harari and decided I wanted to
          change my career to be a part of this revolution. At Cluey Learning I
          worked with some extremely talented software developers, and I was
          incredibly interested in their work. Through self-directed learning I
          got involved in Digital Marketing, and worked my way into being a
          Senior Paid Media Executive at Click Consult. I learnt so much during
          this period and it developed so many of my soft skills, and also how
          to make analytical, data-driven decisions. I was always making tools
          to speed up my work, and was extremely interested Google Ad&apos;s
          scripts and website tagging, that are both implemented with
          JavaScript.
          <br />I completed the Learn JavaScript Codecademy course during the
          Winter of 2020 and enjoyed it so much that I decided to leave my job
          in March 2021 and fully commit to becoming a software developer. After
          studying on my own for several months, I enrolled in the{' '}
          <a
            href='https://northcoders.com/'
            target='_blank'
            rel='noreferrer'
            className='font-semibold'
          >
            Northcoders
          </a>{' '}
          software development bootcamp. I finished in March 2022, one year
          after I started this journey. I have learnt so much about coding
          fundamentals, front-end, and back-end development from their great
          tutors.
          <br />I am now seeking a great full-time role based in London where I
          can help a company achieve their goals and continue my learning
          journey.
        </p>

        <Link
          activeClass='projects'
          to='projects'
          smooth={true}
          offset={50}
          duration={500}
          className='h-16 pt-5 mt-5 text-lg text-center font-semibold text-white bg-indigo-900 rounded-md md:mt-10 w-60 hover:bg-black'
        >
          See My Portfolio
        </Link>
      </div>
    </Element>
  );
};

export default About;
