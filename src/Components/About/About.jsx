import React from 'react'
import './About.css'
import about_img from '../../assets/hero.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about image" className='about-img' />
      </div>
      
      <div className="about-right">
        <h3>ABOUT BORACHEE</h3>
        <h2>Quality with Afforable Price</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Incidunt voluptatem porro vero optio ratione commodi voluptas rerum saepe,
          natus, tenetur repudiandae vitae quibusdam expedita provident debitis. 
          Aliquam maiores aliquid expedita!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Incidunt voluptatem porro vero optio ratione commodi voluptas rerum saepe,
          natus, tenetur repudiandae vitae quibusdam expedita provident debitis. 
          Aliquam maiores aliquid expedita!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Incidunt voluptatem porro vero optio ratione commodi voluptas rerum saepe,
          natus, tenetur repudiandae vitae quibusdam expedita provident debitis. 
          Aliquam maiores aliquid expedita!
        </p>
      </div>
    </div>
  )
}

export default About