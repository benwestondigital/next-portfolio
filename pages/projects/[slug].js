import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import md from 'markdown-it';

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
    <div className='flex flex-col justify-between prose md:mx-20 md:pt-32 p-28'>
      <div className='flex justify-between mb-10'>
        <h1 className='font-semibold'>{frontmatter.title}</h1>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
      <Image
        src={`/${frontmatter.socialImage}`}
        alt={frontmatter.title}
        width={400}
        height={400}
        objectFit='cover'
        className='p-2 rounded cursor-pointer'
        objectPosition='top'
      />
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
};

export default ProjectPage;
