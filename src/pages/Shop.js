import React from 'react'
import ShopHeader from '../components/ShopHeader'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Pagination from '../components/Pagination'

function Shop() {
  return (
    <div>
      <ShopHeader />
      <Categories />
      <Products />
      <Pagination />
    </div>
  )
}

export default Shop