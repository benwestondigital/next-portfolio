import { Element, Link } from 'react-scroll';
import Hero from './Hero';

export const About = () => {
  return (
    <Element
      id='about'
      name='about'
      className='flex flex-col items-center justify-center px-2'
    >
      <Hero />
      <section className='mt-10 flex flex-1 flex-col items-center justify-center md:w-4/5'>
        <Link
          activeClass='projects'
          to='projects'
          smooth={true}
          offset={-100}
          duration={500}
          className='btn cursor-pointer'
        >
          See My Portfolio
        </Link>
        <div className='prose mb-5 flex-wrap px-2 dark:prose-invert lg:prose-xl'>
          <p className='pt-16'>
            I first became interested in coding through playing online games
            when I was a teenager. I saw people creating programs to automate
            their character&apos;s progress and the possibilities of doing this
            blew me away. I tried my hand at learning and thought I was a wizard
            changing the colour of pages with CSS, but I didn&apos;t get any
            further than that.
          </p>
          <p>
            While having a fantastic time on a working holiday in Australia, I
            became interested in the future of work and how A.I. & Machine
            Learning would impact our world. I decided to change my career to be
            a part of this revolution. I got involved in Digital Marketing, and
            worked my way into being a Senior Paid Media Executive. I learnt so
            much during this period and it developed many of my soft skills like
            stakeholder management, and how to make analytical, data-driven
            decisions.
          </p>
          <p>
            During 2021 I fully committed to becoming a Software Developer.
            After studying on my own for several months, I enrolled in the{' '}
            <a
              href='https://northcoders.com/'
              target='_blank'
              rel='noreferrer'
              className='font-semibold no-underline hover:text-indigo-300 hover:underline'
            >
              Northcoders
            </a>{' '}
            Software Development bootcamp. I finished in March 2022, and for the
            past year I have been working as a Software Engineer on Basket,
            Checkout & Payment microservices for a large e-commerce website
            exceeding £10m in monthly revenue.
          </p>
          <p>
            I have been using React, Next.js, Node, Express, and Playwright on a
            daily basis and I&apos;ve really enjoyed working with such
            intelligent people. The technical skills I have learnt, and the soft
            skills I&apos;ve gained from my Digital Marketing experience have
            helped me quickly become an important member of the team.
          </p>
          <p>
            Please take a look at the Projects section to see detailed descriptions of
            a few of my projects, and my{' '}
            <a
              href='https://github.com/benwestondigital/'
              target='_blank'
              rel='noreferrer'
              className='font-semibold no-underline hover:text-indigo-300 hover:underline'
            >
              Github
            </a>{' '}
            to see current projects I am working on.
          </p>
        </div>
      </section>
    </Element>
  );
};
