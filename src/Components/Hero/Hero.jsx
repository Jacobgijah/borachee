import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Dedicated to continuous improvement and empowering others to achieve excellence</h1>
        <p>We specialize in sourcing, distribution and sale of quality and affordable abrasive
        products including grinding discs, cutt-off wheeels, sanding discs and diamond
        blades, and power tools including angle grinders, sanding machines, and more</p>
        <button className='btn'>
          <Link to='campus' smooth={true} offset={-260} duration={500}>Explore more <img src={dark_arrow} alt='' /></Link> 
        </button>
      </div>
    </div>
  )
}

export default Hero