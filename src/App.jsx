import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import Title from './Components/Title/Title'
import About from './Components/About/About'
// import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="container">
        <Title subTitle='OUR PRODUCTS' title='What We Offer' />
        <Products />
        <About />
        {/* <Title subTitle='GALLERY' title='Campus Photos' />
        <Campus /> */}
        <Title subTitle='PARTNERS' title='What Partners Says' />
        <Testimonials />
        <Title subTitle='CONTACT US' title='Get In Touch' />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App