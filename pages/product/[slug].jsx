import React from 'react'
import Container from '../../components/Container'
import { sanityClient } from '../../utils/client'
import groq from 'groq'


const SinglePage = ({post}) => {
  console.log(post)
  return (
    <Container>
      
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

export async function getStaticProps({params: {slug}}) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]{
        _id,
        title,
        slug,
        mainImage,
        stock,
        price,
  }`;
  const post = await sanityClient.fetch(query);
  return {
    props: {
      post
    }
  }
}
// export async function getStaticPaths() {
  

//   const post = await sanityClient.fetch(query);

//   const paths = post.map((item) => ({
//     params: {
//       slug: item.slug.current
//     }
//   })); 

//   return {
//     paths,
//     fallback: "blocking",
//   }
// }

// export async function getStaticProps({params}) {
//   const query = `*[_type == "post" && {

//   }`

//   const post = await sanityClient.fetch(query, {
//     slug: params.slug
//   });
//   return{
//     props: {
//       post
//     },
//     revalidate: 60,
//   }
// }
