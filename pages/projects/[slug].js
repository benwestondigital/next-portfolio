import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { Element } from 'react-scroll';
import Head from 'next/head';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

//TODO: add link to whereto northcoders project page with ternary live link : project page
//TODO: add 4 pictures for each project - screenshots size 359*432
//TODO: for code, I can add snippets rather than having to do a screenshot

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
      <Head>
        <title>Ben Weston | {frontmatter.title}</title>
      </Head>
      <article className='flex flex-col items-center justify-between px-4 pt-20 md:pt-28'>
        {/*         <div className='flex justify-between w-4/5 sm:w-2/3 my-4 text-lg text-gray-700'>
          <Link href='/'>
            <a className='cursor-pointer hover:font-semibold'>Home</a>
          </Link>
          <Link href={`/projects/${nextProject}`}>
            <a className='hover:font-semibold'>Next Project</a>
          </Link>
        </div> */}
        <div className='mb-4 mt-24 flex h-32 flex-col justify-center md:items-center'>
          <h2 className='text-lg font-semibold text-blue-600'>
            {frontmatter.type}
          </h2>
          <h1 className='my-5 text-4xl font-bold md:text-center'>
            {frontmatter.title}
          </h1>
        </div>
        <div className='mb-5 flex animate-fadeInUp flex-row justify-between self-start text-gray-700 md:items-center md:gap-x-10 md:self-center'>
          <a
            href={frontmatter.github}
            target='_blank'
            rel='noreferrer'
            className='hover:font-semibold hover:text-blue-600'
          >
            <AiFillGithub className='m-1 h-11 w-11 p-1 text-gray-900 hover:animate-wiggle hover:text-orange-400' />
          </a>
          {frontmatter.livelink && (
            <a
              href={frontmatter.livelink}
              target='_blank'
              rel='noreferrer'
              className='hover:animate-wiggle hover:font-semibold hover:text-blue-600'
            >
              <FaExternalLinkAlt className='m-1 h-10 w-10 p-1 text-gray-900 hover:text-orange-400' />
            </a>
          )}
        </div>
        <div className='relative h-96 w-full md:w-96'>
          <Image
            src={`/${frontmatter.image}`}
            alt={frontmatter.title}
            objectFit='contain'
            priority
            layout='fill'
            className='rounded'
          />
        </div>
        <div className='prose pt-6'>
          <MDXRemote {...mdxSource} components={components} />
        </div>
      </article>
    </Element>
  );
};

const mdxImage = props => (
  <div className='relative mx-auto h-96 w-full md:w-96'>
    <Image
      alt={props.alt}
      layout='fill'
      objectFit='contain'
      className='rounded p-2'
      {...props}
    />
  </div>
);

const components = {
  img: mdxImage,
};

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

export default ProjectPage;
