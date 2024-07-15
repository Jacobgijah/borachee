import React from 'react';
import './Brands.css';

import brand_1 from '../../assets/brand_1.png';
import brand_2 from '../../assets/brand_2.png';
import brand_3 from '../../assets/brand_3.png';

const Brands = () => {
  return (
    <div className='brand-logos'>
      <div className='brand-logo'>
        <img src={brand_1} alt="Brand 1" />
        <span>Brand 1</span>
      </div>
      <div className='brand-logo'>
        <img src={brand_2} alt="Brand 2" />
        <span>Brand 2</span>
      </div>
      <div className='brand-logo'>
        <img src={brand_3} alt="Brand 3" />
        <span>Brand 3</span>
      </div>
    </div>
  );
};

export default Brands;