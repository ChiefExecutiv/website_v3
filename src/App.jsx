import './App.css'
import React from "react"
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Logs from './pages/logs'
import About from './pages/about'
import Footer from './components/Footer'
import Econ_Page from './pages/econ'
import T2024 from './pages/2024'
import Asysb from './pages/asysb'
function App() {

  const [isDark, setisDark] = useState(false);

   const Dark_mode = 'hsl(240, 10%, 3.9%) rgb(28 28 28 )'
   
   
   const setDark = () => {
    setisDark(!isDark)
    document.body.style.backgroundColor = isDark ? '' : 'rgb(28 28 28)';
  }
  
  return (

    <main className={isDark? 'App_Dark': 'App'} >
      <BrowserRouter>
        <Header click_Event={setDark}/>
        <Routes>
            <Route path='/' 
            element={<Logs />}
            />
            <Route 
            path='/about' element={<About />}
            />
            {/*Sub routes*/}
            <Route
            path='/about/EconUg' element={<Econ_Page />}
            />
            <Route
            path='/about/2024' element={<T2024 />}
            />

            <Route
            path='/about/Asysb' element={<Asysb />}
            />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  
  )
}

export default App
