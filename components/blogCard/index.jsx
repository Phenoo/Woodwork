import Image from 'next/image'
import React from 'react'
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai'

const BlogCard = ({item}) => {
  return (
    <article className='w-[320px] lg:w-[340px] h-[435px] p-2 border border-black'>
      <div className='h-[250px]'>
        <Image  
          src={item.image}
          alt={item.name}
        />
      </div>
      <div>
        <section className='flex flex-row gap-4 items-center my-2'>
          <div className='flex flex-row gap-1 items-center'>
            <span>
              <AiOutlineUser />
            </span>
            <span className='text-sm'>
              Peter W.
            </span>
          </div>        
          <div className='flex flex-row gap-1 items-center'>
            <span>
              <AiOutlineCalendar />
            </span>
            <span className='text-sm'>
              Jan 3, 2023
            </span>
          </div>
        </section>
        <h4 className='font-bold capitalize text-xl'>
          {item.name} is the bets thing here
        </h4>
        <p className='mt-2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit namab.
        </p>
        <button className='font-bold text-md uppercase mt-2 border border-black p-1 px-2'>
          read article
        </button>
      </div>
    </article>
  )
}

export default BlogCard
