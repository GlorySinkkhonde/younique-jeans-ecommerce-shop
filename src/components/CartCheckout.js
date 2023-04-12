import React from 'react'
import './CartCheckout.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function CartCheckout() {
  return (
    <div className='cart-checkout'>
        <div className='subtotal'>
            <h3>Subtotal</h3>
            <h3>$179.96</h3>
        </div>
        <ButtonLink to='/'>Checkout</ButtonLink>
        <ButtonLink to='/shop'>Continue Shopping</ButtonLink>
    </div>
  )
}

function ButtonLink({ to, children, ...props }){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
      <button>
          <Link to={to} {...props}>
              {children}
          </Link>
      </button>
  )
}

export default CartCheckout