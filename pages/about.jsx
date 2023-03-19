import React from 'react'
import Container from '../components/Container'
import AboutText from '../components/About/AboutText'
import Image from 'next/image'

import Img1 from '../public/assets/blogcard.jpeg'
// import Img2 from ''
import Mission from '../components/About/Mission'
import Head from 'next/head'

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-20">
          <div>
            <h2 className={`text-2xl md:text-4xl font-bold uppercase md:mx-[100px]`}>
              furniture e-commerce that brand your style .
            </h2>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur reprehenderit explicabo odit harum cumque provident, quos doloremque quasi maxime ipsum aspernatur commodi modi possimus temporibus enim aut est maiores labore iure magnam architecto accusantium minima? Dolore unde adipisci deserunt dolorem libero esse repellendus a ducimus eum illo ea, maxime sit
            </p>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 gap-4 place-items-center w-full my-12 py-12'>
          <div className='w-full h-full'>
            <Image
              src='https://source.unsplash.com/HaTQS_KI-1o'
              alt='about'
              width={400}
              height={400}
            />
          </div>
          <div className='w-full'>
            <Image
                src='https://source.unsplash.com/WL2141EyK1c'
                alt='about'
                width={500}
                height={300}
              />
          </div>
        </div>
      </Container>
      <AboutText />
      <Mission />
    </div>
  )
}

export default About
