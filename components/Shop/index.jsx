import React from 'react'
import ProductCard from '../ProductCard'

const ShopContainer = ({posts}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
      {
        posts.map((item) => (
          <ProductCard item={item} key={item._id} />
        ))
      }
      {
        posts.length <= 0 ? <p>Nothing on this page</p> : ''
      }
    </div>
  )
}

export default ShopContainer