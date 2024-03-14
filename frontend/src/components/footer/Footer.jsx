import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className='footer__section'>
      <div className='footer__main-container custom__container'>
        <div className='footer-container_01'>
          <h4 className='lato-bold'>LOCATION</h4>
          <div className='location'>

          <iframe title ='location' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3937.221406107141!2d80.4017808!3d9.3136403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1710174036877!5m2!1sen!2slk" width="200" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         
        

          </div>

        </div>

        <div className='footer-container_02'>
         <h4 className='lato-bold'>CONNECT WITH US</h4>
         <div className='socialIconSection'>
         <SocialIcon  style={{ height:'40px' , width:'40px' }} url="https://facebook.com" />
         <SocialIcon  style={{ height:'40px' , width:'40px' }} url="https://linkdin.com" />
         <SocialIcon  style={{ height:'40px' , width:'40px' }} url="https://linkedin.com" />
         <SocialIcon  style={{ height:'40px' , width:'40px' }} url="https://email.com" />
         </div>
         
        </div>

        <div className='footer-container_03'>
        <h4 className='lato-bold'>POSTAL ADDRESS</h4>

        </div>

        <div className='footer-container_04'>
        <h4 className='lato-bold'>VISIT</h4>
       
          <ul>
          <Link className='lato-regular text-color'>Home</Link>
          <Link className='lato-regular text-color'>Services</Link>
          <Link className='lato-regular text-color'>About Us</Link>
          </ul>

        </div>

      </div>

      <div className='footer_bottom'>
        <h4 className='lato-regular'>Copyright © 2024 Faculty Of Engineering University of Jaffna .All rights Reserved.</h4>
      </div>
      
    </div>
  )
}

export default Footer
