import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ShopContainer = ({posts}) => {
  return (
    <>
      {
        posts.length <= 0 ? 
        <div className="flex-1 px-4 flex flex-col justify-center items-center mt-8">
          <h4 className='text-center text-2xl '>Loading on this page...</h4>
        </div>
         : ''
      }
      <div className="flex flex-wrap gap-4 justify-center">
      {
        posts.map((item) => (
          <ProductCard item={item} key={item._id} />
        ))
      }
      
    </div>
    </>
    
  )
}

export default ShopContainer