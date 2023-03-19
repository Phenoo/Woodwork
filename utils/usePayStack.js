import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import { useStateContext } from '../context/StateContext';



const config = {
    reference: (new Date()).getTime(),
    email: "user@example.com",
    amount: 20000,
    publicKey: 'pk_test_d5ef29d5385867d007e7547034857f175027f699',
};
// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

// export const {totalQuantities } = useStateContext()


const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);


    return (
      <div>
          <button className='bg-secondary text-primary-2 font-bold uppercase p-4 text-center mt-4 w-full' 
            type='submit'
          onClick={() => {
              initializePayment(onSuccess, onClose)
          }}> 
            proceed to checkout
          </button>
      </div>
    );
};

export default PaystackHookExample;