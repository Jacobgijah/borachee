import React, { useState, useEffect } from 'react';
import './Brands.css';

import brand_1 from '../../assets/brand_1.png';
import brand_2 from '../../assets/brand_2.png';
import brand_3 from '../../assets/brand_3.png';

const brands = [
  { img: brand_1, name: "EasyFix" },
  { img: brand_2, name: "EuroCut" },
  { img: brand_3, name: "SALi" }
];

const Brands = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 3000); // Change brand every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='brand-logos'>
      {brands.map((brand, index) => (
        <div className={`brand-logo ${index === activeIndex ? 'active' : ''}`} key={index}>
          <img src={brand.img} alt={`Brand ${index + 1}`} />
          <span>{brand.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Brands;
