import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './navbar.css';
import logo from '../../images/logo.png';

const CustomNavbar = () => {
  return (
    
      <Navbar  className='nav__section' variant="dark">
        <Container className='nav__container'>
          <div className='div__section'>
          <LinkContainer to="/">
        <Navbar.Brand>
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

      </LinkContainer>

      <h4 className='roboto-bold , logoText'>
        Enginnering Students' Union <br></br>University Of Jaffna
      </h4>
          </div>
        
      




      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="nav__menu">

      <LinkContainer to="/" >
      <Nav.Link className='nav__link roboto-regular'>Home</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/about" >
      <Nav.Link className='nav__link roboto-regular'>About</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/contact" >
      <Nav.Link className='nav__link roboto-regular'>Contact</Nav.Link>
      </LinkContainer>

      </Nav>
      </Navbar.Collapse>
        </Container>
      </Navbar>
   
  );
}

export default CustomNavbar;
