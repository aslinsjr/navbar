import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './assets/components/NavBar'
import Home from './assets/components/Home'
import Destination from './assets/components/Destination'
import Crew from './assets/components/Crew'
import Technology from './assets/components/Technology'

import './App.css'


function App() {

  return (
      <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/destination" element={<Destination/>} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
