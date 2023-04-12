import React from 'react'
import './Hero.css'
import HeroImage from '../assets/images/hero-image.png'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Hero() {
  return (
    <div>
        <div className='wrapper'>
            <img src={HeroImage} alt='A woman wearing jeans with her face turned to her left' className='wrapper__image' />

            <div className='wrapper__text'>
                <h1 className='desktop__text'>The perfect</h1>
                <h1 className='desktop__text'>jeans for your</h1>
                <h1 className='desktop__text'>unique physique</h1>
                <h1 className='mobile__text'>The perfect jeans for your unique physique</h1>
                <p> Find the right fit for you using our advanced search and an array of product images on different body types.</p>
               <ButtonLink to='/shop'>Shop</ButtonLink>
                
                
            </div>
        </div>

        <div className='circle-1'></div>
        <div className='circle-2'></div>
        <div className='circle-3'></div>
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

export default Hero