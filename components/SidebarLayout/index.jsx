import React from 'react'
import cn from 'clsx'
import s from './SidebarLayout.module.css'

import  ChevronLeft from '../icons/ChevronLeft'
import Cross from '../icons/Cross'
import { useStateContext } from '../../context/StateContext'

const SidebarLayout = ({children}) => {
  const { showCart, setShowCart } = useStateContext();

  const handleBack = () => {
    setShowCart(false)
  }

  return (
    <div className={cn(s.root)}>
      <header className={s.header}>
        <button
          onClick={handleBack}
          aria-label="Close"
          className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none mr-6"
        >
          <Cross className="h-6 w-6 hover:text-accent-3" />
          <span className="ml-2 text-accent-7 text-sm ">Close</span>
        </button>
        <button
          onClick={handleBack}
          aria-label="Go back"
          className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none"
        >
          <ChevronLeft className="h-6 w-6 hover:text-accent-3" />
          <span className="ml-2 text-accent-7 text-sm">Back</span>
        </button>
      </header>
      <div className={s.container}>{children}</div>
  </div>
  )
}

export default SidebarLayout