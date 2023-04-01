import React from 'react'
import './Footer.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { FaCcPaypal } from 'react-icons/fa'
import { FaCcVisa } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import { FaCcDiscover } from 'react-icons/fa'


function Footer() {
  return (
    <div>

        <div className='footer'>

            <section className='footer__section-1'>

                <div className='footer__nav'>
                   <ul className='footer_primary-nav'>
                        <h1>Navigation</h1>
                        <CustomLink to='/shop'>Shop</CustomLink>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/about'>About</CustomLink>
                        <CustomLink to='/contact'>Contact Us</CustomLink>
                        <CustomLink to='/your-account'>Your Account</CustomLink>
                   </ul>

                   <ul className='footer_secondary-nav'>
                        <h1>Legal</h1>
                        <CustomLink to='/'>Privacy Policy</CustomLink>
                        <CustomLink to='/'>Terms Of Use</CustomLink>
                        <CustomLink to='/'>Disclaimer</CustomLink>
                        <CustomLink to='/'>Return Policy</CustomLink>
                        <CustomLink to='/'>Accessibility Statement</CustomLink>
                   </ul>
                </div>

                <div className='footer__info'>

                   <section className='footer__social'>
                       <h1>Also Find Out On:</h1>
                       <span> <AiFillInstagram /> </span>
                       <span> <FaFacebookF /> </span>
                       <span> <BsTwitter /> </span>
                       <span> <BsYoutube /> </span>
                   </section>

                   <section className='footer__payments'>
                       <h1>Payment Methods:</h1>
                       <span> <FaCcPaypal /> </span>
                       <span> <FaCcVisa /> </span>
                       <span> <FaCcMastercard /> </span>
                       <span> <FaCcDiscover /> </span>
                   </section>

                </div>

            </section>

            <section className='footer__section-2'>

                <form className='form'>
                    <h1>Join Our Newsletter</h1>
                    <input placeholder='Name'/> 
                    <br></br>
                    <input placeholder='Email'/>
                    <br></br>
                    <button>Join</button>
                </form>

            </section>

        </div>

    </div>
  )
}

function CustomLink({ to, children, ...props }){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Footer