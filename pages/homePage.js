import React from 'react';
import Image from 'next/image';
import heroImage from '../public/images/heroimage.jpeg';

const HomePage = () => {
  return (
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
            Hello, I am <span className='text-indigo-900'>Ben</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
