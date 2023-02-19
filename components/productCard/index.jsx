import Image from "next/image";
import { urlFor } from "../../utils/client";



const ProductCard = ({item}) => {
  const {title, price, tag, mainImage} = item;
  return(
    <div className="w-[260px] h-[350px] flex justify-between flex-col border-l-2 border-black px-2 cursor-pointer">
      <div className="relative h-[270px] p-1">
        <p className="absolute p-2 m-1 bg-white rounded-2xl px-4">
          instock
        </p>
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
      <div className="flex justify-between flex-row my-3" >
        <div>
          <h5>
            {title}
          </h5>
          <p className="font-bold capitalize">
            {/* #{item.tag} */}
          </p>
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