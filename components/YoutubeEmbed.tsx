type IProps = {
  embedId: string;
}

export const YoutubeEmbed = ({ embedId }: IProps) => (
  <div className='relative h-0 overflow-hidden pb-[56.25%]'>
    <iframe
      width='853'
      height='480'
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
      className='absolute left-0 top-0 h-full w-full'
    />
  </div>
);
