import React, {useState} from 'react';
import { Navbar,Nav,NavDropdown, Container, Col, Button, Dropdown, Fade } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, Route, useLocation } from 'react-router-dom';
import AboutMe from '../pages/AboutMe';
import Hobbies from '../pages/Hobbies';
import Blog from '../pages/Blog';
import ScrollToTop from './ScrollToTop';
import './navbar.css'

  function NavBar2(props){
    const [visible, setVisible] = useState(false)
    
    const url = "/mywebsite/"

    const toggleVisible = () => {
      setVisible(!visible);
        window.scrollTo(0, 0);
    };

    const location = useLocation();
    React.useEffect(() => {
      if (window.location.pathname === "/mywebsite/blog")  {
        setVisible(true);
      } else {
        setVisible(false)
      }
    }, [location]);
    
      return( 
        
        <Navbar className="pb-0" variant="dark fixed-top" id="navbar" style={{background: "#464866"}}>
  
        <Navbar.Brand className='ms-4' href="#welcome" id="hometext" >Felix</Navbar.Brand>
      
        <Nav className="ms-auto me-3" id="tabtext" style={{background: "#464866"}}>
          <Nav.Link href={ url +'#about' }>About</Nav.Link>
          <Nav.Link href={ url + "#skills" }>Skills</Nav.Link>
          <Nav.Link href={ url + "#hobbies" }>Hobbies</Nav.Link>
          <Nav.Link href={ url + "#contact" } >Contact</Nav.Link>
         
            <Nav.Link className="pe-0" href="./blog"  onClick={() => {window.scrollTo(0, 0)}}>Blog</Nav.Link >
          
           <Fade in={visible}> 
          <NavDropdown //as={ButtonGroup}
            align={{ lg: 'end' }}
            id="dropdown-menu-align-responsive-1" to='/blog' >
            <NavDropdown.Item href="./blog#witcher3">Witcher 3</NavDropdown.Item>
            {/* <NavDropdown.Item href="ac-3">Assassin's Creed: III</NavDropdown.Item>
            <NavDropdown.Item href="ac-black-flag">Assassin's Creed: Black Flag</NavDropdown.Item> */}
            <NavDropdown.Item href="./blog#ac-odyssey">Assassin's Creed: Odyssey</NavDropdown.Item>
        {/*     <NavDropdown.Item href="ac-valhalla">Assassin's Creed: Valhalla</NavDropdown.Item>
            <NavDropdown.Item href="#gta5">Grand Theft Auto </NavDropdown.Item> */}
          </NavDropdown>
          </Fade>
        </Nav>

      </Navbar>
  
      );
    }

  export default NavBar2;