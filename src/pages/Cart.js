import React from 'react'
import CartHeader from '../components/CartHeader'
import CartProducts from '../components/CartProducts'
import CartCheckout from '../components/CartCheckout'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Cart() {
  return (
    <div>
      <Navbar />
      <CartHeader />
      <CartProducts />
      <CartCheckout />
      <Footer />
    </div>
  )
}

export default Cart