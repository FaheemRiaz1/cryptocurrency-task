import React from 'react'
import Home from './components/homePage'
import Details from './components/details'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Driver () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route> 
        <Route path='/details' element={<Details />}></Route>
      </Routes>
    </Router>
  )
}
