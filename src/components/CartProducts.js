import React from 'react'
import './CartProducts.css'
import ProductImage from '../assets/images/1.png'
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'

function CartProducts() {
  return (
    <div className='cart'>
        <div className='cart__product-1'>

            <div className='cart__product-section-1'>
                <img src={ProductImage} alt='' />
                <h3>Boyfriend Jeans</h3>
            </div>

            <div className='cart__product-section-2'>
                <div className='product__counter'>
                    <span> <AiOutlineMinus /> </span>
                    <span> 2 </span>
                    <span> <AiOutlinePlus /> </span>
                </div>

                <h3>$29.99</h3>
            </div>

        </div>

        <div className='cart__product-1'>

            <div className='cart__product-section-1'>
                <img src={ProductImage} alt='' />
                <h3>Boyfriend Jeans</h3>
            </div>

            <div className='cart__product-section-2'>
                <div className='product__counter'>
                    <span> <AiOutlineMinus /> </span>
                    <span> 2 </span>
                    <span> <AiOutlinePlus /> </span>
                </div>

                <h3>$29.99</h3>
            </div>

        </div>

        <div className='cart__product-1'>

            <div className='cart__product-section-1'>
                <img src={ProductImage} alt='' />
                <h3>Boyfriend Jeans</h3>
            </div>

            <div className='cart__product-section-2'>
                <div className='product__counter'>
                    <span> <AiOutlineMinus /> </span>
                    <span> 2 </span>
                    <span> <AiOutlinePlus /> </span>
                </div>

                <h3>$29.99</h3>
            </div>

        </div>

        <div className='cart__product-1'>

            <div className='cart__product-section-1'>
                <img src={ProductImage} alt='' />
                <h3>Boyfriend Jeans</h3>
            </div>

            <div className='cart__product-section-2'>
                <div className='product__counter'>
                    <span> <AiOutlineMinus /> </span>
                    <span> 2 </span>
                    <span> <AiOutlinePlus /> </span>
                </div>

                <h3>$29.99</h3>
            </div>

        </div>

        <div className='cart__product-1'>

            <div className='cart__product-section-1'>
                <img src={ProductImage} alt='' />
                <h3>Boyfriend Jeans</h3>
            </div>

            <div className='cart__product-section-2'>
                <div className='product__counter'>
                    <span> <AiOutlineMinus /> </span>
                    <span> 2 </span>
                    <span> <AiOutlinePlus /> </span>
                </div>

                <h3>$29.99</h3>
            </div>

        </div>

        <div className='cart__product-1'>

            <div className='cart__product-section-1'>
                <img src={ProductImage} alt='' />
                <h3>Boyfriend Jeans</h3>
            </div>

            <div className='cart__product-section-2'>
                <div className='product__counter'>
                    <span> <AiOutlineMinus /> </span>
                    <span> 2 </span>
                    <span> <AiOutlinePlus /> </span>
                </div>

                <h3>$29.99</h3>
            </div>

        </div>

    </div>
  )
}

export default CartProducts