import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { Element, Link as ScrollLink } from 'react-scroll';

export async function getStaticPaths() {
  const files = fs.readdirSync('projects');
  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace('.mdx', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

const ResponsiveImage = props => (
  <Image alt={props.alt} layout='responsive' {...props} />
);

const components = {
  img: ResponsiveImage,
};

export async function getStaticProps({ params: { slug } }) {
  const files = fs.readdirSync('projects');
  const paths = files.map(fileName => {
    return fileName.replace('.mdx', '');
  });
  const fileName = fs.readFileSync(`projects/${slug}.mdx`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      mdxSource,
      paths,
    },
  };
}

const ProjectPage = ({ frontmatter, mdxSource, paths }) => {
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
      <article className='flex flex-col justify-between items-center px-4 pt-20 md:pt-28'>
        <div className='flex justify-between w-4/5 sm:w-2/3 my-4 text-lg'>
          <Link href='/'>
            <a className='cursor-pointer hover:font-semibold'>Home</a>
          </Link>
          <Link href={`/projects/${nextProject}`}>
            <a className='hover:font-semibold'>Next Project</a>
          </Link>
        </div>
        <div className='flex flex-col justify-center my-4 items-center text-center h-32'>
          <h1 className='mb-5 font-bold text-2xl md:text-5xl min-w-fit'>
            {frontmatter.title}
          </h1>
          <h2 className='text-lg sm:text-xl md:text-3xl'>
            Type: {frontmatter.type}
          </h2>
        </div>
        <div className='flex flex-col items-center justify-between mb-5'>
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
        <div className='prose pt-6'>
          <MDXRemote {...mdxSource} components={components} />
        </div>
        <ScrollLink
          activeClass='projectpage'
          to='projectpage'
          smooth={true}
          offset={-100}
          duration={500}
          className='btn mb-4 sm:mb-10'
        >
          Back to Top
        </ScrollLink>
      </article>
    </Element>
  );
};

export default ProjectPage;
