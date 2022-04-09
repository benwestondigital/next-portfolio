import Image from 'next/image';

function RoundedImage(props) {
  return (
    <Image
      alt={props.alt}
      className='rounded-lg'
      layout='responsive'
      {...props}
    />
  );
}

const MDXComponents = {
  Image: RoundedImage,
};

export default MDXComponents;
