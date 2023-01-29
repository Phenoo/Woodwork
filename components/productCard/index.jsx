import Image from "next/image";

const ProductCard = ({item}) => {
  return(
    <div className="w-[260px] h-[350px] flex justify-between flex-col border-l-2 border-black px-2 cursor-pointer">
      <div className="relative h-[270px] p-1">
        <p className="absolute p-2 m-1 bg-white rounded-2xl px-4">
          instock
        </p>
        <Image 
          src={item.image}
          alt={item.name}
          width={200}
          height={270}
        />
      </div>
      <div className="flex justify-between flex-row my-3" >
        <div>
          <h5>
            {item.name}
          </h5>
          <p className="font-bold capitalize">
            new franchise
          </p>
        </div>
        <div>
          <h6 className="font-bold">
            $800
          </h6>
        </div>
      </div>
      <br />
    </div>
  )
}

export default ProductCard;