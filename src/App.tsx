import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes> */}

      <Navbar />
    </BrowserRouter>
  )
}

export default App
