import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar-background-container'>
      <Link to="/" className='navbar-logo-name'>
      <i className="fa-solid fa-briefcase"></i> My Portfolio
      </Link>
      <li className='navbar-items'>
        <a className='navbar-item' href="/">Home</a>
        <a className='navbar-item' href="/portfolio">Portfolio</a>
        <a className='navbar-item' href="#about">About</a>
        <a className='navbar-item' href="/contact">Contact</a>
      </li>

    </div>
  )
}
export default Navbar
