import React from 'react'
import Tophead from '../components/Tophead'
import Head from 'next/head'

const Notfound = () => {
  return (
    <div className="max-w-2xl h-[100vh] mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit">
          <Head>
        <title>Not found</title>
      </Head>
      <Tophead title="Not Found" />
      <h6>
        The requested page doesn&apos;t  exist or you don&apos;t have access to it.
      </h6>
    </div>  )
}

export default Notfound