import Tophead from "./Tophead"


import ProductCard from "./ProductCard/ProductCard"
import Link from "next/link"


const Featured = ({postsThree}) => {

  return(
      <div className="my-20">
        <Tophead title="Featured Collections" align='text-center' />
        <div className="my-4 border-y border-secondary flex flex-col justify-center items-center">
        <div className="flex gap-4 flex-wrap justify-center">
            {
              postsThree.map((item) => (
                <ProductCard key={item._id} item={item} />
              ))
            }
          </div>
        </div>
        <div className="flex justify-center items-center">
        <button className='font-bold uppercase border border-secondary p-2 md:p-3'>
            <Link href='/shop'> 
              shop all
            </Link>
            </button>
        </div>
      </div>
  )
}

export default Featured