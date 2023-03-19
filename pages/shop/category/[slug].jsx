import React, {useState, useEffect} from 'react'
import ShopLayout from '../../../components/Shop/Shop'
import { sanityClient } from '../../../utils/client'
import groq from 'groq'
import {useRouter} from 'next/router'
import Head from 'next/head'

const CategoryPage = ({categories}) => {
  const router = useRouter();
  const {slug} = router.query;
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const query = `*[_type == "post" && tag == "${slug}"]`
    sanityClient.fetch(query).then((data) => {
      setPosts(data)
    })
  }, [slug])


  return (
    <>
      <Head>
        <title>{slug} Category</title>
      </Head>
      <ShopLayout  posts={posts} categories={categories} />
    </>
  )
}

export default CategoryPage


export async function getStaticPaths() {
  const query = `*[_type == "category"]{
    slug{
      current
    }
  }`;
  const categories = await sanityClient.fetch(query);

  const paths = categories.map((category) => ({
    params: {
      slug: category.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps() {
  const categories = await sanityClient.fetch(groq`
  *[_type == "category"]{
    title,
    slug
  }
`)

  return {
    props: {
      categories
    }
  }
}
