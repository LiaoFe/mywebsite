import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import NavBar from './components/NavBar'
  // =======================================
    
  ReactDOM.render(
    <BrowserRouter basename='/mywebsite/'>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );
  
  
