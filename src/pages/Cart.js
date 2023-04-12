import React from 'react'
import CartHeader from '../components/CartHeader'
import CartProducts from '../components/CartProducts'
import CartCheckout from '../components/CartCheckout'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartData from '../Data/CartData'
import Divider from '../components/Divider';

function Cart() {

  const CartElements = CartData.map (cartItem =>{
    return(
      <CartProducts
         {...cartItem}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <CartHeader />
      {CartElements}
      <CartCheckout />
      <Footer />
    </div>
  )
}

export default Cart