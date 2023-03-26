import Head from 'next/head'
import type { NextPage } from 'next'
import { HearIcon } from '@/assets/icons'

import LoginForm from '@/components/screens/home-screen/LoginForm'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LoginForm />
        <HearIcon className="w-6" />
      </main>
    </>
  )
}

export default Home
