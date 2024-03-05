import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import logo from '../../images/logo.png';
import './navbar.css';

const CustomNavbar = () => {

  const [clicked, setClicked] = useState(false)

  const toggleIcon = () => {
    setClicked(!clicked)

  }

  return (
    
    <nav className='nav__section'>
    <div className='custom__container nav__container'>

      <div className='div__section'>
        <Link to="/">
          <img src={logo} className='image' alt="Logo" />
        </Link>
        <h4 className='lato-bold logoText'>
          Enginnering Students' Union <br/>University Of Jaffna
        </h4>
      </div>

      <div>
        <ul className={`${clicked ? "mobile__menu" : ""} nav__menu`}>
          <Link to="/" className='nav__link lato-bold'>Home</Link>
          <Link to="/services" className='nav__link lato-bold'>Service</Link>
          <Link to="/aboutUnion" className='nav__link lato-bold'>About Union</Link>
          <Link to="/contact" className='nav__link lato-bold'>Contact Us</Link>
        </ul>

        <div id='mobile'>
          {clicked ? (
            <MdClose size={30} className='close-icon icon' onClick={toggleIcon} />
          ) : (
            <MdMenu size={30} className='menu-icon icon' onClick={toggleIcon} />
          )}
          <div className='logo'></div>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default CustomNavbar;
