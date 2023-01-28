import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Resumee from '../pages/Resumee';
import Projects from '../pages/Projects'
import { useRef } from 'react';

const MainRoutes = () => {

  const ref = useRef(null)

  const handleClick = () =>
  {
    ref.current?.scrollIntoView({ behavior: 'smooth'})
    console.log("Handle click")
  }

  return (
    <div>
        <NavBar operate={handleClick}/>
        <Routes>
            <Route path="/" element={<Resumee/>} />
            <Route path="/projects" element={<Projects/>} />
        </Routes>
        <Footer ref={ref}/>
    </div>
  )
}

export default MainRoutes