      
import React, { useState } from 'react'
import Container from '../../components/Container'
import Tophead from '../../components/Tophead'
import groq from 'groq'
import ShopContainer from '../../components/Shop'
import Link from 'next/link'

import cn from 'clsx'

const ShopLayout = ({posts, categories}) => {
  const [activeFilter, setActiveFilter] = useState('')
  const [toggleFilter, setToggleFilter] = useState(false)




  const handleClick = (e, filter) => {
    if (filter !== activeFilter) {
      setToggleFilter(true)
    } else {
      setToggleFilter(!toggleFilter)
    }
    setActiveFilter(filter)
  }
  
  
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
                  Categories
                  {/* {sort ? SORT[sort as keyof typeof SORT] : 'Relevance'} */}
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
          <div className={`origin-top-left absolute bg-white lg:relative left-0 mt-2 w-full rounded-md shadow-lg lg:shadow-none z-10 mb-10 lg:block ${
    	      activeFilter !== 'sort' || toggleFilter !== true ? 'hidden' : ''}`}>
            <div className="rounded-sm bg-accent-0 shadow-xs lg:bg-none lg:shadow-none">
              <div
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <ul>
                  <li
                    className={cn(
                      'block text-sm leading-5 text-accent-4 lg:text-base lg:no-underline lg:font-bold lg:tracking-wide hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8',
                      {
                        underline: '',
                      }
                    )}
                  >
                    <Link href='/'>
                      <button
                        onClick={(e) => handleClick(e, 'sort')}
                        className={
                          'block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4'
                        }
                      >
                        Relevance
                      </button>
                    </Link>
                  </li>
                  {categories && categories.map((category, index) => (
                    <li
                      key={index}
                      className={cn(
                        'block text-sm leading-5 text-accent-4 hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8',
                        {
                          // underline: sort === index,
                        }
                      )}
                    >
                      <button
                        onClick={(e) => handleClick(e, 'sort')}
                          className={
                            'block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4'
                          }
                      >
                        <Link
                          href={"/shop/category/" + category.slug.current}
                        
                        >
                          {category.title}
                        </Link>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="col-span-8 order-3 lg:order-none">
          <ShopContainer posts={posts} />
        </div>

        <div className="col-span-8 lg:col-span-2 order-2 lg:order-none">
          <div className="relative inline-block w-full">

          </div>
        </div>


      </div>
    </Container>
  )
}

export default ShopLayout


