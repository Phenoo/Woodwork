import React from 'react'
import Tophead from '../components/Tophead'
import Image from 'next/image'

import Img1 from '.././public/assets/collect1.jpeg'
import Img2 from '.././public/assets/collect2.jpeg'



const Collections = () => {
  return (
    <div className="bg-[#4e3e2c] p-4 md:p-12">
      <Tophead title="shop the collections" align='text-left' />
      <div className="grid grid-cols-2 mt-4 place-items-center">
        <article className='bg-[#fff] p-4 rounded-sm flex justify-between flex-row max-w-[600px] h-[400px]  cursor-pointer'>
          <div>
            <h4 className="text-2xl font-bold capitalize mb-1">
              The best chair <br />
              Drokus CG1
            </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <br />
            <button className="uppercase text-md  font-bold">
              shop here
            </button>
          </div>
          <div>
            <Image 
              src={Img2}
              alt='collections'
              width={200}
              height={200}
              />
          </div>
        </article>
        <article className='bg-[#ddf] p-4 rounded-sm flex justify-between flex-row  max-w-[600px] h-[400px] cursor-pointer'>
          <div>
            <h4 className="text-2xl font-bold capitalize mb-1">
              The best chair <br />
              Drokus CG1
            </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <br />
            <button className="uppercase text-md  font-bold">
              shop here
            </button>
          </div>
          <div>
            <Image 
              src={Img1}
              alt='collections'
              width={200}
              height={200}
              />
          </div>
        </article>
      </div>
    </div>
  )
}                   

export default Collections
