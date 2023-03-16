import React from 'react'
import Tophead from './Tophead'
import Image from 'next/image'

import Img1 from '.././public/assets/collect1.jpeg'
import Img2 from '.././public/assets/collect2.jpeg'



const Collections = () => {
  return (
    <div className="bg-[#948575] px-4 py-8 md:p-12">
      <Tophead title="shop the collections" align='text-left' />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 place-items-center py-4">
        <article className='bg-[#fff] p-4 rounded-sm grid grid-col-1 lg:grid-cols-2 gap-2 max-w-[600px] h-[350px]  cursor-pointer'>
          <div className='lg:order-none order-2'>
            <h4 className="text-xl lg:text-2xl font-bold capitalize mb-1">
              The best chair <br />
              Drokus CG1
            </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <button className="uppercase text-md border-2 border-black p-2 mt-2 font-bold">
              shop here
            </button>
          </div>
          <div className='lg:order-none order-1 h-[150px] lg:h-full'>
            <Image 
              src='https://source.unsplash.com/FV3GConVSss'
              alt='collections'
              width={200}
              height={200}
              className='object-cover object-center'
              />
          </div>
        </article>
        <article className='bg-[#ddf] p-4 rounded-sm grid grid-col-1 lg:grid-cols-2 gap-2 max-w-[600px] h-[350px] cursor-pointer'>
          <div className='lg:order-none order-2'>
            <h4 className="text-xl lg:text-2xl font-bold capitalize mb-1">
              The best chair <br />
              Drokus CG1
            </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <button className="uppercase text-md border-2 border-black p-2 mt-2 font-bold">
              shop here
            </button>
          </div>
          <div className='lg:order-none order-1 h-[150px] lg:h-full object-contain'>
            <Image 
              src='https://source.unsplash.com/6CJg-fOTYs4'
              alt='collections'
              width={200}
              height={200}
              className='object-cover'
              />
          </div>
        </article>
      </div>
    </div>
  )
}                   

export default Collections
