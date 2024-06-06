import { useState } from 'react'
import Navbar from './components/Navbar'
import ThreeDimenModel from './components/three_dimen_model'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes> */}

      <Navbar />
      <ThreeDimenModel />
    </BrowserRouter>
  )
}

export default App
