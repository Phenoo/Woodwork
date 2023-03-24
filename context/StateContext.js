import React, { createContext, useContext, useState} from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  const addToCart = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    console.log(cartItems);
    if(product.stock){
      setTotalQuantities((prevTotalQty) => prevTotalQty + quantity);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
      if(checkProductInCart){
        setCartItems(cartItems.map((x) => x._id === product._id ? {...checkProductInCart, quantity: x.quantity + 1} : x))
      }
      else{
        product.quantity = quantity;
        setCartItems([...cartItems, {...product}])
      }
      toast.success('Added to cart')
    }
    else{
      toast.error('Out of stock, Can`t Add To Cart')
    }
  } 

  const removeBtn = (product) => {
    const newCartItems = cartItems.filter((item) => item._id != product._id)
    setCartItems(newCartItems)
    setTotalQuantities((prevTotalQty) => prevTotalQty - product.quantity);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price * product.quantity)
  }

  const incrementQuantity = (product) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex(
      (cartItem) => cartItem._id === cartItem._id
    );
    newCartItems.product.quantity += 1;
    setCartItems(newCartItems);
    // setTotalQuantities((prevTotalQty) => prevTotalQty + product.quantity);
    // setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * product.quantity)

  };
  
  let foundProduct;
  let index; 

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if(value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }

  const clearCart = () => {
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
  }

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }




  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        qty,
        cartItems,
        totalQuantities,
        totalPrice,
        addToCart,
        removeBtn,
        incrementQuantity,
        clearCart,
        toggleCartItemQuanitity,
        scrollTo
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);