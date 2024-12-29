import './App.css';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Portfolio from '../src/components/Portfolio/Portfolio';
import About from '../src/components/About/About';
import Contact from '../src/components/Contact/Contact';
import Hero from '../src/components/Hero/Hero'
import Home from '../src/components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  
  
  
  return (
    <>
    <Router>
      <Navbar/>
      <div className='content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/hero' element={<Hero/>}/>
      </Routes>
      </div>
      
    </Router>
    </>
  )
}

function NavigateToHomeOnReload() {
  const navigate = useNavigate();
  useEffect(() => {
    // Automatically navigate to the homepage ("/") when the page is loaded or reloaded
    navigate('/');
  }, [navigate]);

  return null;
}

export default App
