import React from 'react'
import './ContactInfoSection.css'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'

function ContactInfoSection() {
  return (
    <div className='contact'>
        <div className='contact__info'>
            <div> 
                <p>Phone: (555) 555-1234 </p>
            </div>
            <div> 
                Social Media: 
                <span> <AiFillInstagram /> </span>
                <span> <FaFacebookF /> </span>
                <span> <BsTwitter /> </span>
                <span> <BsYoutube /> </span>
            </div>
        </div>

        <form className='contact__form'>
            <input placeholder='Name' />
            <br></br>
            <input placeholder='Email' />
            <br></br>
            <input placeholder='Subject' />
            <br></br>
            <textarea placeholder='How can we help you?' />
            <br></br>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ContactInfoSection