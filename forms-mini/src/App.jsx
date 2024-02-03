import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Responses from './Pages/Responses'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/responses' element={<Responses/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App