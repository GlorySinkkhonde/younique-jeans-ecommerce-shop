import React from 'react'
import '../App.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import MyImage from '../assets/images/logo.svg'

function Navbar() {
  return (
    <nav className='nav'>
        <ul className='nav__first-nav'>
            <CustomLink to='/shop'>Shop</CustomLink>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </ul>

        <Link to='/' className='site-logo'>
            <img src={MyImage} alt="Younique Jeans Website Logo" />
        </Link>

        <ul className='nav__second-nav'>
            <CustomLink to='/contact'>Contact</CustomLink>
            <CustomLink to='/your-account'>Your Account</CustomLink>
            <CustomLink to='/cart'> <FaShoppingCart /> 0 </CustomLink>
        </ul>
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