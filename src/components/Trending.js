import React from 'react'
import './Trending.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'


function Trending(props) {
  return (
    <div className='trending-wrapper'>
      
      <div className='trending-wrapper__products-box'>
        <div className='product-box-1'>
          <img src={props.image} alt='' className='product-image-1'/>
          <DivLink to='/details' className='product-box__info'>
            <h3>{props.productname}</h3>
            <h3>${props.price}</h3>
          </DivLink>
          <button className='trending-cart-btn'>Add To Cart</button>
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

export default Trending