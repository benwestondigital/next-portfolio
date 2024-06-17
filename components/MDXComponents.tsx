import Image from 'next/image';
import { YoutubeEmbed } from './YoutubeEmbed';
import { type RoundedImage } from '@/types/RoundedImage';

const RoundedImage = (props: RoundedImage) => (
  <figure>
    <Image
      {...props}
      alt={props.alt}
      className="rounded-lg"
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
    {props.figcaption && (
      <figcaption className="italic">{props.figcaption}</figcaption>
    )}
  </figure>
);

export const MDXComponents = {
  Image: RoundedImage,
  YoutubeEmbed,
};
