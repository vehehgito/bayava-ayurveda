import React from 'react'
import Navbar from '../Components/Header/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home.jsx'
import Footer from '../Components/Footer/Footer.jsx'

function Router() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default Router