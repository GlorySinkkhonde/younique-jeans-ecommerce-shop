import React from 'react'
import CartHeader from '../components/CartHeader'
import CartProducts from '../components/CartProducts'
import CartCheckout from '../components/CartCheckout'

function Cart() {
  return (
    <div>
      <CartHeader />
      <CartProducts />
      <CartCheckout />
    </div>
  )
}

export default Cart