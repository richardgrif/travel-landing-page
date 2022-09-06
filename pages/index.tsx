import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navgar from '../components/Navgar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Responsive Travel Landing Page</title>
        <link rel="icon" href="/pro.ico" />
      </Head>
      <Navgar />
      
    </div>
  )
}

export default Home
