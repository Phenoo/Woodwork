import React from 'react'
import Bag from '../components/icons/Bag'


const Cart = () => {
  return (
    <div className='mx-auto max-w-7xl px-6 w-full grid lg:grid-cols-12 pt-4 gap-20'>
      <div className="lg:col-span-7">
      <div className="flex-1 px-12 py-24 flex flex-col justify-center items-center ">
            <span className="border border-dashed border-secondary flex items-center justify-center w-16 h-16 bg-primary p-12 rounded-lg text-primary">
              <Bag className="absolute" />
            </span>
            <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
              Your cart is empty
            </h2>
            <p className="text-accent-6 px-10 text-center pt-2">
              Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
            </p>
          </div>
      </div>
    </div>
  )
}

export default Cart