import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ben Weston Portfolio</title>
        <meta name="description" content="Ben's portfolio"/>
      </Head>
    <Navbar/>
    </div>
  )
}
