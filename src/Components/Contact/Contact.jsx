import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "91d4d05f-3bb3-4b76-aafa-a1124da6c79f");
  
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
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>You can contact us through the form or find our details below. We value your feedback, questions, and suggestions as we work to offer outstanding service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />info@poornima.org</li>
                <li><img src={phone_icon} alt="" />+91-9928555222</li>
                <li><img src={location_icon} alt="" />ISI 6, RIICO Institutional Area Sitapura, <br /> Jaipur - 302022</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
              <label> Your Name</label>
              <input type="text" name="name" placeholder='Enter your name' required />
              <label> Phone Number</label>
              <input type="tel" name='Phone' placeholder='Enter your Mobile Number' required/>
              <label>Write your message here</label>
              <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
              <button type='Submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>  
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
