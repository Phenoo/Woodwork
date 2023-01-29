import React from 'react'

import s from './Social.module.css'

import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai'
import { FaPinterest  } from 'react-icons/fa'

const Social = () => {
  const social = [
    {
      icon: <AiOutlineFacebook />,
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
              <li key={i} className="text-2xl p-2 border border-black rounded-full hover:bg-black hover:text-[#a58d72] cursor-pointer ">
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
