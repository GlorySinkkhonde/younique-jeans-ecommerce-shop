import React from 'react'
import '../App.css'
import Hero from '../components/Hero'
import Trending from '../components/Trending'
import Testimonials from '../components/Testimonials'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TrendingData from '../trendingdata'
import TrendingHeader from '../components/TrendingHeader'

function Home() {

  const TrendingProducts = TrendingData.map (item =>{
    return(
      <Trending
         {...item}
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
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home