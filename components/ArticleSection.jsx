import React from 'react'
import Tophead from "./Tophead"
import Container from "./Container"

import Img2 from '.././public/assets/blogcard2.jpeg'
import Img3 from '.././public/assets/blogcard3.jpeg'
import Img4 from '.././public/assets/blogcard.jpeg'
import BlogCard from './blogCard'
import Link from 'next/link'


// Core modules imports are same as usual
import { Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import "swiper/css";
import "swiper/css/pagination";



const ArticleSection = () => {
  const data = [
    {
      image: Img2,
      name: "Wooden Cushion",
    },
    {
      image: Img3,
      name: "Wooden Cushion",
    },
    {
      image: Img4,
      name: "Wooden Cushion",
    }
  ]
  return (
    <div className="my-16">
      <Tophead title='enjoy our articles' align='text-center'/>
        <div className='py-8 mt-4 border-y border-black flex justify-center '>
          <Container>
              <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={40}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
              >
              {
                    data.map((item, index) => (
                      <SwiperSlide key={index} className='swiperslide'>
                        <BlogCard key={index} item={item} />
                      </SwiperSlide>
                    ))
                  }               
              </Swiper>
 
            <div className="flex justify-center mt-8">
              <button className='font-bold uppercase border border-black p-2 md:p-3'>
                <Link href='/blog'>
                  read all articles
                </Link>
              </button>
            </div> 
          </Container>       
        </div>
    </div>
  )
}

export default ArticleSection
