import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home Components/Inner Components/Compiled Folder/Home'
import About from './Home Components/Inner Components/Inner Components/About'
import Services from './Home Components/Inner Components/Inner Components/Services'
import Contact from './Home Components/Inner Components/Inner Components/Contact'
function Connections() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default Connections