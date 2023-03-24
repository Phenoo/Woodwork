import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='cursor-pointer transform duration-100 ease-in-out logo'>
      <Link href='/'>
      <h4 className=' logo text-xl md:text-3xl font-bold uppercase text-center '>
        furniture
      </h4>
      </Link>

    </div>
  )
}

export default Logo
