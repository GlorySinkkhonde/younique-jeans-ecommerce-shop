import React from 'react'
import ShopHeader from '../components/ShopHeader'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";

function Shop() {
  return (
    <div>
      <Navbar />
      <ShopHeader />
      <Categories />
      <Products />
      <Pagination />
      <Footer />
    </div>
  )
}

export default Shop