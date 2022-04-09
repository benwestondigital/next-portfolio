import Image from 'next/image';
import { useState } from 'react';
import avatar from '../public/images/avatar.png';

const Hero = () => {
  const [effect, setEffect] = useState(false);
  return (
    <section className='h-auto'>
      <div className='flex h-4/5 animate-fadeIn md:animate-fadeInUp items-center justify-center pt-28 md:mx-20 md:pt-32'>
        <div className='relative hidden h-96 w-1/3 flex-1 rounded-full shadow-xl md:block'>
          <Image
            src={avatar}
            alt='hero'
            layout='fill'
            objectFit='contain'
            priority
            className={`${
              effect && 'animate-wiggleShort'
            } hidden cursor-pointer rounded-full md:block`}
            onClick={() => setEffect(true)}
            onAnimationEnd={() => setEffect(false)}
          />
        </div>
        <div className='mx-10 mt-10 flex flex-1 flex-col md:ml-20 md:w-3/5 lg:w-1/2'>
          <h1 className='mb-5 text-left text-5xl font-bold md:text-6xl'>
            Hi! I&apos;m <span className='text-indigo-900 dark:text-indigo-500'>Ben</span>. I love to
            create interesting projects with code.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
