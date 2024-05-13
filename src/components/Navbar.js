import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    
  <nav className="nav">
    <ul>
      <li><Link to="/">Quiz Game</Link></li>
    </ul>
     
        <a href="/Register" >Register </a>

        <a href="/Login" >Login </a>
         
    </nav>
  ); 
}