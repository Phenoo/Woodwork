import React from 'react'
import Tophead from './Tophead'
import { AiOutlineDropbox, AiOutlineInsurance, AiOutlineRadarChart, AiOutlineTaobaoCircle } from 'react-icons/ai'
import { GiRockingChair } from 'react-icons/gi'
const Brands = () => {
  const icons = [
    {
      id: 1,
      icon: <AiOutlineDropbox />
    },
    {
      id: 2,
      icon:  <AiOutlineInsurance />
    },
    {
      id: 3,
      icon: <AiOutlineTaobaoCircle /> 
    },
    {
      id: 4,
      icon :  <AiOutlineRadarChart />
    },
    {
      id: 5,
      icon:  <GiRockingChair />
    }
  ]
  return (
    <div className="my-16">
      <Tophead title='our brands' align='text-center' />
      <div className="my-4 border-y border-black flex flex-col justify-center items-center">
        <div className="grid grid-cols-5 ">
          {icons.map((item) => (
            <span key={item.id} className=" flex justify-center items-center border-l-2 border-black px-6 md:px-12 cursor-pointer text-3xl md:text-5xl h-[150px]">
              {item.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brands