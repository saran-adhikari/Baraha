import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home Components/Inner Components/Compiled Folder/Home'
function Connections() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default Connections