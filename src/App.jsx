/* eslint-disable no-unused-vars */
import React from 'react'
import Signup from './components/Signup'
import './App.css'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Signup/>}  />
    </Routes>
  </BrowserRouter>
  )
}

export default App