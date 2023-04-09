import React from 'react'
import { Route, Routes } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion'
import Home from './Home'
import About from './about'
import Shop from './Shop'
import Cart from './cart'
import Contact from './Contact'
import Account from './Account'
import Details from './Details'

function pages() {
  return (
    <div>
        <div className='container'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='contact' element={<Contact />} />
                <Route path='/your-account' element={<Account />} />
                <Route path='/details' element={<Details />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    </div>
  )
}

export default pages