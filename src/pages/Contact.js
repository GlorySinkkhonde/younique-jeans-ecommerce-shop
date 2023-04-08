import React from 'react'
import ContactHeader from '../components/ContactHeader'
import ContactInfoSection from '../components/ContactInfoSection'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <ContactHeader />
      <ContactInfoSection />
      <Footer />
    </div>
  )
}

export default Contact