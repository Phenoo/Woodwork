import React from 'react'
import Link from 'next/link';

import Logo from '../Logo'
import Container from '../Container'
import Social from './Social';


const Footer = () => {
  const info = ["Our story", "faq", "returns", "terms of service", "privacy policy"];
  const shop = ["everything", "chairs", "tables", "sets of tables", "office"];


  return (
    <footer>
      <Container>
        <div className="">
          <Logo />
          <div className="my-4 grid grid-cols-4 gap-12">
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
                    <li key={i}>
                      <a href="#a" className="capitalize">
                        {item}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <Social />
          </div>
        </div>
        <div className='border-t-2 border-black py-3 mt-8 flex flex-col justify-center md:flex-row md:justify-between'>
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
