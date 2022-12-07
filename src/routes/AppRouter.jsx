import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from '../components/NavBar';
import Resumee from '../pages/Resumee';

const AppRouter = () => {
  
  return (
    
        <Router>
          <NavBar/>
          <Resumee/>
        </Router>
    
  )
}

export default AppRouter