import {React, useState, useEffect} from 'react';
import { Route, Switch, useRouteMatch,
    useParams} from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Hobbies from './pages/Hobbies';
import Blog from './pages/Blog';
import NavBar from './components/NavBar2'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container, Col, Row  } from 'react-bootstrap';
import ScrollButton from './components/BackToTop.js';
import BackToTop from "./components/BackToTop.js";
import ScrollToTop from './components/ScrollToTop';
//import Layout from './components/layout/Layout';

const App = () =>{
    let match = useRouteMatch();

    return(
        <div>
            <NavBar/>
            <BackToTop/>   
            <ScrollToTop />
            <Switch>
                <Route path='/' exact>                   
                     <AboutMe />
                </Route>
                <Route path='/blog'>
                    <Blog />
                </Route>
                <Route path='/mywebsite' exact>                   
                     <AboutMe />
                </Route>
                <Route path='/mywebsite/blog'>
                    <Blog />
                </Route>
            </Switch>
            
        </div>
    );
}
            
export default App