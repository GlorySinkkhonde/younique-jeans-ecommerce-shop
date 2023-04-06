import React from 'react'
import './Products.css'
import ProductIMage from '../assets/images/7.png'

function Products() {
  return (
    <div>
        <div className='products-section'>
            
            <div className='products-section__container'>

              <div className='product-1'>
                <img src={ProductIMage} alt='' className='product-image-1'/>
                <div className='product-1__info'>
                    <h3>Crossover Boyfriend Jeans</h3>
                    <h3>$29.99</h3>
                </div>
                <button className='add-to-cart-btn'>Add To Cart</button> 
              </div>

              <div className='product-1'>
                <img src={ProductIMage} alt='' className='product-image-1'/>
                <div className='product-1__info'>
                    <h3>Crossover Boyfriend Jeans</h3>
                    <h3>$29.99</h3>
                </div>
                <button className='add-to-cart-btn'>Add To Cart</button> 
              </div>

              <div className='product-1'>
                <img src={ProductIMage} alt='' className='product-image-1'/>
                <div className='product-1__info'>
                    <h3>Crossover Boyfriend Jeans</h3>
                    <h3>$29.99</h3>
                </div>
                <button className='add-to-cart-btn'>Add To Cart</button> 
              </div>

              <div className='product-1'>
                <img src={ProductIMage} alt='' className='product-image-1'/>
                <div className='product-1__info'>
                    <h3>Crossover Boyfriend Jeans</h3>
                    <h3>$29.99</h3>
                </div>
                <button className='add-to-cart-btn'>Add To Cart</button> 
              </div>

              <div className='product-1'>
                <img src={ProductIMage} alt='' className='product-image-1'/>
                <div className='product-1__info'>
                    <h3>Crossover Boyfriend Jeans</h3>
                    <h3>$29.99</h3>
                </div>
                <button className='add-to-cart-btn'>Add To Cart</button> 
              </div>

              <div className='product-1'>
                <img src={ProductIMage} alt='' className='product-image-1'/>
                <div className='product-1__info'>
                    <h3>Crossover Boyfriend Jeans</h3>
                    <h3>$29.99</h3>
                </div>
                <button className='add-to-cart-btn'>Add To Cart</button> 
              </div>

              

            </div>
              
        </div>
    </div>
  )
}

export default Products