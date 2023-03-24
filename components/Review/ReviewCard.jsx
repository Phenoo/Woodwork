import React from 'react'

import {FaStar } from 'react-icons/fa'

const ReviewCard = ({item}) => {
  return (
    <article className='w-[300px] bg-white text-black p-4 rounded-md cursor-pointer '>
      <div className='flex flex-row gap-4'>
        <div>
          <div className='w-[40px] h-[40px] rounded-full bg-green' />
        </div>
        <div>
          <h4 className='text-md'>
            {item.name}
          </h4>
          <h6 className='text-[10px]'>
            Neo Company
          </h6>
        </div>
      </div>
      <span className='my-4 flex flex-row gap-1 text-orange-500'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
      <p>
        {item.title} orem ipsum dolor sit amet consectetur adipisicing elit enetur officiis.
      </p>
    </article>
  )
}

export default ReviewCard