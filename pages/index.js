import Head from 'next/head';
import About from '../components/About';
import Tech from '../components/Tech';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ben Weston Portfolio</title>
        <meta name='description' content="Ben's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <About />
      <Projects />
      <Tech />
      <Contact />
    </div>
  );
}
