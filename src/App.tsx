import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';
import { NotFound } from './components/NotFound/NotFound';
import { Profile } from './components/Profile/Profile';
import { GlobalStyle } from './styles/global';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:username" element={<Profile/>}></Route>
        <Route path="/error" element={<NotFound/>}></Route>
      </Routes>
      <GlobalStyle></GlobalStyle>
    </>
  );
}

export default App;
