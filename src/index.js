import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ScrollToTop smooth style={{backgroundColor: "#faa519"}} color='white'/>
    </BrowserRouter>
  </React.StrictMode>
);