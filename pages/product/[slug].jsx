import React, { useState } from 'react'
import Container from '../../components/Container/Container'
import { sanityClient, urlFor } from '../../utils/client'
import Image from 'next/image'

import { FaStar, FaHeart } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { useStateContext } from '../../context/StateContext'
import Head from 'next/head'

const SinglePage = ({post}) => {
  const [clicked, setClicked] = useState(false)
  const { addToCart, qty } = useStateContext()
  const {title, price, stock, mainImage, slug, _id} = post;

  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='my-20 '>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='max-w-lg w-full h-[400px]'>
            <Image 
              src={urlFor(mainImage).url()}
              alt={title}
              width={400}
              height={390}
              />
          </div>
          <div>
            <h4 className='text-3xl'>
              {title}
            </h4>
            <div className='flex flex-row items-center gap-6 my-4'>
              <div>
                {
                stock ? <h6 className="text-[#06a94d]  font-light">in stock</h6> : <h6 className="text-[#f00] capitalize font-light">out stock</h6>
                }
              </div>
              <div className='flex flex-row gap-1 items-center'>
                <FaStar color='orange' />
                <FaStar color='orange' />
                <FaStar color='orange' />
                <FaStar color='orange' />
                <FaStar color='orange' />
                <p className='mx-2'>4.9 ( 345 )</p>
              </div>
            </div>

            <p className='my-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nihil nam quam sequi porro repellendus enim optio quia odio ut, deleniti quas adipisci sapiente quo explicabo quod voluptates natus excepturi.
              lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nihil nam quam sequi porro repellendus enim optio quia odio ut, deleniti quas adipisci sapiente quo explicabo quod voluptates natus excepturi.
            </p>
            <div className='my-6 w-full mx-12'>
              <ul className='list-disc'>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
            <div className='flex flex-row items-center gap-4 capitalize' >
                <h6>
                  Price:
                </h6>
                <h6 className='font-bold'>${price}</h6>
              </div>
            <div className='flex flex-row items-center gap-6 mt-6'>
              <button className='flex flex-row items-center gap-4 capitalize  bg-secondary text-secondary px-4 py-2 rounded-full' 
                onClick={() => addToCart(post, qty)}
              >
                <span>
                  add to cart
                </span>
              </button>
              <button className='flex flex-row items-center gap-4 capitalize rounded-full border-2 border-secondary px-4 py-2' onClick={() => setClicked(!clicked)}>
                <span>
                  {
                    clicked ? 'wishlisted' :  'wishlist'
                  }
                </span>
                <span>
                  {
                    clicked ? <FaHeart color='red' /> : <AiOutlineHeart color='red' /> 
                  }
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SinglePage



export async function getStaticPaths() {
  const query = `*[_type == "post"]{
    slug{
      current
    }
  }`;
  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({params}) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        mainImage,
        stock,
        price,
  }`;
  const post = await sanityClient.fetch(query, {
    slug: params.slug
  });
  return {
    props: {
      post
    }
  }
}
