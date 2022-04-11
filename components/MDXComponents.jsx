import Image from 'next/image';
import YoutubeEmbed from './YoutubeEmbed';

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
  YoutubeEmbed,
};

export default MDXComponents;
