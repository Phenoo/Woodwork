import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='mx-auto max-w-8xl px-6'>
      {children}
    </div>
  )
}

export default Container
