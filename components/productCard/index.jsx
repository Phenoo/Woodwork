import Image from "next/image";
import { urlFor } from "../../utils/client";

import Link from 'next/link'
import { useState } from "react";
import { useStateContext } from "../../context/StateContext";



const ProductCard = ({item}) => {
  const [show, setShow] = useState(false)
  const {addToCart, qty} = useStateContext()
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  const {title, price, stock, mainImage, slug, _id} = item;
  return(
    <div className="w-[300px] md:w-[260px] h-[350px] flex justify-between flex-col border-l-2 border-secondary px-2 my-2 cursor-pointer animated fadeIn" key={_id}>
          <div className="relative h-[280px] p-1" onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
            {show ? 
            <div className="absolute w-[275px] md:w-[235px] h-[270px] bg-gray-500/75 transition-all duration-150 ease-out hover:ease-in">
              <div className="flex items-center justify-center  gap-4 h-full w-full">
                <button className="px-2 py-3 text-[12px] rounded-full bg-white text-black capitalize"
                  onClick={() => addToCart(item, qty)}
                >
                  add to cart</button>
                <button className="px-2 py-3 text-[12px] rounded-full bg-black text-white capitalize">
                  <Link href={"/product/" +  slug.current} onClick={() => scrollTo('nav')}>
                    view item
                  </Link>
                  </button>
              </div>
            </div>
            : ''  
          }
        {
          mainImage &&         
            <Image
              src={urlFor(mainImage).url()}
              alt={title}
              width={300}
              height={280}
              className="h-[270px]"
            />
        }
         </div>

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
            ${price.toLocaleString()}
          </h6>
        </div>
      </div>
      <br />
    </div>
  )
}

export default ProductCard;