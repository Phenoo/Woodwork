import React, { useState } from 'react'
import groq from 'groq'
import { sanityClient } from '../../utils/client'

import ShopLayout from '../../components/Shop/Shop'
import Head from 'next/head'

const Shop = ({posts, categories}) => {

  
  
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <ShopLayout posts={posts} categories={categories} />
    </>
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


