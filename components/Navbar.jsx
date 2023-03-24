import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import Container from './Container/Container'

import { AiOutlineHeart } from 'react-icons/ai'

import { useStateContext } from '../context/StateContext'

import Cart from './Cart'
import Menu from './icons/Menu'
import Cross from './icons/Cross'
import UserNav from './userNav'
import Switch from './Switch'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [mobile, setMobile] =  useState(false)
  return (
    <header className='sticky min-h-[74px] top-0 bg-primary z-40 transition-all duration-150' id='nav'>
      <div className='h-[4px]' />
        <Container >
          <div className='flex flex-row justify-between my-2 py-2 md:py-2 border-y-2 border-secondary z-20' >
            <div className='flex items-center flex-1'>
              <div className='lg:hidden '>
                <button onClick={() => setMobile(true)} className='z-20'>
                  {
                    mobile? <Cross /> : <Menu />
                  }
                </button>
                {mobile ? <UserNav setMobile={setMobile} /> : ''}
              </div>
              <Switch />
              <nav className='hidden space-x-4 lg:block'>
                <Link href='/shop' > 
                  shop
                </Link>
                <Link href='/blog'>
                  blogs
                </Link>
                <Link href='/about'>
                  about
                </Link>
              </nav>
            </div>
            <div className="justify-center flex-1  lg:flex">
                <Logo />
            </div>
            <div className=" flex items-center justify-end flex-1 space-x-8">
              <div className=" flex items-center gap-4">
                <button className='hidden lg:flex'>
                  <Link href='/wishlist' className=" text-2xl">
                    <AiOutlineHeart />
                  </Link>
                </button>
                <button className='flex flex-row gap-2 items-center' onClick={() => setShowCart(true)}>
                  <span>
                    cart           
                  </span>
                  <span className='rounded-full border border-secondary flex items-center justify-center px-2 py-1'>
                    {totalQuantities}
                  </span>
                </button>
              </div>
            </div>
            <div>
            </div>
          </div>

      {showCart && <Cart />}
    </Container>
    </header>

  )
}

export default Navbar

