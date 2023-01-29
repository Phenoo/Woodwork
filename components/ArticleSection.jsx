import React from 'react'
import Tophead from "./Tophead"
import Container from "./Container"

import Img2 from '.././public/assets/blogcard2.jpeg'
import Img3 from '.././public/assets/blogcard3.jpeg'
import Img4 from '.././public/assets/blogcard.jpeg'
import BlogCard from './blogCard'
import Link from 'next/link'


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
        <div className='py-8 mt-4 border-y border-black'>
          <Container>
            <div className="grid grid-cols-3 place-items-center">
                  {
                    data.map((item, index) => (
                      <BlogCard key={index} item={item} />
                    ))
                  }
            </div>
            <div className="flex justify-center mt-8">
              <button className='font-bold uppercase border border-black p-2 md:p-3'>
                <Link href='/blogs'>
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
