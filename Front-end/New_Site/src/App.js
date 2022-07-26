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
import Explain from './component/MBTI-explain/ExplainPage';
function App() {
  const Warning = (
    <div className='warning'>
      <p>지원하지 않는 해상도 입니다.</p>
      <p>해상도를 변경해주세요.</p>
    </div>
  );
  return (
    <div className='wrap'>
      {Warning}
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/ToBoard" element={<ToBoard/>}></Route>
          <Route path="/ToSurvey" element={<Tosurvey/>}></Route>
          <Route path="/info" element={<Info/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path="/Survey" element={<Survey/>}></Route>
          <Route path='/Explain' element={<Explain/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}


export default App;
