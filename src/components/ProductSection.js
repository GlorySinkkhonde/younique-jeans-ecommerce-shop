import React from 'react'
import "./ProductSection.css"
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import ProductDetailsImage from '../assets/images/17.png'

function ProductSection() {
  return (
    <>

      <div className='product'>
        <div className='product__image'>
            <img src={ProductDetailsImage} alt='' />
        </div>

        <div className='product__details'>

            <h2>Highwaist Jeans</h2>
            <h2>$<span>39.99</span></h2>
            <p>It’s about time you found highwaist jeans specifically made and designed for petite heights. These jeans are not too long UP or DOWN. Shop confidently online and save on the alteration time and money you spend everytime you shop jeans online.</p>
            <h3>Size:<span>5</span></h3>
            <h3>Color:<span>Santos Grey</span></h3>
            <h3><span>10</span> left in stock</h3>

            <h3 className='product__counter'>Quantity:  
                <span> <AiOutlineMinus /> </span>
                <span> 2 </span>
                <span> <AiOutlinePlus /> </span>
            </h3>

            <button className='add-to-cart-btn'>Add To Cart</button>

        </div>
        
    </div>

    <div className='product__divider'></div>
    </>
  )
}

export default ProductSection