import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Random from './pages/Random'


function App() {
  


  return (
    <>
     <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/Login" element={< Login/>} />
      <Route path="/random" element={< Random/>} />
     </Routes>
     
   






    </>
  )
}

export default App
