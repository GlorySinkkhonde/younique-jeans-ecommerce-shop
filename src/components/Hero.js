import React from 'react'
import './Hero.css'
import HeroImage from '../assets/images/hero-image.png'

function Hero() {
  return (
    <div>
        <div className='wrapper'>
            <img src={HeroImage} alt='A woman wearing jeans with her face turned to her left' className='wrapper__image' />

            <div className='wrapper__text'>
                <h1>The perfect</h1>
                <h1>jeans for your</h1>
                <h1>unique physique</h1>
                <p> Find the right fit for you using our advanced search and an array of product images on different body types.</p>
                <button>Shop</button>
            </div>
        </div>

        <div className='circle-1'></div>
        <div className='circle-2'></div>
        <div className='circle-3'></div>
    </div>
    
  )
}

export default Hero