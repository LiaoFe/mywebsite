import React, {useState} from 'react';
import UpArrow  from '../images/uparrow.png'
import { Button, Fade, Figure }  from 'react-bootstrap';
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
            <Button id="thin" className="position-fixed bottom-0 end-0 m-3 pt-1" variant="secondary"  onClick={scrollToTop}>
            <Figure.Image fluid src={UpArrow} id="uparrow"></Figure.Image>
            </Button>
            </Fade>
            
      </div>
    );
  }
    
  export default ScrollButton;