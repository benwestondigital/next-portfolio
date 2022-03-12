import Image from 'next/image';
import heroImage from '../public/images/heroimage.jpeg';

const SingleProject = ({projName}) => {
  return (
      <div className='flex flex-col items-center'>
    <div className='rounded w-80 h-60 shadow-xl relative'>
    <Image
      src={heroImage}
      alt='project'
      layout='fill'
      objectFit='cover'
      className='p-2 rounded cursor-pointer'
    />
  </div>
    <h2 className='text-xl text-indigo-600 font-semibold'>{projName}</h2>
    </div>
  )
}

export default SingleProject