import Image from "next/image";
import YoutubeEmbed from './YoutubeEmbed';

function RoundedImage(props) {
  return (
    <figure>
      <Image
        alt={props.alt}
        className='rounded-lg'
        {...props}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto"
        }} />
      {props.figcaption && <figcaption className='italic'>{props.figcaption}</figcaption>}
    </figure>
  );
}

const MDXComponents = {
  Image: RoundedImage,
  YoutubeEmbed,
};

export default MDXComponents;
