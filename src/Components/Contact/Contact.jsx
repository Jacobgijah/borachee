import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-ico.png'
import phone_icon from '../../assets/phone-ico.png'
import location_icon from '../../assets/location-ico.png'
import insta_icon from '../../assets/insta-ico.png'
import whatsapp_icon from '../../assets/whatsapp-ico.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information
        below. Your feedback, questions, and suggestions are important to us as We
        strive to provide exceptional service to our Society.</p>
        <ul>
          <li>
            <a href="mailto:sales@borachee.co.tz" target='_blank'>    
              <img src={mail_icon} alt="" />sales@borachee.co.tz
            </a>
          </li>
          <li><img src={phone_icon} alt="" />+255 752 485 686</li>
          <li>
            <a href="https://wa.link/w6v85i" target='_blank'>
              <img src={whatsapp_icon} alt="" />+255 752 485 686
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/boracheetz/" target='_blank'>
              <img src={insta_icon} alt="" /> @boracheetz
            </a>
          </li>
          <li><img src={location_icon} alt="" />Plot 68, Mbezi beach, Tangi bovu<br/>
          Dar es salaam, Tanzania</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label htmlFor="client name">Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label htmlFor="phone number">Phone number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number'
          required />
          <label htmlFor="message">Write your messages here</label>
          <textarea name="message" rows="6" placeholder='Enter your message'
          required></textarea>
          <button type='submit' className='btn dark-btn'>Send Now 
          <img src={white_arrow} alt="" /></button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact