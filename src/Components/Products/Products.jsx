import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Products.css';
import product_1 from '../../assets/product-1.png';
import product_2 from '../../assets/product-2.png';
import product_3 from '../../assets/product-3.png';
import product_4 from '../../assets/product-4.png';
import product_5 from '../../assets/product-5.png';
import product_6 from '../../assets/product-6.png';
import product_7 from '../../assets/product-7.png';
import product_8 from '../../assets/product-8.png';
import product_9 from '../../assets/product-9.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const Programs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
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
    <div className='programs programs-slider'>
      <Slider {...settings}>
        <div className="program">
          <img src={product_1} alt="Product 1" />
          <div className="caption">
            {/* <img src={program_icon_1} alt="Program Icon 1" /> */}
            <h2>Grinding disc</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad!
               Hic ratione ut labore voluptas ab assumenda nisi facilis maxime</p>
          </div>
        </div>

        <div className="program">
          <img src={product_2} alt="Product 2" />
          <div className="caption">
            {/* <img src={program_icon_2} alt="Program Icon 2" /> */}
            <h2>Cutting disc</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad!
               Hic ratione ut labore voluptas ab assumenda nisi facilis maxime</p>
          </div>
        </div>

        <div className="program">
          <img src={product_3} alt="Product 3" />
          <div className="caption">
            {/* <img src={program_icon_3} alt="Program Icon 3" /> */}
            <h2>Flap disc</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad!
               Hic ratione ut labore voluptas ab assumenda nisi facilis maxime</p>
          </div>
        </div>
        
        <div className="program">
          <img src={product_4} alt="Product 4" />
          <div className="caption">
            {/* <img src={program_icon_3} alt="Program Icon 3" /> */}
            <h2>⁠Velcro Pads</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad!
               Hic ratione ut labore voluptas ab assumenda nisi facilis maxime</p>
          </div>
        </div>

        <div className="program">
          <img src={product_5} alt="Product 4" />
          <div className="caption">
            {/* <img src={program_icon_1} alt="Program Icon 3" /> */}
            <h2>⁠PSA Disc</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad!
               Hic ratione ut labore voluptas ab assumenda nisi facilis maxime</p>
          </div>
        </div>

        <div className="program">
          <img src={product_6} alt="Product 4" />
          <div className="caption">
            {/* <img src={program_icon_1} alt="Program Icon 3" /> */}
            <h2>⁠⁠Velcro Disc</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad!
               Hic ratione ut labore voluptas ab assumenda nisi facilis maxime</p>
          </div>
        </div>
        <div className="program">
          <img src={product_7} alt="Product 4" />
          <div className="caption">
            {/* <img src={program_icon_1} alt="Program Icon 3" /> */}
            <h2>⁠⁠PSA Pads</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad!
               Hic ratione ut labore voluptas ab assumenda nisi facilis maxime</p>
          </div>
        </div>

        <div className="program">
          <img src={product_8} alt="Product 4" />
          <div className="caption">
            {/* <img src={program_icon_2} alt="Program Icon 3" /> */}
            <h2>⁠⁠⁠Diamond Blades</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ad!
               Hic ratione ut labore voluptas ab assumenda nisi facilis maxime</p>
          </div>
        </div>

        <div className="program">
          <img src={product_9} alt="Product 4" />
          <div className="caption">
            {/* <img src={program_icon_2} alt="Program Icon 3" /> */}
            <p>⁠⁠Non Woven Wheels</p>
          </div>
        </div>

        {/* Add more products as needed */}
      </Slider>
    </div>
  );
};

export default Programs;
