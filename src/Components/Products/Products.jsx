import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Products.css';
import product_1 from '../../assets/product-1.png';
import product_2 from '../../assets/product-2.png';
import product_3 from '../../assets/product-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const Programs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='programs-slider'>
      <Slider {...settings}>
        <div className="program">
          <img src={product_1} alt="Product 1" />
          <div className="caption">
            <img src={program_icon_1} alt="Program Icon 1" />
            <p>Grinding disc</p>
          </div>
        </div>

        <div className="program">
          <img src={product_2} alt="Product 2" />
          <div className="caption">
            <img src={program_icon_2} alt="Program Icon 2" />
            <p>Grinding disc</p>
          </div>
        </div>

        <div className="program">
          <img src={product_3} alt="Product 3" />
          <div className="caption">
            <img src={program_icon_3} alt="Program Icon 3" />
            <p>Grinding disc</p>
          </div>
        </div>

        {/* Add more products as needed */}
      </Slider>
    </div>
  );
};

export default Programs;
