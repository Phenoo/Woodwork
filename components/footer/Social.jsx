import React from 'react'


import {AiOutlineInstagram,  AiOutlineTwitter} from 'react-icons/ai'
import { FaPinterest, FaFacebook  } from 'react-icons/fa'

const Social = () => {
  const social = [
    {
      icon: <FaFacebook />,
      link: "/sssss"
    },
    {
      icon: <AiOutlineInstagram />,
      link: "/sssss"
    },
    {
      icon: <FaPinterest />,
      link: "/sssss"
    },
    {
      icon: <AiOutlineTwitter />,
      link: "/sssss"
    }]
  return (
    <div>
      <h6 className='font-bold text-xl'>
        Socials
      </h6>
        <ul className="flex gap-4 flex-row mt-2">
        {
            social.map((item, i) => (
              <li key={i} className="text-2xl p-2 border border-secondary rounded-full hover:bg-secondary hover:text-secondary cursor-pointer transition-all ">
                <a href="#a"> 
                  {item.icon}
                </a>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Social
