import Head from 'next/head';
import Navbar from '../components/Navbar';
import HomePage from './HomePage';
import Tech from './Tech';
import Projects from './projects/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ben Weston Portfolio</title>
        <meta name='description' content="Ben's portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <HomePage />
      <Projects />
      <Tech />
    </div>
  );
}
