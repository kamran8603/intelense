import React from 'react'
import Products from './Products'
import Privacy from './Privacy'
import Team from './Team'
import Contact from './Contact'
import {Link, Routes, Route} from "react-router-dom"
import "../css/navbar.css"

function Nav() {
    
  return (
    <div>
        <div className='nav-container'>
            <div className='navbar'>
            <img className='logo' src='https://framerusercontent.com/images/hKswU9VqFRQiBEe9mRYn27jqzgM.png?scale-down-to=512' />
            <div className='navigation'>
            <Link to="/">Product</Link>
            <Link to ="/privacy">Privacy</Link>
            <Link to="/team">Team</Link>
            <Link to="/contact">Contact Us</Link>
            </div>
            <button className='login'><span>Login</span><span className='arrow' >➝</span></button>
            </div>
            
        </div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
    </div>
  )
}

export default Nav
