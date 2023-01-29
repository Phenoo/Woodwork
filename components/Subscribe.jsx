import React from 'react'

const Subscribe = () => {
  return (
    <div className='my-16 flex justify-center flex-col items-center'>
      <h2 className='text-2xl lg:text-3xl font-bold text-center uppercase'>
        Subscribe to our newsletter and <br /> receive the latest product updates
      </h2>
      <div className='mt-4'>
        <div className='flex'>
          <form>
            <input type='email' placeholder='Enter Your Email Address' className='w-[250px] p-2 py-4 rounded text-sm outline-none rounded-r-none' required/>
          </form>
          <button className='bg-black text-white capitalize p-2 px-4 rounded-md rounded-l-none'> 
            subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
