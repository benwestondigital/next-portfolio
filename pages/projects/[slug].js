import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import md from 'markdown-it';
import { useRouter } from 'next/router';
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
  const files = fs.readdirSync('projects');
  const paths = files.map(fileName => {
    return fileName.replace('.md', '');
  });
  const fileName = fs.readFileSync(`projects/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
      paths,
    },
  };
}

const ProjectPage = ({ frontmatter, content, paths }) => {
  const router = useRouter();
  const currentPath = router.query.slug;
  const index = paths.findIndex(element => element === currentPath);
  let nextProject;

  if (index < paths.length - 1) {
    nextProject = paths[index + 1];
  } else {
    nextProject = paths[0];
  }

  return (
    <div className='flex flex-col justify-between items-center md:mx-20 p-10 pt-20 md:pt-32 md:p-28'>
      <div className='flex justify-between items-baseline h-48 mx-2 w-full md:w-2/3'>
        <div className='flex flex-col justify-between items-start h-32'>
          <h1 className='mb-5 font-bold text-3xl md:text-5xl min-w-fit'>
            {frontmatter.title}
          </h1>
          <h2>Type: {frontmatter.type}</h2>
        </div>
        <Link href={`/projects/${nextProject}`}>
          <a className='hover:font-semibold min-w-fit'>Next Project {'>'}</a>
        </Link>
      </div>
      <div className='flex justify-between w-1/2'>
        <a href={frontmatter.github} target='_blank' rel='noreferrer'>
          Github Repo
          <DiGithubBadge className='w-20 h-20 m-1 p-1 text-black hover:text-gray-600' />
        </a>
        {frontmatter.livelink && (
          <a
            href={frontmatter.livelink}
            target='_blank'
            rel='noreferrer'
            className='font-semibold hover:text-blue-600'
          >
            View Site
          </a>
        )}
      </div>
      <div className='h-96 w-96 relative'>
        <Image
          src={`/${frontmatter.image}`}
          alt={frontmatter.title}
          objectFit='cover'
          priority
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
