import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NasaList from './pages/NASAList'
import Nav from './components/Nav'

function App() {
  

  return (
   <div className='App'>
    <Nav />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/nasa-list' element={<NasaList/>}/>
    </Routes>
   </div>
  )
}

export default App