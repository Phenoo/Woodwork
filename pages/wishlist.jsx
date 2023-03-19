import Head from 'next/head'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

const Wishlist = () => {
  return (
    <div>
          <Head>
        <title>Wishlist</title>
      </Head>
      <section className='h-screen w-full'>
        <div className="flex items-center justify-center flex-col gap-4 h-full">
          <div>
            <AiOutlineHeart size={50} />
          </div>
          <p className=''>login to see your wishlist</p>
        </div>
      </section>
    </div>
  )
}

export default Wishlist