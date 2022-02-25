import type { NextPage } from 'next'
import Head from 'next/head'
import Button from 'react-bootstrap/Button';

const Home: NextPage = () => {

  return (
    <div className='text-center m-5'>
      <Head>
       
      </Head>

      <main>

       <div><h1 style={{ fontSize: 40}}>Welcome to EHA CARE.</h1>
       </div>
       <h2>Hello World!!</h2>
       <p>This is the very first page. Testing Pipeline. Changes made to hope page.</p>
       </main>
    </div>

    
  )
}

export default Home
