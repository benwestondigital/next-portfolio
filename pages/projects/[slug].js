import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import md from 'markdown-it';
import { DiGithubBadge } from 'react-icons/di';

export async function getStaticPaths() {
  const files = fs.readdirSync('projects');
  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`projects/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

const ProjectPage = ({ frontmatter, content }) => {
  return (
    <div className='flex flex-col justify-between items-center md:mx-20 md:pt-32 p-28'>
      <div className='flex justify-between mb-10'>
        <h1 className='mb-5 font-bold text-left text-6xl'>
          {frontmatter.title}
        </h1>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
      <div className='flex justify-between w-full'>
        <a href={frontmatter.github} target='_blank' rel='noreferrer'>
          Github Repo
          <DiGithubBadge className='w-20 h-20 m-1 p-1 text-black hover:text-gray-600' />
        </a>
        {frontmatter.livelink && (
          <a href={frontmatter.livelink} target='_blank' rel='noreferrer'>
            View Site
          </a>
        )}
      </div>
      <div className='h-96 w-96 relative'>
        <Image
          src={`/${frontmatter.image}`}
          alt={frontmatter.title}
          objectFit='cover'
          layout='fill'
          className='p-2 rounded'
          objectPosition='top'
        />
      </div>
      <div
        className='prose'
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
    </div>
  );
};

export default ProjectPage;
