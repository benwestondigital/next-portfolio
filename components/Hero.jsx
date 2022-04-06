import Image from 'next/image';
import avatar from '../public/images/avatar.png';

const Hero = () => {
  return (
    <section className='flex justify-center md:mx-20 md:pt-32 pt-28'>
      <div className='relative hidden w-1/3 px-10 rounded-full shadow-xl h-96 md:block'>
        <Image
          src={avatar}
          alt='hero'
          layout='fill'
          objectFit='contain'
          priority
          className='hidden rounded-full cursor-pointer md:block'
        />
      </div>
      <div className='flex flex-col mx-10 mt-10 md:w-1/2 md:ml-20'>
        <h1 className='mb-5 font-bold text-left text-5xl md:text-7xl'>
          Hi! I&apos;m <span className='text-indigo-900'>Ben!</span> I love to
          create interesting projects with code.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
