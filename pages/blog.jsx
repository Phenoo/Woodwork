import React from 'react'
import BlogCard from '../components/blogCard'
import Tophead from '../components/Tophead'


import Img1 from '../public/assets/blogmain.jpeg'
import Img2 from '../public/assets/blogcard2.jpeg'
import Img3 from '../public/assets/blogcard3.jpeg'
import Img4 from '../public/assets/blogcard.jpeg'
import Image from 'next/image'
import Container from '../components/Container'

const Blogs = () => {
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
    },
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
    <div>
      <div className="my-16 py-10">
        <Tophead title='our blog posts' align='text-center'/>
        <p className="text-center">
          read our latest blog posts and insights.
        </p>
      </div>
      <div className="my-16">
        <div className='mt-8 border-y border-secondary'>
          <Container>
            <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center px-4 md:px-16 h-auto'>
              <div className='py-4 md:py-8 my-4 md:my-12'>
                <h4 className='font-bold capitalize text-3xl md:text-4xl'>
                  wooden cushion: auto-generated future template
                </h4>
                <p className='my-6'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nihil nam quam sequi porro repellendus enim optio quia odio ut, deleniti quas adipisci sapiente quo explicabo quod voluptates natus excepturi.
                </p>
                <button className='font-bold text-md uppercase mt-2 border border-secondary p-1 px-2'>
                  read article
                </button>
              </div>
              <div className='hidden md:flex border-l-2 h-full border-secondary' />
              <div className=' md:py-8 w-[300px] h-[400px] order-1'>
                <Image 
                  src='https://source.unsplash.com/IH7wPsjwomc'
                  width={400}
                  height={400}
                  alt='blog image'
                  className='object-contain'
                  />
              </div>
            </div>
          </Container>
        </div>
        <div className='py-8 mt-8 border-b border-secondary'>
          <Tophead title='enjoy our articles' align='text-center'/>
          <div className='max-w-7xl mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mt-12">
                  {
                    data.map((item, index) => (
                      <BlogCard key={index} item={item} />
                    ))
                  }
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blogs
