import React from 'react'
import SidebarLayout from '../SidebarLayout/index'


import Bag from '../icons/Bag'
import Sidebar from '../Sidebar/index'
import { useStateContext } from '../../context/StateContext'
import { urlFor } from '../../utils/client'
import Cross from '../icons/Cross'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useCart } from 'react-use-cart'

const Cart = () => {
  const {cartItems, totalQuantities, totalPrice, removeBtn, incrementQuantity, toggleCartItemQuanitity} =  useStateContext();
  const { updateItemQuantity} = useCart();
  return (
    <Sidebar>
      <SidebarLayout>
          <h4 className='capitalize font-bold text-2xl px-6 py-4'>
            my cart ({totalQuantities})
          </h4>
          {
            cartItems.length > 0 ? 
            <div className='flex flex-col gap-y-4 px-6 py-4 h-full justify-between'>

            {
              cartItems.map((item) => {
                return(
                  <article className='flex flex-row gap-4 w-full my-2' key={item._id}>
                    <div className='w-[70px] h-[70px]'>
                      <img src={urlFor(item.mainImage).url()} alt={item.title} height={70} width={70} />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                      <div className='flex justify-between'>
                          <h6 className='text-xl'>
                            {item.title}
                          </h6>
                          <p className='font-bold text-xl '>
                          $ {item.price.toLocaleString()}
                          </p>
                      </div>
                      <div className='flex flex-row gap-2 mt-2'>
                        <button className='border border-black p-1' onClick={() => removeBtn(item)}>
                          <Cross />
                        </button>
                        {/* <div className='border border-black flex   flex-row justify-between w-full'>
                          <p className='p-1  px-3'>{item.quantity}</p>
                          <div className='flex flex-row gap-1'>
                            <button className='p-2 border-l border-black'
                              onClick={() => updateItemQuantity(item._id, item.quantity - 1)}
                            ><AiOutlineMinus /></button>
                            <button className='p-2 border-l border-black' 
                              onClick={() => updateItemQuantity(item._id, item.quantity + 1)}
                            ><AiOutlinePlus /></button>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </article>
                )
              })
            }
                  <article className=' bg-white justify-end flex flex-col gap-y-2 capitalize mt-6'>
                    <div className='flex flex-row justify-between items-center'>
                      <span>
                        <h6>
                          subtotal
                        </h6>
                      </span>
                      <span>
                      <p className='uppercase font-bold'>
                          $ {totalPrice.toLocaleString()}
                        </p>
                      </span>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                      <span>
                        <h6>
                          taxes
                        </h6>
                      </span>
                      <span>
                      <p className='uppercase'>
                          4%
                        </p>
                      </span>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                      <span>
                        <h6>
                          shipping
                        </h6>
                      </span>
                      <span>
                        <p className='uppercase'>
                          free
                        </p>
                      </span>
                    </div>
                    <hr className='bg-[#ddd] my-2' />
                    <div className='flex flex-row justify-between items-center'>
                      <span>
                        <h6 className='text-xl font-bold'>
                          total
                        </h6>
                      </span>
                      <span>
                      <p className='uppercase font-bold'>
                          $ {totalPrice.toLocaleString()}
                        </p>
                      </span>
                    </div>
                      <button className='bg-black text-white uppercase p-4 text-center mt-4'>
                        proceed to checkout
                      </button>
                  </article>

            </div>      
            : '' 
          }

          {
            cartItems.length <= 0 ? 
              <div className="flex-1 px-4 flex flex-col justify-center items-center">
              <span className="border border-dashed border-primary rounded-full flex items-center justify-center w-16 h-16 p-12 bg-secondary text-secondary">
                <Bag className="absolute" />
              </span>
              <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
                Your cart is empty
              </h2>
              <p className="text-accent-3 px-10 text-center pt-2">
                Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
              </p>
            </div>
            
            : ''
          }

      </SidebarLayout>
    </Sidebar>

    )
}

export default Cart

