import React from 'react'
import './Trending.css'
import Image1 from '../assets/images/1.png'

function Trending(props) {
  return (
    <div className='trending-wrapper'>
      
      <div className='trending-wrapper__products-box'>
        <div className='product-box-1'>
          <img src={props.image} alt='' className='product-image-1'/>
          <div className='product-box__info'>
            <h3>{props.productname}</h3>
            <h3>${props.price}</h3>
          </div>
          <button className='trending-cart-btn'>Add To Cart</button>
        </div>
        
      </div>
        
    </div>
  )
}

export default Trending