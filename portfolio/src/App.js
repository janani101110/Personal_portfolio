import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Acms from "./pages/Acms";

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/acms' element={<Acms/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
