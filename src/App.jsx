import './App.css';
import React, { useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Nav';
import About from './components/pages/about';
import Year_review from './components/pages/review';
import Test from './components/pages/test';
import Goals from './components/pages/2024';
import Entry002 from './components/pages/002';
import Entry003 from './components/pages/003';
function App() {
  
  const [isLightMode, setIsLigthMode] = useState(true);

  const setMode = () => {
    setIsLigthMode((prevMode) => !prevMode)
  };

  const appStyle = isLightMode? "App" : "App_Dark";
  const btnText = isLightMode? "Dark" : "Light"

  return (
    <div className= {appStyle}>
    <BrowserRouter>
      <NavBar setMode={setMode} btnText={btnText}/>
      <div className='Page'>
      <Routes>
          <Route path='/' 
          element={<About />} />
          <Route 
          path='/progress' element={<Test />}
          />
          {/*sub Pages */}
          <Route
          path='/progress/001' element={<Goals />} 
          />
          <Route
          path='/progress/002' element={<Entry002 />} 
          />
          <Route
          path='/progress/003' element={<Entry003 />} 
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
