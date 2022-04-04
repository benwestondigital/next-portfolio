import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import md from 'markdown-it';
import { useRouter } from 'next/router';


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
      <div className='flex justify-between w-4/5 mb-10'>
        <Link
          href='/'
          className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'
        >
          Home
        </Link>

        <Link href={`/projects/${nextProject}`}>
          <a className='hover:font-semibold min-w-fit'>Next Project {'>'}</a>
        </Link>
      </div>
      <div className='flex justify-between items-start h-32'>
        <h1 className='mb-5 font-bold text-3xl md:text-5xl min-w-fit'>
          {frontmatter.title}
        </h1>
      </div>
      <div className='flex flex-col sm:flex-row items-center sm:items-start justify-between md:w-2/3 mb-5'>
        <a
          href={frontmatter.github}
          target='_blank'
          rel='noreferrer'
          className='hover:font-semibold hover:text-blue-600'
        >
          Github Repo
        </a>
        <h2>Type: {frontmatter.type}</h2>
        {frontmatter.livelink && (
          <a
            href={frontmatter.livelink}
            target='_blank'
            rel='noreferrer'
            className='hover:font-semibold hover:text-blue-600'
          >
            View Site
          </a>
        )}
      </div>
      <div className='h-96 w-full md:w-96 relative'>
        <Image
          src={`/${frontmatter.image}`}
          alt={frontmatter.title}
          objectFit='cover'
          priority
          layout='fill'
          className='rounded'
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
