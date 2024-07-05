import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import Title from './Components/Title/Title';
import About from './Components/About/About';
// import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { TailSpin } from 'react-loader-spinner';
import Campus from './Components/Campus/Campus';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading spinner
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-spinner">
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <div className="container">
            <About />
            {/* <Campus /> */}
            <Title subTitle="OUR PRODUCTS" title="What We Offer" />
            <Products />
            <Title subTitle="OUR BRANDS" title="What Partners Say" />
            <Testimonials />
            <Title subTitle="CONTACT US" title="Get In Touch" />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
