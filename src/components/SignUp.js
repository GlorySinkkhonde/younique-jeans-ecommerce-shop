import React from 'react'
import './SignUp.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineGoogle } from 'react-icons/ai'
import { AiFillApple } from 'react-icons/ai'

function SignUp() {

  const text = 'hello'

  return (

    <div className='sign-up'>
      <div className='sign-up__wrapper'>
        <div className='form__wrapper'>

          <h2>Create Account</h2>

          <form className='signup__contact-form'>
              <label>Email</label>
              <input />

              <label>Password</label>
              <input />

              <label>Confirm Password</label>
              <input />

              <div className='checkbox'>
                <input 
                  type="checkbox" 
                  id="legal" 
                  name="legal"
                />
                <label htmlFor="legal">By signing up you agree to our Privacy Policy and Terms of Service</label>
              </div>

              <button className='signup__btn'>Sign Up</button>

              <h1 className='or__text'>Or</h1>

              <button className='google__signup'>
                <span><AiOutlineGoogle /></span>
                Sign up with Google
              </button>

              <button className='apple__signup'> 
                <span><AiFillApple /></span>
                Sign up with Apple
              </button>

              <ul className='home__btn'>
                <CustomLink to='/'> <span className='back__icon'><IoIosArrowBack /></span> Go Back </CustomLink>
            </ul>
          </form>
        </div>
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

export default SignUp