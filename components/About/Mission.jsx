import Image from 'next/image'
import React from 'react'
import Img1 from '../../public/assets/value.jpeg'
import Container from '../Container'
import Tophead from '../Tophead'

const Mission = () => {
  return (
    <div className="border border-black ">
      <Container>
        <div className='grid grid-cols-3 place-items-center gap-4'>
          <div className='py-4 md:py-8 my-6 md:my-12'>
            <Image 
              src={Img1}
              alt='values'
              />
            <p className='my-6'>
            </p>
          </div>
          <div className='hidden md:flex border-l-2 h-full border-black' />
          <div className='py-8'>
            <Tophead title='our values' />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quo ratione eos, eius temporibus molestias aperiam repellat sapiente dignissimos quis nam illum dolores facilis consectetur eum enim quam aut exercitationem.
            </p>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, pariatur asperiores recusandae sed distinctio id obcaecati ullam eaque sunt quos!
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Mission