import React, { useState } from 'react'
import Container from '../../components/Container'
import Tophead from '../../components/Tophead'
import groq from 'groq'
import ShopContainer from '../../components/Shop'
import { sanityClient } from '../../utils/client'
import Link from 'next/link'

import cn from 'clsx'
import ShopLayout from '../../components/Shop/Shop'

const Shop = ({posts, categories}) => {

  
  
  return (
    <ShopLayout posts={posts} categories={categories} />
  )
}

export default Shop

export async function getStaticProps() {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    mainImage,
    stock,
    price,
    categories
  }`;
  
  const posts = await sanityClient.fetch(query);

  const categories = await sanityClient.fetch(groq`
    *[_type == "category"]{
      title,
      slug
    }
  `)
  return {
    props: {
      posts,
      categories
    }
  }
}


