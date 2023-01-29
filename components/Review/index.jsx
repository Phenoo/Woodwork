import React from 'react'
import Tophead from '../Tophead'
import ReviewCard from './ReviewCard'
import Container from '../Container'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

import Img1 from '../../public/assets/google-logo.png'

const Review = () => {
  const items = [
    { id: 1,
      name: 'John Doe',
      title: 'loLorem ipsum dolor sit amet consectetur adipisicing elit explicabo, molestiae hgkyhgfdsmh'
    },
    { id: 2,
      name: 'Dominic Mac',
      title: 'loLorem ipsum dolor sit amet consectetur adipisicing elit explicabo, molestiae'
    },
    { id: 3,
      name: 'Mack Killae',
      title: 'loLorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, molestiae'
    }
  ]


  return (
    <div className="my-16">
      <div className="mx-4 md:mx-8">
        <Tophead title="our user reviews" />
      </div>
      <div className="border-y border-black py-8 my-4">
        <Container>
          <div className="flex flex-row gap-12">
            <div className='bg-white w-[300px] p-2 rounded-md flex flex-col justify-center items-center cursor-pointer'>
                <span>
                  <Image
                    src={Img1}
                    alt='google-logo'
                    width={50}
                    height={50}
                  />
                </span>
                <h5 className="mt-2">
                  Google Review
                </h5>
                <h4 className='text-3xl mt-2'>
                  4.9
                </h4>
                <span className='my-2 flex flex-row gap-1 text-orange-500'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <h6>
                  Average
                </h6>
            </div>
            <div className='grid grid-cols-3 gap-4'>
              {
                items.map( (item, index) => (
                  <ReviewCard key={index} item={item} />
                )) 
              }
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Review
