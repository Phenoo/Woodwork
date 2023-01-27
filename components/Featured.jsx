import Tophead from "./Tophead"


import Img1 from '.././public/assets/item5.jpeg'
import Img2 from '.././public/assets/item2.jpeg'
import Img3 from '.././public/assets/item3.jpeg'
import Img4 from '.././public/assets/item4.jpeg'
import ProductCard from "./productCard"
import Link from "next/link"


const Featured = () => {
  const data = [
    {
      image: Img1,
      name: "Wooden Cushion",
    },
    {
      image: Img2,
      name: "Wooden Cushion",
    },
    {
      image: Img3,
      name: "Wooden Cushion",
    },
    {
      image: Img4,
      name: "Wooden Cushion",
    }
  ]
  return(
      <div className="my-10">
        <Tophead title="Featured Collections" align='text-center' />
        <div className="my-4 border-y border-black flex flex-col justify-center items-center">
          <div className="grid grid-cols-4">
            {
              data.map((item, index) => (
                <ProductCard key={index} item={item} />
              ))
            }
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="uppercase font-bold text-xl">
            <Link href='/shop'> 
              shop all
            </Link>
            </button>
        </div>
      </div>
  )
}

export default Featured