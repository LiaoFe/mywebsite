import React from 'react';
import { Navbar,Nav,NavDropdown, Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, Route } from 'react-router-dom';
import AboutMe from '../pages/AboutMe';
import Hobbies from '../pages/Hobbies';
import Blog from '../pages/Blog';
import './navbar.css'

  function NavBar(){
      return( 
        
        <Navbar variant="dark fixed-top" id="navbar" style={{background: "#464866"}}>
  
        <Navbar.Brand className='ms-4' href="#welcome" id="hometext" >Felix</Navbar.Brand>
      
        <Nav className="ms-auto me-3" id="tabtext" style={{background: "#464866"}}>
          <Nav.Link href='./#about'>About</Nav.Link>
          <Nav.Link href="./#skills">Skills</Nav.Link>
          <Nav.Link href="./#hobbies">Hobbies</Nav.Link>
          <Nav.Link href="./blog">Blog</Nav.Link>
          <Nav.Link href="./#contact">Contact</Nav.Link>
        </Nav>

      </Navbar>
  
      );
    }

  export default NavBar;