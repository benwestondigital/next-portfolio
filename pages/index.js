import Head from 'next/head';
import About from '../components/About';
import MySkills from '../components/MySkills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ben Weston | Dev</title>
        <meta name='description' content="Ben's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <About />
      <Projects />
      <MySkills />
      <Contact />
    </div>
  );
}
