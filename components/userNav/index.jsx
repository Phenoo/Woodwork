import React from 'react'
import Link from 'next/link'
import cn from 'clsx'
import s from './User.module.css'

import Cross from '../icons/Cross'
import Logo from '../Logo'
import Sidebar from '../Sidebar'

import { FaYinYang} from 'react-icons/fa'

const UserNav = ({setMobile}) => {
  return (
    <Sidebar>
      <div className='fixed h-screen w-full bg-primary  inset-0'>
        <div className={cn(s.root)}>
          <header className={s.header}>
            <button
              onClick={() => setMobile(false)}
              aria-label="Close"
              className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none"
            >
              <Cross className="h-6 w-6 hover:text-accent-3" />
            </button>
            <Logo />
            <button>
              
            </button>
          </header>
          <div className={s.container}>
            <nav className='flex flex-col gap-6 p-6  px-10 mt-8'>
                <Link href='/'  className='capitalize text-xl text-primary' onClick={() => setMobile(false)}> 
                  home
                </Link>
                <Link href='/about' className='capitalize text-xl text-primary' onClick={() => setMobile(false)}>
                  about
                </Link>
                <Link href='/shop'  className='capitalize text-xl text-primary' onClick={() => setMobile(false)}> 
                  shop
                </Link>
                <Link href='/blog' className='capitalize text-xl text-primary' onClick={() => setMobile(false)}>
                  blogs
                </Link>

            </nav>
          </div>
          <div className='flex justify-end p-8'>
              <FaYinYang size={60} className=' animate-spin' />
           </div>
        </div>
      </div>
    </Sidebar>
      
  )
}

export default UserNav





