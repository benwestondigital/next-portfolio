import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className='flex justify-between text-center md:mx-20 md:pt-32 p-28'>
      <h1 className='font-semibold'>{slug}</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </div>
  );
};

export default ProjectPage;
