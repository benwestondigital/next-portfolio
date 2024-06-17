import Head from 'next/head';
import { About } from '@/components/About';
import { MySkills } from '@/components/MySkills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { useEffect } from 'react';
import { getAllFilesFrontMatter } from '../lib/mdx';

export default function Home({ projects }) {
  useEffect(() => {
    console.log(`
    This website was created by
    _ __            __    _                
    ( /  )          ( /   /      _/_        
     /--< _  _ _     / / /_  (   /  __ _ _  
    /___/(/_/ / /_  (_/_/(/_/_)_(__(_)/ / /_`);
  }, []);

  return (
    <div>
      <Head>
        <title>Ben Weston | Dev</title>
        <meta name="description" content="Ben's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
      <Projects projects={projects} />
      <MySkills />
      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter('projects');
  return { props: { projects } };
}
