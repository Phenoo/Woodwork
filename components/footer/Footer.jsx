import React from 'react'
import Image from 'next/image';

import Logo from '../Logo'
import Container from '../Container/Container'
import Social from './Social';



import { FaYinYang } from 'react-icons/fa';
import Link from 'next/link';
import { useStateContext } from '../../context/StateContext';

const Footer = () => {
  const {scrollTo} = useStateContext()
  const info = ["Our story", "faq", "returns", "terms of service", "privacy policy"];
  const shop = ["Sofa", "chairs", "tables", "lights"];


  return (
    <footer>
      <Container>
        <div className=" mt-[100px]">
          <Logo />
          <br />
          <div className="my-4 grid md:grid-cols-3 lg:grid-cols-4 gap-12">
            <div>
              <h6 className='font-bold text-xl'>
                Info
              </h6>
              <ul className="mt-2">
                {
                  info.map((item, i) => (
                    <li key={i}>
                      <a href="#a" className="capitalize">
                        {item}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h6 className='font-bold text-xl'>
                Shop
              </h6>
              <ul className="mt-2">
                {
                  shop.map((item, i) => (
                    <li key={i} onClick={() => scrollTo('di')}>
                      <Link   href={"/shop/category/" + item} className="capitalize">
                        {item}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <Social />
            <div className='flex justify-end items-end' onClick={() => scrollTo('di')}>
              <FaYinYang className='animate-spin' size={50} />
            </div>
          </div>
        </div>
        <div className='border-t-2 border-secondary py-3 mt-8 flex text-center flex-col justify-center md:flex-row md:justify-between'>
          <div>
            <p>
              &copy; 2020 furniture, Inc. All rights reserved.
            </p>
          </div>
          <div>
            <p>
              created by <span className='font-bold'> Desco.</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
