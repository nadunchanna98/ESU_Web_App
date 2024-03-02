import React,{useState} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './navbar.css';
import { MdMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import logo from '../../images/logo.png';

const CustomNavbar = () => {

  const [clicked, setClicked] = useState(false)

  const toggleIcon = () => {
    setClicked(!clicked)

  }

 

  return (
    
      <Navbar  className='nav__section' variant="dark">
        <Container className='nav__container'>

          <div className='div__section'>
          <LinkContainer to="/">
        <Navbar.Brand>
          <img
            src={logo}
            className='image'
            alt="Logo"
          />
        </Navbar.Brand>

      </LinkContainer>

      <h4 className='lato-bold , logoText'>
        Enginnering Students' Union <br></br>University Of Jaffna
      </h4>
      </div>
      

      <Nav>   
          <div  className={`${clicked ? "mobile__menu" : ""} nav__menu`}>
              <LinkContainer to="/" >
                  <Nav.Link className='nav__link lato-bold'>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about" >
                  <Nav.Link className='nav__link lato-bold'>Service</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact" >
                  <Nav.Link className='nav__link lato-bold'>About Union</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact" >
                  <Nav.Link className='nav__link lato-bold'>Contact Us</Nav.Link>
              </LinkContainer>


            </div>

          <div id='mobile'>
                {clicked ? <MdClose size={30} className='close-icon icon' onClick={toggleIcon} /> : <MdMenu size={30} className='menu-icon icon' onClick={toggleIcon} />}
                <div className='logo'>
          </div>

        </div>
      </Nav>

      </Container>
      </Navbar>
   
  );
}

export default CustomNavbar;
