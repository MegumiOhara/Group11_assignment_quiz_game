import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    
  <nav className="nav"> 
    <ul>
      <li><Link to="/levels">Quiz Game</Link></li>
      <li><Link to="/">Register</Link></li>
      <li><Link to="/">Login</Link></li>
    </ul>       
  </nav>
  ); 
}