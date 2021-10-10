import type { NextPage } from 'next'
import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Signout from '../component/signout'
import Signin from '../component/signin'

const Home: NextPage = () => {

  return (
    <div>
        <Head>
          <title>DDUDO</title>
           <meta name="description" content="DDUDO와 함께 시작하세요!" />
        </Head>
        {/*<Signout/>*/}
        <Signin/>
    </div>
  )
}

export default Home
