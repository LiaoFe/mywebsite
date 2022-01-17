import React from 'react';
import { Navbar,Nav,NavDropdown, Container, Col, Button, Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, Route } from 'react-router-dom';
import AboutMe from '../pages/AboutMe';
import Hobbies from '../pages/Hobbies';
import Blog from '../pages/Blog';
import './navbar.css'

  function NavBar(){
      return( 
        
        <Navbar className="pb-0" variant="dark fixed-top" id="navbar" style={{background: "#464866"}}>
  
        <Navbar.Brand className='ms-4' href="#welcome" id="hometext" >Felix</Navbar.Brand>
      
        <Nav className="ms-auto me-3" id="tabtext" style={{background: "#464866"}}>
          <Nav.Link href='/#about'>About</Nav.Link>
          <Nav.Link href="/#skills">Skills</Nav.Link>
          <Nav.Link href="/#hobbies">Hobbies</Nav.Link>
          <Link to='./blog'>
            <Nav.Link  href="./blog">Blog</Nav.Link >
          </Link>
          <NavDropdown //as={ButtonGroup}
            align={{ lg: 'end' }}
            id="dropdown-menu-align-responsive-1" to='/blog'>
            <NavDropdown.Item href="./blog#witcher3">Witcher 3</NavDropdown.Item>
            {/* <NavDropdown.Item href="ac-3">Assassin's Creed: III</NavDropdown.Item>
            <NavDropdown.Item href="ac-black-flag">Assassin's Creed: Black Flag</NavDropdown.Item> */}
            <NavDropdown.Item href="./blog#ac-odyssey">Assassin's Creed: Odyssey</NavDropdown.Item>
        {/*     <NavDropdown.Item href="ac-valhalla">Assassin's Creed: Valhalla</NavDropdown.Item>
            <NavDropdown.Item href="#gta5">Grand Theft Auto </NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link href="./#contact">Contact</Nav.Link>
        </Nav>

      </Navbar>
  
      );
    }

  export default NavBar;