import React from 'react'
import '../App.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import WebsiteLogo from '../assets/images/logo.png'

function Navbar() {

    function ToggleNav() {
        console.log('hello')
    }

  return (

    <nav className='nav'>

        <div className='nav__primary-nav'>

            <div className='nav__primary-nav-1'>
                <ul className='nav__first-nav'>
                <CustomLink to='/shop'>Shop</CustomLink>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                </ul>

                <Link to='/' className='site-logo'>
                    <img src={WebsiteLogo} alt='Younique Jeans Website Logo' />
                </Link>
            </div>
        
            <ul className='nav__second-nav'>
                <CustomLink to='/contact'>Contact</CustomLink>
                <CustomLink to='/your-account'>Your Account</CustomLink>
                <CustomLink to='/cart'> <span className='cart-icon' ><FaShoppingCart /></span> <span className='item-total'>0</span> </CustomLink>
            </ul>
        </div>
        
        <button className='nav-toggle' ria-label='open navigation' onClick={ToggleNav}>
            <span className='hamburger'></span>
        </button>

    </nav>
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

export default Navbar