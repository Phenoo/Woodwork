import Container from '../Container'
import { useEffect, useState } from 'react';

import s from '../hero/Hero.module.css'


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}




const Hero = () => {
  const [width, setWidth] = useState();
  const [height, setheight] = useState();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if(width, height) {
  console.log(height)

    return (
      <Container>
        <div className='my-5 h-[700px]'>
        <div className='flex justify-between flex-row'>
          <div>
            <h2 className='text-5xl font-bold uppercase'>
              stylish furniture
            </h2>
          </div>
          <div>
            <button className='rounded-xl border-black border py-1 px-2'>
              wood
            </button>
            <p className='font-bold text-md'>
              your best bet.
            </p>
          </div>
          </div>
          <div className='w-full flex justify-center items-center'>
            <div className={s.backImg} />
          </div>
        </div>
      </Container>
    )
  }

  return null;
}

export default Hero