import React from 'react'
import Container from './Container/Container'

const Subscribe = () => {
  return (
    <Container>

    <div className='mt-[200px] flex justify-center flex-col items-center'>
      <h2 className='text-lg md:text-2xl lg:text-3xl font-bold text-center uppercase'>
        Subscribe to our newsletter and <br /> receive the latest product updates
      </h2>
      <div className='mt-4'>
        <div className='flex'>
          <form>
            <input type='email' placeholder='Enter Your Email Address' className='bg-primary w-[250px] p-2 py-4 border-2 border-grey  rounded text-sm outline-none rounded-r-none' required/>
          </form>
          <button className='bg-secondary text-secondary capitalize p-2 px-4 rounded-md rounded-l-none'> 
            subscribe
          </button>
        </div>
      </div>
    </div>
    </Container>

  )
}

export default Subscribe
