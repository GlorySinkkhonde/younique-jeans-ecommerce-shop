import React from 'react'
import '../App.css'
import Hero from '../components/Hero'
import Trending from '../components/Trending'
import Testimonials from '../components/Testimonials'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import TrendingHeader from '../components/TrendingHeader'
import TrendingData from '../Data/TrendingData'
import TestimonialsData from '../Data/TestimonialsData'
import TestimonialsHeader from '../components/TestimonialsHeader'



function Home() {

  const TrendingProducts = TrendingData.map (item =>{
    return(
      <Trending
         {...item}
      />
    )
  })

  const ShopTestimonials = TestimonialsData.map (testimonial =>{
    return(
      <Testimonials
      {...testimonial}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <TrendingHeader />

      <div className='Trending__products'>
        {TrendingProducts}
      </div> 

      <TestimonialsHeader />

      <div className='Testimonials-elements'>
        {ShopTestimonials}
      </div>
      
      <Footer />
    </div>
  )
}

export default Home