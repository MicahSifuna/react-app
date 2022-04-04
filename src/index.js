import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);

