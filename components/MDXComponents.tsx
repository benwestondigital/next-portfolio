import Image from 'next/image';
import { YoutubeEmbed } from './YoutubeEmbed';

type RoundedImage = {
  alt: string;
  src: string;
  width: number;
  height: number;
  priority: boolean;
  figcaption: string;
};

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
