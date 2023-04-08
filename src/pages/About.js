import React from 'react'
import AboutHeader from '../components/AboutHeader'
import AboutDescription from '../components/AboutDescription'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>

      <Navbar />
      <AboutHeader />
      <AboutDescription />
      <Footer />

    </div>
  )
}

export default About