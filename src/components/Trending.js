import React from 'react'
import Image1 from '../assets/images/1.png'

function Trending() {
  return (
    <div className='trending-wrapper'>

      <div className='trending-wrapper__heading'>
        <h1>Trending</h1>
        <h3>Here's what people are loving</h3>
      </div>
      
      <div className='trending-wrapper__products-box'>
        <div className='product-box-1'>
          <img src={Image1} alt='' className='product-image-1'/>
          <div className='product-box__info'>
            <h3>Boyfriend Jeans</h3>
            <h3>$59.99</h3>
          </div>
          <button className='add-to-cart-btn'>Add To Cart</button>
        </div>

        <div className='product-box-1'>
          <img src={Image1} alt='' className='product-image-1'/>
          <div className='product-box__info'>
            <h3>Boyfriend Jeans</h3>
            <h3>$59.99</h3>
          </div>
          <button className='add-to-cart-btn'>Add To Cart</button>
        </div>

        <div className='product-box-1'>
          <img src={Image1} alt='' className='product-image-1'/>
          <div className='product-box__info'>
            <h3>Boyfriend Jeans</h3>
            <h3>$59.99</h3>
          </div>
          <button className='add-to-cart-btn'>Add To Cart</button>
        </div>
        
      </div>
        
    </div>
  )
}

export default Trending