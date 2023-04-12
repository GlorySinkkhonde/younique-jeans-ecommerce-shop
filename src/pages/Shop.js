import React from 'react'
import ShopHeader from '../components/ShopHeader'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"
import CategoryData from '../Data/CategoryData'
import ProductsData from '../Data/ProductsData'
import Divider from '../components/Divider'

function Shop() {

  const CategoryElements = CategoryData.map (category =>{
    return(
      <Categories
         {...category}
      />
    )
  })

  const ProductElements = ProductsData.map (product =>{
    return(
      <Products
         {...product}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <ShopHeader />
      
      <div className='categories-elements'>
        {CategoryElements}
      </div>

      <Divider />

      <div className='product-elements'>
        {ProductElements}
      </div>

      <Pagination />
      <Footer />
    </div>
  )
}

export default Shop