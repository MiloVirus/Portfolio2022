import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Resumee from '../pages/Resumee';
import Projects from '../pages/Projects'

const MainRoutes = () => {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Resumee/>} />
            <Route path="/projects" element={<Projects/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default MainRoutes