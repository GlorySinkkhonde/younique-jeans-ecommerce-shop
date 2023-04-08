import React from 'react'
import Hero from '../components/Hero'
import Trending from '../components/Trending'
import Testimonials from '../components/Testimonials'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trending />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home