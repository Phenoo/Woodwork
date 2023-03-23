import Tophead from "./Tophead"


import ProductCard from "./ProductCard/ProductCard"
import Link from "next/link"


const NewArrivals = ({postsThree}) => {
  return(
      <div className="my-16">
        <Tophead title="New arrivials" align='text-center' />
        <div className="my-4 border-y border-black flex flex-col justify-center items-center">
          <div className="flex gap-4 flex-wrap justify-center">
            {
              postsThree.map((item) => (
                <ProductCard key={item._id} item={item} />
              ))
            }
          </div>
        </div>
        <div className="flex justify-center items-center">
        <button className='font-bold uppercase border border-black p-2 md:p-3'>
            <Link href='/shop'> 
              shop all 
            </Link>
            </button>
        </div>
      </div>
  )
}

export default NewArrivals