import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import md from 'markdown-it';
import { useRouter } from 'next/router';
import { Element, Link as ScrollLink } from 'react-scroll';

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
    <Element id='projectpage' name='projectpage'>
      <article className='flex flex-col justify-between items-center md:mx-20 px-4 pt-20 md:pt-32 md:p-28'>
        <div className='flex justify-between w-4/5 mb-10 text-lg'>
          <Link href='/'>
            <a className='cursor-pointer hover:font-semibold'>
              Home
            </a>
          </Link>

          <Link href={`/projects/${nextProject}`}>
            <a className='hover:font-semibold min-w-fit'>Next Project</a>
          </Link>
        </div>
        <div className='flex flex-col justify-center my-6 items-center text-center h-32'>
          <h1 className='mb-5 font-bold text-3xl md:text-5xl min-w-fit'>
            {frontmatter.title}
          </h1>
          <h2 className='text-2xl md:text-3xl'>Type: {frontmatter.type}</h2>
        </div>
        <div className='flex flex-col text-md items-center justify-between md:w-2/3 mb-5'>
          <a
            href={frontmatter.github}
            target='_blank'
            rel='noreferrer'
            className='hover:font-semibold hover:text-blue-600'
          >
            Github Repo
          </a>
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
          className='prose pt-6'
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
        <ScrollLink
          activeClass='projectpage'
          to='projectpage'
          smooth={true}
          offset={-100}
          duration={500}
          className='btn'
        >
          Back to Top
        </ScrollLink>
      </article>
    </Element>
  );
};

export default ProjectPage;
