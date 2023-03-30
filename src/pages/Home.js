import React from 'react'
import Hero from '../components/Hero'
import Trending from '../components/Trending'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <div>
      <Hero />
      <Trending />
      <Testimonials />
    </div>
  )
}

export default Home