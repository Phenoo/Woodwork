import Tophead from "./Tophead"


import Img1 from '.././public/assets/item5.jpeg'
import Img2 from '.././public/assets/item2.jpeg'
import Img3 from '.././public/assets/item3.jpeg'
import Img4 from '.././public/assets/item4.jpeg'
import ProductCard from "./ProductCard"
import Link from "next/link"


const Featured = ({postsThree}) => {

  return(
      <div className="my-16">
        <Tophead title="Featured Collections" align='text-center' />
        <div className="my-4 border-y border-black flex flex-col justify-center items-center">
          <div className="grid grid-cols-4">
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

export default Featured