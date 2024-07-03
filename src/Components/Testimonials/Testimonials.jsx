import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>

      <div className="slider">
        <ul ref={slider}>
          {/* USER 1 */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Khaleed Maumba</h3>
                  <span>FreshInk, Dom</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Iusto consectetur mollitia ipsa ex, consequatur ea maxime autem 
              non necessitatibus omnis totam cumque quos voluptate, </p>
            </div>
          </li>

          {/* USER 2 */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Halima Mussa</h3>
                  <span>FreshInk, Dsm</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Iusto consectetur mollitia ipsa ex, consequatur ea maxime autem 
              non necessitatibus omnis totam cumque quos voluptate, </p>
            </div>
          </li>

          {/* USER 3 */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Marry Mushi</h3>
                  <span>FreshInk, Mby</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Iusto consectetur mollitia ipsa ex, consequatur ea maxime autem 
              non necessitatibus omnis totam cumque quos voluptate, </p>
            </div>
          </li>

          {/* USER 4 */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Paul Masao</h3>
                  <span>FreshInk, Ash</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Iusto consectetur mollitia ipsa ex, consequatur ea maxime autem 
              non necessitatibus omnis totam cumque quos voluptate, </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials