import React from 'react'
import './Products.css'
import product_1 from '../../assets/product-1.png'
import product_2 from '../../assets/product-2.png'
import product_3 from '../../assets/product-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>

      <div className="program">
        <img src={product_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Grinding disc</p>
        </div>
      </div>

      <div className="program">
        <img src={product_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Grinding disc</p>
        </div>
      </div>

      <div className="program">
        <img src={product_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Grinding disc</p>
        </div>
      </div>
      
    </div>
  )
}

export default Programs