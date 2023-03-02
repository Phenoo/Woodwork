import React from 'react'
import Tophead from '../Tophead'
import ReviewCard from './ReviewCard'
import Container from '../Container'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

import Img1 from '../../public/assets/google-logo.png'

import { Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import "swiper/css";
import "swiper/css/pagination";



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
    <div className="my-20">
      <div className="mx-4 md:mx-8">
        <Tophead title="our user reviews" />
      </div>
      <div className="border-y border-black py-8 my-4">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className='shadow-md w-full lg:w-[300px] p-4 rounded-md flex flex-col justify-center items-center cursor-pointer'>
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

               <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={40}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="reSwiper"
              >
              {
                    items.map((item, index) => (
                      <SwiperSlide key={index} className='swiperslide'>
                        <ReviewCard key={index} item={item} />
                      </SwiperSlide>
                    ))
                  }               
              </Swiper>
 
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Review
