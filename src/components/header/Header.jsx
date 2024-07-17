import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import logo from '../../assets/LogoHere.png'
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-black-div">
    <Container className='p-0'>
      <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav className='main-div-nav'>
          <div className='inner-div'>
          <Nav.Link href="#deets" className='nav-text'>About</Nav.Link>
          <Nav.Link href="#deets" className='nav-text'>Collection</Nav.Link>
          <Nav.Link href="#deets" className='nav-text'>Creator</Nav.Link>
          <Nav.Link href="#deets" className='nav-text'>Road</Nav.Link>
          </div>
<button className='singIn-btn'>
sign in
</button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
