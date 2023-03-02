import React from 'react'
import ProductCard from '../ProductCard'

const ShopContainer = ({posts}) => {
  return (
    <>
      {
        posts.length <= 0 ? 
        <div className="flex-1 px-4 flex flex-col justify-center items-center">
          <h4 className='text-center text-2xl '>Nothing on this page...</h4>
        </div>
         : ''
      }
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
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