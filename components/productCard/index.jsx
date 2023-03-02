import Image from "next/image";
import { urlFor } from "../../utils/client";

import Link from 'next/link'

const ProductCard = ({item}) => {
  const {title, price, stock, mainImage, slug, _id} = item;
  return(
    <div className="w-[300px] md:w-[260px] h-[350px] flex justify-between flex-col border-l-2 border-black px-2 cursor-pointer animated fadeIn" key={_id}>
    {/* <Link href={"/product/" +  slug.current}> */}
          <div className="relative h-[280px] p-1">
        {
          mainImage &&         
            <Image
              src={urlFor(mainImage).url()}
              alt={title}
              width={200}
              height={270}
            />
        }
        </div>
      {/* </Link> */}

      <h5 className='text-xl'>
      {title}
      </h5>
      <div className="flex justify-between flex-row my-3" >
        <div>
        {
        stock ? <h6 className="text-[#06a94d] font-light">in stock</h6> : <h6 className="text-[#f00] font-light">out stock</h6>
      }
        </div>
        <div>
          <h6 className="font-bold">
            ${price}
          </h6>
        </div>
      </div>
      <br />
    </div>
  )
}

export default ProductCard;