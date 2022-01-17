import {React, useState, useEffect} from 'react';
import { Route, Switch} from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Hobbies from './pages/Hobbies';
import Blog from './pages/Blog';
import NavBar from './components/NavBar2'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container, Col, Row  } from 'react-bootstrap';
import ScrollButton from './components/BackToTop.js';
import BackToTop from "./components/BackToTop.js";
//import Layout from './components/layout/Layout';

const App = () =>{
    
    return(
        <div>
            <NavBar/>
            <BackToTop/>   
            <Switch>
                <Route path='./' exact>                   
                     <AboutMe />
                </Route>
                <Route path='/blog'>
                    <Blog />
                </Route>
            </Switch>
            
        </div>
    );
}
            
export default App