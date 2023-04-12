import React from 'react'
import './Products.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Products(props) {
  return (
    <div>
      <div className='products-section__container'>

        <div className='individual__product'>
          <img src={props.image} alt='' className='product-image-1'/>
          <DivLink to='/details' className='product__info'>
              <h3>{props.productname}</h3>
              <h3>${props.price}</h3>
          </DivLink>
          <button className='product__add-to-cart-btn'>Add To Cart</button> 
        </div> 

      </div>

    </div>
  )
}

function DivLink({ to, children, ...props }){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
      <div>
          <Link to={to} {...props}>
              {children}
          </Link>
      </div>
  )
}

export default Products