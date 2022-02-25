import type { NextPage } from 'next'
import Head from 'next/head'
import Button from 'react-bootstrap/Button';
import Topnav from '@components/topnav';

const Home: NextPage = () => {

  return (
    <>
      <Head>
       
      </Head>
      <Topnav />

      <main className="main p-5 text-center">
      
        <h1>Welcome to EHA CARE</h1>
        <h2>Hello World!!!</h2>
        <p>This is the very first page. Testing Pipeline. Changes made to hope page.</p>
        <Button>I'm a bootstrap button</Button>
      </main>
    </>

  )
}

export default Home