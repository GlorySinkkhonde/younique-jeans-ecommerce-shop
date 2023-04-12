import React from 'react'
import './CartProducts.css'
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'

function CartProducts(props) {
  return (
    <div className='cart'>
        <div className='cart__product'>

            <div className='cart__product-section-1'>
                <img src={props.image} alt='' />
                <h3>{props.productname}</h3>
            </div>

            <div className='cart__product-section-2'>
                <div className='product__counter'>
                    <span> <AiOutlineMinus /> </span>
                    <span> {props.quantity} </span>
                    <span> <AiOutlinePlus /> </span>
                </div>

                <h3>${props.price}</h3>
            </div>

        </div>

    </div>
  )
}



export default CartProducts