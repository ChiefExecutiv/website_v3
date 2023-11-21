import './App.css';
import React, { useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Nav';
import About from './components/pages/about';
import Progress from './components/pages/progress';
import Year_review from './components/pages/review';

function App() {
  
  const [isLightMode, setIsLigthMode] = useState(true);

  const setMode = () => {
    setIsLigthMode((prevMode) => !prevMode)

    isLightMode? alert("Still working on dark mode") : ""
  };

  const appStyle = isLightMode? "App" : "App_Dark";

/*
  const setMode = () => {
    alert("Still working on dark mode")
  }*/

  
  return (
    <div className= {appStyle}>
    <BrowserRouter>
      <NavBar setMode={setMode} />
      <div className='Page'>
      <Routes>
          <Route path='/' 
          element={<About />} />
          <Route 
          path='/progress' element={<Progress />}
          />
          <Route path='/year_review'
          element={<Year_review />} />
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
