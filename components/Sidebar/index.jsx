import React from 'react'
import s from './Sidebar.module.css'

const Sidebar = ({children}) => {
  
  return (
    <div
    className={s.root}
  >
    <div className="absolute inset-0 overflow-hidden">
      <div className={s.backdrop}  />
      <section className="absolute inset-y-0 right-0 w-full md:w-auto max-w-full flex outline-none md:pl-10">
        <div className="h-full w-full md:w-screen md:max-w-md">
          <div className={s.sidebar} >
            {children}
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}

export default Sidebar 