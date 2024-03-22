import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import MegaMenu from '../../components/megaMenu/MegaMenu';
import contactUsImage from '../../images/contact-us-image.jpg';
import './contact.css';

const ContactUs = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <MegaMenu />
      </div>
      
      <div className="contact-us-container">
        <div className="contact-us-image">
          <img src={contactUsImage} alt="Contact Us" />
        </div>
        <div className="contact-us-form">
          <h2 className='head'>CONTACT US</h2>
          <form>
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email address" />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Message"></textarea>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>

      </div>
   
    </>
  );
};

export default ContactUs;