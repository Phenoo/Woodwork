import Image from 'next/image'
import React from 'react'
import Img1 from '../../public/assets/value.jpeg'
import Container from '../Container/Container'
import Tophead from '../Tophead'

const Mission = () => {
  return (
    <div className="border-b border-secondary">
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center gap-4'>
          <div className='py-1 md:py-8 my-3 md:my-12 order-2 lg:order-none'>
            <Image 
              src={Img1}
              alt='values'
              />
            <p className='my-6'>
            </p>
          </div>
          <div className='hidden lg:flex border-l-2 h-full border-secondary' />
          <div className='py-8 order-1 lg:order-none'>
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