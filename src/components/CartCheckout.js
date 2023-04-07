import React from 'react'
import './CartCheckout.css'

function CartCheckout() {
  return (
    <div className='cart-checkout'>
        <div className='subtotal'>
            <h3>Subtotal</h3>
            <h3>$179.96</h3>
        </div>
        <button className='checkout-btn'>Checkout</button>
        <br></br>
        <button className='checkout-shop-btn'>Continue Shopping</button>
    </div>
  )
}

export default CartCheckout