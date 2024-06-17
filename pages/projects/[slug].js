import { MDXRemote } from 'next-mdx-remote';
import { Element } from 'react-scroll';
import Head from 'next/head';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { MDXComponents } from '@/components/MDXComponents';
import { getFileBySlug, getFiles } from '@/lib/mdx';

const ProjectPage = ({ project: { mdxSource, frontMatter } }) => {
  const title = `Ben Weston | ${frontMatter.title}`;

  return (
    <Element id="projectpage" name="projectpage">
      <Head>
        <title>{title}</title>
      </Head>
      <article className="flex flex-col items-center justify-between px-4 pt-20 md:pt-28">
        <div className="mb-4 mt-24 flex h-32 flex-col justify-center md:items-center">
          <h2 className="text-lg font-semibold text-blue-600">
            {frontMatter.type}
          </h2>
          <h1 className="my-5 text-4xl font-bold md:text-center">
            {frontMatter.title}
          </h1>
          <h3 className="text-lg font-semibold text-blue-500">
            Completion Date: {frontMatter.date}
          </h3>
        </div>
        <div className="mb-5 flex animate-fadeInUp flex-row justify-between self-start text-gray-700 md:items-center md:gap-x-10 md:self-center">
          <a
            href={frontMatter.github}
            target="_blank"
            rel="noreferrer"
            className="hover:font-semibold hover:text-blue-600"
          >
            <AiFillGithub className="m-1 h-11 w-11 p-1 text-gray-900 hover:animate-wiggle hover:text-orange-400 dark:text-white dark:hover:text-orange-400" />
          </a>
          {frontMatter.livelink && (
            <a
              href={frontMatter.livelink}
              target="_blank"
              rel="noreferrer"
              className="hover:animate-wiggle hover:font-semibold hover:text-blue-600"
            >
              <FaExternalLinkAlt className="m-1 h-10 w-10 p-1 text-gray-900 hover:text-orange-400 dark:text-white dark:hover:text-orange-400" />
            </a>
          )}
          {frontMatter.northcoderslink && (
            <a
              href={frontMatter.northcoderslink}
              target="_blank"
              rel="noreferrer"
              className="hover:animate-wiggle hover:font-semibold hover:text-blue-600"
            >
              <BsInfoCircle className="m-1 h-10 w-10 p-1 text-gray-900 hover:text-orange-400 dark:text-white dark:hover:text-orange-400" />
            </a>
          )}
        </div>
        <div className="prose w-full pt-6 dark:prose-invert">
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </div>
      </article>
    </Element>
  );
};

export async function getStaticPaths() {
  const projects = await getFiles('projects');

  return {
    paths: projects.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const project = await getFileBySlug('projects', slug);

  return {
    props: {
      project,
    },
  };
}

export default ProjectPage;
