import React from 'react'
import Container from '../components/Container'

const Shop = () => {
  return (
    <Container>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20"'>
        <div className="col-span-8 lg:col-span-2 order-1 lg:order-none">
        </div>

        <div className="col-span-8 order-3 lg:order-none"></div>

        <div className="col-span-8 lg:col-span-2 order-2 lg:order-none"></div>


      </div>
    </Container>
  )
}

export default Shop
