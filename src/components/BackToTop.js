import React, {useState} from 'react';
import UpArrow  from '../images/uparrow.png'
import { Button, Fade }  from 'react-bootstrap';
import './navbar.css'
const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth',
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
        <div>
            
        
        <Fade in={visible}>
            <Button id="thin" className="position-fixed bottom-0 end-0 m-3 pe-0 ps-0" variant="secondary"  onClick={scrollToTop}
            >
            <img src={UpArrow} id="uparrow"></img>
            </Button>
            </Fade>
            
      </div>
    );
  }
    
  export default ScrollButton;