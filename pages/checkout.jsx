import React from 'react';
import Tophead from '../components/Tophead';
import { useStateContext } from '../context/StateContext';

import s from '../components/checkout/Checkout.module.css'
import PaystackHookExample from '../utils/usePayStack';


import Link from 'next/link';
import Container from '../components/Container/Container';
import { useState } from 'react';
import Head from 'next/head';
import { PaystackButton } from 'react-paystack';





export default function Checkout() {
  const {cartItems, totalPrice, totalQuantities, setCartItems} = useStateContext();
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    state: "",
    city: "",
    country: "",
    message: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, lname, email, phoneNumber, streetAddress, state, city, country, message } = formData
    const res = await fetch('https://woodwork-f0153-default-rtdb.firebaseio.com/formData.json',{
      method: 'POST',
      headers:  {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ fname, lname, email, phoneNumber, streetAddress, state, city, country, message})
    })
    console.log('Submit')

    if(res){
      alert('You have successfully submitted');
      setSubmit(true);
    }else{
      alert('There was an error')
    }



    setFormData({
      fname: "",
      lname: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      state: "",
      city: "",
      country: "",
      message: ""
    });
};
  
  const { lname, fname, email, phoneNumber, streetAddress, state, city, country, message } = formData

  const componentProps =  {
    email,
    amount: totalPrice  * 100,
    metadata: {
      fname,
      lname,
      phoneNumber,
      streetAddress,
      state,
      city,
      message,
      totalQuantities,
      cartItems,
    },
    publicKey: 'pk_test_d5ef29d5385867d007e7547034857f175027f699',
    text: "Pay Now",

    onSuccess: (response) => {
      alert("Thanks for doing business with us! Come back soon!!");
    },
    onClose: () => {
      alert("Wait! You need this to stay wavyy, don't go!!!!"),
      setCartItems([])
    }
    ,
  } 

  

  
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
     {
      cartItems.length > 0 ?
      <Container>
        <section className='mt-[100px] checkout max-w-7xl mx-auto'>
          <Tophead title="checkout" />
          <form onSubmit={handleSubmit} className=' grid grid-cols-1 lg:grid-cols-2 gap-10'>
              <div className={s.input}>
                <div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                    <div  className=''>
                      <label>first name <span className='text-red text-xl'>*</span></label> 

                      <input type="text" 
                        placeholder="First name" 
                        value={formData.fname} 
                        onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                        required />
                    </div>
                    <div  className=''>
                      <label>last name <span className='text-red text-xl'>*</span></label>
                      <input type="text" placeholder="Last name" 
                        value={formData.lname} 
                        onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                        required />

                    </div>
                  </div>
                  <div  className='my-4'>
                    <label>email address</label>
                    <input type="email" name="" id="" placeholder='Email Address'
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required/>
                  </div>
                  <div  className='my-4'>
                    <label> phone number <span className='text-red text-xl'>*</span></label>
                    <input type="tel" name="" id="" placeholder='Phone Number' 
                      value={formData.phoneNumber} 
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      required />
                  </div>
                  <div  className='my-4'>
                      <label>street address <span className='text-red text-xl'>*</span></label>
                      <input type="text" placeholder='Street Address'
                          value={formData.streetAddress} 
                          onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                          required />
                    </div>
                    <div  className='my-4'>
                      <label>town / city <span className='text-red text-xl'>*</span></label>
                      <input type="text" placeholder='Town / City' 
                        value={formData.city} 
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required />

                    </div>
                    <div className=''>  
                      <label>country <span className='text-red text-xl'>*</span></label>
                      <input type="text" name="" id="" placeholder='Your Country'
                        value={formData.country} 
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        required />
                    </div>
                    <div className='my-4'>
                      <label>State <span className='text-red text-xl'>*</span></label>
                      <select required className='w-full border border-secondary p-2 outline-none'
                        value={formData.state} 
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        >
                        <option value="Miss">State</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Enugu">Enugu</option>
                        <option value="Lagos">Lagos </option>
                        <option value="Kano">kano</option>
                      </select>
                    </div>
                  <h4 className='text-xl text-accent-3 font-bold mt-6' >Additional Order Note (Optional)</h4>
                  <textarea placeholder="Additional Order Note"
                    className='w-full h-[100px] border border-secondary p-2 outline-none mb-12'
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />

                
                </div>
              </div>
            <div className='border border-accent-4 p-4 mt-12 h-fit'>
              <h4 className='text-xl text-accent-3 font-bold mt-6' >Your Order ({totalQuantities})</h4>

              <article className='  justify-end flex flex-col gap-y-2 capitalize mt-6'>
                <div>
                  <ul className='list-disc border-y border-accent-4 py-8'>
                    <li className='flex justify-between items-center'>
                      <p className='font-bold text-xl'>Product</p>
                      <p className='font-bold text-xl'>Price</p>
                    </li>
                    {
                      cartItems.map((cartItem) => (
                        <li className='flex justify-between items-center' key={cartItem._id}>
                          <p>
                            <span className='text-xl mr-2 font-extrabold'>
                              -
                            </span>
                            {cartItem.title} x {cartItem.quantity}
                          </p>
                          <p>₦ {cartItem.price.toLocaleString()}</p>
                        </li>
                      ))
                    }
                  </ul>
                </div>



                <div className='flex flex-row justify-between items-center mt-8'>
                  <span>
                  <h6 className='font-bold text-xl'>
                      subtotal
                    </h6>
                  </span>
                  <span>
                  <p className='uppercase font-bold'>
                  ₦ {totalPrice.toLocaleString()}
                    </p>
                  </span>
                </div>
                <hr className='bg-secondary-2 my-1' />
                <div className='flex flex-row justify-between items-center'>
                  <span>
                  <h6 className='font-bold text-xl'>
                      taxes
                    </h6>
                  </span>
                  <span>
                  <p className='uppercase'>
                      4%
                    </p>
                  </span>
                </div>
                <hr className='bg-secondary-2 my-1' />
                <div className='flex flex-row justify-between items-center'>
                  <span>
                  <h6 className='font-bold text-xl'>
                      shipping
                    </h6>
                  </span>
                  <span>
                    <p className='uppercase'>
                      free
                    </p>
                  </span>
                </div>
                <hr className='bg-secondary-2 my-1' />
                <div className='flex flex-row justify-between items-center'>
                  <span>
                    <h6 className='text-2xl font-bold'>
                      total
                    </h6>
                  </span>
                  <span>
                  <p className='uppercase font-bold'>
                  ₦ {totalPrice.toLocaleString()}
                    </p>
                  </span>
                </div>
                <div className='my-8'>
                  <p className='text-accent-4 text-sm'>
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy
                  </p>
                </div>
                {
                  submit ? '' :  
                  <button type='submit' className='bg-secondary text-primary-2 font-bold uppercase p-4 text-center mt-4 w-full'>
                    submit
                 </button>
                }
                
                {
                  submit ?  <PaystackButton
                        {...componentProps}
                  className="bg-secondary text-primary-2 font-bold uppercase p-4 text-center mt-4 w-full"
                /> : ''
                }
                  
              </article>
            </div>
          </form>
        </section>
      </Container>

    :
    <section className='mt-[100px] h-screen max-w-7xl mx-auto'>
      <div className="flex justify-center items-center text-center h-full -mt-[100px]">
        <h1 className="text-2xl lg:text-4xl font-bold text-accent-3">
          Nothing is here yet, Go back to <Link href='/shop' className='font-bold text-primary underline'>shop page  </Link>
        </h1>
      </div>
    </section>
     }
    </>
  );
}