import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure quality and better products for a better World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Animi eius ab molestias hic maxime accusantium, necessitatibus in 
          exercitationem eveniet impedit aut tenetur magnam dolores provident 
          et nostrum perferendis itaque! Debitis.
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt='' /> </button>
      </div>
    </div>
  )
}

export default Hero