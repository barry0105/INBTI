import React, {Component} from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home';
import Footer from './component/Footer/Footer';
import ToBoard from './component/Body/ToBoard';
import NotFound from './component/NotFound';
import Tosurvey from './component/Body/Tosurvey';
import Info from './component/Body/info';
import Survey from './component/Survey/Survey';

function App() {
  
  return (
    <div className='wrap'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/ToBoard" element={<ToBoard/>}></Route>
          <Route path="/ToSurvey" element={<Tosurvey/>}></Route>
          <Route path="/info" element={<Info/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path="/Survey" element={<Survey/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}


export default App;
