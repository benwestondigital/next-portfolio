import Head from 'next/head';
import About from '../components/About';
import MySkills from '../components/MySkills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import matter from 'gray-matter';
import fs from 'fs';

export async function getStaticProps() {
  const files = fs.readdirSync('projects');
  const projects = files.map(fileName => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`projects/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      projects,
    },
  };
}

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Ben Weston | Dev</title>
        <meta name='description' content="Ben's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <About />
      <Projects projects={projects}/>
      <MySkills />
      <Contact />
    </div>
  );
}
