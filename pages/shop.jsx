import React from 'react'
import Container from '../components/Container'
import Tophead from '../components/Tophead'
import groq from 'groq'
import ShopContainer from '../components/Shop'
import { client } from '../utils/client'
import Link from 'next/link'

const Shop = ({posts, categories}) => {
  return (
    <Container>
      <div className="my-20">
        <Tophead title='all products' align='text-center'/>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20"'>
        <div className="col-span-8 lg:col-span-2 order-1 lg:order-none">
          <div className="relative inline-block w-full">
            <div className="lg:hidden">
              <span className="rounded-md shadow-sm">
                <button
                  type="button"
                  onClick={(e) => handleClick(e, 'sort')}
                  className="flex justify-between w-full rounded-sm border border-accent-3 px-4 py-3 bg-accent-0 text-sm leading-5 font-medium text-accent-4 hover:text-accent-5 focus:outline-none focus:border-blue-300 focus:shadow-outline-normal active:bg-accent-1 active:text-accent-8 transition ease-in-out duration-150"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  555555555
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <div>
                <h4 className='text-2xl font-bold capitalize mb-3'>
                categories
              </h4>
              <div>
                <ul>
                  {
                    categories.map((category, index) => (
                      <li  key={index}>
                        <button href='/' className='text-lg capitalize text-gray-800 py-1 mb-1'>
                          {category.title}                  
                        </button>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-8 order-3 lg:order-none">
          <ShopContainer posts={posts} />
        </div>

        <div className="col-span-8 lg:col-span-2 order-2 lg:order-none">
          <h4 className='text-2xl font-bold capitalize mb-3'>
            Relevance
          </h4>
          <ul>
            <li>
              <button className="text-lg capitalize text-gray-800 py-3 mb-2">
                trending
              </button>
            </li>
          </ul>
        </div>


      </div>
    </Container>
  )
}

export default Shop

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post"]
  `)
  const categories = await client.fetch(groq`
    *[_type == "category"]
  `)
  return {
    props: {
      posts,
      categories
    }
  }
}