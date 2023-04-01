import React from 'react'
import './ShopHeader.css'
import CategoryOneImage from '../assets/images/12.png'

function ShopHeader() {
  return (
    <div>
        <div className='shop-header'>
            <h1>Shop</h1>
            <h3>Categories</h3>
        </div>

        <div className='shop__categories'>

            <section className='category-section-1'>

                <div className='category-1'>
                    <img src={CategoryOneImage} alt='' />
                    <div>
                        <h4>Skinny Jeans</h4>
                    </div>
                </div>

            </section>

            <section className='category-section-2'>

                <div className='category-4'></div>

            </section>

        </div>
    </div>
  )
}

export default ShopHeader