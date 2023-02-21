import React from 'react'
import ShopLayout from '../../../components/Shop/Shop'
import { sanityClient } from '../../../utils/client'
import groq from 'groq'


const CategoryPage = ({posts, categories}) => {
  console.log(posts)

  return (
    <ShopLayout  posts={posts} categories={categories} />
  )
}

export default CategoryPage

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "category" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const query = `*[_type == "post" && category._ref in *[_type=="category" && slug=="${slug}"] ]{
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
