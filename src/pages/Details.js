import React from 'react'
import ProductDetailsHeader from '../components/ProductDetailsHeader'
import ProductSection from '../components/ProductSection'
import Reviews from '../components/Reviews'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Details() {
  return (
    <div>
        <Navbar />
        <ProductDetailsHeader />
        <ProductSection />
        <Reviews />
        <Footer />
    </div>
  )
}

export default Details