import React from 'react'

const Subscribe = () => {
  return (
    <div className='mt-12 flex justify-center'>
      <h2 className='text-2xl lg:text-3xl font-bold text-center uppercase'>
        Subscribe to our newsletter and <br /> receive the latest product updates
      </h2>
      <div className='mt-4'>
        <div className='flex'>
          <form>
            <input type='email' placeholder='Enter Your Email Address' required/>
          </form>
          <button className='bg-black text-white p-2 rounded-md'> 
            subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
