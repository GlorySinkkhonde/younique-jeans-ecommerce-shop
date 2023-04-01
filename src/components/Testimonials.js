import React from 'react'
import './Testimonials.css'
import AmandaWright from '../assets/images/amanda-wright.jpg'

function Testimonials() {
  return (
    <div className='testimonials-wrapper'>
        
        <div className='testimonials-wrapper-heading'>
            <h1>Testimonials</h1>
            <h3>Here's what people are saying about our products</h3>
        </div>

        <div className='testimonial-containers'>

            <div className='testimonial-box-1'>
                <img src={AmandaWright} alt='' className='testimonial-box-image-1'/>

                <h2>Amanda Wright</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.cl</p>
            </div>

            <div className='testimonial-box-1'>
                <img src={AmandaWright} alt='' className='testimonial-box-image-1'/>

                <h2>Amanda Wright</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.cl</p>
            </div>

            <div className='testimonial-box-1'>
                <img src={AmandaWright} alt='' className='testimonial-box-image-1'/>

                <h2>Amanda Wright</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.cl</p>
            </div>

        </div>

    </div>
  )
}

export default Testimonials