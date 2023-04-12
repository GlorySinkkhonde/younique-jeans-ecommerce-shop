import React from 'react'
import './Testimonials.css'

function Testimonials(props) {
  return (
    <div className='testimonials-wrapper'>

        <div className='testimonial-containers'>

            <div className='testimonial-box'>
                <img src={props.image} alt='' className='testimonial-box-image'/>

                <h2>{props.personname}</h2>
                <p>{props.testimonial}</p>
            </div>

        </div>

    </div>
  )
}

export default Testimonials