import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import Container from './Container'
import UserNav from './userNav'

const Navbar = () => {
  return (
    <Container >
      <div className='relative flex flex-row justify-between my-2 py-2 md:py-2 border-y-4 border-[#111]'>
        <div className='flex items-center flex-1'>
          <nav className=' space-x-4 lg:block'>
            <Link href='/shop' > 
              shop
            </Link>
            <Link href='/blog'>
              blogs
            </Link>
            <Link href='about'>
              about
            </Link>
          </nav>
        </div>
        <div className="justify-center flex-1  lg:flex">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className=" flex items-center justify-end flex-1 space-x-8">
          <div>
            <Link href='/cart' className='flex flex-row gap-2 items-center'>
              <span>
                cart           
              </span>
              <span className='rounded-full border border-black flex items-center justify-center px-2 py-1'>
                0
              </span>
            </Link>
          </div>
          <UserNav />
        </div>
        <div>
        </div>
      </div>
    </Container>
  )
}

export default Navbar
