import React from 'react'
import ProductDetailsHeader from '../components/ProductDetailsHeader'
import ProductSection from '../components/ProductSection'
import Reviews from '../components/Reviews'

function Details() {
  return (
    <div>
        <ProductDetailsHeader />
        <ProductSection />
        <Reviews />
    </div>
  )
}

export default Details